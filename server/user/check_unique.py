from pymongo.collection import Collection

def check_unique(collection:Collection,username:str=None,email:str=None,verbose:bool=None):
    
    if(verbose):
        search = collection.find_one({"username":username,"email":email})
        
        return search if search else False
 
    if(username):
        search = collection.find_one({"username":username})
        return True if search else False
    
    elif(email):
        search = collection.find_one({"email":email})
        return True if search else False
    
