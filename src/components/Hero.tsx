import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="accueil" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>{t('hero.badge')}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> {t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium group"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors font-medium"
              >
                <span>{t('hero.discover')}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">{t('hero.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-gray-600">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('hero.analysis')}</h3>
                    <p className="text-sm text-gray-600">{t('hero.mlModels')}</p>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{t('hero.securedSolutions')}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-600">{t('hero.uptime')}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-gray-600">{t('hero.support')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;