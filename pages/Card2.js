// App.js

import React from 'react';
import './Card2.css';

const cardData = [
  { image: 'https://www.layers.shop/cdn/shop/files/Deadpool_2.jpg?v=1693493681&width=1860', title: 'Black Crack' },
  { image: 'https://www.layers.shop/cdn/shop/files/iphone-14-pro-MAX__0007_Layer_8.jpg?v=1696506913&width=1860', title: 'Astro Rainbow' },
  { image: 'https://www.layers.shop/cdn/shop/files/magma.jpg?v=1695188478&width=1860', title: 'Concrete Rock' },
  { image: 'https://www.layers.shop/cdn/shop/files/Deadpool_Attack_1.jpg?v=1693493771&width=1860', title: 'Metamor' },
  { image: 'https://www.layers.shop/cdn/shop/files/Before_sunset.png?v=1693493364&width=1860', title: 'Before Sunset' },
  { image: 'https://www.layers.shop/cdn/shop/files/Moon_Knight_Rising_1.jpg?v=1693576830&width=1860', title: 'Golden Swirl' },
    { image: 'https://www.layers.shop/cdn/shop/files/90s_kid.png?v=1693570428&width=1860', title: '90S KIDS' },
    { image: 'https://www.layers.shop/cdn/shop/files/Blazing_inferno.png?v=1693982914&width=1860', title: 'cultivate kindness' },
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

function Card2() {
  return (
   <>
    <div>
      <h1 id='cardtitle'>Layers Original Designs</h1>
      <CardGrid data={cardData} />
    </div>
    <div className='image22'>
        <img src='https://www.layers.shop/cdn/shop/files/desktop_v2_9e393895-3267-402d-9c38-587c98b34202.png?v=1694693106&width=1860' className='bigimage2' alt='op'></img>
    </div>
   
   </>
  );
}

export default Card2;
