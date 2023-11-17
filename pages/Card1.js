// App.js

import React from 'react';
import './Card1.css';

const cardData = [
  { image: 'https://www.layers.shop/cdn/shop/files/iphone-14-pro-MAX__0000_Layer_1.jpg?v=1696506654&width=1860', title: 'Black Crack' },
  { image: 'https://www.layers.shop/cdn/shop/files/iphone-14-pro-MAX__0008_Layer_9.jpg?v=1696505959&width=1860', title: 'Astro Rainbow' },
  { image: 'https://www.layers.shop/cdn/shop/files/black_crack_98de6b18-5dd2-4a21-993f-8a0eada9e9a0.jpg?v=1695188371&width=1860', title: 'Concrete Rock' },
  { image: 'https://www.layers.shop/cdn/shop/files/Metamor.png?v=1693493184&width=1860', title: 'Metamor' },
  { image: 'https://www.layers.shop/cdn/shop/files/Before_sunset.png?v=1693493364&width=1860', title: 'Before Sunset' },
  { image: 'https://www.layers.shop/cdn/shop/files/iphone-14-pro-MAX__0004_Layer_5.jpg?v=1696506813&width=1860', title: 'Golden Swirl' },
    { image: 'https://www.layers.shop/cdn/shop/files/90s_kid.png?v=1693570428&width=1860', title: '90S KIDS' },
    { image: 'https://www.layers.shop/cdn/shop/files/cultivate_Kindness.jpg?v=1693578490&width=1860', title: 'cultivate kindness' },
    { image: 'https://www.layers.shop/cdn/shop/files/iphone-14-pro-MAX__0002_Layer_3.jpg?v=1696506239&width=1860', title: 'Metamor' },
    { image: 'https://www.layers.shop/cdn/shop/files/Moon_Knight_Rising_1.jpg?v=1693576830&width=1860', title: 'Before Sunset' },
];
 

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="flex-container">
          <h3 className="card-title">{title}</h3>
          <button className="buy-button">599</button>
        </div>
      </div>
    </div>
  );
};

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item, index) => (
        <Card key={index} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

function Card1() {
  return (
   <>
    <div>
      <h1 id='cardtitle'>Layers Original Designs</h1>
      <CardGrid data={cardData} />
    </div>
    <div className='image22'>
        <img src='https://www.layers.shop/cdn/shop/files/DEADPOL_Banner_1..jpg?v=1694692351&width=1860' className='bigimage2' alt='op'></img>
    </div>
   
   </>
  );
}

export default Card1;
