export const brand = {
  name: 'Qurioos',
  tagline: 'AI-Native Education Platform',
  description:
    'Qurioos designs, builds, and runs custom education and training programs for organizations that need to move people to act.',
  domain: 'qurioos.com',
  websiteUrl: 'https://qurioos.com',
  appUrl: 'https://academy.qurioos.com',
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
    starter: {
      name: 'Starter',
      price: '$99',
      period: '/mo',
    },
    custom: {
      name: 'Custom',
      price: 'Get pricing',
    },
  },
} as const;
