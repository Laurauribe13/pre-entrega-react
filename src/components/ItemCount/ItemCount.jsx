import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    
    const [contador, setContador] = useState(inicial);

    const aumentar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button className='miBoton' onClick={ disminuir }> - </button>
                <strong> {contador} </strong>
                <button className='miBoton' onClick={ aumentar }> + </button>
            </div>
            { stock > 0 && <button className='miBoton' onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>}
            <Link to="/" className = "miBoton" > Continuar Comprando</Link>
        </>
    )
}


export default ItemCount