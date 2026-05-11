// Two typographic hero variants for Three Dials.
// Each renders a full-width hero + credential strip preview, sized for a
// 1280×920 design-canvas artboard. Same palette + fonts as the live site,
// pushed bolder.

const TD_TOKENS = {
  cream: '#f2ede5',
  cream2: '#ebe5d7',
  navy: '#1a2332',
  amber: '#b8860b',
  amberStrong: '#a86f08',
  amberDark: '#d4a437',
  body: 'rgba(26, 35, 50, 0.82)',
  muted: 'rgba(26, 35, 50, 0.6)',
  rule: 'rgba(26, 35, 50, 0.16)',
  display: '"Playfair Display", Georgia, serif',
  sans: '"DM Sans", system-ui, sans-serif',
};

// ---------- shared ornaments ----------

function DialMark({ size = 28, color = '#1a2332' }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <circle cx="32" cy="32" r="26" fill="none" stroke={color} strokeWidth="5" />
      <circle cx="23" cy="23" r="5.5" fill={color} />
      <circle cx="39" cy="23" r="5.5" fill={color} />
      <circle cx="23" cy="39" r="5.5" fill={color} />
    </svg>
  );
}

function SiteHeader({ tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <header className={`td-header ${dark ? 'is-dark' : ''}`}>
      <a className="td-brand">
        <DialMark size={32} color={dark ? TD_TOKENS.amberDark : TD_TOKENS.navy} />
        <span>Three Dials</span>
      </a>
      <nav className="td-nav">
        <a>Diagnostic</a>
        <a>Implementation</a>
        <a>Advisory</a>
        <button className="td-bookbtn" type="button">Book a call</button>
      </nav>
    </header>
  );
}

// ============================================================
// VARIANT A — Editorial Stack
// The headline IS the graphic. Massive Playfair stack, mixed
// roman / italic, with a numbered framework as the supporting
// rhythm. Credential strip becomes a confident editorial line.
// ============================================================

