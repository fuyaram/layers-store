// App.js

import React from 'react';
import './Card3.css';

const cardData = [
  { image: 'https://www.layers.shop/cdn/shop/files/Starjedi-Laptop.jpg?v=1686393107&width=1860', title: 'Black Crack' },
  { image: 'https://www.layers.shop/cdn/shop/files/Star-universe-laptop.jpg?v=1686393107&width=1860', title: 'Astro Rainbow' },
  { image: 'https://www.layers.shop/cdn/shop/files/Mando-laptop.jpg?v=1686393105&width=1860', title: 'Concrete Rock' },
  { image: 'https://www.layers.shop/cdn/shop/files/Cybermind_e4acc93c-80a1-48f4-9f1c-814dc34f0bd3.jpg?v=1686393106&width=1860', title: 'Metamor' },
  { image: 'https://www.layers.shop/cdn/shop/files/magma_1.png?v=1683195599&width=1860', title: 'Before Sunset' },
  { image: 'https://www.layers.shop/cdn/shop/files/chaos_1.png?v=1683195598&width=1860', title: 'Golden Swirl' },
    { image: 'https://www.layers.shop/cdn/shop/files/pink-min.png?v=1696916778&width=1860', title: '90S KIDS' },
    { image: 'https://www.layers.shop/cdn/shop/files/blue.png?v=1680615572&width=1860', title: 'classic' },
    { image: 'https://www.layers.shop/cdn/shop/files/Cybermind_e4acc93c-80a1-48f4-9f1c-814dc34f0bd3.jpg?v=1686393106&width=1860', title: 'Metamor' },
  { image: 'https://www.layers.shop/cdn/shop/files/magma_1.png?v=1683195599&width=1860', title: 'Before Sunset' },

];
 

const Card = ({ image, title }) => {
  return (
    <div className="card3">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="flex-container">
          <h3 className="card-title">{title}</h3>
          <button className="buy-button5">₹ 1199
</button>
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

function Card3() {
  return (
   <>
    <div>
      <CardGrid data={cardData} />
    </div>
    
   
   </>
  );
}

export default Card3;
