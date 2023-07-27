import { PrismaClient, Prisma, Usuario, NombreTipoUsuario } from '@prisma/client'
const prisma = new PrismaClient()

export function getSingleAlumnoByNombre(nombre: string): Promise<Alumno | null> {
     return prisma.usuario.findFirst({
          where: {
               nombre
          },
     })
}

export function getSingleAlumnoById(id: number): Promise<Alumno | null> {
     return prisma.usuario.findFirst({
          where: {
               id
          },
     })
}
