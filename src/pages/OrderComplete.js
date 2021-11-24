import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './../images/pizzalogo.png';

export default function OrderCompleted() {

    return (
        <main id="order-complete-main">
            <figure>
                <img src={Logo} alt="Spinning pizza logo">
                </img>
            </figure>
            <h2>Bestilling fullført!</h2>
            <p>Estimert leveringstid: 2 døgn. </p>
            <p> Ingen refusjon </p>
            <p> Takk for bestillingen! </p>
            <Link to="/"><h3>Tilbake til hovedsiden</h3></Link>
        </main>
    )
}