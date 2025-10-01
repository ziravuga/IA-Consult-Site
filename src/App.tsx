import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
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
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showBlogPost = currentHash === '#blog/parcours';

  if (showBlogPost) {
    return (
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <BlogPost />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;