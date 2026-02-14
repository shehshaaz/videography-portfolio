import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-chaos-black min-h-screen text-white font-sans selection:bg-chaos-gold selection:text-chaos-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-chaos-dark/50 backdrop-blur-3xl">
        <About />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
