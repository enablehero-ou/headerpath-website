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
      heroTitle: 'Build your online academy',
      heroSubtitle: 'With the AI-native online learning platform',
      heroCta: 'Get started',
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
      ctaTitle: 'Start your academy today',
      ctaSubtitle: 'Create your account and launch your first academy in minutes.',
      ctaButton: 'Get started',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      heroCta: 'Get started',
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
      title: 'Simple, flat pricing',
      subtitle: 'One plan. Everything unlimited.',
      flat: {
        description: 'Everything unlimited — one flat monthly price.',
        cta: 'Get started',
      },
      fairUsage:
        'All "unlimited" usage is subject to our fair usage policy.',
    },
    footer: {
      copyright: 'All rights reserved.',
    },
    cookies: {
      message: 'We use cookies to collect data and improve our services.',
      learnMore: 'Learn more',
      accept: 'Accept',
      optOut: 'Opt out',
    },
    signup: {
      title: "Let's get you set up",
      subtitle: "A few quick questions and you'll be on your way.",
      emailLabel: 'Work email',
      emailPlaceholder: 'name@company.com',
      websiteLabel: 'Company website (optional)',
      websitePlaceholder: 'company.com',
      continue: 'Continue',
      back: 'Back',
      audienceTitle: 'Who do you teach?',
      audienceIndividual: 'Individual learners',
      audienceCompany: 'Company employees',
      audienceOther: 'Other',
      sellTitle: 'Do you sell your content?',
      sellYes: 'Yes',
      sellNo: 'No',
      sellUnsure: 'Not sure yet',
      migrateNote: 'We offer free migration support',
      migrateTitle: 'Are you migrating from another learning platform?',
      migrateYes: 'Yes',
      migrateNo: 'No',
      migrateWhichLabel: 'Which one?',
      migrateWhichPlaceholder: 'e.g. Thinkific, Docebo, TalentLMS',
      doneTitle: 'Verify your email!',
      doneBody:
        "We've sent you an email to verify your account. Click the link inside and your academy will be ready to set up.",
      doneHint: "Didn't get it? Check your spam folder, or write to us and we'll help.",
      legalPrefix: 'By signing up, you agree to our',
      legalTerms: 'Services Agreement',
      legalMiddle: 'and acknowledge our',
      legalPrivacy: 'Privacy Policy',
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
      journeyLabel: 'HOW IT WORKS',
      journeyTitle: 'From zero to live academy',
      journeySubtitle:
        'Five stages, one flow — set up, customize, create, invite, and measure. AI does the heavy lifting at every step; you stay in control.',
      testimonialsLabel: 'TESTIMONIOS',
      testimonialsTitle: 'Confiado en múltiples industrias',
      faqLabel: 'FAQ',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Listo para crear educación que funcione?',
      ctaSubtitle: 'Hablemos de tu programa, tu audiencia y cómo se ve el éxito para ti.',
      ctaButton: 'Agendar llamada →',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      heroCta: 'Get started',
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
      subtitle: 'Comienza de inmediato. Escala a medida que creces.',
      // No price literals in translations — the amount comes from
      // `brand.pricing` and is rendered on /pricing only.
      flat: {
        description: 'Todo ilimitado — un único precio mensual.',
        cta: 'Comenzar',
      },
      fairUsage:
        'Todo el uso "ilimitado" está sujeto a nuestra política de uso justo.',
    },
    footer: {
      copyright: 'Todos los derechos reservados.',
    },
    cookies: {
      message: 'Usamos cookies para recopilar datos y mejorar nuestros servicios.',
      learnMore: 'Más información',
      accept: 'Aceptar',
      optOut: 'Rechazar',
    },
    signup: {
      title: 'Vamos a configurar tu cuenta',
      subtitle: 'Unas preguntas rápidas y estarás listo.',
      emailLabel: 'Correo de trabajo',
      emailPlaceholder: 'nombre@empresa.com',
      websiteLabel: 'Sitio web de la empresa (opcional)',
      websitePlaceholder: 'empresa.com',
      continue: 'Continuar',
      back: 'Atrás',
      audienceTitle: '¿A quién enseñas?',
      audienceIndividual: 'Alumnos individuales',
      audienceCompany: 'Empleados de una empresa',
      audienceOther: 'Otro',
      sellTitle: '¿Vendes tu contenido?',
      sellYes: 'Sí',
      sellNo: 'No',
      sellUnsure: 'Aún no lo sé',
      migrateNote: 'Ofrecemos soporte de migración gratuito',
      migrateTitle: '¿Estás migrando desde otra plataforma de aprendizaje?',
      migrateYes: 'Sí',
      migrateNo: 'No',
      migrateWhichLabel: '¿Cuál?',
      migrateWhichPlaceholder: 'p. ej. Thinkific, Docebo, TalentLMS',
      doneTitle: '¡Verifica tu correo!',
      doneBody:
        'Te hemos enviado un correo para verificar tu cuenta. Haz clic en el enlace y tu academia estará lista para configurar.',
      doneHint: '¿No te ha llegado? Revisa la carpeta de spam o escríbenos y te ayudamos.',
      legalPrefix: 'Al registrarte, aceptas nuestro',
      legalTerms: 'Acuerdo de Servicios',
      legalMiddle: 'y reconoces nuestra',
      legalPrivacy: 'Política de Privacidad',
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
      journeyLabel: 'HOW IT WORKS',
      journeyTitle: 'From zero to live academy',
      journeySubtitle:
        'Five stages, one flow — set up, customize, create, invite, and measure. AI does the heavy lifting at every step; you stay in control.',
      testimonialsLabel: 'TÉMOIGNAGES',
      testimonialsTitle: 'Reconnu dans de nombreux secteurs',
      faqLabel: 'FAQ',
      faqTitle: 'Questions fréquentes',
      ctaTitle: 'Prêt à créer une éducation qui fonctionne ?',
      ctaSubtitle: "Parlons de votre programme, de votre audience et de ce à quoi ressemble le succès pour vous.",
      ctaButton: 'Prendre rendez-vous →',
    },
    product: {
      heroEyebrow: 'THE PRODUCT',
      heroTitle: 'Everything your academy needs, in one platform',
      heroSubtitle:
        'From building courses to translating, certifying, and measuring outcomes — AI does the heavy lifting while you stay in control.',
      heroCta: 'Get started',
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
      subtitle: 'Démarrez immédiatement. Évoluez à votre rythme.',
      // No price literals in translations — the amount comes from
      // `brand.pricing` and is rendered on /pricing only.
      flat: {
        description: 'Tout illimité — un seul prix mensuel.',
        cta: 'Commencer',
      },
      fairUsage:
        "Toute utilisation « illimitée » est soumise à notre politique d'usage raisonnable.",
    },
    footer: {
      copyright: 'Tous droits réservés.',
    },
    cookies: {
      message: 'Nous utilisons des cookies pour collecter des données et améliorer nos services.',
      learnMore: 'En savoir plus',
      accept: 'Accepter',
      optOut: 'Refuser',
    },
    signup: {
      title: 'Configurons votre compte',
      subtitle: 'Quelques questions rapides et vous êtes prêt.',
      emailLabel: 'E-mail professionnel',
      emailPlaceholder: 'nom@entreprise.com',
      websiteLabel: "Site web de l'entreprise (facultatif)",
      websitePlaceholder: 'entreprise.com',
      continue: 'Continuer',
      back: 'Retour',
      audienceTitle: 'Qui formez-vous ?',
      audienceIndividual: 'Apprenants individuels',
      audienceCompany: "Employés d'une entreprise",
      audienceOther: 'Autre',
      sellTitle: 'Vendez-vous votre contenu ?',
      sellYes: 'Oui',
      sellNo: 'Non',
      sellUnsure: 'Pas encore décidé',
      migrateNote: 'Nous offrons un accompagnement de migration gratuit',
      migrateTitle: "Migrez-vous depuis une autre plateforme d'apprentissage ?",
      migrateYes: 'Oui',
      migrateNo: 'Non',
      migrateWhichLabel: 'Laquelle ?',
      migrateWhichPlaceholder: 'ex. Thinkific, Docebo, TalentLMS',
      doneTitle: 'Vérifiez votre e-mail !',
      doneBody:
        "Nous vous avons envoyé un e-mail pour vérifier votre compte. Cliquez sur le lien et votre académie sera prête à configurer.",
      doneHint: "Rien reçu ? Vérifiez vos spams ou écrivez-nous et nous vous aiderons.",
      legalPrefix: 'En vous inscrivant, vous acceptez notre',
      legalTerms: 'Contrat de Services',
      legalMiddle: 'et reconnaissez notre',
      legalPrivacy: 'Politique de Confidentialité',
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
