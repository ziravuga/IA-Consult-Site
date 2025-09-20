import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';

const BlogPost = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Navigation */}
        <div className="mb-8">
          <a 
            href="#actualites" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux actualités</span>
          </a>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Parcours professionnel
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>15 Janvier 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>12 min de lecture</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Équipe IA-Consult</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            L'architecte invisible : Mon odyssée numérique au service de la transparence
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ce récit retrace mon parcours, depuis les bancs de l'université jusqu'aux défis stimulants du monde professionnel, 
            en mettant en lumière ma passion pour les technologies de l'information et la gestion des données.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Transformation numérique et transparence"
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Il illustre comment des rencontres stratégiques avec des partenaires des secteurs public et privé ont façonné ma contribution 
              à la construction d'un système en ligne robuste pour les marchés publics, un projet ambitieux visant à promouvoir la transparence et l'efficacité.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Les fondations : Une soif insatiable de connaissance</h2>
            
            <p>
              Mon histoire commence avec une soif insatiable de connaissance. Après une licence en gestion des technologies de l'information au Rwanda, 
              j'ai poursuivi mes études à l'Université de Madras, où j'ai obtenu une maîtrise en technologies de l'information. Ces années d'apprentissage 
              ont jeté les bases de ma compréhension des systèmes complexes et de leur potentiel à transformer les organisations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Le tournant décisif : L'Office des Marchés Publics</h2>
            
            <p>
              Le véritable tournant de ma carrière s'est produit lorsque j'ai rejoint l'Office des Marchés Publics au Rwanda. En tant qu'administrateur 
              de bases de données, j'étais responsable de la gestion, de la sécurisation et de l'optimisation des systèmes critiques. C'était un rôle 
              exigeant, nécessitant une disponibilité 24/7 pour garantir le bon fonctionnement des opérations gouvernementales. Mais c'était aussi une 
              opportunité incroyable de mettre mes compétences au service de l'intérêt public.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Projet phare : Système en ligne des marchés publics</h3>
              <p className="text-blue-800">
                L'un des projets les plus stimulants auxquels j'ai participé a été la construction d'un système en ligne pour les marchés publics. 
                L'objectif était de créer une plateforme centralisée où les entreprises pourraient soumissionner pour des contrats gouvernementaux, 
                et où le public pourrait suivre le processus d'attribution.
              </p>
            </div>

            <p>
              Un tel système promettait de réduire la corruption, d'améliorer l'efficacité et de renforcer la confiance du public dans le gouvernement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Collaboration stratégique : Les rencontres qui ont tout changé</h2>
            
            <p>
              La réalisation de ce projet ambitieux a nécessité une collaboration étroite avec divers partenaires des secteurs public et privé. 
              Je me souviens notamment d'une rencontre cruciale avec des représentants d'une grande entreprise de logiciels. Nous avions besoin 
              de leur expertise pour développer une interface utilisateur intuitive et sécurisée.
            </p>

            <p>
              Après des semaines de négociations et de démonstrations techniques, nous avons réussi à obtenir leur engagement. Leur équipe a travaillé 
              sans relâche pour concevoir une plateforme qui répondait à nos besoins spécifiques, tout en respectant les normes internationales de 
              sécurité et de convivialité.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sécurité avant tout</h3>
            
            <p>
              Une autre rencontre déterminante a eu lieu avec des experts en cybersécurité d'une institution publique. La protection des données 
              sensibles était une priorité absolue, et nous avions besoin de leur expertise pour mettre en place des mesures de sécurité robustes. 
              Ils ont réalisé des tests d'intrusion, identifié les vulnérabilités potentielles et recommandé des solutions pour les corriger.
            </p>

            <p>
              Grâce à leur collaboration, nous avons pu créer un système résistant aux attaques informatiques et capable de protéger les informations 
              confidentielles des entreprises et des citoyens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Intégration et écosystème numérique</h2>
            
            <p>
              La construction du système en ligne des marchés publics a également nécessité une intégration avec d'autres systèmes gouvernementaux. 
              Nous avons travaillé en étroite collaboration avec les équipes responsables des finances publiques, de la planification et du développement 
              économique pour assurer une interopérabilité fluide. Cela a permis de créer un écosystème numérique cohérent, où les données pouvaient 
              être partagées et utilisées pour prendre des décisions éclairées.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Perfectionnement continu et nouvelles perspectives</h2>
            
            <p>
              Au fil des années, j'ai continué à me perfectionner en obtenant diverses certifications professionnelles, notamment en ingénierie des 
              données avec Google Cloud et Power BI, ainsi que dans l'utilisation d'outils comme Tableau et SPSS Modeler pour le forage et la 
              visualisation des données. Ces compétences m'ont permis d'analyser les données générées par le système des marchés publics, d'identifier 
              les tendances et les anomalies, et de formuler des recommandations pour améliorer son efficacité.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Nouveau chapitre au Québec</h3>
              <p className="text-emerald-800">
                Aujourd'hui, je suis installé au Québec, où je contribue en tant que support IT en ligne, un rôle qui contraste avec mes expériences 
                passées mais qui continue de nourrir ma passion pour la résolution de problèmes techniques complexes.
              </p>
            </div>

            <p>
              Chaque jour, je me lance dans de nouveaux défis, semblables à des aventures numériques, qui me permettent de renforcer mes compétences 
              et d'explorer de nouvelles facettes de la technologie. Mon parcours ne s'est pas limité à l'expérience pratique : j'ai récemment achevé 
              une maîtrise en gestion des technologies de l'information à l'Université Laval, un parcours marqué par l'excellence, symbole de ma 
              détermination à repousser mes limites et à atteindre l'excellence académique.
            </p>

            <p>
              Cette formation rigoureuse m'a permis d'acquérir une vision stratégique et une expertise approfondie, renforçant ainsi ma volonté de 
              contribuer activement à des projets innovants. Je suis profondément reconnaissant pour chaque opportunité qui m'a permis de travailler 
              sur des projets porteurs de sens, de faire la différence et de continuer à écrire une histoire professionnelle passionnante, tournée 
              vers l'avenir et l'amélioration de notre société.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusion : L'aventure continue</h2>
            
            <p>
              Mon parcours est une illustration de la puissance de la collaboration et de l'importance de l'innovation technologique pour résoudre 
              les problèmes du monde réel. Je suis convaincu que les technologies de l'information peuvent jouer un rôle clé dans la promotion de 
              la transparence, de l'efficacité et de la bonne gouvernance.
            </p>

            <p className="text-lg font-medium text-gray-900">
              Et je suis déterminé à continuer à utiliser mes compétences pour faire une différence positive dans le monde. L'aventure continue, 
              et je suis prêt à relever les défis qui se présenteront sur mon chemin.
            </p>
          </div>
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              <span>Transformation numérique</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              <span>Marchés publics</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              <span>Transparence</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              <span>Data Science</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" />
              <span>Cybersécurité</span>
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez un projet de transformation numérique ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner 
            dans votre parcours vers l'excellence technologique.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>Démarrer votre projet</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;