import { Metadata } from "next"
import Navbar, { NavPage } from "../components/bootstrap/navbar"

export const metadata: Metadata = {
  title: 'Programas',
  description: '',
}

export default function ProgramasLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Navbar currentPage={NavPage.PROGRAMAS}></Navbar>
    <main>
        {children}
    </main>
    </>
  )
}
