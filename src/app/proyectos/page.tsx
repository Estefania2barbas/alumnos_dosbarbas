import getAllProyectoPrograma from '@/lib/proyectoprograma/getAllProyectoPrograma'
import React from 'react'

export default async function Proyectos() {
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
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id_proyecto_programa</th>
                        <th scope="col">id_proyecto</th>
                        <th scope="col">id_programa</th>
                        <th scope="col">inicio</th>
                        <th scope="col">borrado</th>
                        <th scope="col">fecha_ingreso</th>
                        <th scope="col">usuario_ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProyectoPrograma.map(proyectoprograma => (
                            <tr key={proyectoprograma.id_proyecto_programa}>
                                <th scope="row">{proyectoprograma.id_proyecto_programa}</th>
                                <td>{proyectoprograma.id_proyecto}</td>
                                <td>{proyectoprograma.id_programa}</td>
                                <td>{proyectoprograma.inicio}</td>
                                <td>{proyectoprograma.borrado}</td>
                                <td>{proyectoprograma.fecha_ingreso}</td>
                                <td>{proyectoprograma.usuario_ingreso}</td>
                            </tr>
                        ))
                    }
  

                </tbody>
            </table>
        </>
    )
}
