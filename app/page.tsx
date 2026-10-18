import CallToRecord from "@/components/CallToRecord";
import Effects from "@/components/Effects";
import SplitText from "@/components/SplitText";
import { about, clients, experience, marquee, profile, stats, work } from "@/lib/content";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SectionHead({ num, title, hint }: { num: string; title: string; hint: string }) {
  return (
    <div className="section__head">
      <span className="section__num">{num}</span>
      <h2 className="section__title">
        <SplitText parts={[{ text: title }]} />
        <span className="slash">/</span>
      </h2>
      <span className="section__hint">{hint}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="backdrop" aria-hidden />
      <div className="progress" aria-hidden />
      <Effects />

      <header className="nav">
        <div className="wrap nav__inner">
          <a href="#top" className="brand" aria-label="Harsha Vardhan, back to top">
            <span className="dot" aria-hidden />
            <span className="!text-ink">
              harsha<span>.vardhan</span>
            </span>
          </a>
          <nav aria-label="Primary" className="nav__links hidden md:flex">
            <a href="#work">work</a>
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#contact">contact</a>
          </nav>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost !px-4 !py-2.5" data-magnetic>
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="hero">
          <div className="wrap">
            <div data-parallax="title">
              <span className="pill pill--live reveal is-in">
                <span className="dot" aria-hidden />
                Open to AI Engineer roles · Japan / India / remote
              </span>
              <SplitText
                as="h1"
                className="hero__title"
                label="I build voice agents and agentic systems for Japanese enterprises, shipped to production."
                parts={[
                  { text: "I build " },
                  { text: "voice agents", className: "c-teal" },
                  { text: " & " },
                  { text: "agentic systems", className: "c-lime" },
                  { text: " for " },
                  { text: "Japanese enterprises,", className: "c-amber" },
                  { text: " shipped to production.", className: "serif" },
                ]}
              />
            </div>
            <div className="hero__grid">
              <div>
                <p className="hero__sub" data-reveal>
                  AI Engineer at <b>I&rsquo;mbesideyou</b> (Tokyo). My agents phone employees and file their daily
                  reports for <b>DeCoA</b> and <b>Mitsubishi Motors</b>, and learn how back-office work gets done for{" "}
                  <b>NTT DATA</b> and <b>Toyota</b>, then automate it.
                </p>
                <div className="hero__meta" data-reveal>
                  <span className="pill">
                    <strong>¥23M+</strong> monthly revenue across my products
                  </span>
                  <span className="pill">ex-ZS Associates</span>
                  <span className="pill">IIT Bhubaneswar &rsquo;25</span>
                </div>
                <div className="hero__cta" data-reveal>
                  <a href="#work" className="btn btn--primary" data-magnetic>
                    See selected work <Arrow />
                  </a>
                  <a href={profile.resume} className="btn btn--ghost" data-magnetic>
                    Download resume
                  </a>
                </div>
              </div>
              <div data-parallax="card">
                <CallToRecord />
              </div>
            </div>
          </div>

          <div className="marquee" aria-label="Tools I work with">
            <div className="marquee__track">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={i} aria-hidden={i >= marquee.length}>
                  {m} <i>·</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- clients + numbers ---------------- */}
        <section className="section" aria-labelledby="clients-h">
          <div className="wrap">
            <p id="clients-h" className="mb-5 font-mono text-[13px] text-ink-mute">
              Built for teams at
            </p>
            <ul className="clients">
              {clients.map((c) => (
                <li key={c} data-reveal className="reveal">
                  {c}
                </li>
              ))}
            </ul>
            <div className="stats mt-14">
              {stats.map((s) => (
                <div key={s.label} className="stat reveal" data-reveal>
                  <div className="stat__num">
                    <em>{s.prefix}</em>
                    <span data-count={s.value}>0</span>
                    <em>{s.suffix}</em>
                  </div>
                  <p className="stat__label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- work ---------------- */}
        <section id="work" className="section">
          <div className="wrap">
            <SectionHead num="01" title="Selected work" hint="production, for real clients" />
            <div className="cards cards--2 !mt-0">
              {work.map((w, i) => (
                <article key={w.title} className="card reveal" data-reveal data-tilt>
                  <div className="work__head">
                    <span className="work__num">/{String(i + 1).padStart(2, "0")}</span>
                    <span>{w.status}</span>
                  </div>
                  <h3 className="work__title">{w.title}</h3>
                  <p className="work__clients">{w.clients}</p>
                  <p>{w.summary}</p>
                  <ul className="work__points">
                    {w.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {w.tags.map((t) => (
                      <span key={t.label} className={`tag ${t.tone ? `tag--${t.tone}` : ""}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- about ---------------- */}
        <section id="about" className="section">
          <div className="wrap">
            <SectionHead num="02" title="About" hint="who, what, how" />
            <p className="lead" data-reveal>
              {about.lead.map((l, i) => (l.mark ? <mark key={i}>{l.text}</mark> : <span key={i}>{l.text}</span>))}
            </p>
            <div className="cards cards--3">
              {about.cards.map((c) => (
                <div key={c.title} className="card reveal" data-reveal data-tilt>
                  <p className="card__kicker">{c.kicker}/</p>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- experience ---------------- */}
        <section id="experience" className="section">
          <div className="wrap">
            <SectionHead num="03" title="Experience" hint="2 companies, 1 IIT" />
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org} className="t-item reveal" data-reveal>
                  <span className="t-dot" aria-hidden />
                  <p className="t-when">
                    {e.when}
                    <span>{e.where}</span>
                  </p>
                  <div className="t-body">
                    <p className="t-org">{e.org}</p>
                    <p className="t-role">{e.role}</p>
                    <ul className="t-bullets">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className="section pb-24">
          <div className="wrap">
            <SectionHead num="04" title="Contact" hint="fastest: email" />
            <p className="c-big" data-reveal>
              Building agents that have to work in production? <span className="serif c-lime">Let&rsquo;s talk.</span>
            </p>
            <div>
              <button type="button" className="c-row" data-copy={profile.email}>
                <span className="c-row__label">Email</span>
                <span className="c-row__value">{profile.email}</span>
                <span className="c-row__action" data-copy-label>
                  Copy
                </span>
              </button>
              <a className="c-row" href={profile.linkedin} target="_blank" rel="noopener">
                <span className="c-row__label">LinkedIn</span>
                <span className="c-row__value">{profile.linkedinShort}</span>
                <span className="c-row__action">Open ↗</span>
              </a>
              <a className="c-row" href={profile.github} target="_blank" rel="noopener">
                <span className="c-row__label">GitHub</span>
                <span className="c-row__value">{profile.githubShort}</span>
                <span className="c-row__action">Open ↗</span>
              </a>
              <a className="c-row" href={profile.resume}>
                <span className="c-row__label">Resume</span>
                <span className="c-row__value">Harsha_Vardhan_Resume.pdf</span>
                <span className="c-row__action">Download</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="wrap flex flex-wrap justify-between gap-3 py-8 font-mono text-[12px] text-ink-mute">
          <span>© {new Date().getFullYear()} Harsha Vardhan</span>
          <span>Built with Next.js, GSAP and Lenis</span>
        </div>
      </footer>
    </>
  );
}
