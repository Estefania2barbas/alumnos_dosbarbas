import Image from 'next/image'
import Navbar, { NavPage } from './components/bootstrap/navbar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar currentPage={NavPage.HOME}></Navbar>
      <h1>home</h1>
    </main>
  )
}
