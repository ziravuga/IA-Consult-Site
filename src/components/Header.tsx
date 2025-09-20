import React, { useState } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const services = [
    'Conseil & Audit IA',
    'Développement sur mesure',
    'Accompagnement sectoriel',
    'Data Protection & Sécurité'
  ];

  const aiServices = [
    { name: 'Machine Learning', description: 'Modèles prédictifs avancés' },
    { name: 'Vision Artificielle', description: 'Reconnaissance et analyse d\'images' },
    { name: 'NLP & Chatbots', description: 'Traitement du langage naturel' },
    { name: 'Data Science', description: 'Analyse et visualisation de données' },
    { name: 'Automatisation RPA', description: 'Robotisation des processus' },
    { name: 'IA Prédictive', description: 'Prévisions et optimisation' }
  ];

  const blogCategories = [
    { name: 'Tous les articles', href: '#actualites' },
    { name: 'Parcours professionnel', href: '#blog/parcours' },
    { name: 'Technologies IA', href: '#actualites' },
    { name: 'Transformation digitale', href: '#actualites' },
    { name: 'Data Science', href: '#actualites' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">IA-Consult</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Accueil
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsAIServicesOpen(true)}
                onMouseLeave={() => setIsAIServicesOpen(false)}
              >
                <span>Solutions IA</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isAIServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3"
                  onMouseEnter={() => setIsAIServicesOpen(true)}
                  onMouseLeave={() => setIsAIServicesOpen(false)}
                >
                  {aiServices.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:bg-purple-500 transition-colors"></div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <a
                      href="#prototypes"
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      → Voir nos prototypes
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              À propos
            </a>
            <a href="#realisations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Réalisations
            </a>
            <a href="#prototypes" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Prototypes
            </a>
            
            {/* Blog/Actualités Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsBlogOpen(true)}
                onMouseLeave={() => setIsBlogOpen(false)}
              >
                <span>Actualités</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isBlogOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                >
                  {blogCategories.map((category, index) => (
                    <a
                      key={index}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#prototypes" className="text-gray-700 hover:text-blue-600 font-medium">Solutions IA</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">À propos</a>
              <a href="#realisations" className="text-gray-700 hover:text-blue-600 font-medium">Réalisations</a>
              <a href="#prototypes" className="text-gray-700 hover:text-blue-600 font-medium">Prototypes</a>
              <a href="#actualites" className="text-gray-700 hover:text-blue-600 font-medium">Actualités</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;