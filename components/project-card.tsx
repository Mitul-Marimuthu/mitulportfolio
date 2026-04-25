import Image from "next/image";

export function ProjectCard({
  title,
  description,
  tech,
  imageSrc,
  imageAlt,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  href?: string;
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
          className="object-cover opacity-95 transition group-hover:scale-[1.03]"
        />
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
              {/* Logo slot — swap this span with <Image src={logoSrc} /> once you have the asset */}
              <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-[0.5rem] font-black leading-none text-foreground/40">
                {t[0]}
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
