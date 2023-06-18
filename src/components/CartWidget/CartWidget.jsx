import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cantTotal} = useContext(CarritoContext);
    const iconoCarrito = "https://cdn-icons-png.flaticon.com/512/2543/2543193.png"

    return (
        <div>
            <Link style={{textDecoration:"none"}} to='/cart'>
                <img className='iconoCarrito' src={iconoCarrito} alt="Carrito de Compras" />
                {
                    cantTotal > 0 && <strong className='indicadorItems'> {cantTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget