import Image from "next/image";

type Job = {
  role: string;
  company: string;
  meta: string;
  logoSrc: string;
  logoAlt: string;
  bullets: string[];
  group: "work" | "leadership";
};

const experiences: Job[] = [
  {
    role: "Undergraduate Research Assistant",
    company: "UCSB NLPGroup",
    meta: "April 2026 - Present · UCSB",
    logoSrc: "/images/nlpgroup.jpeg",
    logoAlt: "NLP group",
    group: "work",
    bullets: [
      "Engineered a scalable AI training platform, enabling 20+ researchers to train research agents with higher reliability.",
      "Enhanced a multi-agent simulation environment, discovering leakage rates as high at 61.4% in state-of-the-art LLms.",
    ]
  },
  {
    role: "Technical Consultant (via Ascend)",
    company: "Polymarket",
    meta: "March 2026 - Prsent · UCSB",
    logoSrc: "/images/polymarket_logo.png",
    logoAlt: "Polymarket",
    group: "work",
    bullets: [
      "Conducted 100+ user interviews and analyzed product usage data to identify 5 key friction points, leading to a 25% increase in user retention.",
      "Prototyped and shipped lines and odds for 3 new markets, resulting in a 20% increase in daily active users.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Yope (startup)",
    meta: "Dec 2025 — Mar 2026 · Remote",
    logoSrc: "/images/yope_logo.png",
    logoAlt: "Yope",
    group: "work",
    bullets: [
      "Ideated, prototyped, and delivered 3 core app features, driving a 30% increase in US download rates.",
      "Owned milestone planning across a 5-person engineering team; compiled technical documentation and wrote OKRs, improving sprint velocity by 15%.",
      "Presented insights from 100+ user interviews, identifying and resolving 4 critical friction points, resulting in a $15k increase in monthly recurring revenue.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "smartQED (startup)",
    meta: "Jun 2025 — Sept 2025 · Remote",
    logoSrc: "/images/smart_qed.jpeg",
    logoAlt: "smartQED",
    group: "work",
    bullets: [
      "Automated client onboarding and 2 core services via an AI agent, cutting average service time by 30%.",
      "Implemented Retrieval-Augmented Generation (RAG) to search through 200+ client cases, reducing servicing costs for 30 new clients by 40%.",
      "Researched 10 agentic AI architectures, implemented proof-of-concepts with 95% accuracy, and compiled results into a detailed 20-page design document.",
    ],
  },
  {
    role: "Technical Director",
    company: "ACM (UCSB)",
    meta: "Jan 2025 — Present · Santa Barbara, CA",
    logoSrc: "/images/acm_lgoo.png",
    logoAlt: "ACM UCSB",
    group: "leadership",
    bullets: [
      "Organized PokerBots, a school-wide poker AI agent competition with 250 participants and 7 industry guest speakers.",
      "Developed a Next.js + Supabase realtime interface for contestants, supporting 80+ bots and 300+ spectators over 4 hours.",
      "Led sponsorship outreach by automating cold email campaigns with Python, reaching 120+ companies and securing 3 partnerships (+$9k funding).",
    ],
  },
  {
    role: "Software Engineering Director",
    company: "AgentsSB (UCSB)",
    meta: "Sept 2025 — Present · Santa Barbara, CA",
    logoSrc: "/images/agentssb_logo.png",
    logoAlt: "AgentsSB",
    group: "leadership",
    bullets: [
      "Directed a 6-person team to develop 4 AI-powered dashboards, leveraging agentic development environments to accelerate the product lifecycle by 50%.",
      "Established a curriculum centralized on Claude Code and Codex subagents, enabling 60+ members to start deploying industry-level code.",
    ],
  },
];

function GroupDivider({ label }: { label: string }) {
  return (
    <div className="relative flex items-center py-2">
      {/* Mobile */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold/50 bg-gold/10">
          <span className="text-[0.6rem] font-black uppercase tracking-wider text-gold">
            {label[0]}
          </span>
        </div>
        <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">
          {label}
        </span>
      </div>
      {/* Desktop */}
      <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center justify-end pr-6">
          <div className="h-px flex-1 bg-gold/20" />
        </div>
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold/50 bg-gold/10">
          <span className="text-[0.6rem] font-black uppercase tracking-wider text-gold">
            {label[0]}
          </span>
        </div>
        <div className="flex items-center pl-6">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">
            {label}
          </span>
          <div className="ml-4 h-px flex-1 bg-gold/20" />
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, side }: { job: Job; side: "left" | "right" }) {
  return (
    <div className="relative">
      {/* Arrow notch pointing toward the timeline */}
      <div
        className={`absolute top-7 z-10 h-3 w-3 rotate-45 bg-surface ${
          side === "left"
            ? "-right-[7px] border-r border-t border-foreground/15"
            : "-left-[7px] border-l border-b border-foreground/15"
        }`}
      />
      <div className="section-card rounded-2xl p-5 md:p-6">
        <h3 className="text-base font-black tracking-tight text-foreground md:text-lg">
          {job.role}
        </h3>
        <p className="mt-1 text-sm font-bold text-gold">{job.company}</p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
          {job.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  const experienceJobs = experiences.filter((j) => j.group === "work");
  const leadershipJobs = experiences.filter((j) => j.group === "leadership");

  const sections: Array<{ label: string; jobs: Job[] }> = [
    { label: "Work", jobs: experienceJobs },
    { label: "Leadership", jobs: leadershipJobs },
  ];

  return (
    <div className="relative">
      {/* Vertical line — left-aligned on mobile, centered on desktop */}
      <div className="absolute bottom-0 left-5 top-0 w-px bg-foreground/15 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-8 md:space-y-14">
        {sections.map(({ label, jobs }) => {
          // Index resets per section so alternating stays consistent within each group
          return (
            <div key={label} className="space-y-8 md:space-y-14">
              <GroupDivider label={label} />

              {jobs.map((job, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div key={`${job.role}-${job.company}`} className="relative">

                    {/* ── Mobile ── */}
                    <div className="flex items-start gap-5 md:hidden">
                      <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-foreground/20 bg-surface shadow-md">
                        <Image
                          src={job.logoSrc}
                          alt={job.logoAlt}
                          fill
                          sizes="40px"
                          className="rounded-full object-contain p-1.5"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="mb-2 text-xs font-semibold text-muted">{job.meta}</p>
                        <JobCard job={job} side="right" />
                      </div>
                    </div>

                    {/* ── Desktop ── */}
                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start">
                      <div className="pr-10">
                        {isLeft ? (
                          <JobCard job={job} side="left" />
                        ) : (
                          <p className="pt-7 text-right text-sm font-semibold text-muted">
                            {job.meta}
                          </p>
                        )}
                      </div>

                      <div className="relative z-10 mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground/20 bg-surface shadow-lg">
                        <Image
                          src={job.logoSrc}
                          alt={job.logoAlt}
                          fill
                          sizes="56px"
                          className="rounded-full object-contain p-2"
                        />
                      </div>

                      <div className="pl-10">
                        {!isLeft ? (
                          <JobCard job={job} side="right" />
                        ) : (
                          <p className="pt-7 text-sm font-semibold text-muted">
                            {job.meta}
                          </p>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
