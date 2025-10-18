import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">IA-Consult</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Conseil & Audit IA</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Développement sur mesure</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Accompagnement sectoriel</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Protection</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Formation IA</a></li>
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.sectors')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Finance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Juridique</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ressources Humaines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commerce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Industrie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.badge')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 514 244 5739</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@ia-consult.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  1882 Boulevard Bastien<br />
                  Quebec, Canada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              {t('footer.rights')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.legal')}</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.cookies')}</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.gdpr')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;