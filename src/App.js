import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs/>
      
      <Footer />
    </div>
  );
}

export default App;
