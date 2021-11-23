//Importing components
import React from "react";
import ShoppingItems from './ShoppingItems';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default () => (

  //Shopping cart output which links to checkout page.
  <div className="menu">
    <ShoppingItems></ShoppingItems>
    <Link to="/Checkout">
      <Button className="food-button" variant="contained">
        <strong>Bestill</strong>
      </Button>
    </Link>
  </div>
);
