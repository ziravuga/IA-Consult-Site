import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translations = language === 'fr' ? translationsFr : translationsEn;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translationsFr: Record<string, string> = {
  'nav.home': 'Accueil',
  'nav.services': 'Services',
  'nav.aiSolutions': 'Solutions IA',
  'nav.about': 'À propos',
  'nav.realisations': 'Réalisations',
  'nav.prototypes': 'Prototypes',
  'nav.news': 'Actualités',
  'nav.contact': 'Contact',

  'hero.badge': 'Innovation IA',
  'hero.title': 'Transformez votre entreprise avec',
  'hero.titleHighlight': 'l\'Intelligence Artificielle',
  'hero.subtitle': 'IA-Consult accompagne votre transformation numérique avec des solutions IA sur mesure, du conseil stratégique au développement, en passant par l\'intégration sectorielle.',
  'hero.cta': 'Demander un devis',
  'hero.discover': 'Découvrir nos services',
  'hero.stats.projects': 'Projets réalisés',
  'hero.stats.clients': 'Clients satisfaits',
  'hero.stats.satisfaction': 'Taux de satisfaction',
  'hero.analysis': 'Analyse prédictive',
  'hero.mlModels': 'Modèles ML avancés',
  'hero.securedSolutions': 'Solutions sécurisées',
  'hero.uptime': 'Uptime',
  'hero.support': 'Support',

  'services.badge': 'Nos Services',
  'services.title': 'Solutions IA complètes pour votre transformation numérique',
  'services.subtitle': 'De la stratégie à l\'implémentation, nous accompagnons votre entreprise à chaque étape de son évolution vers l\'intelligence artificielle.',
  'services.learnMore': 'En savoir plus',

  'service.consulting.title': 'Conseil & Audit IA',
  'service.consulting.desc': 'Analyse de maturité numérique, diagnostic des opportunités et stratégie IA personnalisée pour votre entreprise.',
  'service.consulting.f1': 'Audit technologique',
  'service.consulting.f2': 'Stratégie IA',
  'service.consulting.f3': 'ROI Analysis',
  'service.consulting.f4': 'Roadmap personnalisée',

  'service.development.title': 'Développement sur mesure',
  'service.development.desc': 'Solutions IA personnalisées utilisant machine learning, vision artificielle et traitement du langage naturel.',
  'service.development.f1': 'Machine Learning',
  'service.development.f2': 'Deep Learning',
  'service.development.f3': 'Computer Vision',
  'service.development.f4': 'NLP',

  'service.sectors.title': 'Accompagnement sectoriel',
  'service.sectors.desc': 'Intégration IA spécialisée pour les secteurs finance, juridique, RH, commerce et audit.',
  'service.sectors.f1': 'Finance',
  'service.sectors.f2': 'Juridique',
  'service.sectors.f3': 'RH',
  'service.sectors.f4': 'Commerce',

  'service.security.title': 'Data Protection & Sécurité',
  'service.security.desc': 'Audit, protection et sécurisation des données pour la conformité RGPD et standards internationaux.',
  'service.security.f1': 'Conformité RGPD',
  'service.security.f2': 'Sécurité des données',
  'service.security.f3': 'Audit de conformité',
  'service.security.f4': 'Protection avancée',

  'service.chatbots.title': 'Chatbots & Automatisation',
  'service.chatbots.desc': 'Développement de chatbots intelligents et automatisation des processus métiers avec IA conversationnelle.',
  'service.chatbots.f1': 'IA conversationnelle',
  'service.chatbots.f2': 'RPA',
  'service.chatbots.f3': 'Automatisation',
  'service.chatbots.f4': 'Support client',

  'service.data.title': 'Data Science & Analytics',
  'service.data.desc': 'Analyse prédictive, modélisation de données et business intelligence pour optimiser vos décisions.',
  'service.data.f1': 'Analytics avancée',
  'service.data.f2': 'Prédictions',
  'service.data.f3': 'Modélisation',
  'service.data.f4': 'Visualisation',

  'about.badge': 'À propos',
  'about.title': 'IA-Consult, votre partenaire de confiance pour l\'intelligence artificielle',
  'about.intro': 'Depuis notre création, nous accompagnons les entreprises et organisations dans leur transformation numérique grâce à des solutions d\'intelligence artificielle innovantes et sur mesure.',
  'about.text1': 'Notre équipe pluridisciplinaire combine expertise technique de pointe et compréhension approfondie des enjeux métiers pour vous offrir des solutions IA qui génèrent une valeur réelle et mesurable.',
  'about.text2': 'De l\'audit initial à la mise en production, en passant par la formation de vos équipes, nous vous accompagnons à chaque étape de votre parcours vers l\'IA.',
  'about.discoverTeam': 'Découvrir notre équipe',
  'about.viewRealisations': 'Voir nos réalisations',
  'about.values': 'Nos valeurs',

  'value.excellence.title': 'Excellence',
  'value.excellence.desc': 'Solutions IA de qualité supérieure avec les dernières technologies',
  'value.expertise.title': 'Expertise',
  'value.expertise.desc': 'Équipe multidisciplinaire d\'experts en IA et data science',
  'value.innovation.title': 'Innovation',
  'value.innovation.desc': 'Recherche constante d\'innovations pour optimiser vos processus',
  'value.results.title': 'Résultats',
  'value.results.desc': 'Focus sur la création de valeur mesurable pour votre entreprise',

  'contact.badge': 'Contact',
  'contact.title': 'Prêt à transformer votre entreprise avec l\'IA ?',
  'contact.subtitle': 'Contactez nos experts pour discuter de votre projet et découvrir comment l\'intelligence artificielle peut révolutionner votre activité.',
  'contact.info': 'Informations de contact',
  'contact.phone': 'Téléphone',
  'contact.email': 'Email',
  'contact.address': 'Adresse',
  'contact.hours': 'Horaires d\'ouverture',
  'contact.monday': 'Lundi - Vendredi',
  'contact.saturday': 'Samedi',
  'contact.sunday': 'Dimanche',
  'contact.closed': 'Fermé',
  'contact.form.name': 'Nom complet',
  'contact.form.email': 'Email',
  'contact.form.company': 'Entreprise',
  'contact.form.subject': 'Sujet',
  'contact.form.message': 'Message',
  'contact.form.selectSubject': 'Sélectionnez un sujet',
  'contact.form.namePlaceholder': 'Votre nom',
  'contact.form.emailPlaceholder': 'votre.email@exemple.com',
  'contact.form.companyPlaceholder': 'Nom de votre entreprise',
  'contact.form.messagePlaceholder': 'Décrivez votre projet ou vos besoins en détail...',
  'contact.form.rgpd': 'J\'accepte que mes données soient utilisées dans le cadre de cette demande de contact, conformément à la',
  'contact.form.privacy': 'politique de confidentialité',
  'contact.form.send': 'Envoyer le message',

  'footer.tagline': 'Votre partenaire expert pour la transformation numérique par l\'intelligence artificielle. Solutions sur mesure, innovation et excellence.',
  'footer.services': 'Services',
  'footer.sectors': 'Secteurs',
  'footer.rights': '© 2025 IA-Consult. Tous droits réservés.',
  'footer.legal': 'Mentions légales',
  'footer.privacy': 'Politique de confidentialité',
  'footer.cookies': 'Cookies',
  'footer.gdpr': 'RGPD',

  'menu.allArticles': 'Tous les articles',
  'menu.career': 'Parcours professionnel',
  'menu.aiTech': 'Technologies IA',
  'menu.digitalTransform': 'Transformation digitale',
  'menu.datascience': 'Data Science',
  'menu.viewPrototypes': '→ Voir nos prototypes',
};

const translationsEn: Record<string, string> = {
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.aiSolutions': 'AI Solutions',
  'nav.about': 'About',
  'nav.realisations': 'Portfolio',
  'nav.prototypes': 'Prototypes',
  'nav.news': 'News',
  'nav.contact': 'Contact',

  'hero.badge': 'AI Innovation',
  'hero.title': 'Transform your business with',
  'hero.titleHighlight': 'Artificial Intelligence',
  'hero.subtitle': 'AI-Consult supports your digital transformation with custom AI solutions, from strategic consulting to development, including sector integration.',
  'hero.cta': 'Request a quote',
  'hero.discover': 'Discover our services',
  'hero.stats.projects': 'Completed projects',
  'hero.stats.clients': 'Satisfied clients',
  'hero.stats.satisfaction': 'Satisfaction rate',
  'hero.analysis': 'Predictive analysis',
  'hero.mlModels': 'Advanced ML models',
  'hero.securedSolutions': 'Secured solutions',
  'hero.uptime': 'Uptime',
  'hero.support': 'Support',

  'services.badge': 'Our Services',
  'services.title': 'Complete AI solutions for your digital transformation',
  'services.subtitle': 'From strategy to implementation, we support your company at every step of its evolution towards artificial intelligence.',
  'services.learnMore': 'Learn more',

  'service.consulting.title': 'Consulting & AI Audit',
  'service.consulting.desc': 'Digital maturity analysis, opportunity diagnosis and personalized AI strategy for your business.',
  'service.consulting.f1': 'Technology audit',
  'service.consulting.f2': 'AI strategy',
  'service.consulting.f3': 'ROI Analysis',
  'service.consulting.f4': 'Custom roadmap',

  'service.development.title': 'Custom Development',
  'service.development.desc': 'Personalized AI solutions using machine learning, computer vision and natural language processing.',
  'service.development.f1': 'Machine Learning',
  'service.development.f2': 'Deep Learning',
  'service.development.f3': 'Computer Vision',
  'service.development.f4': 'NLP',

  'service.sectors.title': 'Sector Support',
  'service.sectors.desc': 'Specialized AI integration for finance, legal, HR, retail and audit sectors.',
  'service.sectors.f1': 'Finance',
  'service.sectors.f2': 'Legal',
  'service.sectors.f3': 'HR',
  'service.sectors.f4': 'Retail',

  'service.security.title': 'Data Protection & Security',
  'service.security.desc': 'Data audit, protection and security for GDPR compliance and international standards.',
  'service.security.f1': 'GDPR compliance',
  'service.security.f2': 'Data security',
  'service.security.f3': 'Compliance audit',
  'service.security.f4': 'Advanced protection',

  'service.chatbots.title': 'Chatbots & Automation',
  'service.chatbots.desc': 'Development of intelligent chatbots and business process automation with conversational AI.',
  'service.chatbots.f1': 'Conversational AI',
  'service.chatbots.f2': 'RPA',
  'service.chatbots.f3': 'Automation',
  'service.chatbots.f4': 'Customer support',

  'service.data.title': 'Data Science & Analytics',
  'service.data.desc': 'Predictive analysis, data modeling and business intelligence to optimize your decisions.',
  'service.data.f1': 'Advanced analytics',
  'service.data.f2': 'Predictions',
  'service.data.f3': 'Modeling',
  'service.data.f4': 'Visualization',

  'about.badge': 'About',
  'about.title': 'AI-Consult, your trusted partner for artificial intelligence',
  'about.intro': 'Since our inception, we have been supporting companies and organizations in their digital transformation through innovative and custom artificial intelligence solutions.',
  'about.text1': 'Our multidisciplinary team combines cutting-edge technical expertise and deep understanding of business challenges to offer you AI solutions that generate real and measurable value.',
  'about.text2': 'From initial audit to production deployment, including training your teams, we support you at every step of your AI journey.',
  'about.discoverTeam': 'Discover our team',
  'about.viewRealisations': 'View our portfolio',
  'about.values': 'Our values',

  'value.excellence.title': 'Excellence',
  'value.excellence.desc': 'Premium quality AI solutions with the latest technologies',
  'value.expertise.title': 'Expertise',
  'value.expertise.desc': 'Multidisciplinary team of AI and data science experts',
  'value.innovation.title': 'Innovation',
  'value.innovation.desc': 'Constant search for innovations to optimize your processes',
  'value.results.title': 'Results',
  'value.results.desc': 'Focus on creating measurable value for your business',

  'contact.badge': 'Contact',
  'contact.title': 'Ready to transform your business with AI?',
  'contact.subtitle': 'Contact our experts to discuss your project and discover how artificial intelligence can revolutionize your business.',
  'contact.info': 'Contact information',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.address': 'Address',
  'contact.hours': 'Opening hours',
  'contact.monday': 'Monday - Friday',
  'contact.saturday': 'Saturday',
  'contact.sunday': 'Sunday',
  'contact.closed': 'Closed',
  'contact.form.name': 'Full name',
  'contact.form.email': 'Email',
  'contact.form.company': 'Company',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Message',
  'contact.form.selectSubject': 'Select a subject',
  'contact.form.namePlaceholder': 'Your name',
  'contact.form.emailPlaceholder': 'your.email@example.com',
  'contact.form.companyPlaceholder': 'Your company name',
  'contact.form.messagePlaceholder': 'Describe your project or needs in detail...',
  'contact.form.rgpd': 'I agree that my data will be used as part of this contact request, in accordance with the',
  'contact.form.privacy': 'privacy policy',
  'contact.form.send': 'Send message',

  'footer.tagline': 'Your expert partner for digital transformation through artificial intelligence. Custom solutions, innovation and excellence.',
  'footer.services': 'Services',
  'footer.sectors': 'Sectors',
  'footer.rights': '© 2025 AI-Consult. All rights reserved.',
  'footer.legal': 'Legal notice',
  'footer.privacy': 'Privacy policy',
  'footer.cookies': 'Cookies',
  'footer.gdpr': 'GDPR',

  'menu.allArticles': 'All articles',
  'menu.career': 'Career path',
  'menu.aiTech': 'AI Technologies',
  'menu.digitalTransform': 'Digital transformation',
  'menu.datascience': 'Data Science',
  'menu.viewPrototypes': '→ View our prototypes',
};
