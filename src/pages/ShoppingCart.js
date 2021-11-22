import Basket from "../components/Basket";
import Header from "../components/Header";
import Main from "../components/Main";
import pizzaContainer from '../MenuContainer/PizzaContainer'
import { useState } from 'react';

//Function for adding item, removing item and 
function ShoppingCart() {
    const { pizzas } = pizzaContainer;
    const [cartItems, setCartItems] = useState([]);
    // const {PizzaContainer.pizzaContainer} = PizzaContainer;

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
            <Header countCartItems={cartItems.length}></Header>
            <div>
                <Main pizzas={pizzas} addItem={addItem}></Main>
                <Basket
                    cartItems={cartItems}
                    addItem={addItem}
                    removeItem={removeItem}
                ></Basket>
            </div>
        </div>
    );
}

export default ShoppingCart;