import MUIProvider from '@/MUI'
import './globals.css'
import { Lexend } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Realhome: Seamless Property Solutions',
  description: 'Discover and secure your dream property effortlessly with Realhome. Explore, buy, and book premium real estate listings for a seamless experience.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MUIProvider>
        <body className={lexend.className}>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </MUIProvider>
    </html>
  )
}
