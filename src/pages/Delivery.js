import React from 'react';
import {Grid} from '@mui/material';
import SideBar  from './../components/SideMenu';

export default function Delivery() {
    return (
        <Grid container justifyContent="center" id="deliveryContent">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <div>
            <h1>Leveringsområder</h1>
            <p>Vi leverer til alle adresser i Oslo med unntak av Sørbråten, 
                Sørkedalen og Maridalen</p>
            <p>I Bærum leverer vi til Fornebu, Haslum, Bekkestua, Kolsås,
                Høvik, Østerås og Sandvika</p>   
            <p>Leveringstillegg: 69kr</p>
            <p>Adressen vår:</p>
            <p>Louises Gate 17c</p>
            <p>0169 Oslo</p>
            <img width="100%" src="https://bym-nyhetsrom-prod-files.s3.eu-west-1.amazonaws.com/wp-content/uploads/2015/12/kart-ring2.jpg"></img>
            </div>


            

        </Grid>
    )
}
