import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imagenProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <h3>Precio: {precio} </h3>
        <h4>ID: {id} </h4>
        <Link to={`/item/${id}`} className='botonDetalle'> Ver Detalles </Link>
    </div>
  )
}

export default Item