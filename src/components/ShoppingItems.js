//Importing components
import React from 'react'
import { useState, useEffect } from 'react';
import Basket from "../components/Basket";

function Checkout() {
    //Storing cartItems even when reloading the page.
    const cartFromLS = JSON.parse(localStorage.getItem('cartItems') || '[]')
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
    //Remove item function
    const removeItem = (pizza) => {
        const exist = cartItems.find((x) => x.id === pizza.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== pizza.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === pizza.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    //Returning the objects
    return (
        <div>
            <div>
                <Basket
                    cartItems={cartItems}
                    addItem={addItem}
                    removeItem={removeItem}
                ></Basket>
            </div>
        </div>
    );
}

export default Checkout;