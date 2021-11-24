//importing components 
import React from 'react';
import { slide as SideMenu } from 'react-burger-menu';
import Logo from './../images/pizzalogo.png';

//Sidebar which pops up when pressing the three bars.
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