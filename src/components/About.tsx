import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Solutions IA de qualité supérieure avec les dernières technologies"
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Équipe multidisciplinaire d'experts en IA et data science"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Recherche constante d'innovations pour optimiser vos processus"
    },
    {
      icon: TrendingUp,
      title: "Résultats",
      description: "Focus sur la création de valeur mesurable pour votre entreprise"
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
                <span>À propos</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                IA-Consult, votre partenaire de confiance pour l'intelligence artificielle
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, nous accompagnons les entreprises et organisations dans leur transformation numérique 
                grâce à des solutions d'intelligence artificielle innovantes et sur mesure.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Notre équipe pluridisciplinaire combine expertise technique de pointe et compréhension approfondie 
                des enjeux métiers pour vous offrir des solutions IA qui génèrent une valeur réelle et mesurable.
              </p>
              <p className="text-gray-600">
                De l'audit initial à la mise en production, en passant par la formation de vos équipes, 
                nous vous accompagnons à chaque étape de votre parcours vers l'IA.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <span>Découvrir notre équipe</span>
              </a>
              <a 
                href="#realisations" 
                className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors font-medium"
              >
                <span>Voir nos réalisations</span>
              </a>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos valeurs</h3>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
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