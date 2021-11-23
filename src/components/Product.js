import { Button } from '@mui/material';
import React from 'react'

export default function Product(props) {
    const { pizza, addItem} = props;

    return (
        <div className="food-item">
            <img src={pizza.img} alt={pizza.name} className="small" />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>Allergener: {pizza.allergies}</p>
            <h3>{pizza.price},-</h3>
            <div className="text-right">
                <Button className="food-button" variant="contained" onClick={() => addItem(pizza)}><strong>Legg til</strong></Button>
            </div>
            <hr className="menu-hr"></hr>
        </div>
    );
}
