import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <img src= {img} alt={nombre} />
        <div className='descripcion'>
          <h2>Nombre: {nombre} </h2>
          <h3>Precio: {precio} </h3>
          <h3>ID: {id} </h3>
          <p> Productos de maquillaje exclusivos de las marcas más prestigiosas del mundo.</p>
        </div>
    </div>
  )
}

export default ItemDetail