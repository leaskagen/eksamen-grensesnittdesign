import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import pizzaContainer from '../MenuContainer/PizzaContainer'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            <Link to="/Checkout">
                <button>
                    <Header countCartItems={cartItems.length}></Header>
                </button>
            </Link>
            <div>
                <Main pizzas={pizzas} addItem={addItem}></Main>
            </div>
        </div>
    );
}
export default Menu;