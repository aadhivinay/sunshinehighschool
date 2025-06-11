import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import Facilities from './components/Facilities';
import Sports from './components/Sports';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Events />
      <Facilities />
      <Sports />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;