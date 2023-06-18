import React from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { carritoCompra, vaciarCarritoCompra, total, cantTotal } = useContext(CarritoContext);
    
    if (cantTotal === 0) {
        return (
            <div className="carritoVacio">
                <h3 className="carritoAviso"> ACTUALMENTE EL CARRITO DE COMPRAS NO TIENE PRODUCTOS </h3>
                <h3 className="carritoParrafo"> Cuando haya productos agregados al carrito podrás ver el resumen de tu compra aquí. </h3>
                <Link className='miBoton' to="/"> Ver Productos </Link>
            </div>
        )
    }
    return (
        <div>
            {carritoCompra.map(producto => <CartItem key={producto.item.id} {...producto} />)}
                <div className="cierreCarrito">
                    <p>Cantidad total: {cantTotal}</p>
                    <p>Total a Pagar: ${total}</p>
                    <button className="miBoton" onClick={() => vaciarCarritoCompra()}> Vaciar Carrito </button>
                    <Link className="miBoton" to="/checkout"> Finalizar Compra </Link>
                    <Link className="miBoton" to="/"> Continuar Comprando </Link>
                </div>
        </div>
    )
}

export default Cart