import { Metadata } from "next"
import Navbar, { NavPage } from "../components/bootstrap/navbar"

export const metadata: Metadata = {
  title: 'Cursos',
  description: '',
}

export default function CursosLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Navbar currentPage={NavPage.CURSOS}></Navbar>
    <main>
        {children}
    </main>
    </>
  )
}
