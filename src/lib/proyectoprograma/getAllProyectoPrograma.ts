import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function getAllProyectoPrograma(): Promise<ProyectoPrograma[]> {
    const res = await fetch("http://localhost:7081/mocks/proyectos.json")
    const prismaProyectos=await prisma.proyecto.findMany()
    console.log(prismaProyectos);
    
    if(!res.ok) throw new Error("error obteniendo proyecto_programas desde backend")
    return res.json()
}
