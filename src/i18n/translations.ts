export type Locale = 'en' | 'es' | 'fr';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es', 'fr'];

export const translations = {
  en: {
    nav: {
      platform: 'Platform',
      solutions: 'Solutions',
      alternatives: 'Alternatives',
      pricing: 'Pricing',
      resources: 'Resources',
      blog: 'Blog',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      getStarted: 'Get started',
      viewAll: 'View all',
      backTo: 'Back to',
      lastUpdated: 'Last updated',
      skipToContent: 'Skip to content',
    },
    home: {
      heroTitle: 'Build your online academy',
      heroSubtitle: 'With the AI-native online learning platform',
      heroBadge: 'Supporting thousands of users',
      featuresLabel: 'PRODUCT',
      featuresTitle: 'Everything your academy needs',
      featuresSubtitle:
        'AI does the heavy lifting — from building courses to translating, certifying, and measuring. You stay in control.',
      howItWorksLabel: 'HOW IT WORKS',
      howItWorksTitle: 'From idea to live academy in minutes',
      journeyLabel: 'HOW IT WORKS',
      journeyTitle: 'From zero to live academy',
      journeySubtitle:
        'Five stages, one flow — set up, customize, create, invite, and measure. AI does the heavy lifting at every step; you stay in control.',
      testimonialsLabel: 'TESTIMONIALS',
      testimonialsTitle: 'Trusted across industries',
      integrationsLabel: 'INTEGRATIONS',
      integrationsTitle: 'Connects to the tools you already use',
      integrationsSubtitle:
        'Sync your CRM, SSO, analytics, and comms. Your stack stays intact — learners get one login.',
      faqLabel: 'FAQ',
      faqTitle: 'Frequently asked questions',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      faqLabel: 'PRODUCT FAQ',
      faqTitle: 'Questions about the platform',
    },
    pillars: {
      internal: {
        title: 'Internal education',
        description:
          'Build skills and knowledge across your team so they perform better and move faster.',
      },
      partner: {
        title: 'Partner education',
        description:
          'Onboard and enable your channel partners to generate more revenue with you, not less.',
      },
      customer: {
        title: 'Customer education',
        description:
          'Reduce support costs, increase retention, and accelerate adoption by helping customers get value faster.',
      },
      engagement: {
        title: 'Engagement-focused education',
        description:
          'Change perspectives, attract investment, or build market presence through programs that inform and inspire.',
      },
    },
    pricing: {
      title: 'Simple, transparent pricing',
      subtitle: 'Contact us to launch a new academy.',
      popular: 'Popular',
      free: {
        description: 'Try HeaderPath with a real academy.',
        features: [
          '1 course',
          '5 users',
          '2 admins',
          '2 groups',
          '1 video',
          'Certifications',
          '2 languages',
          'yourname.headerpath.app subdomain',
        ],
      },
      flat: {
        description: 'Everything unlimited — one flat monthly price.',
        features: [
          'Unlimited courses',
          'Unlimited users',
          'Unlimited admins',
          'Unlimited groups',
          'Unlimited videos',
          'Unlimited certifications',
          '80+ languages, auto-translated',
          'Custom domain & white-label',
          'AI course generation',
          'Integrations',
          'Analytics & reports',
          'Security & access controls',
        ],
      },
      fairUsage:
        'All "unlimited" usage is subject to our fair usage policy.',
    },
    contact: {
      title: 'Contact us',
      lead:
        "Questions about HeaderPath, a partnership, or your academy — write to us and we'll get back to you within two working days.",
      cta: 'Email us',
    },
    footer: {
      copyright: 'All rights reserved.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Insights on education, AI, and organizational learning.',
      readingTime: 'min read',
    },
    alternatives: {
      title: 'Alternatives',
      subtitle: 'How we compare to other learning platforms.',
    },
    techniques: {
      title: 'Learning Techniques',
      subtitle: 'Proven approaches to designing effective education programs.',
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'Connect your existing tools and workflows.',
    },
  },
  es: {
    nav: {
      platform: 'Plataforma',
      solutions: 'Soluciones',
      alternatives: 'Alternativas',
      pricing: 'Precios',
      resources: 'Recursos',
      blog: 'Blog',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    common: {
      readMore: 'Leer más',
      learnMore: 'Saber más',
      getStarted: 'Comenzar',
      viewAll: 'Ver todo',
      backTo: 'Volver a',
      lastUpdated: 'Última actualización',
      skipToContent: 'Ir al contenido',
    },
    home: {
      heroTitle: 'Educación que genera resultados reales',
      heroSubtitle:
        'Diseñamos, construimos y gestionamos programas de educación y formación personalizados para organizaciones que necesitan movilizar a las personas.',
      whatWeDoLabel: 'QUÉ HACEMOS',
      whatWeDoTitle: 'Tu socio educativo',
      whatWeDoSubtitle:
        'La mayoría de las organizaciones saben que necesitan educación para lograr el resultado esperado. Pocas tienen el equipo, el proceso o la plataforma para lograrlo correctamente.',
      howItWorksLabel: 'CÓMO FUNCIONA',
      howItWorksTitle: 'Del inicio a la publicación — en semanas, no meses',
      journeyLabel: 'HOW IT WORKS',
      journeyTitle: 'From zero to live academy',
      journeySubtitle:
        'Five stages, one flow — set up, customize, create, invite, and measure. AI does the heavy lifting at every step; you stay in control.',
      testimonialsLabel: 'TESTIMONIOS',
      testimonialsTitle: 'Confiado en múltiples industrias',
      faqLabel: 'FAQ',
      faqTitle: 'Preguntas frecuentes',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      faqLabel: 'PRODUCT FAQ',
      faqTitle: 'Questions about the platform',
    },
    pillars: {
      internal: {
        title: 'Educación interna',
        description:
          'Desarrolla habilidades y conocimiento en tu equipo para que rindan mejor y avancen más rápido.',
      },
      partner: {
        title: 'Educación para socios',
        description:
          'Incorpora y habilita a tus socios de canal para que generen más ingresos contigo.',
      },
      customer: {
        title: 'Educación para clientes',
        description:
          'Reduce costos de soporte, aumenta la retención y acelera la adopción ayudando a los clientes a obtener valor más rápido.',
      },
      engagement: {
        title: 'Educación orientada al compromiso',
        description:
          'Cambia perspectivas, atrae inversión o construye presencia de mercado con programas que informan e inspiran.',
      },
    },
    pricing: {
      title: 'Precios simples y transparentes',
      subtitle: 'Contáctanos para lanzar una nueva academia.',
      // No price literals in translations — the amount comes from
      // `brand.pricing` and is rendered on /pricing only.
      popular: 'Popular',
      free: {
        description: 'Prueba HeaderPath con una academia real.',
        features: [
          '1 curso',
          '5 usuarios',
          '2 administradores',
          '2 grupos',
          '1 vídeo',
          'Certificaciones',
          '2 idiomas',
          'Subdominio tunombre.headerpath.app',
        ],
      },
      flat: {
        description: 'Todo ilimitado — un único precio mensual.',
        features: [
          'Cursos ilimitados',
          'Usuarios ilimitados',
          'Administradores ilimitados',
          'Grupos ilimitados',
          'Vídeos ilimitados',
          'Certificaciones ilimitadas',
          'Más de 80 idiomas, traducción automática',
          'Dominio propio y marca blanca',
          'Generación de cursos con IA',
          'Integraciones',
          'Analíticas e informes',
          'Seguridad y control de acceso',
        ],
      },
      fairUsage:
        'Todo el uso "ilimitado" está sujeto a nuestra política de uso justo.',
    },
    contact: {
      title: 'Contáctanos',
      lead:
        'Preguntas sobre HeaderPath, una colaboración o tu academia — escríbenos y te responderemos en dos días hábiles.',
      cta: 'Escríbenos',
    },
    footer: {
      copyright: 'Todos los derechos reservados.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Perspectivas sobre educación, IA y aprendizaje organizacional.',
      readingTime: 'min de lectura',
    },
    alternatives: {
      title: 'Alternativas',
      subtitle: 'Cómo nos comparamos con otras plataformas de aprendizaje.',
    },
    techniques: {
      title: 'Técnicas de Aprendizaje',
      subtitle: 'Enfoques probados para diseñar programas educativos efectivos.',
    },
    integrations: {
      title: 'Integraciones',
      subtitle: 'Conecta tus herramientas y flujos de trabajo existentes.',
    },
  },
  fr: {
    nav: {
      platform: 'Plateforme',
      solutions: 'Solutions',
      alternatives: 'Alternatives',
      pricing: 'Tarifs',
      resources: 'Ressources',
      blog: 'Blog',
      contact: 'Contact',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    common: {
      readMore: 'Lire la suite',
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      viewAll: 'Voir tout',
      backTo: 'Retour à',
      lastUpdated: 'Dernière mise à jour',
      skipToContent: 'Aller au contenu',
    },
    home: {
      heroTitle: "Une éducation qui génère de vrais résultats",
      heroSubtitle:
        "Nous concevons, construisons et gérons des programmes de formation personnalisés pour les organisations qui ont besoin de faire agir leurs équipes.",
      whatWeDoLabel: 'CE QUE NOUS FAISONS',
      whatWeDoTitle: 'Votre partenaire éducatif',
      whatWeDoSubtitle:
        "La plupart des organisations savent qu'elles ont besoin de formation pour obtenir les résultats attendus. Peu ont l'équipe, le processus ou la plateforme pour y parvenir correctement.",
      howItWorksLabel: 'COMMENT ÇA MARCHE',
      howItWorksTitle: 'Du lancement au live — en semaines, pas en mois',
      journeyLabel: 'HOW IT WORKS',
      journeyTitle: 'From zero to live academy',
      journeySubtitle:
        'Five stages, one flow — set up, customize, create, invite, and measure. AI does the heavy lifting at every step; you stay in control.',
      testimonialsLabel: 'TÉMOIGNAGES',
      testimonialsTitle: 'Reconnu dans de nombreux secteurs',
      faqLabel: 'FAQ',
      faqTitle: 'Questions fréquentes',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      faqLabel: 'PRODUCT FAQ',
      faqTitle: 'Questions about the platform',
    },
    pillars: {
      internal: {
        title: 'Formation interne',
        description:
          "Développez les compétences et les connaissances de votre équipe pour qu'elle performe mieux et avance plus vite.",
      },
      partner: {
        title: 'Formation des partenaires',
        description:
          "Intégrez et habilitez vos partenaires de distribution pour qu'ils génèrent plus de revenus avec vous.",
      },
      customer: {
        title: 'Formation client',
        description:
          "Réduisez les coûts de support, augmentez la rétention et accélérez l'adoption en aidant les clients à créer de la valeur plus vite.",
      },
      engagement: {
        title: "Formation orientée engagement",
        description:
          "Changez les perspectives, attirez des investissements ou développez votre présence sur le marché grâce à des programmes qui informent et inspirent.",
      },
    },
    pricing: {
      title: 'Une tarification simple et transparente',
      subtitle: 'Contactez-nous pour lancer une nouvelle académie.',
      // No price literals in translations — the amount comes from
      // `brand.pricing` and is rendered on /pricing only.
      popular: 'Populaire',
      free: {
        description: 'Essayez HeaderPath avec une vraie académie.',
        features: [
          '1 cours',
          '5 utilisateurs',
          '2 administrateurs',
          '2 groupes',
          '1 vidéo',
          'Certifications',
          '2 langues',
          'Sous-domaine votrenom.headerpath.app',
        ],
      },
      flat: {
        description: 'Tout illimité — un seul prix mensuel.',
        features: [
          'Cours illimités',
          'Utilisateurs illimités',
          'Administrateurs illimités',
          'Groupes illimités',
          'Vidéos illimitées',
          'Certifications illimitées',
          'Plus de 80 langues, traduction automatique',
          'Domaine personnalisé et marque blanche',
          'Génération de cours par IA',
          'Intégrations',
          'Analyses et rapports',
          'Sécurité et contrôle des accès',
        ],
      },
      fairUsage:
        "Toute utilisation « illimitée » est soumise à notre politique d'usage raisonnable.",
    },
    contact: {
      title: 'Contactez-nous',
      lead:
        'Une question sur HeaderPath, un partenariat ou votre académie — écrivez-nous et nous vous répondrons sous deux jours ouvrés.',
      cta: 'Écrivez-nous',
    },
    footer: {
      copyright: 'Tous droits réservés.',
    },
    blog: {
      title: 'Blog',
      subtitle: "Perspectives sur l'éducation, l'IA et l'apprentissage organisationnel.",
      readingTime: 'min de lecture',
    },
    alternatives: {
      title: 'Alternatives',
      subtitle: "Comment nous nous comparons aux autres plateformes d'apprentissage.",
    },
    techniques: {
      title: "Techniques d'apprentissage",
      subtitle: "Des approches éprouvées pour concevoir des programmes éducatifs efficaces.",
    },
    integrations: {
      title: 'Intégrations',
      subtitle: 'Connectez vos outils et flux de travail existants.',
    },
  },
} as const;

export type Translations = typeof translations.en;

export function useTranslations(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocalePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
