import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

import SideBar  from './../components/SideMenu';




export default function Contact() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <main>
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
            </main>
        </div>
    )
}
