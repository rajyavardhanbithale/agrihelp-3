import { NextResponse } from 'next/server'

import CryptoJS from 'crypto-js'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const checkCookie = () =>{
        try{
            const getEncryptedCookie = request.cookies.get('user')?.value
            const parseEncryptedCookie = CryptoJS.AES.decrypt(getEncryptedCookie, "rar").toString(CryptoJS.enc.Utf8)
            const jsonDecrypt = JSON.parse(parseEncryptedCookie)
            
            if((jsonDecrypt!==null || jsonDecrypt!==undefined || jsonDecrypt !==NaN ) && jsonDecrypt.token !==undefined){
                return true
            }
        }catch{
            return false
        }

    
    }
    console.log(checkCookie());
   
    const path = request.nextUrl.pathname
    const isPrivate = path === '/login' || path === '/signup' || path === '/signup/verify'

    if (checkCookie() && isPrivate) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if(checkCookie() && path === '/signup/verify' &&  !request.nextUrl.searchParams.get('url')) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login', '/signup', '/signup/verify']
}