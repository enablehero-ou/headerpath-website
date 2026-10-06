export const brand = {
  name: 'HeaderPath',
  tagline: 'The AI-native academy platform',
  description:
    'HeaderPath is the AI-native academy platform. Launch a branded learning academy, let AI build the courses, and publish — no instructional designers required.',
  domain: 'headerpath.com',
  websiteUrl: 'https://headerpath.com',
  // Backend/product app stays on qurioos infra until the app itself migrates.
  appUrl: 'https://app.qurioos.com',
  docsUrl: '/help',
  // Icon-only marks (256×256). `light` = cyan disc + ink H, for light surfaces.
  // `dark` = ink disc + cyan H, for dark surfaces.
  // Wordmarks (500×150) are the full lockup — icon + "HeaderPath" — for header/footer.
  // `wordmarkDark` is transparent (white type) and drops onto any dark surface —
  // prefer it. `wordmarkDarkSolid` bakes in its own ink background; use it only
  // where a self-contained tile is needed (email, third-party embeds).
  logo: {
    iconLight: '/images/brand/headerpath-icon-light.png',
    iconDark: '/images/brand/headerpath-icon-dark.png',
    wordmarkLight: '/images/brand/headerpath-wordmark-light.png',
    wordmarkDark: '/images/brand/headerpath-wordmark-dark.png',
    wordmarkDarkSolid: '/images/brand/headerpath-wordmark-dark-solid.png',
  },
  // The operating company behind HeaderPath — used in legal copy and the footer line.
  legalEntity: {
    name: 'Header Ventures Ltd',
    address: '71-75 Shelton Street, London, WC2H 9JQ, United Kingdom',
    country: 'United Kingdom',
  },
  email: {
    support: 'support@headerpath.com',
    team: 'team@headerpath.com',
    sales: 'sales@headerpath.com',
    partners: 'partners@headerpath.com',
  },
  social: {
    // TODO: rename the LinkedIn company page, then update this handle.
    linkedin: 'https://www.linkedin.com/company/headerpath/',
  },
  stats: [
    { value: '100+', label: 'Programs' },
    { value: '1M+', label: 'Learners' },
    { value: '35+', label: 'Industries' },
    { value: '2023', label: 'Founded' },
  ],
  pricing: {
    // Limits mirror the `free` row of the app's `plans` table.
    free: {
      name: 'Free',
      price: '$0',
      period: '/forever',
    },
    flat: {
      name: 'Unlimited',
      price: '$150',
      period: '/mo',
    },
  },
} as const;
