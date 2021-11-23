import React from 'react';

import SideBar  from './../components/SideMenu';
import NavBar from './../components/Navbar';

export default function Delivery() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <NavBar></NavBar>
            <main id="deliveryContent">
                <div>
                <h1>Leveringsområder</h1>
                <hr></hr>
                <p>Vi leverer til alle adresser i Oslo med unntak av Sørbråten, Sørkedalen og Maridalen</p>
                <p>Leveringstillegg: 69kr</p>
                <p>Adressen vår:</p>
                <ul>
                    <li>Louises Gate 17c</li>
                    <li>0169 Oslo</li>
                </ul>
                    <div class="mapouter"><div class="gmap_canvas">
                        <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=louises%20gate%2017c&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div> 
                
                </div>
            </main>
        </div>
        
    )
}
