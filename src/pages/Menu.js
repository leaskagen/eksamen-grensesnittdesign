import React from 'react';
import SideBar  from './../components/SideMenu';

export default function Menu() {
    return (
        <div>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></SideBar>
            <h1>Menu page</h1>
        </div>
    )
}
