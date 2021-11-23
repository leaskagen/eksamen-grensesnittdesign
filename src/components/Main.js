import { Container } from "@mui/material";
import React from "react";
import Product from "./Product";

export default function Main(props) {
    const { pizzas, addItem } = props;
    return (
        <main id="food-page">
            
                {pizzas.map((pizza) => (
                    <Product key={pizza.id} pizza={pizza} addItem={addItem}></Product>
                ))}
            
        </main>
    );
}

// className="col-1 block"