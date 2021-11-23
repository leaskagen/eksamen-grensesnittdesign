import { Container } from "@mui/material";
import React from "react";
import Product from "./Product";

export default function Main(props) {
    const { pizzas, addItem } = props;
    return (
        <main className="col-1 block">
            <h1>Meny</h1>
            <Container>
                {pizzas.map((pizza) => (
                    <Product key={pizza.id} pizza={pizza} addItem={addItem}></Product>
                ))}
            </Container>
        </main>
    );
}