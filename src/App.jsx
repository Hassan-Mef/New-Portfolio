import React from 'react';
import './App.css'

// sections import 
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Pricing from './sections/Pricing';
import WebStackCircuitFresh from './sections/WebStackSection';
import BackgroundParallax from './components/BackgroundParallax';

function App() {
  return (
    <div className="dark bg-black text-white ">
      <Navbar />

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="tech"><TechStack /></section>
      { /*<section id="tech1"><WebStackCircuitFresh/></section> */}
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      {/* Optional pricing */}
      <section id="pricing"><Pricing /></section>
    </div>
  );
}

export default App
