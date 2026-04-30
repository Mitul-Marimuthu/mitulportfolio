"use client";

import Image from "next/image";

const pythonAliases = new Set(["flask", "scikit-learn", "langchain", "langgraph"]);

function techLogoSrc(name: string) {
  const key = name.toLowerCase();
  if (pythonAliases.has(key)) return "/images/logos/skills/python.png";
  return `/images/logos/skills/${key.replace(/[^a-z0-9]/g, "")}.png`;
}

export function ProjectCard({
  title,
  description,
  tech,
  imageSrc,
  imageAlt,
  href,
  githubUrl,
}: {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  href?: string;
  githubUrl?: string;
}) {
  const body = (
    <article className="section-card group overflow-hidden rounded-3xl transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(0,26,69,0.28)]">
      <div className="relative h-44 w-full overflow-hidden bg-fill-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--gold)35%,transparent),transparent_55%),radial-gradient(circle_at_80%_10%,color-mix(in_srgb,var(--navy)35%,transparent),transparent_55%)]" />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
          className="object-cover opacity-95 transition group-hover:scale-[1.03]"
        />
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition hover:bg-black/70"
            aria-label="View on GitHub"
          >
            <span className="relative h-4 w-4">
              <Image
                src="/images/logos/github.png"
                alt="GitHub"
                fill
                sizes="16px"
                unoptimized
                className="object-contain"
              />
            </span>
          </a>
        )}
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-black tracking-tight text-foreground md:text-xl">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
            Project
          </span>
        </div>
        <p className="text-sm leading-6 text-muted">{description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/60 px-2.5 py-1 text-[0.7rem] font-semibold text-foreground/70 transition hover:border-gold/30 hover:bg-gold/5 hover:text-foreground"
            >
              <span className="relative inline-flex h-3.5 w-3.5 shrink-0 overflow-hidden rounded-full bg-foreground/10">
                <Image
                  src={techLogoSrc(t)}
                  alt={t}
                  fill
                  sizes="14px"
                  unoptimized
                  className="object-contain p-[1px]"
                />
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  if (!href) return body;

  return (
    <a href={href} className="block">
      {body}
    </a>
  );
}
