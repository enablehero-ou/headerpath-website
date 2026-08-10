import { useState, useEffect } from 'react';

interface FormData {
  email: string;
  website: string;
  audience: string;
  sells: string;
  migrating: string;
  migratingFrom: string;
}

interface Strings {
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  websiteLabel: string;
  websitePlaceholder: string;
  continue: string;
  back: string;
  audienceTitle: string;
  audienceIndividual: string;
  audienceCompany: string;
  audienceOther: string;
  sellTitle: string;
  sellYes: string;
  sellNo: string;
  sellUnsure: string;
  migrateNote: string;
  migrateTitle: string;
  migrateYes: string;
  migrateNo: string;
  migrateWhichLabel: string;
  migrateWhichPlaceholder: string;
  doneTitle: string;
  doneBody: string;
  doneHint: string;
  legalPrefix: string;
  legalTerms: string;
  legalMiddle: string;
  legalPrivacy: string;
}

const COOKIE_KEY = 'hp_signup';
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
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(
    JSON.stringify(data)
  )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function clearCookie() {
  document.cookie = `${COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const STEPS = ['email', 'audience', 'sells', 'migrating'] as const;
type Step = (typeof STEPS)[number] | 'done';

export default function SignupForm({ s }: { s: Strings }) {
  const [step, setStep] = useState<Step>('email');
  const [form, setForm] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = getCookieData();
    if (saved && Object.keys(saved).length > 0) setForm(saved);
  }, []);

  function save(update: Partial<FormData>) {
    const next = { ...form, ...update };
    setForm(next);
    setCookieData(next);
    return next;
  }

  function goBack() {
    const i = STEPS.indexOf(step as (typeof STEPS)[number]);
    if (i > 0) setStep(STEPS[i - 1]);
  }

  async function submit(finalForm: Partial<FormData>) {
    // STUB: the self-serve signup API is not built yet (app-side).
    // TODO: POST finalForm to the HeaderPath provisioning API once it ships,
    // which is what actually sends the verification email promised below.
    setLoading(true);
    void finalForm;
    clearCookie();
    setStep('done');
    setLoading(false);
  }

  const stepIndex = step === 'done' ? STEPS.length : STEPS.indexOf(step);
  const progress = ((stepIndex + (step === 'done' ? 0 : 1)) / STEPS.length) * 100;

  const optionClass = (selected: boolean) =>
    [
      'rounded-xl border px-5 py-3 text-sm transition-colors cursor-pointer',
      selected
        ? 'border-action bg-accent/10 text-text-primary font-medium'
        : 'border-border bg-bg-card text-text-secondary hover:border-action hover:text-text-primary',
    ].join(' ');

  const headingClass = 'font-serif text-3xl text-text-primary lg:text-4xl';

  if (step === 'done') {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 7l9 6 9-6M3 7v10h18V7M3 7l9-4 9 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-fg"
            />
          </svg>
        </div>
        <h2 className={`${headingClass} mt-6`}>{s.doneTitle}</h2>
        <p className="mt-4 text-base text-text-secondary">{s.doneBody}</p>
        <p className="mt-6 text-sm text-text-muted">{s.doneHint}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar — sits directly under the sticky header, so it stays visible. */}
      <div className="h-1 w-full bg-border-subtle">
        <div
          className="h-full bg-action transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto max-w-lg px-4 py-20">
        {step === 'email' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = (fd.get('email') as string).trim();
              if (!email) return;
              save({ email, website: (fd.get('website') as string).trim() });
              setStep('audience');
            }}
          >
            <h1 className={`${headingClass} text-center`}>{s.title}</h1>
            <p className="mt-3 text-center text-base text-text-secondary">{s.subtitle}</p>
            <div className="mt-8 space-y-4 text-left">
              <label className="block">
                <span className="text-sm font-medium text-text-primary">{s.emailLabel}</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoFocus
                  defaultValue={form.email ?? ''}
                  placeholder={s.emailPlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none focus:border-action"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-text-primary">{s.websiteLabel}</span>
                <input
                  name="website"
                  type="text"
                  defaultValue={form.website ?? ''}
                  placeholder={s.websitePlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none focus:border-action"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-action px-7 py-3.5 text-base font-medium text-action-fg transition-colors hover:bg-action-hover"
            >
              {s.continue}
            </button>
          </form>
        )}

        {step === 'audience' && (
          <div className="text-center">
            <h1 className={headingClass}>{s.audienceTitle}</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                ['individual', s.audienceIndividual],
                ['company', s.audienceCompany],
                ['other', s.audienceOther],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    save({ audience: value });
                    setStep('sells');
                  }}
                  className={optionClass(form.audience === value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'sells' && (
          <div className="text-center">
            <h1 className={headingClass}>{s.sellTitle}</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                ['yes', s.sellYes],
                ['no', s.sellNo],
                ['unsure', s.sellUnsure],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    save({ sells: value });
                    setStep('migrating');
                  }}
                  className={optionClass(form.sells === value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'migrating' && (
          <div className="text-center">
            <p className="eyebrow eyebrow--accent">{s.migrateNote}</p>
            <h1 className={`${headingClass} mt-3`}>{s.migrateTitle}</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => save({ migrating: 'yes' })}
                className={optionClass(form.migrating === 'yes')}
              >
                {s.migrateYes}
              </button>
              <button
                type="button"
                onClick={async () => {
                  const next = save({ migrating: 'no', migratingFrom: '' });
                  await submit(next);
                }}
                className={optionClass(form.migrating === 'no')}
                disabled={loading}
              >
                {s.migrateNo}
              </button>
            </div>

            {form.migrating === 'yes' && (
              <form
                className="mt-8 text-left"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const migratingFrom = (fd.get('migratingFrom') as string).trim();
                  if (!migratingFrom) return;
                  const next = save({ migratingFrom });
                  await submit(next);
                }}
              >
                <label className="block">
                  <span className="text-sm font-medium text-text-primary">
                    {s.migrateWhichLabel}
                  </span>
                  <input
                    name="migratingFrom"
                    type="text"
                    required
                    autoFocus
                    defaultValue={form.migratingFrom ?? ''}
                    placeholder={s.migrateWhichPlaceholder}
                    className="mt-2 w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-base text-text-primary outline-none focus:border-action"
                  />
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-full bg-action px-7 py-3.5 text-base font-medium text-action-fg transition-colors hover:bg-action-hover disabled:opacity-60"
                >
                  {s.continue}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Legal line — same contract the product app signs people up under. */}
        <p className="mt-12 text-center text-xs text-text-muted">
          {s.legalPrefix}{' '}
          <a href="/legal/services-agreement" className="text-text-secondary underline underline-offset-2">
            {s.legalTerms}
          </a>{' '}
          {s.legalMiddle}{' '}
          <a href="/legal/privacy" className="text-text-secondary underline underline-offset-2">
            {s.legalPrivacy}
          </a>
          .
        </p>

        {stepIndex > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <span aria-hidden="true">←</span> {s.back}
          </button>
        )}
      </div>
    </div>
  );
}
