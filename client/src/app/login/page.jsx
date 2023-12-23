'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline, syncOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
import '../App.css';

import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function Login() {

  const redirect = useSearchParams()
  
  const { data: session, status } = useSession();
  const [isLogin, setIsLogin] = useState(false)
  const [showErrors, setShowErrors] = useState(false);
  const [postError, setPostError] = useState("");
  const [sessionName, setSessionName] = useState("");
  const secretKey = 'rar'


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',


    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is Required"),
      password: Yup.string().required("Password is Required")
    }),

    onSubmit: async (values) => {

      if (formik.isValid) {
        setIsLogin(true)
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`, values);
          if (response.status === 200) {
            const constructCookie = {
              "username": values.username,
              "password": values.password,
              "validationKey": "token"
            }
            const encrypt = CryptoJS.AES.encrypt(JSON.stringify(constructCookie), secretKey).toString()
            Cookies.set("user", encrypt, { expires: 5 })

            window.location.href = redirect?.get("callback") || "/"
          }

        } catch (error) {
          // console.error('Response data:', error.response.data.detail);
          setPostError(error.response.data.detail)
          setIsLogin(false)
        }

      }

    }


  });

  const handleSignUp = () => {
    setShowErrors(true)
  }

  const generateUsernameForGoogleLogin = (firstname, lastname) => {
    return firstname.slice(0, 4) + lastname.slice(0, 3) + Math.floor(Math.random() * 9999) + 1;
  }
  
  const postGoogleLogin = async (data,sessionType) => {
    const splitName = data.user?.name.split(" ")
    const username = generateUsernameForGoogleLogin(splitName[0].toLowerCase(), splitName[1] ? splitName[1].toLowerCase() : "")
    const constructData = {
      "firstname": splitName[0].toLowerCase(),
      "lastname": splitName[1] ? splitName[1].toLowerCase() : "",
      "username": username,
      "email": data?.user?.email,
      "password": "&p455w0rd*r463",
      "confirm_password": "&p455w0rd*r463",
      "originF": "custom",
      "image": data.user?.image
    }
    
    
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/signup`, constructData)

      if (response.status == 200) {
      }
    } catch (error) {
      const constructLogin = {
        "email": constructData?.email,
        "password": constructData?.password
      }

      const constructGetUser = {
        "email": constructData?.email,
        "password": constructData?.password,
        "validationKey":"token"
      }
      try {
        
        const response1 = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/login`, constructLogin)
        const response2 = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/get-user`, constructGetUser)
       
        if (response1.status === 200 && response2.status===200) {
          const constructCookie = {
            "username": response2?.username,
            "email": constructData?.email,
            "password": constructData?.password,
            "validationKey": "token"
          }
          const encrypt = CryptoJS.AES.encrypt(JSON.stringify(constructCookie), secretKey).toString()
          Cookies.set("user", encrypt, { expires: 5 })
          window.location.href = redirect?.get("callback") || "/"
        }
      } catch (error) {
        console.log();
      }

    }
  }

  useEffect(()=>{
    Cookies.remove("__fnotify")
  },[])  

  if (status === "authenticated") {
    
    postGoogleLogin(session)
  }

  return (
    <>
      <div className="overflow-hidden flex items-center justify-center h-screen flex-col leading-relaxed tracking-wide">
        <div className="w-full lg:flex">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-middle lg:scale-125 2xl:lg:scale-125 md:scale-110 scale-[0.85]">
            <>
              <span className="text-5xl font-thin mt-10 band__font text-slate-900 lg:mb-0">AGRIHELP</span>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col w-80 justify-center align-middle items-center">
                  <span className="text-gray-800 text-3xl font-bold mt-8 mb-2">Login</span>
                  <span className="text-gray-800 text-sm font-semibold mb-10 items-center">Please Login To Continue</span>
                </div>
                <div className="flex flex-col gap-5 w-72">

                  <div className="relative">
                    <div className="flex flex-row">
                      <IonIcon
                        icon={personOutline}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
                      />

                      <input
                        type="text"
                        className="w-full hover:bg-opacity-50 focus:outline-none pl-10 py-4 font-semibold text-gray-800 rounded-xl transition ease-in-out duration-500"
                        placeholder="Username"
                        name="username"
                        {...formik.getFieldProps('username')}
                      />
                      <div className="relative">
                        {showErrors && formik.touched.username && formik.errors.username && (
                          <Tooltip content={formik.errors.username} />
                        )}
                      </div>
                    </div>

                  </div>

                  <div className="relative">
                    <div className="flex flex-row">
                      <IonIcon
                        icon={lockClosedOutline}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
                      />

                      <input
                        type="password"
                        className="w-full  hover:bg-opacity-50 focus:outline-none  pl-10 py-4 font-semibold text-gray-800 rounded-xl transition ease-in-out duration-500"
                        placeholder="Password"
                        name="password"
                        {...formik.getFieldProps('password')}
                      />
                      <div className="relative">
                        {showErrors && formik.touched.password && formik.errors.password && (
                          <Tooltip content={formik.errors.password} />
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                <div className='flex w-full justify-center mt-5 md:hidden'>
                  {!showErrors ? <span>&nbsp;</span> : ""}
                  {showErrors && (formik.touched.confirm_password && formik.errors.confirm_password ||
                    formik.touched.password && formik.errors.password ||
                    formik.touched.username && formik.errors.username) && (
                      <div>{formik.errors.username || formik.errors.password}</div>
                    )}

                </div>
                <div className="flex w-full justify-center mt-5 ">
                  {postError ? <span>Invalid Username or Password</span> : ""}
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                  <button type="submit" onClick={handleSignUp} className="bg-slate-600 hover:bg-slate-800 text-gray-200 text-xl px-10 py-3 rounded-full flex items-center space-x-2 font-semibold transition ease-in-out duration-500">

                    {!isLogin ?
                      <span>Login</span>
                      :
                      <IonIcon
                        icon={syncOutline}
                        className="text-gray-100 animate-spin	duration-200"
                      />
                    }

                  </button>

                  <span className="text-slate-700 hover:text-slate-800 transition duration-500 ease-in-out font-medium mt-4 cursor-pointer">
                    Forgot Password ?
                  </span>

                  <span className="text-gray-900/95 font-medium mt-5 mb-5">
                    Dont have an account ?
                    <Link href="/signup" className="text-slate-800 hover:text-slate-900 transition duration-500 ease-in-out">
                      &nbsp; SignUp
                    </Link>
                  </span>

                </div>



              </form>
              <hr />
              <div className="flex justify-center items-center ">

                <button onClick={() => signIn("google")} className="mt-6 bg-slate-200 px-5 py-2 rounded-xl font-semibold ">
                  <IonIcon
                    icon={logoGoogle}
                    className=" text-gray-900 align-middle mb-0.5 px-2"
                  />
                  Login With Google
                </button>

                {/* <button onClick={() => signIn("facebook")} className="mt-6 bg-slate-200 px-5 py-2 rounded-xl font-semibold ">
                  <IonIcon
                    icon={logoFacebook}
                    className=" text-gray-900 align-middle mb-0.5 px-2"
                  />
                  Login With facebook
                </button> */}
              </div>
            </>
          </div>
          <div className="hidden lg:block w-1/2">
            <img
              src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg"
              alt=""
              className="w-full h-screen object-cover rounded-l-3xl"  /*mix-blend-color-dodge*/
            />
            {/* <div className="gradient__overlay w-full h-screen object-cover"></div> */}
          </div>
        </div>

      </div>
    </>
  );
}

function Tooltip(props) {
  return (
    <>
      <div className="absolute top-3.5 w-auto ml-7 text-sm px-3 py-1 text-gray-800 glass__tooltip hidden md:block">
        <span className="whitespace-nowrap">{props.content}</span>
      </div>

    </>

  );
}