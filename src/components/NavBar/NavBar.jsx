import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    const imagenLogo = "https://i.pinimg.com/originals/53/43/1d/53431d7773f671839a96b9b16edbe5e5.png"
    return (
    <header>
        <img className='imagenLogo' src= {imagenLogo} alt="Logo Belle Cosmetics" />

        <nav>
            <ul>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sedes</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
)
}

export default NavBar