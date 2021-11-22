import React from 'react'

export default function Product(props) {
    const { pizza, addItem } = props;
    return (
        <div>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <div>{pizza.description}</div>
            <div>{pizza.allergies}</div>
            <div>{pizza.price},-</div>
            <div>
                <button onClick={() => addItem(pizza)}>Legg til i handlekurv</button>
            </div>
            <hr />
        </div>
    );
}
