import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Header from "./Header";

function BurgerIcon({ open, ...props }) {
  const cartFromLS = JSON.parse(localStorage.getItem('cartItems') || '[]');

  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div id="shopping-cart-icon">
        <div className="sc-icon-small">
          <ShoppingCartOutlinedIcon 
          fontSize="inherit"
          style={{ fontSize: "40px" }} />
        </div>
        <div className="sc-icon">
          <ShoppingCartOutlinedIcon 
          fontSize="inherit"
          style={{ fontSize: "80px" }} />
        </div>
      </div>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
      <div className="cart-item-count">            
      <Header countCartItems={cartFromLS.length}></Header>
      </div>
    </div>
  );
}
export default BurgerIcon;