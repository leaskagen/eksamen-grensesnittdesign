import { Button } from '@mui/material';
import React from 'react'

export default function Product(props) {
    const { pizza, addItem} = props;

    return (
        <div className="food-item">
            <img src={pizza.img} alt={pizza.name} className="small" />
            <h2>{pizza.name}</h2>
            <div>{pizza.description}</div>
            <div>{pizza.allergies}</div>
            <div>{pizza.price},-</div>
            <div className="text-right">
                <Button color="success" variant="contained" onClick={() => addItem(pizza)}>Legg til</Button>
            </div>
        </div>
    );
}
