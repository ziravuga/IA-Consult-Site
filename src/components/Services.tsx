import React from 'react';
import { Brain, Cog, Users, Shield, BarChart3, MessageSquare, Eye, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      titleKey: "service.consulting.title",
      descKey: "service.consulting.desc",
      featureKeys: ["service.consulting.f1", "service.consulting.f2", "service.consulting.f3", "service.consulting.f4"]
    },
    {
      icon: Cog,
      titleKey: "service.development.title",
      descKey: "service.development.desc",
      featureKeys: ["service.development.f1", "service.development.f2", "service.development.f3", "service.development.f4"]
    },
    {
      icon: Users,
      titleKey: "service.sectors.title",
      descKey: "service.sectors.desc",
      featureKeys: ["service.sectors.f1", "service.sectors.f2", "service.sectors.f3", "service.sectors.f4"]
    },
    {
      icon: Shield,
      titleKey: "service.security.title",
      descKey: "service.security.desc",
      featureKeys: ["service.security.f1", "service.security.f2", "service.security.f3", "service.security.f4"]
    },
    {
      icon: MessageSquare,
      titleKey: "service.chatbots.title",
      descKey: "service.chatbots.desc",
      featureKeys: ["service.chatbots.f1", "service.chatbots.f2", "service.chatbots.f3", "service.chatbots.f4"]
    },
    {
      icon: BarChart3,
      titleKey: "service.data.title",
      descKey: "service.data.desc",
      featureKeys: ["service.data.f1", "service.data.f2", "service.data.f3", "service.data.f4"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
                </div>

                <div className="space-y-2">
                  {service.featureKeys.map((featureKey, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{t(featureKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a 
                    href="#contact"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t('services.learnMore')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;