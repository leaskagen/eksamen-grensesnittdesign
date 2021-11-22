import React from 'react'

export default function Product(props) {
    const { pizza, addItem } = props;
    return (
        <div>
            <img src={pizza.img} alt={pizza.name}/>
            <h3>{pizza.name}</h3>
            <div>{pizza.price},-</div>
            <div>
                <button onClick={() => addItem(pizza)}>Legg til i handlekurv</button>
            </div>
        </div>
    );
}
