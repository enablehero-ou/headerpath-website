export const nav = {
  main: [
    { label: 'Product', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Help', href: '/help' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    product: {
      label: 'Product',
      links: [
        { label: 'Product', href: '/product' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Help', href: '/help' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    resources: {
      label: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Techniques', href: '/techniques' },
        { label: 'Alternatives', href: '/alternatives' },
        { label: 'Help', href: '/help' },
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
