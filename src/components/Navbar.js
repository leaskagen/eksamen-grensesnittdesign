//Components needed
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Logo from './../images/pizzalogo.png';
import Menu from './../pages/Menu';
import Delivery from './../pages/Delivery';
import Contact from './../pages/Contact';

//Navigation bar for every page
export default function Navbar() {
    return (
        <nav className="navbar-top">

            <Link to="/" className="link">
                <div className="nav-logo">
                    <figure>
                        <img src={Logo}></img>
                        
                    </figure>
                    <h1>Pizzeria Bella</h1>
                </div>
            </Link>
            <div className="nav-div">
                <Link to="/Menu" className="link">Meny</Link>
                <Link to="/Delivery" className="link">Leveringsområder</Link>
                <Link to="/Contact" className="link">Kontakt oss</Link>
            </div>

            <Routes>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Delivery" element={<Delivery/>}/>
                <Route path="/Contact" element={<Contact/>}/>                
            </Routes>
        </nav>
    )
}
