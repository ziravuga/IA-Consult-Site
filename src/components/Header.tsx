import React, { useState } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const services = [
    t('service.consulting.title'),
    t('service.development.title'),
    t('service.sectors.title'),
    t('service.security.title')
  ];

  const aiServices = [
    { name: 'Machine Learning', description: language === 'fr' ? 'Modèles prédictifs avancés' : 'Advanced predictive models' },
    { name: language === 'fr' ? 'Vision Artificielle' : 'Computer Vision', description: language === 'fr' ? 'Reconnaissance et analyse d\'images' : 'Image recognition and analysis' },
    { name: 'NLP & Chatbots', description: language === 'fr' ? 'Traitement du langage naturel' : 'Natural language processing' },
    { name: 'Data Science', description: language === 'fr' ? 'Analyse et visualisation de données' : 'Data analysis and visualization' },
    { name: language === 'fr' ? 'Automatisation RPA' : 'RPA Automation', description: language === 'fr' ? 'Robotisation des processus' : 'Process robotization' },
    { name: language === 'fr' ? 'IA Prédictive' : 'Predictive AI', description: language === 'fr' ? 'Prévisions et optimisation' : 'Forecasting and optimization' }
  ];

  const blogCategories = [
    { name: t('menu.allArticles'), href: '#actualites' },
    { name: t('menu.career'), href: '#blog/parcours' },
    { name: t('menu.aiTech'), href: '#actualites' },
    { name: t('menu.digitalTransform'), href: '#actualites' },
    { name: t('menu.datascience'), href: '#actualites' }
  ];

  const handleLinkClick = (href: string) => {
    window.location.hash = href;
    // Close all dropdowns
    setIsServicesOpen(false);
    setIsAIServicesOpen(false);
    setIsBlogOpen(false);
    setIsMenuOpen(false);
  };
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
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#accueil"
              onClick={() => handleLinkClick('#accueil')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsAIServicesOpen(false);
                  setIsBlogOpen(false);
                }}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <span>{t('nav.services')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      onClick={() => handleLinkClick('#services')}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
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
                onClick={() => {
                  setIsAIServicesOpen(!isAIServicesOpen);
                  setIsServicesOpen(false);
                  setIsBlogOpen(false);
                }}
                onMouseEnter={() => setIsAIServicesOpen(true)}
              >
                <span>{t('nav.aiSolutions')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isAIServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50"
                  onMouseEnter={() => setIsAIServicesOpen(true)}
                  onMouseLeave={() => setIsAIServicesOpen(false)}
                >
                  {aiServices.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      onClick={() => handleLinkClick('#services')}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors group cursor-pointer"
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
                      onClick={() => handleLinkClick('#prototypes')}
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      {t('menu.viewPrototypes')}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="#about"
              onClick={() => handleLinkClick('#about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('nav.about')}
            </a>
            <a
              href="#realisations"
              onClick={() => handleLinkClick('#realisations')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('nav.realisations')}
            </a>
            <a
              href="#prototypes"
              onClick={() => handleLinkClick('#prototypes')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('nav.prototypes')}
            </a>
            
            {/* Blog/Actualités Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => {
                  setIsBlogOpen(!isBlogOpen);
                  setIsServicesOpen(false);
                  setIsAIServicesOpen(false);
                }}
                onMouseEnter={() => setIsBlogOpen(true)}
              >
                <span>{t('nav.news')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isBlogOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                >
                  {blogCategories.map((category, index) => (
                    <a
                      key={index}
                      href={category.href}
                      onClick={() => handleLinkClick(category.href)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t('nav.contact')}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                  language === 'fr'
                    ? 'bg-blue-100 ring-2 ring-blue-500'
                    : 'hover:bg-gray-100'
                }`}
                title="Français"
              >
                <span className="text-lg">🇫🇷</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all font-semibold ${
                  language === 'en'
                    ? 'bg-blue-100 ring-2 ring-blue-500 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                title="English"
              >
                <span className="text-sm">EN</span>
              </button>
            </div>
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
              <a
                href="#accueil"
                onClick={() => handleLinkClick('#accueil')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.home')}
              </a>
              <a
                href="#services"
                onClick={() => handleLinkClick('#services')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.services')}
              </a>
              <a
                href="#prototypes"
                onClick={() => handleLinkClick('#prototypes')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.aiSolutions')}
              </a>
              <a
                href="#about"
                onClick={() => handleLinkClick('#about')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.about')}
              </a>
              <a
                href="#realisations"
                onClick={() => handleLinkClick('#realisations')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.realisations')}
              </a>
              <a
                href="#prototypes"
                onClick={() => handleLinkClick('#prototypes')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('nav.prototypes')}
              </a>

              {/* Mobile Blog Submenu */}
              <div className="pl-4 space-y-2">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t('nav.news')}</div>
                {blogCategories.map((category, index) => (
                  <a
                    key={index}
                    href={category.href}
                    onClick={() => handleLinkClick(category.href)}
                    className="block text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {category.name}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                {t('nav.contact')}
              </a>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                    language === 'fr'
                      ? 'bg-blue-100 ring-2 ring-blue-500'
                      : 'hover:bg-gray-100'
                  }`}
                  title="Français"
                >
                  <span className="text-xl">🇫🇷</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all font-semibold ${
                    language === 'en'
                      ? 'bg-blue-100 ring-2 ring-blue-500 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title="English"
                >
                  <span className="text-base">EN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;