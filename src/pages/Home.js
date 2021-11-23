import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Menu from './Menu';
import Delivery from './Delivery';
import Contact from './Contact';

import Logo from './../images/pizzalogo.png';

import SideBar  from './../components/SideMenu';


export default function Home() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <main  id="front-page">
                <div id="front-top">
                    <figure id="logo-front">
                    <img src={Logo} alt="Pizza logo"></img>
                </figure>
                <h1>Pizzeria Bella</h1>
                </div>

                <div id="front-page-div">
                    <div className="content-div">
                        <Link to="/Menu" className="link">Se menyen</Link>
                        <Link to="/Delivery" className="link">Leveringsområder</Link>
                        <Link to="/Contact" className="link">Kontakt oss</Link>
                    </div>

                    <div className="front-news">
                        <h4>Få gratis levering på 
                            første bestilling</h4>
                        <h5>Bruk rabattkode <strong>BELLA</strong></h5>
                        <div>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                        </div>
                    </div>
                </div>
                
                

                <Routes>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Delivery" element={<Delivery/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </main>
        </div>
    )
}
