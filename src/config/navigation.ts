export const nav = {
  main: [
    { label: 'Platform', href: '/platform' },
    {
      label: 'Solutions',
      children: [
        { label: 'AI Course Generator', href: '/ai-course-generator' },
        { label: 'AI Curriculum', href: '/ai-curriculum' },
        { label: 'Integrations', href: '/integrations' },
      ],
    },
    { label: 'Alternatives', href: '/alternatives' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/blog' },
  ],
  cta: { label: 'Book a call', href: '/schedule' },
  footer: {
    product: {
      label: 'Product',
      links: [
        { label: 'Platform', href: '/platform' },
        { label: 'Integrations', href: '/integrations' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Sign Up', href: '/signup' },
      ],
    },
    company: {
      label: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partner', href: '/partner' },
        { label: 'Schedule a call', href: '/schedule' },
      ],
    },
    resources: {
      label: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Techniques', href: '/techniques' },
        { label: 'Alternatives', href: '/alternatives' },
        { label: 'Help', href: 'https://help.qurioos.com' },
      ],
    },
    legal: {
      label: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Services Agreement', href: '/legal/services-agreement' },
        { label: 'End User Policy', href: '/legal/end-user-policy' },
      ],
    },
  },
} as const;
