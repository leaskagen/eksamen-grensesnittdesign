import React from "react";
import { useState, useEffect } from 'react';
import Basket from "../components/Basket";
import ShoppingItems from './ShoppingItems';

export default ({ close }) => (
    
  <div className="menu">
      <ShoppingItems></ShoppingItems>
  </div>
);
