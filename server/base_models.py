from pydantic import BaseModel
import time

class UserSignup(BaseModel):
    firstname: str
    lastname: str
    username: str
    email:str
    password: str
    confirm_password: str = None
    phone_number: str = None
    ip_origin: str = None
    originF:str = None
    image:str = None
    billingAddress:str = None   
    
class UserLogin(BaseModel):
    username:str = None
    email:str = None
    password:str
    verbose:bool = None
    
class UserForgotPassword(BaseModel):
    username:str = None
    email:str = None
    password:str
    verbose:bool = None
    
class UserForgotPasswordGenerate(BaseModel):
    username:str = None
    email:str = None
    password:str

class UserVerified(BaseModel):
    email:str
    password:str
    
class UserDelete(BaseModel):
    email:str
    password:str
    
class GetUser(BaseModel):
    username:str = None
    email:str = None
    password:str
    validationKey:str
    
class PlaceOrder(BaseModel):
    orderid:str = None
    fullname:str
    email:str
    orderCart: list
    cardHolderName: str
    billingAddress: str
    state: str
    zip:str
    deliveryMethod: str
    
    

def DatabaseScheme(**kwargs):
    firstname = kwargs.get("username",None)
    lastname = kwargs.get("lastname",None)
    username = kwargs.get("username",None)
    email = kwargs.get("email",None)
    password = kwargs.get("password",None)
    old_password = kwargs.get("old_password",None)
    phone_number = kwargs.get("phone_number",None)
    ip = kwargs.get("ip",None)
    verification_id = kwargs.get("verification_id",None)
    address = kwargs.get("billingAddress",None)
    
    
    otp = kwargs.get("otp",None)
    url:bool = kwargs.get("url_verification",False)
    exp_time = kwargs.get("exp_time",None)
    
    origin = kwargs.get("origin","host")
    
    timestamp = time.time()
    
    DbSchemeOTP = {
        "firstname": firstname,
        "lastname": lastname,
        "username": username,
        "email": email,
        "password": password,
        "oldPassword": old_password,
        "phoneNumber": phone_number,
        "ip": {
      		"ip_signup":{
            	"timestamp": timestamp,
            	"ip":ip
             },
			"ip_login": {
				"timestamp": [],
				"ip":[]
       		},
   			"ip_update": {
				"timestamp":[],
				"ip":[]
			}
   		},
        "is_verified" : "false",
		"otp_verification":{
			"otp": otp,
			"expiration_time" : exp_time
		},
        "forgot_password_id":None,

        "billingAddress":address,
        "origin":origin
    }
    
    DbSchemeURL = {
        "firstname": firstname,
        "lastname": lastname,
        "username": username,
        "email": email,
        "password": password,
        "oldPassword": old_password,
        "phoneNumber": phone_number,
        "ip": {
      		"ip_signup":{
            	"timestamp": timestamp,
            	"ip":ip
             },
			"ip_login": {
				"timestamp": [],
				"ip":[]
       		},
   			"ip_update": {
				"timestamp":[],
				"ip":[]
			}
   		},
        "is_verified" : False,
        "forgot_password_id":None,
        "verification_id": verification_id[0:5]+verification_id[-14:-19:-1][::-1] if len(verification_id)!=0 else None,
        "billingAddress":address,
        "origin":origin
    }
    print(url)
    return DbSchemeURL if url else DbSchemeOTP 
    
    
    
def DatabaseSchemeGoogle(**kwargs):
    firstname = kwargs.get("firstname",None)
    lastname = kwargs.get("lastname",None)
    username = kwargs.get("username",None)
    email = kwargs.get("email",None)
    password = kwargs.get("password",None)
    old_password = kwargs.get("old_password",None)
    phone_number = kwargs.get("phone_number",None)
    ip = kwargs.get("ip",None)
    address = kwargs.get("billingAddress",None)
    
    origin = kwargs.get("origin","host")
    image = kwargs.get("image",None)
    
    timestamp = time.time()
    
    DbSchemeGoogle = {
        "firstname": firstname,
        "lastname": lastname,
        "username": username,
        "email": email,
        "password": password,
        "oldPassword": old_password,
        "phoneNumber": phone_number,
        "ip": {
      		"ip_signup":{
            	"timestamp": timestamp,
            	"ip":ip
             },
			"ip_login": {
				"timestamp": [],
				"ip":[]
       		},
   			"ip_update": {
				"timestamp":[],
				"ip":[]
			}
   		},
        "is_verified" : True,
        "forgot_password_id":None,
        "billingAddress":address,
        "origin":origin,
        "image":image
    }   
    
    return DbSchemeGoogle