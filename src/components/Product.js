import React from 'react'

export default function Product(props) {
    const { product, addItem } = props;
    return (
        <div>
            <img src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>{product.price},-</div>
            <div>
                <button onClick={() => addItem(product)}>Legg til i handlekurv</button>
            </div>
        </div>
    );
}
