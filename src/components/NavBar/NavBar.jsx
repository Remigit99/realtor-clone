
import React from 'react';
import '../NavBar/NavBar.css';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="container nav__container">

                <Link to='/'>
                    <h2>Real<span>tor</span></h2>
                </Link>

                <ul className="nav__links">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/offers'>Offers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-in'>Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-out'>Sign Out</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar