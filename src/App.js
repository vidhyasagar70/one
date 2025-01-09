import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

import Image from './components/Blogs';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs/>
      <Image/> 
      
      <Footer />
    </div>
  );
}

export default App;
