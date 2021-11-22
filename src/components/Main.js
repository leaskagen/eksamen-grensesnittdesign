import React from "react";
import Product from "./Product";

export default function Main(props) {
    const { products, addItem } = props;
    return (
        <main>
            <h1>Ting</h1>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} addItem={addItem}></Product>
                ))}
            </div>
        </main>
    );
}