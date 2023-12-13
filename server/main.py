from fastapi import FastAPI, APIRouter, Request, HTTPException, UploadFile,File
from fastapi.responses import StreamingResponse
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import pymongo
import json
import time

from sse_starlette.sse import EventSourceResponse
import time

# custom import
import base_models
from verification import one_time_password
from verification import url_verification
from utils import login_manager
from user import check_unique
from user import forgot_password
from user import delete_user
from verification import sendMail

from ml import  fertilizer_reco
from ml import  disease_pred

from weather import weather

from shop import scheme
from pymongo import MongoClient
from bson import ObjectId  # Import ObjectId from bson



client = MongoClient("mongodb://localhost:27017")
db = client["agrihelp"]
collection = db["shop"]
class BackendAPI:
    def __init__(self):
        self.router = APIRouter()
        self.app_version = "v2"
        self.router.add_api_route(f"/{self.app_version}/weather/current", self.getWeatherToday, methods=["GET"])
        # self.router.add_api_route(f"/{self.app_version}/", self.main, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/weather/forecast", self.getWeatherForecast, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/crop/recommendation", self.cropReccom, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/crop/defect", self.cropDefect, methods=["POST"])
        self.router.add_api_route(f"/{self.app_version}/fertilizer/recommendation", self.fertilizerReccom, methods=["GET"])
        
        
        self.router.add_api_route(f"/{self.app_version}/" + "signup", self.signup, methods=["POST"])
        self.router.add_api_route(f"/{self.app_version}/" + "login", self.login, methods=["POST"])
        self.router.add_api_route(f"/{self.app_version}/" + "verify/{url}", self.verify, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/" + "forgot-password/{token}", self.forgotPassword, methods=["POST"])
        self.router.add_api_route(f"/{self.app_version}/" + "request-forgot-passowrd", self.generateForgotPassword, methods=["POST"])
        self.router.add_api_route(f"/{self.app_version}/" + "delete", self.delete, methods=["DELETE"])
        self.router.add_api_route(f"/{self.app_version}/" + "get-user", self.getUser, methods=["POST"])
        
        
        self.router.add_api_route(f"/{self.app_version}/" + "shop-item", self.shopItem, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/" + "shop-category", self.shopCategory, methods=["GET"])
        
        self.router.add_api_route(f"/{self.app_version}/" + "search", self.search, methods=["GET"])
        self.router.add_api_route(f"/{self.app_version}/" + "shop-product", self.shopProduct, methods=["GET"])
        
        
        if(os.getenv("ENV")=="DEV"):
            print("[*] DEV")
            self.client = pymongo.MongoClient("mongodb://localhost:27017/")
           
        else:
            print("[**] Production")
            self.client = pymongo.MongoClient(f"mongodb+srv://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@userdata.pbqqmqu.mongodb.net/?retryWrites=true&w=majority")

        self.db = self.client["userData"] 

        self.collection = self.db["user_data"]
        self.collection_delete = self.db["user_delete"]
        
        self.method = os.getenv("VERIFICATION_METHOD","URL")
        if  self.method == "OTP":
            self.otp_len:int = int(os.getenv("OTP",5))
            self.otp_time:int = int(os.getenv("OTP_TIME",5))
        
        self.fernet_key = os.getenv("FERNET_KEY",None)
        self.host_name = os.getenv("HOST",None)
        
        
        
    async def login(self,user:base_models.UserLogin):
        verify_login_data = login_manager.checkData(username=user.username,email=user.email)
        # print(verify_login_data)
        if(verify_login_data):
            login = login_manager.doLogin(collection=self.collection,username=user.username,
                                  password=user.password,email=user.email,verbose=user.verbose)
            raise HTTPException(status_code=200,detail=login)
        return ""

    
    async def signup(self,user:base_models.UserSignup,request:Request):
        print("sign")
        if self.method  == "OTP": 
            scheme = base_models.DatabaseScheme(firstname=user.firstname,lastname=user.lastname,username=user.username,
                                                email=user.email,password=user.password,ip=request.client.host,
                                                otp=one_time_password.generateOTP(size=self.otp_len),
                                                exp_time=one_time_password.expirationTime(minutes=self.otp_time),origin=user.originF)
        elif self.method == "URL":
            if user.originF == "custom":
                if ("fb" in user.image):
                    orgn = "facebook"
                else:
                    orgn = "google"
                
                scheme = base_models.DatabaseSchemeGoogle(firstname=user.firstname,lastname=user.lastname,username=user.username,
                                                        email=user.email,password=user.password,ip=request.client.host,
                                                        origin=orgn,image=user.image
                                                        )
            else:
                verification_token = url_verification.generateVerificationUrl(collection=self.collection,username=user.username,email=user.email,key=self.fernet_key)
                scheme = base_models.DatabaseScheme(firstname=user.firstname,lastname=user.lastname,username=user.username,
                                                    email=user.email,password=user.password,ip=request.client.host,
                                                    url_verification=True,origin=user.originF,
                                                    verification_id=verification_token)
            
           
                print(verification_token)
        primary_user = check_unique.check_unique(collection=self.collection,username=user.username)
        primary_email = check_unique.check_unique(collection=self.collection,email=user.email)
        
        if not primary_user and not primary_email:
            inset = self.collection.insert_one(scheme)
            if(inset.acknowledged):
                 if not os.getenv("ENV")=="DEV" and user.originF != "google":
                    ack = sendMail.sendMail(receiver=user.email,verification_url=self.host_name+"/v2/verify/"+verification_token)
                 else:
                     ack = True
                 if ack:
                    raise HTTPException(status_code=200,detail="User Created")
            
        elif(primary_user and primary_email):
            raise HTTPException(status_code=422,detail="User Exist")
        
        elif(primary_user):
            raise HTTPException(status_code=422,detail="Username Exist")
        
        elif(primary_email):
            raise HTTPException(status_code=422,detail="Email Exist")
        
        else:
            raise HTTPException(status_code=422,detail="Error in Creating User")


    async def verify(self,url:str):
        verify_url = url_verification.verifyVerificationUrl(request=url,key=self.fernet_key,method="verification")
        json_verify_url= json.loads(verify_url)
        print(json_verify_url)
        if verify_url:
            primary_user = check_unique.check_unique(collection=self.collection,username=json_verify_url["username"],email=json_verify_url["email"],verbose=True)

            if primary_user:
                process = url_verification.verifyUserUsingUrl(collection=self.collection,username=json_verify_url["username"],email=json_verify_url["email"],url=url)
                raise HTTPException(status_code=200,detail=process)
   
        raise HTTPException(status_code=501,detail="Internal Server Error")
    
    async def generateForgotPassword(self,user: base_models.UserForgotPasswordGenerate):
        verify_login_data = login_manager.checkData(username=user.username,email=user.email)

        if verify_login_data:
          url = forgot_password.generateForgotPasswordURL(collection=self.collection,username=user.username,email=user.email,password=user.password,key=self.fernet_key,host=(self.host_name+"forgot-password/"))
          raise HTTPException(status_code=200,detail=url)
        elif not verify_login_data:
            raise HTTPException(status_code=401,detail="user not found")

        raise HTTPException(status_code=501,detail="Internal Server Error")
    
    async def forgotPassword(self,request:Request,user:base_models.UserForgotPassword,token:str=None):
        update = forgot_password.updatePassword(collection=self.collection,ip=request.client.host,url=token,key=self.fernet_key,password=user.password,email=user.email)
        raise HTTPException(status_code=200,detail=update)
        
    
    async def delete(self,request:Request,user:base_models.UserDelete):
        client = request.client.host
        delete = delete_user.deleteUser(collection=self.collection,collection_delete=self.collection_delete,ip=client,email=user.email,password=user.password)
        
    
    async def getUser(self,user:base_models.GetUser):
        
        try:
            if user.validationKey == os.getenv("VALIDATIONKEY"):
                result = self.collection.find_one({"username":user.username,"password":user.password})
                response = {
                    "firstname": result["firstname"],
                    "lastname": result["lastname"],
                    "email": result["email"],
                    "username": result["username"],
                    "firstname": result["firstname"],
                }
            
                return response
        except:
            raise HTTPException(status_code=401,detail="Unauthorize")    
    
        
    async def getWeatherToday(self,city:str):
        runner = weather.Weather()
        return runner.weatherToday(city=city)
    
    async def getWeatherForecast(self,city:str,days:int):
        runner = weather.Weather()
        return runner.weatherForecast(city=city,days=days)

    async def cropReccom(self,N,P,K,ph,rain,city):
        from ml import  crop_reco
        runner = weather.Weather()
        getData = runner.weatherToday(city=city)
        temp,humid = getData["current"]["temp"], getData["current"]["humidity"]
        return crop_reco.crop_prediction(N=N,P=P,K=K,ph=ph,humidity=humid,rainfall=rain,temperature=temp)

    async def fertilizerReccom(self,N:float,P:float,K:float,crop:str):
        return fertilizer_reco.fert_recommend(N=N,P=P,K=K,crop=crop)


    async def cropDefect(self,file: UploadFile=File(...)):
        unique = time.time()
        try:
            contents = file.file.read()
            with open(f"crop_image/{unique}"+file.filename, 'wb') as f:
                f.write(contents)
        except Exception:
            return {"message": "There was an error uploading the file"}
        finally:
            file.file.close()
            
        # return file.filename
        return  disease_pred.predict_image(f"crop_image/{unique}"+file.filename)
        
        
        
    # def generate_messages(self):
    #     import g4f
    #     res = g4f.ChatCompletion.create(
    #         model="gpt-4",
    #         messages=[{"role": "user", "content": crop_reco.msg}],
    #         stream=True
    #     )
    #     for msg in res:
    #         yield f"{msg}".encode("utf-8")


  
    # def main(self):
    #     return EventSourceResponse(self.generate_messages(), media_type='text/event-stream')

    async def shopItem(self,item:int,category:str):
        random_records = list(collection.aggregate([
            {"$match": {"categories": category}},
            {"$sample": {"size": item}}  # Adjust the size parameter as needed
        ]))

        records_list = [
            {**record, "_id": str(record["_id"])} for record in random_records
        ]
      

        return records_list
    
    async def shopCategory(self,item:str):
        seed_products = collection.find({"type": "seed"})
        
        records_list = [
            {**record, "_id": str(record["_id"])} for record in seed_products
        ]

        return records_list
    
    
    async def search(self,item: str):
        result = collection.find({"name": {"$regex": f".*{item}.*", "$options": "i"}})

        records_list = [
            {**record, "_id": str(record["_id"])} for record in result
        ]

        if records_list:
            return records_list
        else:
            return {"message": "Products not found"}
            
    async def shopProduct(self,productID:str):
        try:
                # Find the document by ObjectId
                result = collection.find_one({"productId": productID})

                if result is None:
                    raise HTTPException(status_code=404, detail="Product not found")

                # Convert ObjectId to string in the result
                result["_id"] = str(result["_id"])

                return result
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
                        
    
app = FastAPI()

origins = ["http://localhost:3000"]  # Replace with your allowed origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = BackendAPI()
app.include_router(api.router) 
        
