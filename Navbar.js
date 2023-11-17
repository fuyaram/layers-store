import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineSearch,AiOutlineShoppingCart, AiOutlineMobile, AiOutlineLaptop, AiOutlineAppstore, AiOutlineSkin, AiOutlineInsurance } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import {  FaSketch } from 'react-icons/fa';
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className={`logo-container ${showMenu ? 'hide' : ''}`}>
        <img src="https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599" alt="Logo" className="logo" />
      </div>
      <div className={`menu-container ${showMenu ? 'show' : ''}`}>
        <div className="close-menu" onClick={toggleMenu}>
          <IoMdClose />
        </div>
        <ul className="menu">
          <li>mobiles skin</li>
          <li>laptop skins</li>
          <li>collactions</li>
          <li>Contact layers</li>
          <li>costumers</li>
          <li>support 24/7</li>
          <li>about us</li>
        </ul>
      </div>
      <div className="icons-container">
  <div className="mobile-icon">
    <AiOutlineMobile />
    <span>Mobile skins</span>
  </div>

  <div className="laptop-icon">
    <AiOutlineLaptop />
    <span>Laptop skins</span>
  </div>

  <div className="collections-icon">
    <AiOutlineAppstore />
    <span>Collections</span>
  </div>

  <div className="skins-icon">
    <AiOutlineSkin />
    <span>all Skins</span>
  </div>

  <div className="covers-icon">
    <AiOutlineInsurance />
    <span> all Covers</span>
  </div>

  <div className="skins-icon">
    <FaSketch />
    <span> new Skins</span>
  </div>

  <div className="cart-icon">
    <AiOutlineShoppingCart />
    <span>Cart</span>
  </div>

  <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <AiOutlineSearch />
  </div>
</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <AiOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;
