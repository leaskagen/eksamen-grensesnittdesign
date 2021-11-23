import React from "react";
import { useState, useEffect } from 'react';
import Basket from "../components/Basket";
import ShoppingItems from './ShoppingItems';
import { Link } from "react-router-dom";
import Checkout from './../pages/Checkout';

export default ({ close }) => (
    
  <div className="menu">
      <ShoppingItems></ShoppingItems>
      <Link to="/Checkout">
        <button>Bestill</button>
      </Link>
      
  </div>
);
