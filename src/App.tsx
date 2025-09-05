import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Realisations from './components/Realisations';
import Prototypes from './components/Prototypes';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Realisations />
        <Prototypes />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;