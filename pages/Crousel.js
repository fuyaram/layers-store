import React from 'react';
import './Crousel.css'


const Crousel = () => {
    const logos = [
        { id: 1, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0002_Symbol-of-the-iPhone-logo.jpg?v=1673873290&width=1080', title: 'APPLE' },
        { id: 2, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0003_Samsung-logo.jpg?v=1673873290&width=1080', title: 'samsung' },
        { id: 3, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0007_OnePlus-Logo.jpg?v=1673873290&width=1080', title: 'onePLUS' },
        { id: 4, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0013_google-logo-9824.jpg?v=1673873483&width=1080', title: 'google' },
        { id: 5, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0004_realme-logo-png-3.jpg?v=1673873290&width=1080', title: 'realme' },
        { id: 6, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0000_Xiaomi-logo.jpg?v=1673873289&width=1080', title: 'XIOme' },
        { id: 7, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0006_Oppo-logo.jpg?v=1673873290&width=1080', title: 'oppo' },
        { id: 8, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0014_Asus-Logo-1995-present.jpg?v=1673873483&width=1080', title: 'asus' },
        { id: 9, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0008_Nothing_Logo_webp.jpg?v=1673873290&width=1080', title: 'nothing' },
        { id: 10, src: 'https://www.layers.shop/cdn/shop/files/iqoo_b3d649db-809c-4d29-8bd4-6569ed9e08fa.png?v=1677083191&width=1080', title: 'IQOO' },
        { id: 9, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0005_Poco_Smartphone_Company_logo_svg_85ba8bad-e0e3-430c-8031-b205e1a10ddc.jpg?v=1677083282&width=1080', title: 'poco' },
        { id: 10, src: 'https://www.layers.shop/cdn/shop/files/Untitled-1_0001_Vivo-Logo_cd254c4e-9c28-4522-b2f1-311e46b01ed1.jpg?v=1677084031&width=1080', title: 'vivo' },
      ];

  return (
    <div className="container">
        <h1 id='barnd'>Ｓｅｌｅｃｔ Ｙｏｕｒ Ｂｒａｎｄ</h1>
    <div className="carousel-container">
      <div className="logo-circle">
        <img src={logos[0].src} alt={logos[0].title} />
        <p>{logos[0].title}</p>
      </div>
      {logos.slice(1).map((logo) => (
        <div className="logo-circle" key={logo.id}>
          <img src={logo.src} alt={logo.title} />
          <p>{logo.title}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Crousel;
