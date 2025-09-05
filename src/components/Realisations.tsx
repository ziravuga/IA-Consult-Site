import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Realisations = () => {
  const projects = [
    {
      title: "Chatbot IA pour Service Client",
      category: "IA Conversationnelle",
      description: "Développement d'un assistant virtuel intelligent pour une grande entreprise de télécommunications, réduisant les temps de réponse de 80%.",
      results: ["80% réduction temps de réponse", "95% satisfaction client", "60% réduction coûts support"],
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["NLP", "Machine Learning", "API"]
    },
    {
      title: "Système de Prédiction Financière",
      category: "Finance",
      description: "Solution d'analyse prédictive pour optimiser les investissements d'un fonds d'investissement, augmentant le ROI de 35%.",
      results: ["35% amélioration ROI", "90% précision prédictions", "Réduction risques 45%"],
      image: "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Data Science", "Prédiction", "Finance"]
    },
    {
      title: "Automatisation RH Intelligence",
      category: "Ressources Humaines",
      description: "Plateforme IA pour automatiser le screening de CV et l'analyse des candidatures, accélérant le processus de 70%.",
      results: ["70% temps économisé", "95% précision matching", "85% satisfaction RH"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["RPA", "NLP", "Automatisation"]
    },
    {
      title: "Vision Artificielle Industrielle",
      category: "Industrie",
      description: "Système de contrôle qualité par vision artificielle pour une chaîne de production, détectant 99.5% des défauts.",
      results: ["99.5% détection défauts", "50% réduction rebuts", "30% gain productivité"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Computer Vision", "IoT", "Industrie 4.0"]
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ExternalLink className="w-4 h-4" />
            <span>Réalisations</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos projets qui transforment les entreprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos solutions IA ont permis à nos clients d'optimiser leurs performances et d'innover dans leurs secteurs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Résultats</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuter de votre projet</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>Voir plus de projets</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Realisations;