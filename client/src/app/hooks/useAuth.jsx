
import CryptoJS from 'crypto-js';
import { cookies } from 'next/headers'
import axios from 'axios';


export default async function useAuth() {
  const cookieStore = cookies()
  const key = 'rar'


  const getEncryptedCookie = cookieStore.get("user")

  const parseEncryptedCookie = CryptoJS.AES.decrypt(getEncryptedCookie.value, key).toString(CryptoJS.enc.Utf8)
  const jsonDecrypt = JSON.parse(parseEncryptedCookie)

  if (jsonDecrypt.validationKey === "token") {
    let constructResponse;
    if (jsonDecrypt?.username) {
      constructResponse = {
        "username": jsonDecrypt?.username,
        "password": jsonDecrypt?.password
      }
    } else {
      constructResponse = {
        "email": jsonDecrypt?.email,
        "password": jsonDecrypt?.password
      }
    }

    constructResponse = {
      "email": "ramiwick5@gmail.com",
      "password": "&p455w0rd*r463"
    }


    const fetchData = async () =>{
        try {
          const response =  await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`,constructResponse)
          console.log(response.status); 
        } catch (errors) {
          console.log("error.status",error?.response?.status);
        }
    }

    fetchData()

  }



};


