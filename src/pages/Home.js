import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Menu from './Menu';
import Delivery from './Delivery';

import Logo from './../images/pizzalogo.png';

import SideMenu  from './../components/SideMenu';


export default function Home() {
    return (
        <main className="content-div" id="front-page">
            <SideMenu></SideMenu>
            <figure id="logo-front">
                <img src={Logo} alt="Pizza logo"></img>
            </figure>
            <h1>Pizzeria Bella</h1>
            <div>
                <Link to="/Menu" className="link">Se meny</Link>
                <Link to="/Delivery" className="link">Leveringsområder</Link>
            </div>

            <Routes>
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Delivery" element={<Delivery />} />
            </Routes>
        </main>
    )
}
