//Importing components
import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import Basket from "../components/Basket";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './../checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
    const cartFromLS = JSON.parse(localStorage.getItem('cartItems') || '[]')
    const [cartItems, setCartItems] = useState(cartFromLS);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])


    //Add item function
    const addItem = (pizza) => {
        const exist = cartItems.find((x) => x.id === pizza.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === pizza.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...pizza, qty: 1 }]);
        }
    };
    //Remove item function
    const removeItem = (pizza) => {
        const exist = cartItems.find((x) => x.id === pizza.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== pizza.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === pizza.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    //Returning the objects
    return (
        <div>
            <div>
                
                <Basket
                    cartItems={cartItems}
                    addItem={addItem}
                    removeItem={removeItem}
                ></Basket>

                <div id="personalia-text">
                <PersonIcon className="contact-icon"/>
                <TextField id="standard-basic" label="Fullt navn:"   placeholder="Fullt navn:" variant="standard" />
                <br></br>
                <PhoneIcon className="contact-icon" />
                <TextField id="standard-basic" label="Telefon:" placeholder="Telefon:" variant="standard" />
                <br></br>
                <MailIcon className="contact-icon"/>
                <TextField id="standard-basic" label="Email:"  placeholder="Email:" variant="standard" />
                <br></br>
                <HomeIcon className="contact-icon"/>
                <TextField id="standard-basic" label="Adresse:"  placeholder="Email:" variant="standard" />
                <br></br>
                </div>
                
                <div id="pay-Options">
                <h4>Velg betalingsmetode:</h4>
                <Button id="paypal-btn" variant="primary"><strong>PayPal</strong></Button>
                <Button  id="klarna-btn" variant="secondary"><strong>Klarna</strong></Button>
                <Button  id="card-btn" variant="warning"><strong>Debit/Mastercard</strong></Button>
                <Button  id="vipps-btn" variant="light"><strong>Vipps</strong></Button>
                <ArrowBackIcon class="text-left" Link to="/Menu" className="link link-home"/>
              
                    
                </div>
            </div>
        </div>
    );
}

//Exporting function
export default Checkout;