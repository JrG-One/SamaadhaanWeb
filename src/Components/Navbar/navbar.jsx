// Navbar.js

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "./navbar.css";
import logo from "./images/Group 2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar-container'>
      <img src={logo} alt="" className='logo-img' />
      <ul className={`nav-links ${nav ? 'open' : ''}`}>
        <li><input type="text" placeholder="Mumbai Central Railway, mu..." /></li>
        <li className="subscribe-btn"><button className="custom-button">Subscribed</button></li>
        <li>LOGIN</li>
        <li>SIGNUP</li>
      </ul>
      <div onClick={handleNav} className='menu-icon'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={`mobile-nav ${nav ? 'open' : ''}`}>
        <img src={logo} alt="" className='logo-img' />
        <li><input type="text" placeholder="Mumbai Central Railway, mu..." /></li>
        <li className="subscribe-btn1"><button className="custom-button">Subscribed</button></li>
        <li>LOGIN</li>
        <li>SIGNUP</li>
      </ul>
    </div>
  );
};

export default Navbar;
