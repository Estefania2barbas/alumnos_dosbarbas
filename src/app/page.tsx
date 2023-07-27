import Image from 'next/image'
import Navbar, { NavPage } from './components/bootstrap/navbar'
import getAllAlumno from '@/lib/alumno/getAllAlumno'
import { getSingleAlumnoByNombre } from '@/lib/alumno/getSingleAlumno'


export default async function Home() {
  const alumnoList=await getAllAlumno()
  const alumno=await getSingleAlumnoByNombre("ANA SCARLETTE")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar currentPage={NavPage.HOME}></Navbar>
      <pre>
        {JSON.stringify(alumno,null,2)}
      </pre>
    </main>
  )
}
