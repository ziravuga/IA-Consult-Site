import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      titleKey: "value.excellence.title",
      descKey: "value.excellence.desc"
    },
    {
      icon: Users,
      titleKey: "value.expertise.title",
      descKey: "value.expertise.desc"
    },
    {
      icon: Globe,
      titleKey: "value.innovation.title",
      descKey: "value.innovation.desc"
    },
    {
      icon: TrendingUp,
      titleKey: "value.results.title",
      descKey: "value.results.desc"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                <span>{t('about.badge')}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.intro')}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                {t('about.text1')}
              </p>
              <p className="text-gray-600">
                {t('about.text2')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <span>{t('about.discoverTeam')}</span>
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors font-medium"
              >
                <span>{t('about.viewRealisations')}</span>
              </a>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('about.values')}</h3>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t(value.titleKey)}</h4>
                    <p className="text-gray-600 text-sm">{t(value.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;