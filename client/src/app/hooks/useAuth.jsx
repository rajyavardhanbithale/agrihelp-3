
import CryptoJS from 'crypto-js';
import { cookies } from 'next/headers'
import axios from 'axios';


export default async function useAuth() {
  const cookieStore = cookies()

  const key = 'rar'
  
  try {
    const getEncryptedCookie = cookieStore.get("user")

    const parseEncryptedCookie = CryptoJS.AES.decrypt(getEncryptedCookie.value, key).toString(CryptoJS.enc.Utf8)
    const jsonDecrypt = JSON.parse(parseEncryptedCookie)

    
    // checking if cookie is valid or not
    if (jsonDecrypt.validationKey === "token") {
      const constructResponse = {
        "username" : jsonDecrypt?.username,
        "password" : jsonDecrypt?.password
      }
 
      const response = await axios.post('http://127.0.0.1:8000/v2/login',constructResponse)

      if(response.status===200){
        return true

      }
      
    }
    return undefined
  } 
  catch(error) { 
    return false
  }

  return undefined




};


