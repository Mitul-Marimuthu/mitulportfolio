import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { ThemeToggle } from "@/components/theme-toggle";
// dummy comment
// another dummy comment

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--gold)55%,transparent),transparent_60%),radial-gradient(circle_at_70%_20%,color-mix(in_srgb,var(--navy)45%,transparent),transparent_55%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_srgb,var(--background)92%,transparent))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-surface/70 px-3 py-2 shadow-sm transition hover:border-foreground/20"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fill-navy text-sm font-black text-white">
              M
            </span>
            <span className="pr-2 text-sm font-black tracking-tight text-foreground">
              Mitul Marimuthu
              <span className="mt-0.5 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                AI · Software Engineering
              </span>
            </span>
          </a>
 
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-gold px-4 py-2 text-sm font-black text-on-gold shadow-[0_16px_40px_rgba(255,184,28,0.25)] transition hover:brightness-110 sm:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl space-y-24 px-6 pb-24 pt-10 md:space-y-28 md:pb-32 md:pt-14">

        {/* ── Hero ── */}
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {/* Build agentic AI systems that feel{" "}
                <span className="relative">
                  inevitable
                  <span className="absolute -inset-x-1 -bottom-2 h-3 rounded-full bg-gold/35" />
                </span> */}
                Builder. Engineer. Problem Solver.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
                Hi! My name is Mitul and I'm a student and an aspiring Software Engineer based in the Bay Area.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-fill-navy px-6 py-3 text-sm font-black text-white shadow-[0_22px_60px_rgba(0,24,69,0.35)] transition hover:brightness-110"
              >
                See selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
              >
                Let&apos;s collaborate
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,color-mix(in_srgb,var(--gold)35%,transparent),transparent_40%,color-mix(in_srgb,var(--navy)28%,transparent),transparent_75%)] blur-2xl" />

            <div className="section-card relative overflow-hidden rounded-[2.5rem] p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <p className="text-xs font-semibold text-muted">Open to opportunities</p>
                </div>
                <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-black text-gold">
                  UCSB &apos;27
                </div>
              </div>

              <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-fill-navy/10">
                <Image
                  src="/images/mitulmarimuthu_headshot.jpg"
                  alt="Mitul Marimuthu"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Role", v: "AI + Software Engineer" },
                  { k: "Location", v: "San Jose, CA" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                  >
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-gold">
                      {item.k}
                    </p>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-2xl font-black uppercase tracking-[0.28em] text-gold">
                About
              </p>
              {/* <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Builder. Engineer. Problem Solver.
              </h2> */}
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
              UCSB Computer Science student shipping real impact across AI, web, and systems.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="section-card space-y-5 rounded-3xl p-7 md:p-8">
              <h3 className="text-lg font-black text-foreground">
                UCSB CS student, shipping measurable impact
              </h3>
              <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
                <p>
                  University of California, Santa Barbara — B.S. in Computer
                  Science (Grad: June 2027, GPA: 3.95/4.0).
                </p>
                <p>
                  Grad: June 2027
                </p>
                <p>
                  GPA: 3.95/4.0
                </p>
                <p>
                  Relevant coursework: Data Structures & Algorithms, Computer
                  Architecture, Operating Systems, Artificial Intelligence,
                  Cryptography, and more.
                </p>
                <p>
                  I focus on building agentic AI and data-driven web features end
                  to end - turning prototypes into shipped product work. My
                  approach is always outcome-first: faster onboarding, cheaper
                  retrieval, and fewer user friction points backed by real data.
                </p>
                <p>
                  In leadership roles, I build teams and learning paths: organizing
                  PokerBots with 250 participants, and directing teams through production
                  in a way that prioritizes learning and ownership. 
                </p>
                <p>
                  I am passionate about learning new technologies and understanding complex algorithms, 
                  and am currently spending my time immersed in machine learning, prompt engineering, and cloud engineering.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="section-card rounded-3xl p-7 md:p-8">
                <h3 className="text-lg font-black text-foreground">By the numbers</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { value: "3.95", label: "GPA at UCSB" },
                    { value: "5", label: "Engineering roles" },
                    { value: "4", label: "Full-Stack Projects" },
                    { value: "2027", label: "Expected graduation" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                    >
                      <p className="text-2xl font-black text-gold">{stat.value}</p>
                      <p className="mt-1 text-xs font-semibold text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <SkillsSection />
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-2xl font-black uppercase tracking-[0.28em] text-gold">
              Experience
            </p>
          </div>

          <ExperienceTimeline />
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-2xl font-black uppercase tracking-[0.28em] text-gold">
              Projects
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="NFLNews"
              description="Built a news aggregator web app for NFL fans using Python, HTML, and Flask. Implemented a chatbot to act as a personalized team analyst, delivering real-time insights and updates."
              tech={["Python", "Flask", "HTML", "CSS", "Gemini 2.0"]}
              imageSrc="/images/nflnews.JPEG"
              imageAlt="NFLNews screenshot"
              githubUrl="https://github.com/Mitul-Marimuthu/Niner-News-Frontend"
            />
            <ProjectCard
              title="SpotiGraph"
              description="Built a SQL-backed system for 1,000+ Spotify listening records. Optimized queries to reduce retrieval time by 30%, improving user satisfaction by 20%, and added instant timeframe toggles with instant UI updates."
              tech={["Python", "React", "Next.js", "SQL", "Flask"]}
              imageSrc="/images/spotigraph_ss.jpeg"
              imageAlt="SpotiGraph screenshot"
              githubUrl="https://github.com/Mitul-Marimuthu/Spotify-FrontEnd"
            />
            <ProjectCard
              title="Molecular Property Prediction Model"
              description="Implemented a graph neural network from scratch to predict molecular toxicity, combining cheminformatics (RDKit) with modern deep learning on graph-structured data."
              tech={["Python", "PyTorch", "Scikit-learn"]}
              imageSrc="/images/GNNs.jpeg"
              imageAlt="MPPM screenshot"
              githubUrl="https://github.com/Mitul-Marimuthu/deep-learning"
            />
            <ProjectCard
              title="Nuzzy"
              description="Engineered a full-stack web app that recieves .nds/.gba ROMs, extracts game data with Python scripts, and visualizes Pokemon teams. Implemented an Agent to research and create a competitive strategy guide for the next battle in the game."
              tech={["Python", "JavaScript", "Typescript", "React", "Groq", "Anthropic"]}
              imageSrc="/images/nuzzy_ss.png"
              imageAlt="Nuzzy screenshot"
              githubUrl="https://github.com/Mitul-Marimuthu/nuzlocke-calculator"
            />
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="scroll-mt-28 space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                Contact
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Let&apos;s build something sharp.
              </h2>
              <p className="text-sm leading-7 text-muted md:text-base">
                For collaborations, reach me at{" "}
                <a
                  className="font-semibold text-foreground underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                  href="mailto:mitul6m16@gmail.com"
                >
                  mitul6m16@gmail.com
                </a>{" "}
                or connect via LinkedIn/GitHub below.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-fill-navy px-6 py-3 text-sm font-black text-white shadow-[0_22px_60px_rgba(0,24,69,0.35)] transition hover:brightness-110"
                  href="mailto:mitul6m16@gmail.com"
                >
                  Email me
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://linkedin.com/in/mitul-marimuthu"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://github.com/Mitul-Marimuthu"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <footer className="border-t border-foreground/10 pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted">
              © 2026 Mitul Marimuthu
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com/in/mitul-marimuthu"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-muted transition hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Mitul-Marimuthu"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-muted transition hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-muted transition hover:text-foreground"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
