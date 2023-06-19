'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import {useState} from 'react';
import NavBar from '@/components/navbar'
import SideBar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Discover course',
//   description: 'Find course by search or filters',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [menu, setMenu] = useState(false);

  return (
    <html lang="en">

      <body className={`${inter.className} bg-background`}>
        <SideBar menu={menu} setMenu={setMenu}/>
        <nav><NavBar menu={menu} setMenu={setMenu}/></nav>
        {children}
      </body>
    </html>
  )
}