function HeroVariantA() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`va ${loaded ? 'is-loaded' : ''}`}>
      <style>{`
        .va {
          width: 100%;
          min-height: 100%;
          background: ${TD_TOKENS.cream};
          color: ${TD_TOKENS.navy};
          font-family: ${TD_TOKENS.sans};
          font-feature-settings: "ss01","kern";
          --shell: 1080px;
        }
        .va .td-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px max(40px, calc((100% - var(--shell)) / 2));
          border-bottom: 1px solid ${TD_TOKENS.rule};
        }
        .va .td-brand {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: ${TD_TOKENS.display}; font-size: 21px; font-weight: 500;
          color: ${TD_TOKENS.navy};
        }
        .va .td-nav { display: flex; align-items: center; gap: 32px; }
        .va .td-nav a { font-size: 13px; color: ${TD_TOKENS.body}; }
        .va .td-bookbtn {
          height: 38px; padding: 0 16px;
          background: ${TD_TOKENS.navy}; color: ${TD_TOKENS.cream};
          border: 1px solid ${TD_TOKENS.navy};
          font-size: 12px; font-weight: 500; letter-spacing: 0.02em;
          cursor: pointer;
        }

        /* ---- hero ---- */
        .va-hero {
          width: var(--shell); margin: 0 auto;
          padding: 56px 0 28px;
          position: relative;
        }
        .va-eyebrow {
          display: flex; align-items: center; gap: 14px;
          margin: 0 0 36px;
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 15px; color: ${TD_TOKENS.amberStrong};
          letter-spacing: 0.005em;
        }
        .va-eyebrow::before {
          content: ""; width: 28px; height: 1px;
          background: ${TD_TOKENS.amberStrong};
        }

        .va-headline {
          margin: 0;
          font-family: ${TD_TOKENS.display};
          font-weight: 500;
          font-size: 116px;
          line-height: 0.95;
          letter-spacing: -0.025em;
          color: ${TD_TOKENS.navy};
        }
        .va-headline .line {
          display: block; overflow: hidden;
        }
        .va-headline .line > span {
          display: inline-block;
          transform: translateY(110%);
          transition: transform 900ms cubic-bezier(.2,.8,.2,1);
        }
        .va.is-loaded .va-headline .line > span { transform: translateY(0); }
        .va-headline .line:nth-child(2) > span { transition-delay: 80ms; }
        .va-headline .line:nth-child(3) > span { transition-delay: 160ms; }
        .va-headline em {
          font-style: italic; font-weight: 400;
          color: ${TD_TOKENS.amberStrong};
        }
        .va-headline .period { color: ${TD_TOKENS.amberStrong}; }

        .va-finds {
          margin: 22px 0 0;
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 400;
          font-size: 32px; line-height: 1.15;
          color: ${TD_TOKENS.navy};
          opacity: 0; transform: translateY(8px);
          transition: opacity 700ms ease 380ms, transform 700ms cubic-bezier(.2,.8,.2,1) 380ms;
          position: relative; display: inline-block;
        }
        .va-finds::after {
          content: ""; position: absolute; left: 0; right: 0;
          bottom: -6px; height: 2px;
          background: ${TD_TOKENS.amberDark};
          transform: scaleX(0); transform-origin: left;
          transition: transform 900ms cubic-bezier(.7,0,.3,1) 700ms;
        }
        .va.is-loaded .va-finds { opacity: 1; transform: translateY(0); }
        .va.is-loaded .va-finds::after { transform: scaleX(1); }

        /* ---- numbered framework + meta row ---- */
        .va-meta {
          display: grid;
          grid-template-columns: 1.3fr auto 1fr;
          gap: 56px;
          align-items: end;
          margin-top: 56px;
          padding-top: 28px;
          border-top: 1px solid ${TD_TOKENS.rule};
        }
        .va-frame {
          display: grid; grid-template-columns: repeat(3, auto);
          gap: 32px;
        }
        .va-frame > div {
          opacity: 0; transform: translateY(10px);
          transition: opacity 600ms ease, transform 600ms cubic-bezier(.2,.8,.2,1);
        }
        .va.is-loaded .va-frame > div:nth-child(1) { transition-delay: 900ms; opacity:1; transform: translateY(0); }
        .va.is-loaded .va-frame > div:nth-child(2) { transition-delay: 980ms; opacity:1; transform: translateY(0); }
        .va.is-loaded .va-frame > div:nth-child(3) { transition-delay: 1060ms; opacity:1; transform: translateY(0); }

        .va-frame .num {
          display: block;
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 14px;
          color: ${TD_TOKENS.amberStrong};
          margin-bottom: 6px;
        }
        .va-frame .verb {
          display: block;
          font-family: ${TD_TOKENS.sans};
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${TD_TOKENS.navy};
        }
        .va-frame .verb-of {
          display: block;
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 400;
          font-size: 13px;
          color: ${TD_TOKENS.muted};
          margin-top: 2px;
        }

        .va-divider {
          width: 1px; height: 64px;
          background: ${TD_TOKENS.rule};
        }

        .va-actions {
          display: flex; flex-direction: column; gap: 12px;
          align-items: flex-start;
        }
        .va-actions .btn {
          display: inline-flex; align-items: center; gap: 12px;
          height: 48px; padding: 0 22px;
          background: ${TD_TOKENS.navy}; color: ${TD_TOKENS.cream};
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          border: 1px solid ${TD_TOKENS.navy};
        }
        .va-actions .btn::after {
          content: "→"; font-family: ${TD_TOKENS.sans}; font-size: 14px;
          transform: translateX(0); transition: transform 220ms;
        }
        .va-actions .btn:hover::after { transform: translateX(4px); }
        .va-actions .quiet {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-size: 14px;
          color: ${TD_TOKENS.body};
          padding: 0 4px;
          border-bottom: 1px solid ${TD_TOKENS.amberStrong};
          background: transparent; cursor: pointer;
        }

        /* ---- credential strip (Variant A: editorial line) ---- */
        .va-credstrip {
          margin-top: 56px;
          background: ${TD_TOKENS.navy};
          color: ${TD_TOKENS.cream};
          padding: 28px 0;
          border-top: 4px solid ${TD_TOKENS.amberDark};
        }
        .va-credstrip .inner {
          width: var(--shell); margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 38px;
          align-items: center;
        }
        .va-credstrip .label {
          display: flex; flex-direction: column; gap: 4px;
          padding-right: 32px;
          border-right: 1px solid rgba(242,237,229,0.18);
        }
        .va-credstrip .label .small {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${TD_TOKENS.amberDark};
        }
        .va-credstrip .label .big {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 18px;
          color: ${TD_TOKENS.cream};
        }
        .va-credstrip .logos {
          display: flex; flex-wrap: wrap;
          gap: 6px 28px;
          font-family: ${TD_TOKENS.display};
          font-weight: 500;
          font-size: 18px;
          color: rgba(242,237,229,0.92);
        }
        .va-credstrip .logos span {
          position: relative;
        }
        .va-credstrip .logos span:not(:last-child)::after {
          content: ""; position: absolute; right: -16px; top: 50%;
          width: 4px; height: 4px; border-radius: 50%;
          background: ${TD_TOKENS.amberDark};
          transform: translateY(-50%);
        }
      `}</style>

      <SiteHeader tone="light" />

      <section className="va-hero">
        <p className="va-eyebrow">Find the story. Build the system. Improve the business.</p>

        <h1 className="va-headline">
          <span className="line"><span>The revenue is</span></span>
          <span className="line"><span><em>already</em> in your</span></span>
          <span className="line"><span>data<span className="period">.</span></span></span>
        </h1>

        <p className="va-finds">The diagnostic finds it.</p>

        <div className="va-meta">
          <div className="va-frame">
            <div>
              <span className="num">01</span>
              <span className="verb">Find</span>
              <span className="verb-of">the story</span>
            </div>
            <div>
              <span className="num">02</span>
              <span className="verb">Build</span>
              <span className="verb-of">the system</span>
            </div>
            <div>
              <span className="num">03</span>
              <span className="verb">Improve</span>
              <span className="verb-of">the business</span>
            </div>
          </div>
          <div className="va-divider"></div>
          <div className="va-actions">
            <button className="btn" type="button">See a sample diagnostic</button>
            <button className="quiet" type="button">Twenty minutes. No deck.</button>
          </div>
        </div>
      </section>

      <section className="va-credstrip">
        <div className="inner">
          <div className="label">
            <span className="small">Built inside</span>
            <span className="big">25 years of revenue rooms</span>
          </div>
          <div className="logos">
            <span>The Wall Street Journal</span>
            <span>MarketWatch</span>
            <span>Dow Jones</span>
            <span>Major League Soccer</span>
            <span>Sports Illustrated</span>
            <span>Target</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// VARIANT B — Three Frame
