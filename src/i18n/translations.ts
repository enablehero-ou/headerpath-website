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
      bookCall: 'Book a call',
      signUp: 'Sign up',
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
      heroTitle: 'Education that drives real outcomes',
      heroSubtitle:
        'Qurioos designs, builds, and runs custom education and training programs for organizations that need to move people to act.',
      heroCta: 'Book a call →',
      whatWeDoLabel: 'WHAT WE DO',
      whatWeDoTitle: 'Your education partner',
      whatWeDoSubtitle:
        'Most organizations know they need education to get the expected outcome. Few have the team, the process, or the platform to achieve that properly.',
      howItWorksLabel: 'HOW IT WORKS',
      howItWorksTitle: 'From kickoff to live — in weeks, not months',
      testimonialsLabel: 'TESTIMONIALS',
      testimonialsTitle: 'Trusted across industries',
      faqLabel: 'FAQ',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to build education that works?',
      ctaSubtitle: "Let's talk about your program, your audience, and what success looks like for you.",
      ctaButton: 'Book a call →',
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
      subtitle: 'Start immediately. Scale as you grow.',
      starter: {
        name: 'Starter',
        price: '$99',
        period: '/mo',
        description: 'Everything you need to launch your first academy.',
        cta: 'Get started',
      },
      custom: {
        name: 'Custom',
        price: 'Get pricing',
        description: 'For organizations with advanced needs and larger teams.',
        cta: 'Talk to us',
      },
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
      bookCall: 'Agendar llamada',
      signUp: 'Registrarse',
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
      heroCta: 'Agendar llamada →',
      whatWeDoLabel: 'QUÉ HACEMOS',
      whatWeDoTitle: 'Tu socio educativo',
      whatWeDoSubtitle:
        'La mayoría de las organizaciones saben que necesitan educación para lograr el resultado esperado. Pocas tienen el equipo, el proceso o la plataforma para lograrlo correctamente.',
      howItWorksLabel: 'CÓMO FUNCIONA',
      howItWorksTitle: 'Del inicio a la publicación — en semanas, no meses',
      testimonialsLabel: 'TESTIMONIOS',
      testimonialsTitle: 'Confiado en múltiples industrias',
      faqLabel: 'FAQ',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Listo para crear educación que funcione?',
      ctaSubtitle: 'Hablemos de tu programa, tu audiencia y cómo se ve el éxito para ti.',
      ctaButton: 'Agendar llamada →',
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
      subtitle: 'Comienza de inmediato. Escala a medida que creces.',
      starter: {
        name: 'Starter',
        price: '$99',
        period: '/mes',
        description: 'Todo lo que necesitas para lanzar tu primera academia.',
        cta: 'Comenzar',
      },
      custom: {
        name: 'Personalizado',
        price: 'Consultar precio',
        description: 'Para organizaciones con necesidades avanzadas y equipos más grandes.',
        cta: 'Contáctanos',
      },
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
      bookCall: 'Prendre rendez-vous',
      signUp: "S'inscrire",
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
      heroCta: 'Prendre rendez-vous →',
      whatWeDoLabel: 'CE QUE NOUS FAISONS',
      whatWeDoTitle: 'Votre partenaire éducatif',
      whatWeDoSubtitle:
        "La plupart des organisations savent qu'elles ont besoin de formation pour obtenir les résultats attendus. Peu ont l'équipe, le processus ou la plateforme pour y parvenir correctement.",
      howItWorksLabel: 'COMMENT ÇA MARCHE',
      howItWorksTitle: 'Du lancement au live — en semaines, pas en mois',
      testimonialsLabel: 'TÉMOIGNAGES',
      testimonialsTitle: 'Reconnu dans de nombreux secteurs',
      faqLabel: 'FAQ',
      faqTitle: 'Questions fréquentes',
      ctaTitle: 'Prêt à créer une éducation qui fonctionne ?',
      ctaSubtitle: "Parlons de votre programme, de votre audience et de ce à quoi ressemble le succès pour vous.",
      ctaButton: 'Prendre rendez-vous →',
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
      subtitle: 'Démarrez immédiatement. Évoluez à votre rythme.',
      starter: {
        name: 'Starter',
        price: '99 $',
        period: '/mois',
        description: 'Tout ce dont vous avez besoin pour lancer votre première académie.',
        cta: 'Commencer',
      },
      custom: {
        name: 'Personnalisé',
        price: 'Obtenir un devis',
        description: 'Pour les organisations aux besoins avancés et aux équipes plus grandes.',
        cta: 'Nous contacter',
      },
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
