import React from 'react';
import { Brain, Cog, Users, Shield, BarChart3, MessageSquare, Eye, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Conseil & Audit IA",
      description: "Analyse de maturité numérique, diagnostic des opportunités et stratégie IA personnalisée pour votre entreprise.",
      features: ["Audit technologique", "Stratégie IA", "ROI Analysis", "Roadmap personnalisée"]
    },
    {
      icon: Cog,
      title: "Développement sur mesure",
      description: "Solutions IA personnalisées utilisant machine learning, vision artificielle et traitement du langage naturel.",
      features: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      icon: Users,
      title: "Accompagnement sectoriel",
      description: "Intégration IA spécialisée pour les secteurs finance, juridique, RH, commerce et audit.",
      features: ["Finance", "Juridique", "RH", "Commerce"]
    },
    {
      icon: Shield,
      title: "Data Protection & Sécurité",
      description: "Audit, protection et sécurisation des données pour la conformité RGPD et standards internationaux.",
      features: ["Conformité RGPD", "Sécurité des données", "Audit de conformité", "Protection avancée"]
    },
    {
      icon: MessageSquare,
      title: "Chatbots & Automatisation",
      description: "Développement de chatbots intelligents et automatisation des processus métiers avec IA conversationnelle.",
      features: ["IA conversationnelle", "RPA", "Automatisation", "Support client"]
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Analyse prédictive, modélisation de données et business intelligence pour optimiser vos décisions.",
      features: ["Analytics avancée", "Prédictions", "Modélisation", "Visualisation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Nos Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solutions IA complètes pour votre transformation numérique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la stratégie à l'implémentation, nous accompagnons votre entreprise à chaque étape de son évolution vers l'intelligence artificielle.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a 
                    href="#contact" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>En savoir plus</span>
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