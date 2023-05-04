import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const iconoCarrito = "https://cdn-icons-png.flaticon.com/512/2543/2543193.png"
    return (
    <div>
        <img className='iconoCarrito' src={iconoCarrito} alt="Carrito de Compras" />
        <strong> 2 </strong>
    </div>
)
}

export default CartWidget