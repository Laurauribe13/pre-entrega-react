import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProd} = useContext(CarritoContext);
  return (
    <div>
        <h3> {item.nombre} </h3>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button className='miBoton' onClick={()=> eliminarProd(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem