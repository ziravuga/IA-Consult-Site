import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "L'avenir de l'IA dans la transformation digitale des entreprises",
      excerpt: "Découvrez comment l'intelligence artificielle révolutionne les processus métiers et crée de nouvelles opportunités de croissance pour les entreprises de toutes tailles.",
      author: "Dr. Marie Dubois",
      date: "15 Janvier 2025",
      readTime: "5 min",
      category: "Stratégie IA",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["IA", "Transformation", "Business"]
    },
    {
      title: "Machine Learning : Guide pratique pour les dirigeants",
      excerpt: "Un guide complet pour comprendre les enjeux du machine learning et identifier les opportunités d'implémentation dans votre organisation.",
      author: "Jean-Pierre Martin",
      date: "12 Janvier 2025",
      readTime: "8 min",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["ML", "Leadership", "Innovation"]
    },
    {
      title: "RGPD et IA : Conformité et protection des données",
      excerpt: "Les meilleures pratiques pour assurer la conformité RGPD lors de l'implémentation de solutions d'intelligence artificielle en entreprise.",
      author: "Sophie Leroy",
      date: "10 Janvier 2025",
      readTime: "6 min",
      category: "Conformité",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["RGPD", "Sécurité", "Conformité"]
    },
    {
      title: "Chatbots intelligents : ROI et cas d'usage",
      excerpt: "Analyse détaillée du retour sur investissement des chatbots IA et présentation de cas d'usage concrets dans différents secteurs d'activité.",
      author: "Thomas Rousseau",
      date: "8 Janvier 2025",
      readTime: "7 min",
      category: "Chatbots",
      image: "https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Chatbots", "ROI", "Automatisation"]
    }
  ];

  const categories = [
    "Tous les articles",
    "Stratégie IA",
    "Machine Learning",
    "Conformité",
    "Chatbots",
    "Data Science"
  ];

  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Blog & Actualités</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Insights et tendances de l'intelligence artificielle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières innovations, bonnes pratiques et analyses d'experts 
            dans le domaine de l'intelligence artificielle et de la transformation numérique.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Tag className="w-3 h-3" />
                <span>Parcours professionnel</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                L'architecte invisible : Mon odyssée numérique au service de la transparence
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ce récit retrace mon parcours, depuis les bancs de l'université jusqu'aux défis stimulants du monde professionnel, en mettant en lumière ma passion pour les technologies de l'information et la gestion des données.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Équipe IA-Consult</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">15 Janvier 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">12 min</span>
                </div>
              </div>
              <a 
                href="#blog/parcours" 
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <span>Lire l'article</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="h-64 lg:h-full">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="L'architecte invisible : Mon odyssée numérique au service de la transparence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {articles.slice(1).map((article, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <span>{article.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Restez informé des dernières innovations IA
            </h3>
            <p className="text-gray-600 mb-6">
              Recevez notre newsletter mensuelle avec les derniers articles, études de cas et tendances 
              du secteur de l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Pas de spam, désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;