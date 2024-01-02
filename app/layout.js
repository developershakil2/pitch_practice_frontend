import { Inter } from 'next/font/google'
import './globals.css'
import ContextComponent from "./utilities"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:'Pitch Practice your personal AI',
  description: 'Elevate Your Sales Game with Pitch Practice – Where Every Pitch Counts',
}

export default function RootLayout({ children }) {

  return (
   <ContextComponent>
  <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
   </ContextComponent>
 
  )
}
