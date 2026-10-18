import CallToRecord from "@/components/CallToRecord";
import { clients, education, experience, profile, stack, work } from "@/lib/content";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-rule py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <h2 id={`${id}-h`} className="text-2xl font-semibold tracking-tight text-ink lg:col-span-3">
          {title}
        </h2>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8">
      <nav aria-label="Primary" className="flex items-center justify-between py-6 text-sm">
        <a href="#top" className="font-semibold text-ink no-underline">
          Harsha Vardhan
        </a>
        <ul className="flex gap-5">
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main id="top">
        {/* Hero */}
        <header className="grid items-center gap-10 pb-16 pt-8 sm:pt-14 lg:grid-cols-12 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="text-muted">{profile.role}</p>
            <h1 className="mt-2 text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.035em] text-ink">
              Harsha Vardhan
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-body sm:text-xl">{profile.statement}</p>
            <p className="mt-4 max-w-[60ch] text-muted">{profile.current}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper no-underline hover:opacity-90"
              >
                Email me
              </a>
              <a
                href={profile.resume}
                className="rounded-full border border-rule px-5 py-2.5 text-sm font-semibold text-ink no-underline hover:border-ai"
              >
                Download resume
              </a>
              <a href={profile.linkedin} className="px-2 text-sm" rel="noopener" target="_blank">
                LinkedIn
              </a>
              <a href={profile.github} className="px-2 text-sm" rel="noopener" target="_blank">
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CallToRecord />
          </div>
        </header>

        {/* Clients */}
        <section aria-label="Clients" className="border-t border-rule py-8">
          <p className="text-sm text-muted">Built for teams at</p>
          <ul className="mt-3 flex flex-wrap gap-x-10 gap-y-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <Section id="work" title="Selected work">
          <ol className="divide-y divide-rule">
            {work.map((w) => (
              <li key={w.title} className="grid gap-4 py-8 first:pt-0 md:grid-cols-9">
                <div className="md:col-span-3">
                  <p className="font-semibold text-ink">{w.clients}</p>
                  <p className="mt-1 text-sm text-muted">{w.when}</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{w.title}</h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed">{w.summary}</p>
                  <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed">
                    {w.points.map((p) => (
                      <li key={p} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-ai">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted">{w.stack.join(", ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="stack" title="Tools I reach for">
          <dl className="grid gap-6 sm:grid-cols-2">
            {stack.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold text-ink">{s.group}</dt>
                <dd className="mt-1 leading-relaxed">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8">
            {experience.map((e) => (
              <li key={e.org} className="grid gap-2 sm:grid-cols-9">
                <p className="text-sm text-muted sm:col-span-2 sm:pt-1">{e.when}</p>
                <div className="sm:col-span-7">
                  <p className="text-lg font-semibold text-ink">
                    {e.role}, {e.org}
                  </p>
                  <p className="text-sm text-muted">{e.where}</p>
                  <p className="mt-2 leading-relaxed">{e.note}</p>
                </div>
              </li>
            ))}
            <li className="grid gap-2 sm:grid-cols-9">
              <p className="text-sm text-muted sm:col-span-2 sm:pt-1">{education.when}</p>
              <div className="sm:col-span-7">
                <p className="text-lg font-semibold text-ink">{education.school}</p>
                <p className="text-sm text-muted">{education.degree}</p>
                <ul className="mt-2 space-y-1 leading-relaxed">
                  {education.honors.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ol>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-[52ch] text-lg leading-relaxed">
            I&rsquo;m open to AI Engineer, Applied AI and Forward-Deployed Engineer roles building agentic and LLM
            systems. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block break-all text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight text-ink"
          >
            {profile.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-6">
            <li><a href={profile.linkedin} rel="noopener" target="_blank">LinkedIn</a></li>
            <li><a href={profile.github} rel="noopener" target="_blank">GitHub</a></li>
            <li><a href={profile.resume}>Resume (PDF)</a></li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-rule py-8 text-sm text-muted">
        © {new Date().getFullYear()} Harsha Vardhan
      </footer>
    </div>
  );
}
