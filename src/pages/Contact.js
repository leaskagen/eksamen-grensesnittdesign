import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SideBar  from './../components/SideMenu';
import NavBar from './../components/Navbar';




export default function Contact() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <NavBar></NavBar>
            <main>
                <div id="contact-div" className="desktop-div">
                    <div id="contact-h">
                        <h1>Kontakt oss</h1>
                        <hr></hr>
                    </div>
                    <div>
                        <h3 className="contact-h">Telefon<PhoneIcon className="contact-icon" /></h3>
                        <a href="tel:+4741384808">+ 47 413 84 808</a>
                        <h3 className="contact-h">Email<MailIcon className="contact-icon"/></h3>
                        <a href="mailto:pizzeriabella@pizza.com">pizzeriabella@pizza.com</a>
                        <h3 className="contact-h">Adresse<HomeIcon className="contact-icon"/></h3>
                        <p>Louises Gate 17c</p>
                        <p>0169 Oslo</p>
                        <h3 className="contact-h">Åpningstider<AccessTimeOutlinedIcon className="contact-icon"/></h3>
                        <p>Man-Tor: <strong>10:00-23:00</strong></p>
                        <p>Fre-Lør: <strong>10:00-03:00</strong></p>
                        <p>Søndag: <strong>12:00-23:00</strong></p>
                        <p>Kjøkkenet stenger 30 minutter før stengetid</p>
                    </div>
                    <div id="contact-map-div">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=louises%20gate%2017c&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
