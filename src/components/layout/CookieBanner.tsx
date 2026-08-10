import { useState, useEffect, useCallback } from 'react';

// Mirrors the product app's consent contract exactly (headerpath-app
// components/cookie-banner.tsx) so a visitor's choice means the same thing on
// both surfaces: a first-party `cookie_consent` cookie holding accepted/rejected.
const COOKIE_CONSENT_KEY = 'cookie_consent';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export type ConsentStatus = 'accepted' | 'rejected' | null;

function getConsentCookie(): ConsentStatus {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_CONSENT_KEY}=([^;]*)`));
  const value = match?.[1];
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

function setConsentCookie(value: 'accepted' | 'rejected') {
  document.cookie = `${COOKIE_CONSENT_KEY}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

interface Props {
  privacyUrl: string;
  message: string;
  learnMore: string;
  accept: string;
  optOut: string;
}

export default function CookieBanner({ privacyUrl, message, learnMore, accept, optOut }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsentCookie()) setVisible(true);

    function handleReopen(e: Event) {
      if ((e as CustomEvent).detail === null) setVisible(true);
    }

    window.addEventListener('cookie-consent-change', handleReopen);
    return () => window.removeEventListener('cookie-consent-change', handleReopen);
  }, []);

  const decide = useCallback((value: 'accepted' | 'rejected') => {
    setConsentCookie(value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }));
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="surface fixed bottom-4 left-4 z-50 w-[356px] max-w-[calc(100vw-2rem)] p-4"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs text-text-secondary">
          {message}{' '}
          <a href={privacyUrl} className="text-text-primary underline underline-offset-2">
            {learnMore}
          </a>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="rounded-full bg-action px-3 py-1.5 text-xs font-medium text-action-fg transition-colors hover:bg-action-hover"
          >
            {accept}
          </button>
          <button
            type="button"
            onClick={() => decide('rejected')}
            className="rounded-full px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            {optOut}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Clear consent and re-show the banner (for a future "Privacy settings" link). */
export function reopenCookieBanner() {
  document.cookie = `${COOKIE_CONSENT_KEY}=; path=/; max-age=0`;
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: null }));
}
