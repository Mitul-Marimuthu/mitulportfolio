"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" },
  { id: "ai", label: "AI / ML" },
];

const skills = [
  { name: "C++", category: "languages", logoSrc: "/images/logos/skills/cpp.svg" },
  { name: "C", category: "languages", logoSrc: "/images/logos/skills/c.png" },
  { name: "Java", category: "languages", logoSrc: "/images/logos/skills/java.png" },
  { name: "Python", category: "languages", logoSrc: "/images/logos/skills/python.png" },
  { name: "TypeScript", category: "languages", logoSrc: "/images/logos/skills/typescript.png" },
  { name: "JavaScript", category: "languages", logoSrc: "/images/logos/skills/javascript.png" },
  { name: "SQL", category: "languages", logoSrc: "/images/logos/skills/sql.png" },
  { name: "React", category: "frameworks", logoSrc: "/images/logos/skills/react.png" },
  { name: "Next.js", category: "frameworks", logoSrc: "/images/logos/skills/nextjs.png" },
  { name: "Flask", category: "frameworks", logoSrc: "/images/logos/skills/python.png" },
  { name: "MongoDB", category: "tools", logoSrc: "/images/logos/skills/mongodb.png" },
  { name: "Supabase", category: "tools", logoSrc: "/images/logos/skills/supabase.png" },
  { name: "Docker", category: "tools", logoSrc: "/images/logos/skills/docker.png" },
  { name: "Vercel", category: "tools", logoSrc: "images/logos/skills/vercel.png"},
  { name: "LangChain", category: "ai", logoSrc: "/images/logos/skills/langchain.png" },
  { name: "LangGraph", category: "ai", logoSrc: "/images/logos/skills/langgraph.png" },
  { name: "PyTorch", category: "ai", logoSrc: "/images/logos/skills/pytorch.png" },
  { name: "Hugging Face", category: "ai", logoSrc: "/images/logos/skills/huggingface.png" },
  { name: "Scikit-learn", category: "ai", logoSrc: "/images/logos/skills/scikitlearn.png" },
];

export function SkillsSection() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="section-card rounded-3xl p-7 md:p-8">
      <h3 className="text-lg font-black text-foreground">Skills</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              active === cat.id
                ? "bg-gold text-on-gold shadow-[0_4px_14px_rgba(139,92,246,0.35)]"
                : "border border-foreground/10 bg-background/40 text-foreground/60 hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {visible.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/40 px-3 py-2 text-xs font-bold text-foreground transition hover:border-gold/40 hover:bg-gold/5"
          >
            {/* Logo slot — replace placeholder with the real SVG/PNG at the same path */}
            <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-foreground/8">
              <Image
                src={skill.logoSrc}
                alt={skill.name}
                fill
                sizes="16px"
                unoptimized
                className="object-contain p-[2px]"
              />
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