// Hero copy left, the framework as the right-side graphic
// rendered purely as typography: three big italic numerals
// stacked with verbs + descriptors. The "three dials" are
// literal columns of meaning. Subtle gold rules slide in.
// ============================================================

function HeroVariantB() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`vb ${loaded ? 'is-loaded' : ''}`}>
      <style>{`
        .vb {
          width: 100%;
          min-height: 100%;
          background: ${TD_TOKENS.cream};
          color: ${TD_TOKENS.navy};
          font-family: ${TD_TOKENS.sans};
          --shell: 1120px;
        }
        .vb .td-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px max(40px, calc((100% - var(--shell)) / 2));
          border-bottom: 1px solid ${TD_TOKENS.rule};
        }
        .vb .td-brand {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: ${TD_TOKENS.display}; font-size: 21px; font-weight: 500;
        }
        .vb .td-nav { display: flex; align-items: center; gap: 32px; }
        .vb .td-nav a { font-size: 13px; color: ${TD_TOKENS.body}; }
        .vb .td-bookbtn {
          height: 38px; padding: 0 16px;
          background: ${TD_TOKENS.navy}; color: ${TD_TOKENS.cream};
          border: 1px solid ${TD_TOKENS.navy};
          font-size: 12px; font-weight: 500; letter-spacing: 0.02em;
          cursor: pointer;
        }

        /* hero grid */
        .vb-hero {
          width: var(--shell); margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: 72px;
          padding: 72px 0 40px;
          align-items: start;
        }
        .vb-eyebrow {
          margin: 0 0 22px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: ${TD_TOKENS.amberStrong};
          opacity: 0; transform: translateY(6px);
          transition: opacity 600ms ease 100ms, transform 600ms ease 100ms;
        }
        .vb.is-loaded .vb-eyebrow { opacity: 1; transform: translateY(0); }
        .vb-eyebrow::before {
          content: ""; display: inline-block;
          width: 22px; height: 1px;
          background: ${TD_TOKENS.amberStrong};
          vertical-align: middle; margin-right: 12px;
          transform: translateY(-2px);
        }

        .vb-h1 {
          margin: 0 0 24px;
          font-family: ${TD_TOKENS.display};
          font-weight: 500;
          font-size: 72px;
          line-height: 1.0;
          letter-spacing: -0.018em;
          color: ${TD_TOKENS.navy};
        }
        .vb-h1 .l { display:block; overflow:hidden; }
        .vb-h1 .l > span {
          display:inline-block;
          transform: translateY(102%);
          transition: transform 850ms cubic-bezier(.2,.8,.2,1);
        }
        .vb.is-loaded .vb-h1 .l > span { transform: translateY(0); }
        .vb-h1 .l:nth-child(2) > span { transition-delay: 90ms; }
        .vb-h1 .l:nth-child(3) > span { transition-delay: 180ms; }
        .vb-h1 em {
          font-style: italic; font-weight: 400;
          color: ${TD_TOKENS.amberStrong};
        }

        .vb-sub {
          max-width: 460px;
          margin: 0 0 32px;
          font-size: 15px; line-height: 1.7;
          color: ${TD_TOKENS.body};
          opacity: 0; transform: translateY(6px);
          transition: opacity 700ms ease 540ms, transform 700ms ease 540ms;
        }
        .vb.is-loaded .vb-sub { opacity: 1; transform: translateY(0); }

        .vb-cta {
          display: flex; gap: 14px; align-items: center;
          opacity: 0; transform: translateY(6px);
          transition: opacity 700ms ease 660ms, transform 700ms ease 660ms;
        }
        .vb.is-loaded .vb-cta { opacity: 1; transform: translateY(0); }
        .vb-cta .primary {
          display: inline-flex; align-items: center; gap: 10px;
          height: 50px; padding: 0 22px;
          background: ${TD_TOKENS.navy}; color: ${TD_TOKENS.cream};
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer; border: 0;
        }
        .vb-cta .primary::after { content: "→"; }
        .vb-cta .quiet {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-size: 14px;
          color: ${TD_TOKENS.body};
          padding-bottom: 2px;
          border: 0; background: transparent; cursor: pointer;
          border-bottom: 1px solid ${TD_TOKENS.amberStrong};
        }

        /* RIGHT — three frame */
        .vb-frame {
          position: relative;
          padding: 8px 0 0;
          border-top: 1px solid ${TD_TOKENS.rule};
        }
        .vb-frame::before {
          content: "Three Dials";
          position: absolute;
          top: -10px; right: 0;
          padding: 0 8px;
          background: ${TD_TOKENS.cream};
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 13px; color: ${TD_TOKENS.amberStrong};
        }
        .vb-row {
          display: grid;
          grid-template-columns: 110px 1fr auto;
          align-items: end;
          gap: 24px;
          padding: 22px 0 18px;
          border-bottom: 1px solid ${TD_TOKENS.rule};
          position: relative;
        }
        .vb-row::after {
          content: ""; position: absolute;
          left: 0; bottom: -1px; height: 2px;
          background: ${TD_TOKENS.amberDark};
          width: 0;
          transition: width 1100ms cubic-bezier(.7,0,.3,1);
        }
        .vb-row:nth-child(1)::after { transition-delay: 800ms; }
        .vb-row:nth-child(2)::after { transition-delay: 950ms; }
        .vb-row:nth-child(3)::after { transition-delay: 1100ms; }
        .vb.is-loaded .vb-row::after { width: 100%; }

        .vb-row .n {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 92px; line-height: 0.85;
          color: ${TD_TOKENS.navy};
          letter-spacing: -0.02em;
          opacity: 0; transform: translateY(14px);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.8,.2,1);
        }
        .vb-row:nth-child(1) .n { transition-delay: 380ms; }
        .vb-row:nth-child(2) .n { transition-delay: 480ms; }
        .vb-row:nth-child(3) .n { transition-delay: 580ms; }
        .vb.is-loaded .vb-row .n { opacity: 1; transform: translateY(0); }

        .vb-row .body { display: flex; flex-direction: column; gap: 4px; padding-bottom: 14px; }
        .vb-row .body .verb {
          font-family: ${TD_TOKENS.display};
          font-weight: 500; font-size: 24px;
          color: ${TD_TOKENS.navy};
          line-height: 1.05;
        }
        .vb-row .body .of {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 400;
          font-size: 16px;
          color: ${TD_TOKENS.muted};
          line-height: 1.05;
        }
        .vb-row .meta {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: ${TD_TOKENS.amberStrong};
          padding-bottom: 18px;
          opacity: 0;
          transition: opacity 700ms ease;
        }
        .vb-row:nth-child(1) .meta { transition-delay: 1100ms; }
        .vb-row:nth-child(2) .meta { transition-delay: 1200ms; }
        .vb-row:nth-child(3) .meta { transition-delay: 1300ms; }
        .vb.is-loaded .vb-row .meta { opacity: 1; }

        /* credential strip (Variant B: marquee-rule) */
        .vb-credstrip {
          margin-top: 24px;
          background: ${TD_TOKENS.cream2};
          border-top: 1px solid ${TD_TOKENS.rule};
          border-bottom: 1px solid ${TD_TOKENS.rule};
          padding: 26px 0 24px;
        }
        .vb-credstrip .inner {
          width: var(--shell); margin: 0 auto;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 48px; align-items: center;
        }
        .vb-credstrip .label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: ${TD_TOKENS.amberStrong};
          line-height: 1.4;
        }
        .vb-credstrip .label .em {
          display: block; margin-top: 6px;
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 16px;
          letter-spacing: 0;
          text-transform: none;
          color: ${TD_TOKENS.navy};
        }
        .vb-credstrip .logos {
          display: flex; flex-wrap: wrap;
          gap: 10px 32px;
        }
        .vb-credstrip .logos span {
          font-family: ${TD_TOKENS.display};
          font-style: italic; font-weight: 500;
          font-size: 17px;
          color: ${TD_TOKENS.navy};
          position: relative;
        }
        .vb-credstrip .logos span:not(:last-child)::after {
          content: "·"; position: absolute; right: -20px; top: 50%;
          transform: translateY(-58%);
          color: ${TD_TOKENS.amberStrong};
          font-size: 22px; font-weight: 700;
        }
      `}</style>

      <SiteHeader tone="light" />

      <section className="vb-hero">
        <div>
          <p className="vb-eyebrow">Find the story · Build the system · Improve the business</p>
          <h1 className="vb-h1">
            <span className="l"><span>The revenue is</span></span>
            <span className="l"><span><em>already</em> in your data.</span></span>
            <span className="l"><span>The diagnostic finds it.</span></span>
          </h1>
          <p className="vb-sub">
            Three Dials helps founders, CEOs, and operators surface the revenue
            opportunity inside their data, cut the manual work, and build practical
            systems that make the business easier to run. Twenty-five years inside the
            rooms where getting it wrong wasn't an option.
          </p>
          <div className="vb-cta">
            <button className="primary" type="button">See a sample diagnostic</button>
            <button className="quiet" type="button">Twenty minutes. No deck.</button>
          </div>
        </div>

        <div className="vb-frame">
          <div className="vb-row">
            <span className="n">01</span>
            <span className="body">
              <span className="verb">Find</span>
              <span className="of">the story</span>
            </span>
            <span className="meta">Diagnostic</span>
          </div>
          <div className="vb-row">
            <span className="n">02</span>
            <span className="body">
              <span className="verb">Build</span>
              <span className="of">the system</span>
            </span>
            <span className="meta">Implementation</span>
          </div>
          <div className="vb-row">
            <span className="n">03</span>
            <span className="body">
              <span className="verb">Improve</span>
              <span className="of">the business</span>
            </span>
            <span className="meta">Advisory</span>
          </div>
        </div>
      </section>

      <section className="vb-credstrip">
        <div className="inner">
          <div className="label">
            Built inside the rooms where
            <span className="em">getting it wrong wasn't an option</span>
          </div>
          <div className="logos">
            <span>The Wall Street Journal</span>
            <span>MarketWatch</span>
            <span>Dow Jones</span>
            <span>MLS</span>
            <span>Sports Illustrated</span>
            <span>Target</span>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HeroVariantA, HeroVariantB });
