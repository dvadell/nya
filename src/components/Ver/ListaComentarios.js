import React from 'react'
import Comentario from './Comentario'

const ListaComentarios = ({comentarios}) => {
    console.log('comentarios:', comentarios)
    return comentarios ?
                comentarios.map((comentario, i) => {
                    console.log('ListaComentarios: comentario:', comentario)
                    return comentario.comentario ? <Comentario key={i} {...comentario} /> : ''
                }) : ''
}

export default ListaComentarios;