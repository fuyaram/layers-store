import React from 'react'
import './Footer.css'
import logo from './images/logo-removebg-preview (1).png'
const Footer = () => {
  return (
    <>
    <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
         
          <span class="logo"><img class="logo" src={logo} alt='io'></img></span>
        </div>
        <div class="media-icons">
          <a href="."><i class="fab fa-facebook-f"></i></a>
          <a href="."><i class="fab fa-twitter"></i></a>
          <a href="."><i class="fab fa-instagram"></i></a>
          <a href="."><i class="fab fa-linkedin-in"></i></a>
          <a href="."><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">vision</li>
          <li><a href=".">Creativity, Expression, & Exploration</a></li>
         
        </ul>
        <ul class="box">
          <li class="link_name">pages</li>
          <li><a href=".">contacts us</a></li>
          <li><a href=".">about us</a></li>
          <li><a href=".">terms and conditions</a></li>
          <li><a href=".">privacy & pplicy</a></li>
          <li><a href=".">FAQ</a></li>
          <li><a href=".">Refunds/Cancellations/Shipping Policy</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href=".">login</a></li>
          <li><a href=".">register</a></li>
          <li><a href=".">track order</a></li>
          
        </ul>
        
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"></input></li>
          <li><input type="button" value="Subscribe"></input></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href=".">LAYERS.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href=".">Privacy policy</a>
          <a href=".">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer