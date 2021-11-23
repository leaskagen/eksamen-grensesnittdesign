import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import pizzaContainer from '../MenuContainer/PizzaContainer'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SideBar  from './../components/SideMenu';

import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./../components/BurgerIcon";
import ShoppingCart from "./../components/ShoppingCart";

function Menu() {
    const cartFromLS = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const { pizzas } = pizzaContainer;
    const [cartItems, setCartItems] = useState(cartFromLS);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    //Add item function
    const addItem = (pizza) => {
        const exist = cartItems.find((x) => x.id === pizza.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === pizza.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...pizza, qty: 1 }]);
        }
    };

    //Returning the objects
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <main>
                <div>
                    <div>
                        <Main pizzas={pizzas} addItem={addItem}></Main>
                    </div>
                </div>
            </main>
            <Popup
                modal
                overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}>
                {close => <ShoppingCart close={close} />}
            </Popup>
        </div>    
    );
}
export default Menu;
/*
<Link to="/Checkout">
                <button>
                    <Header countCartItems={cartItems.length}></Header>
                </button>
            </Link>
            */