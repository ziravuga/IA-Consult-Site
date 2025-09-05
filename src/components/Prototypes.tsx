import React, { useState } from 'react';
import { Play, Code, Eye, MessageSquare, BarChart3, Brain, ChevronRight, ExternalLink } from 'lucide-react';

const Prototypes = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const prototypes = [
    {
      id: 'chatbot',
      title: 'Assistant IA Conversationnel',
      category: 'NLP & Chatbots',
      description: 'Démonstration d\'un chatbot intelligent capable de comprendre et répondre aux questions complexes avec traitement du langage naturel avancé.',
      icon: MessageSquare,
      features: ['Compréhension contextuelle', 'Réponses personnalisées', 'Apprentissage continu', 'Multilingue'],
      tech: ['GPT-4', 'NLP', 'Machine Learning', 'API REST'],
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'vision',
      title: 'Système de Vision Artificielle',
      category: 'Computer Vision',
      description: 'Prototype de reconnaissance et analyse d\'images en temps réel pour le contrôle qualité industriel et la détection d\'anomalies.',
      icon: Eye,
      features: ['Détection en temps réel', 'Classification automatique', 'Analyse de qualité', 'Alertes intelligentes'],
      tech: ['OpenCV', 'TensorFlow', 'Python', 'Deep Learning'],
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'analytics',
      title: 'Plateforme d\'Analytics Prédictive',
      category: 'Data Science',
      description: 'Dashboard interactif d\'analyse prédictive pour optimiser les performances business et anticiper les tendances du marché.',
      icon: BarChart3,
      features: ['Prédictions avancées', 'Visualisations interactives', 'Alertes automatiques', 'Rapports personnalisés'],
      tech: ['Python', 'Pandas', 'Plotly', 'Scikit-learn'],
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'automation',
      title: 'Robot Process Automation',
      category: 'RPA & Automatisation',
      description: 'Solution d\'automatisation intelligente des processus répétitifs avec prise de décision basée sur l\'IA.',
      icon: Brain,
      features: ['Automatisation intelligente', 'Prise de décision IA', 'Intégration multi-systèmes', 'Monitoring avancé'],
      tech: ['UiPath', 'Python', 'AI Decision Engine', 'API Integration'],
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const demoSteps = [
    'Initialisation du modèle IA',
    'Traitement des données d\'entrée',
    'Analyse et prédiction',
    'Génération des résultats'
  ];

  return (
    <section id="prototypes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            <span>Prototypes & Démonstrations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Découvrez nos solutions IA en action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos prototypes interactifs et découvrez comment nos technologies d'intelligence artificielle 
            peuvent transformer vos processus métiers.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Demo Interface */}
            <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Démonstration Interactive</h3>
              <p className="text-blue-100 mb-6">
                Testez notre {prototypes[activeDemo].title} en temps réel
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Processus en cours...</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index <= activeDemo ? 'bg-green-400 text-green-900' : 'bg-white/20 text-white/60'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-sm ${index <= activeDemo ? 'text-white' : 'text-white/60'}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Lancer la démonstration</span>
              </button>
            </div>

            {/* Demo Controls */}
            <div className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Sélectionnez un prototype</h4>
              <div className="space-y-4">
                {prototypes.map((prototype, index) => {
                  const Icon = prototype.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        activeDemo === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activeDemo === index
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{prototype.title}</div>
                          <div className="text-sm text-gray-600">{prototype.category}</div>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          activeDemo === index ? 'rotate-90 text-blue-500' : 'text-gray-400'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Prototypes Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {prototypes.map((prototype, index) => {
            const Icon = prototype.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={prototype.image} 
                    alt={prototype.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {prototype.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prototype.title}</h3>
                  <p className="text-gray-600 mb-4">{prototype.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Fonctionnalités</h4>
                      <div className="flex flex-wrap gap-2">
                        {prototype.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {prototype.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Tester</span>
                    </button>
                    <a 
                      href="#contact"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors font-medium inline-flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demander une démo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par nos prototypes ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous pour une démonstration personnalisée ou pour discuter de l'adaptation 
              de ces solutions à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <span>Demander une démonstration</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors font-medium"
              >
                <span>Voir tous nos services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototypes;