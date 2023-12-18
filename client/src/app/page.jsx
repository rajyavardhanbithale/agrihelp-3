
import { cookies } from 'next/headers'
import CryptoJS from "crypto-js"
import "./App.css"
import useAuth from "./hooks/useAuth"





export default async function Home() {
  const cookieStore = cookies()
  const isLoggedIn =  useAuth()


  
  // console.log("////////////",await isLoggedIn);
  return (
    <>
      {/* <Navbar isAuth={isLogin()} />
      <Hero />
      <Footer /> */}

      <div className="h-screen w-full sm:textx-xm md:text-2xl flex justify-center items-center">
        <div className='flex-col text-center'>
          <h2>Revolutionizing Farming With Innovative Technology Solutions</h2>
          <h2>A Helping Hand For Farmers  &#127995</h2>
        </div>
      </div>

    </>

  )
}
