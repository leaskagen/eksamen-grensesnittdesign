import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Menu from './Menu';
import Delivery from './Delivery';
//import Contact from './Contact';

import Logo from './../images/pizzalogo.png';

import SideBar  from './../components/SideMenu';


export default function Home() {
    return (
        <main className="content-div" id="front-page">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <figure id="logo-front">
                <img src={Logo} alt="Pizza logo"></img>
            </figure>
            <h1>Pizzeria Bella</h1>
            <div>
                <Link to="/Menu" className="link">Se meny</Link>
                <Link to="/Delivery" className="link">Leveringsområder</Link>
            </div>

            <Routes>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Delivery" element={<Delivery/>}/>
            </Routes>
        </main>
    )
}
