import getAllProyecto from '@/lib/proyecto/getAllProyecto'
import getAllProyectoPrograma from '@/lib/proyectoprograma/getAllProyectoPrograma'
import React from 'react'
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

//@ts-ignore


export default async function Proyectos() {

    const empresas= await prisma.empresa.findMany({
        include: { programas: true }
    }
    )
    
    /*prisma.proyecto.findMany({
        include: { programas: true }
   })*/


    const listaProyectoPrograma = await getAllProyectoPrograma()
    /*
    type ProyectoPrograma={
    "id_proyecto_programa": number,
    "id_proyecto": number,
    "id_programa": number,
    "inicio": string,
    "fin": string,
    "borrado": number,
    "fecha_ingreso": string,
    "usuario_ingreso": number
    }
    */

    const listaProyecto = await getAllProyecto()
    listaProyecto[0].programas[0]
    return (
        <>
        <pre>
         {JSON.stringify(empresas,null,2)}
        </pre>       
        </>
    )
}
