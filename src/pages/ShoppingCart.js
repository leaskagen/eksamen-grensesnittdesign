import Basket from "../components/Basket";
import Header from "../components/Header";
import Main from "../components/Main";
import pizza from '../MenuContainer/data'
import { useState } from 'react';

//Function for adding item, removing item and 
function ShoppingCart() {
    const { products } = pizza;
    const [cartItems, setCartItems] = useState([]);
    // const {PizzaContainer.pizzaContainer} = PizzaContainer;

    //Add item function
    const addItem = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    //Remove item function
    const removeItem = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    //Returning the objects
    return (
        <div>
            <Header countCartItems={cartItems.length}></Header>
            <div>
                <Main products={products} addItem={addItem}></Main>
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