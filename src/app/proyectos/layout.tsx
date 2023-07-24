import { Metadata } from "next"
import Navbar, { NavPage } from "../components/bootstrap/navbar"

export const metadata: Metadata = {
  title: 'Proyectos',
  description: '',
}


export default function ProyectosLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Navbar currentPage={NavPage.PROYECTOS}></Navbar>
    <main>
        {children}
    </main>
    </>
  )
}
