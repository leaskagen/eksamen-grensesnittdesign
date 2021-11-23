import React from 'react'
import { useNavigate } from 'react-router-dom';

import Logo from './../images/pizzalogo.png';

export default function OrderCompleted() {

    const navigate = useNavigate();

    return (
        <main>
            <figure>
                <img src={Logo} alt="Spinning pizza logo">
                </img>
            </figure>
            <h2>Bestilling fullført!</h2>
            <p>Estimert leveringstid: 2 døgn. haha cold pizza bitch. No refound</p>
            <h3 onClick={() => navigate(-1)} id="back-button">Tilbake til hovedsiden</h3>
            
        </main>
    )
}