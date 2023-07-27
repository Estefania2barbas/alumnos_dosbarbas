import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LoadScripts from './components/loadScripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alumnos',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LoadScripts />
        
      </body>
    </html>
  )
}
