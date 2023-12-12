
import { cookies } from 'next/headers'
import CryptoJS from "crypto-js"
import "./App.css"
import useAuth from "./hooks/useAuth"





export default async function Home() {
  const cookieStore = cookies()
  const isLoggedIn =  useAuth()

 

  const isLogin = () => {
    try{
      const key = "rar"
      const getCookieEnc = cookieStore.get("user")
      const getCookie = CryptoJS.AES.decrypt(getCookieEnc.value,key).toString(CryptoJS.enc.Utf8)
      if (getCookie===undefined){
          return undefined
      }
      const parseCookie =  JSON.parse(getCookie)
      
      if((parseCookie.username).length === 0 && (parseCookie.password).length===0){
        return undefined
      }else{
       return parseCookie.username
      }
    }catch{
      return false
    }

  } 

  // console.log("tryrt",isLogin());
 
  return (
    <>
      {/* <Navbar isAuth={isLogin()} />
      <Hero />
      <Footer /> */}
    </>

  )
}
