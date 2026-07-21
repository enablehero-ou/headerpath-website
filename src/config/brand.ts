export const brand = {
  name: 'HeaderPath',
  tagline: 'The AI-native academy platform',
  description:
    'HeaderPath is the AI-native academy platform. Launch a branded learning academy, let AI build the courses, and publish — no instructional designers required.',
  domain: 'headerpath.com',
  websiteUrl: 'https://headerpath.com',
  // Backend/product app stays on qurioos infra until the app itself migrates (see notes/rebrand-transition.md).
  appUrl: 'https://app.qurioos.com',
  // Self-serve signup API not built yet — points at the local stub page.
  signupUrl: '/signup',
  docsUrl: '/help',
  email: {
    support: 'support@headerpath.com',
    sales: 'sales@headerpath.com',
    partners: 'partners@headerpath.com',
  },
  social: {
    // TODO: rename the LinkedIn company page, then update this handle.
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
      name: 'HeaderPath',
      price: '$150',
      period: '/mo',
    },
  },
} as const;
