import React from 'react';
import { slide as SideMenu } from 'react-burger-menu';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Logo from './../images/pizzalogo.png';

// Import pages 
/*
import Home from './../pages/Home';
import Menu from './../pages/Menu';
import Contact from './../pages/Contact';
import Delivery from './../pages/Delivery';
*/

export default props => {
  return (
    <SideMenu>
        <a href="/">
            <figure className="side-menu-figure">
                <img src={Logo} alt="Link to front page as Logo"></img>
            </figure>
        </a>
            
        <hr></hr>

        <a className="menu-item" href="/Menu">
            Meny
        </a>
        <a className="menu-item" href="/Delivery">
            Leveringsområder
        </a>
        <a className="menu-item" href="/Contact">
            Kontakt oss
        </a>    
    </SideMenu>
  );
};

/*
<Link className="menu-item" to="/Menu">
        Menu
      </Link>
      <Link className="menu-item" to="/Delivery">
        Leveringsområder
      </Link>
      <Link className="menu-item" to="/Contact">
        Pizzas
      </Link>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
      </Routes>
      */

/*
export default function SideMenu() {
    return (
        <nav id="side-menu">
            <h1>aegrogr</h1>
        </nav>
    )
} */