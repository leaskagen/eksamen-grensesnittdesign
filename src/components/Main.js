import React from "react";
import Product from "./Product";

export default function Main(props) {
    const { pizzas, addItem } = props;
    return (
        <main>
            <h1>Ting</h1>
            <div>
                {pizzas.map((pizza) => (
                    <Product key={pizza.id} pizza={pizza} addItem={addItem}></Product>
                ))}
            </div>
        </main>
    );
}