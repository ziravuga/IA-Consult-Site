import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Realisations from './components/Realisations';
import Prototypes from './components/Prototypes';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Simple routing based on hash
  const currentHash = window.location.hash;
  const showBlogPost = currentHash === '#blog/parcours';

  if (showBlogPost) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <BlogPost />
        </main>
        <Footer />
      </div>
    );
  }

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