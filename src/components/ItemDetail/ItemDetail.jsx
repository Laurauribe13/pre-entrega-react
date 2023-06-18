import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProd} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    
    const item = {id, nombre, precio};
    agregarProd(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
        <img src= {img} alt={nombre} />
        <div className='descripcion'>
          <h2>Nombre: {nombre} </h2>
          <h3>Precio: {precio} </h3>
          <h3>ID: {id} </h3>
          <p className='stock'>Stock: {stock}</p>
          <p className='descripcion'>{descripcion}</p>
        </div>
        {
          agregarCantidad > 0 ? (<Link to="/cart" className='miBoton'> Finalizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail