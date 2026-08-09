import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
  teamSize: string;
}

const COOKIE_KEY = 'q_signup';
const COOKIE_DAYS = 7;

function getCookieData(): Partial<FormData> {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
    if (!match) return {};
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return {};
  }
}

function setCookieData(data: Partial<FormData>) {
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_DAYS);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(data))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function clearCookie() {
  document.cookie = `${COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

type Step = 'name' | 'email' | 'company' | 'useCase' | 'teamSize' | 'done' | 'error';

const useCases = [
  'Internal employee training',
  'Partner / channel enablement',
  'Customer education',
  'Certification program',
  'Other',
];

const teamSizes = ['1–10', '11–50', '51–200', '201–1000', '1000+'];

export default function SignupForm() {
  const [step, setStep] = useState<Step>('name');
  const [form, setForm] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = getCookieData();
    if (saved && Object.keys(saved).length > 0) {
      setForm(saved);
      // Resume from where they left off
      if (!saved.name) setStep('name');
      else if (!saved.email) setStep('email');
      else if (!saved.company) setStep('company');
      else if (!saved.useCase) setStep('useCase');
      else if (!saved.teamSize) setStep('teamSize');
    }
  }, []);

  function save(update: Partial<FormData>) {
    const next = { ...form, ...update };
    setForm(next);
    setCookieData(next);
    return next;
  }

  async function submit(finalForm: FormData) {
    // STUB: the self-serve signup API is not built yet (app-side).
    // TODO: POST finalForm to the new HeaderPath provisioning API once it ships, then restore error handling.
    setLoading(true);
    void finalForm;
    clearCookie();
    setStep('done');
    setLoading(false);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'var(--color-bg-tertiary)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    color: 'var(--color-text-primary)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.15s',
  };

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    background: 'var(--color-accent)',
    color: 'white',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.15s',
    width: '100%',
  };

  const optionStyle = (selected: boolean): React.CSSProperties => ({
    display: 'block',
    width: '100%',
    padding: '14px 16px',
    background: selected ? 'var(--color-accent-subtle)' : 'var(--color-bg-tertiary)',
    border: `1px solid ${selected ? 'var(--color-accent)' : 'var(--color-border)'}`,
    borderRadius: '12px',
    color: selected ? 'var(--color-accent)' : 'var(--color-text-primary)',
    fontSize: '15px',
    textAlign: 'left' as const,
    cursor: 'pointer',
    transition: 'all 0.15s',
    marginBottom: '8px',
  });

  const wrapStyle: React.CSSProperties = {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '0 16px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '24px',
    fontWeight: 600,
    color: 'var(--color-text-primary)',
    marginBottom: '24px',
    lineHeight: '1.3',
  };

  if (step === 'done') {
    return (
      <div style={{ ...wrapStyle, textAlign: 'center', padding: '40px 16px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
          You're on the list
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
          Self-serve signup is opening soon — thanks for your interest.
        </p>
      </div>
    );
  }

  if (step === 'error') {
    return (
      <div style={{ ...wrapStyle, textAlign: 'center', padding: '40px 16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
          Something went wrong
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', marginBottom: '24px' }}>
          Please try again or email us directly.
        </p>
        <button style={{ ...btnStyle, width: 'auto' }} onClick={() => setStep('teamSize')}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div style={wrapStyle}>
      {step === 'name' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = fd.get('name') as string;
            if (!name.trim()) return;
            save({ name });
            setStep('email');
          }}
        >
          <label style={labelStyle}>What's your name?</label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            defaultValue={form.name ?? ''}
            autoFocus
            required
            style={inputStyle}
          />
          <button type="submit" style={{ ...btnStyle, marginTop: '16px' }}>
            Continue →
          </button>
        </form>
      )}

      {step === 'email' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const email = fd.get('email') as string;
            if (!email.trim()) return;
            save({ email });
            setStep('company');
          }}
        >
          <label style={labelStyle}>
            Hi {form.name?.split(' ')[0]}! What's your work email?
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            defaultValue={form.email ?? ''}
            autoFocus
            required
            style={inputStyle}
          />
          <button type="submit" style={{ ...btnStyle, marginTop: '16px' }}>
            Continue →
          </button>
        </form>
      )}

      {step === 'company' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const company = fd.get('company') as string;
            if (!company.trim()) return;
            save({ company });
            setStep('useCase');
          }}
        >
          <label style={labelStyle}>What company are you at?</label>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            defaultValue={form.company ?? ''}
            autoFocus
            required
            style={inputStyle}
          />
          <button type="submit" style={{ ...btnStyle, marginTop: '16px' }}>
            Continue →
          </button>
        </form>
      )}

      {step === 'useCase' && (
        <div>
          <label style={labelStyle}>What's your primary use case?</label>
          {useCases.map((uc) => (
            <button
              key={uc}
              onClick={() => {
                save({ useCase: uc });
                setStep('teamSize');
              }}
              style={optionStyle(form.useCase === uc)}
            >
              {uc}
            </button>
          ))}
        </div>
      )}

      {step === 'teamSize' && (
        <div>
          <label style={labelStyle}>How large is your team?</label>
          {teamSizes.map((ts) => (
            <button
              key={ts}
              onClick={async () => {
                const finalForm = save({ teamSize: ts }) as FormData;
                await submit(finalForm);
              }}
              style={optionStyle(form.teamSize === ts)}
              disabled={loading}
            >
              {ts} people
            </button>
          ))}
          {loading && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '12px' }}>
              Submitting...
            </p>
          )}
        </div>
      )}

      {/* Progress dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
        {(['name', 'email', 'company', 'useCase', 'teamSize'] as Step[]).map((s) => (
          <div
            key={s}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: s === step ? 'var(--color-accent)' : 'var(--color-border)',
              transition: 'background 0.15s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
