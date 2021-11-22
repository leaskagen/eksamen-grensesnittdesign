import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import {Container, Grid} from '@mui/material'




export default function Contact() {
    return (

        // Place navbar here?
    <Grid container justifyContent="center">
        <div>
           <h1>Pizzeria Bella</h1>
            <h3>Telefon<PhoneIcon /></h3>
            <p>+ 47 022837</p>
            <h3>Email<MailIcon /></h3>
            <p>pizzeriabella@pizza.com</p>
            <h3>Adresse<HomeIcon/></h3>
            <p>Kirkeveien 28f</p>
            <p>Postboks 260</p>
            <p>0169 Oslo</p>
        </div>
        </Grid>
        
    

        
       



    )
}
