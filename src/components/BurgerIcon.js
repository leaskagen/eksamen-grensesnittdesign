import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Header from "./Header";

function BurgerIcon ({ open, ...props }) {
  const cartFromLS = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const [cartItems] = useState(cartFromLS);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems])

  return (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <Header countCartItems={cartItems.length}></Header>
    <div id="shopping-cart-icon">
      <ShoppingCartOutlinedIcon
        fontSize="inherit"
        style={{ fontSize: "40px" }} />
    </div>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);
  }
export default BurgerIcon;