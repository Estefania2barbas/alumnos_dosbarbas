import { PrismaClient, NombreTipoUsuario } from '@prisma/client'
const prisma = new PrismaClient()

export default  function getAllAlumno(): Promise<Alumno[]> {
     return prisma.usuario.findMany({
          where:{
               tipoUsuario : {
                    is:{
                        nombre:NombreTipoUsuario.ALUMNO
                    }
               }
          },
          
     })
}

