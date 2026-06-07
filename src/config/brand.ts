export const brand = {
  name: 'Qurioos',
  tagline: 'The AI-native academy platform',
  description:
    'Qurioos is the AI-native academy platform. Launch a branded learning academy, let AI build the courses, and publish — no instructional designers required.',
  domain: 'qurioos.com',
  websiteUrl: 'https://qurioos.com',
  appUrl: 'https://app.qurioos.com',
  signupUrl: 'https://app.qurioos.com/signup',
  docsUrl: 'https://help.qurioos.com',
  email: {
    support: 'support@qurioos.com',
    sales: 'sales@qurioos.com',
    partners: 'partners@qurioos.com',
  },
  social: {
    linkedin: 'https://linkedin.com/company/qurioos',
  },
  stats: [
    { value: '100+', label: 'Programs' },
    { value: '1M+', label: 'Learners' },
    { value: '35+', label: 'Industries' },
    { value: '2023', label: 'Founded' },
  ],
  pricing: {
    flat: {
      name: 'Qurioos',
      price: '$150',
      period: '/mo',
    },
  },
} as const;
