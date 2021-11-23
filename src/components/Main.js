//Importing components
import React from "react";
import Product from "./Product";

//Exporting a function for listing out menu
export default function Main(props) {
    const { pizzas, addItem } = props;
    return (
        <div id="food-page">
            
                {pizzas.map((pizza) => (
                    <Product key={pizza.id} pizza={pizza} addItem={addItem}></Product>
                ))}
            
        </div>
    );
}

// className="col-1 block"