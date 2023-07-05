import MUIProvider from '@/MUI'
import './globals.css'
import { Lexend } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import NextAuthProvider from '@/Components/NextAuthProvider/NextAuthProvider'
const lexend = Lexend({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MUIProvider>
        <NextAuthProvider>
          <body className={lexend.className}>
              <Navbar />
              {children}
              <Footer />
          </body>
        </NextAuthProvider>
      </MUIProvider>
    </html >
  )
}
