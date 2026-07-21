import { useState } from 'react';

export interface Capability {
  label: string;
  sub: string;
  what: string;
  best: string;
  icon: string;
}

export interface StageData {
  number: string;
  title: string;
  tagline: string;
  blurb: string;
  caps: Capability[];
}

interface Props {
  stage: StageData;
}

function Glyph({ icon, className }: { icon: string; className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}

export default function JourneyStep({ stage }: Props) {
  const [active, setActive] = useState(0);
  const cap = stage.caps[active];

  return (
    <div>
      {/* Lead */}
      <p className="max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
        <strong className="font-semibold text-text-primary">{stage.tagline}</strong>{' '}
        {stage.blurb}
      </p>

      {/* Selector + detail */}
      <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,19rem)_1fr]">
        {/* Left: capability list */}
        <ul className="flex flex-col gap-2">
          {stage.caps.map((c, i) => {
            const on = i === active;
            return (
              <li key={c.label}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={[
                    'flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-colors',
                    on
                      ? 'bg-accent text-accent-fg shadow-soft'
                      : 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary',
                  ].join(' ')}
                >
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] font-semibold">{c.label}</span>
                    <span
                      className={[
                        'mt-0.5 block text-[0.8rem]',
                        on ? 'text-accent-fg/70' : 'text-text-muted',
                      ].join(' ')}
                    >
                      {c.sub}
                    </span>
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                    style={{ color: on ? 'var(--color-accent-fg)' : 'var(--color-text-muted)' }}
                  >
                    <path
                      d="M6 3.5l5 4.5-5 4.5"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: detail for the active capability */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-bg-secondary p-5 lg:p-6">
            <p className="text-[0.95rem] leading-relaxed text-text-secondary lg:text-base">
              <span className="font-semibold text-text-primary">What it does: </span>
              {cap.what}
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-text-secondary lg:text-base">
              <span className="font-semibold text-text-primary">Best for: </span>
              {cap.best}
            </p>
          </div>

          {/* Visual — iconographic placeholder (no product screenshots yet) */}
          <div className="grain relative flex min-h-[200px] flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-border-subtle bg-bg-tertiary p-6 text-center">
            <div className="atmosphere pointer-events-none absolute inset-0"></div>
            <div className="relative inline-flex rounded-2xl bg-accent/10 p-4 text-accent-fg ring-1 ring-accent/15">
              <Glyph icon={cap.icon} className="h-7 w-7" />
            </div>
            <p className="relative text-sm font-medium text-text-secondary">{cap.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
