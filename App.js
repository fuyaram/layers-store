import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Home1 from './pages/Home1';
import Card1 from './pages/Card1';
import Crad2 from './pages/Card2'
import Card3 from './pages/Card3'
import ImageGallery from './pages/ImageGallery';
import Box from './pages/Box'
function App() {
  return (
    <>
    <Navbar />
<Home1 />
<Card1 />
<Crad2 />
<Card3 />
<ImageGallery />
<Box />


    <Footer />
    </>
  );
}

export default App;
