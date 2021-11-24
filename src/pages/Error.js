//Importing components
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from './../images/pizzalogo.png';

//Error page
export default function Error() {

    const navigate = useNavigate();

    return (
        <main id="error-page">
            <figure>
                <img src={Logo} alt="Spinning pizza logo">
                </img>
            </figure>
            <h2>Denne siden finnes ikke</h2>
            <h3 onClick={() => navigate(-1)} id="back-button">Gå tilbake</h3>
        </main>
    )
}
