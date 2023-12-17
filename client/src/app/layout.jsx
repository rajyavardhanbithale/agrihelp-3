import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


import AuthProvider from './components/AuthProvider/AuthProvider'


export const metadata = {
  title: 'RAGE AI',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
}

export default function RootLayout({ children }) {

  return (

    <>

      <html lang="en">
        <AuthProvider>
      
          <body className={poppins.className}>
            <Navbar></Navbar>
            <div className='mt-24'></div>
            {children}
          </body>

        </AuthProvider>
      </html>
    </>
  )
}
