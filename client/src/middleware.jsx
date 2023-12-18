import { NextResponse } from 'next/server'

import CryptoJS from 'crypto-js'
import axios from 'axios'
import EndpointError from './app/components/EndpointError'
import useAuth from './app/hooks/useAuth'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const isLog  = useAuth()
    const checkCookie = () => {
       
        try {
            const getEncryptedCookie = request.cookies.get('user')?.value
            const parseEncryptedCookie = CryptoJS.AES.decrypt(getEncryptedCookie, "rar").toString(CryptoJS.enc.Utf8)
            const jsonDecrypt = JSON.parse(parseEncryptedCookie)

            if (jsonDecrypt && jsonDecrypt?.validationKey === "token") {
                return true
            }
        } catch {
            return false
        }
    }

    const checkEndpointStatus = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/ping`);
            const data = await response.json();
            if (response.status === 200) {
                return true

            } else {
                return false
            }
        } catch (error) {
            return false
        }
    };

   

    const path = request.nextUrl.pathname
    const isPrivate = path === '/login' || path === '/signup' || path === '/signup/verify'

    if (!await isLog && isPrivate) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (checkCookie() && path === '/signup/verify' && !request.nextUrl.searchParams.get('url')) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (path === '/error' && await checkEndpointStatus()) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (request.nextUrl.pathname.startsWith('/shop') && !await checkEndpointStatus()) {
        return NextResponse.redirect(new URL('/error', request.nextUrl))
    }

    console.log(await isLog);
    if (path === '/shop/checkout' && await isLog) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }


}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login', '/signup', '/signup/verify', '/shop/:path*','/shop','/error','/shop/checkout']
}



