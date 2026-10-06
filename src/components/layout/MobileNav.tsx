import { useState } from 'react';

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

interface Props {
  navItems: readonly NavItem[];
  openLabel: string;
  closeLabel: string;
}

export default function MobileNav({ navItems, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          color: 'var(--color-text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: '64px 0 0 0',
            background: 'var(--color-bg-primary)',
            borderTop: '1px solid var(--color-border)',
            zIndex: 40,
            overflowY: 'auto',
            padding: '1rem',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                {'children' in item && item.children ? (
                  <div>
                    <span
                      style={{
                        display: 'block',
                        padding: '10px 12px',
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {item.label}
                    </span>
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            onClick={() => setOpen(false)}
                            style={{
                              display: 'block',
                              padding: '10px 12px',
                              fontSize: '15px',
                              color: 'var(--color-text-secondary)',
                              textDecoration: 'none',
                              borderRadius: '8px',
                              transition: 'background 0.15s',
                            }}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px',
                      fontSize: '15px',
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'background 0.15s',
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
