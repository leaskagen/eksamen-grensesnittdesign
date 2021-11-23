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
                <div id="contact-div">
                    <h1>Kontakt oss</h1>
                    <hr></hr>
                    <h3 className="contact-h">Telefon<PhoneIcon className="contact-icon" /></h3>
                    <p>+ 47 413 84 808</p>
                    <h3 className="contact-h">Email<MailIcon className="contact-icon"/></h3>
                    <p>pizzeriabella@pizza.com</p>
                    <h3 className="contact-h">Adresse<HomeIcon className="contact-icon"/></h3>
                    <p>Louises Gate 17c</p>
                    <p>0169 Oslo</p>
                    <h3 className="contact-h">Åpningstider<AccessTimeOutlinedIcon className="contact-icon"/></h3>
                    <p>Man-Tor: <strong>10:00-23:00</strong></p>
                    <p>Fre-Lør: <strong>10:00-03:00</strong></p>
                    <p>Søndag: <strong>12:00-23:00</strong></p>
                    <p>Kjøkkenet stenger 30 minutter før stengetid</p>
                </div>
            </main>
        </div>
    )
}
