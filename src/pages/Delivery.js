// Importing components needed
import React from 'react';
import SideBar  from './../components/SideMenu';
import NavBar from './../components/Navbar';

// Function for printing out delivery information page.
export default function Delivery() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <NavBar></NavBar>
            <main id="deliveryContent">
                <div id="delivery-div" className="desktop-div">
                    <div id="delivery-h">
                        <h1>Leveringsområder</h1>
                        <hr></hr>
                    </div>
                    <div id="delivery-text">
                        <p>Vi leverer til alle adresser i Oslo med unntak av Sørbråten, Sørkedalen og Maridalen</p>
                        <p>Leveringstillegg: 69kr</p>
                        <p>Adressen vår:</p>
                        <ul>
                            <li>Louises Gate 17c</li>
                            <li>0169 Oslo</li>
                        </ul>
                    </div> 
                    <div class="mapouter-small"><div class="gmap_canvas">
                        <iframe width="260" height="220" id="gmap_canvas" src="https://maps.google.com/maps?q=louises%20gate%2017c&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div></div>
                    <div class="mapouter"><div class="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=louises%20gate%2017c&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div></div>
                </div>
            </main>
        </div>
    )
}
