import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imagenLogo = "https://i.pinimg.com/originals/53/43/1d/53431d7773f671839a96b9b16edbe5e5.png"
    
    return (
    <header>
        <Link to={"/"}>
            <img className='imagenLogo' src= {imagenLogo} alt="Logo Belle Cosmetics" />
        </Link>

        <nav className='categorias'>
            <ul>
                <li>
            <NavLink to={`/categoria/1`} className="navLinkCat"> Labiales </NavLink>
                </li>

                <li>
            <NavLink to={`/categoria/2`} className="navLinkCat"> Sombras </NavLink>
                </li>

                <li>
            <NavLink to={`/categoria/3`} className="navLinkCat"> Pestañinas </NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget />

    </header>
)
}

export default NavBar