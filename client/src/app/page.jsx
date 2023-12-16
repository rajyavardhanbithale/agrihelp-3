
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

      <div class="h-screen w-full sm:textx-xm md:text-2xl flex justify-center items-center">
        <div className='flex-col text-center'>
          <h2>Revolutionizing Farming With Innovative Technology Solutions</h2>
          <h2>A Helping Hand For Farmers  &#127995</h2>
        </div>
      </div>

    </>

  )
}
