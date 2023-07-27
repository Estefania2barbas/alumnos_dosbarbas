import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

//_GetPayload porque tipos nativos prisma no reconoce m-m
export default async function getAllProyecto(): Promise<Prisma.proyectoGetPayload<{include: { programas: true }}>[]> {
     
     return prisma.proyecto.findMany({
          include: { programas: true }
     })

}
