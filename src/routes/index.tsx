import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Bot,
  Network,
  Layers,
  Workflow,
  ShieldCheck,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "EAURA — Engineering Intelligent Systems" },
      {
        name: "description",
        content:
          "EAURA Pvt. Ltd. is an engineering and technology company building deep-tech products across AI, robotics, infrastructure and intelligent automation.",
      },
    ],
  }),
});

// ── Section label helper ──────────────────────────────────────
function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 text-clay">
      <span className="font-mono text-[11px] tracking-[0.2em]">{index}</span>
      <span className="h-px w-8 bg-clay/40" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
        {title}
      </span>
    </div>
  );
}

// ── Tile wrapper ──────────────────────────────────────────────
function Tile({
  children,
  className = "",
  tone = "surface",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "surface" | "card" | "ink" | "clay" | "sand";
}) {
  const tones: Record<string, string> = {
    surface: "bg-surface border border-hairline",
    card: "bg-card-2 border border-hairline",
    ink: "bg-ink text-bg",
    clay: "bg-clay text-bg",
    sand: "bg-sand text-ink",
  };
  return (
    <div
      className={`relative rounded-3xl ${tones[tone]} transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(139,115,85,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />

      {/* HERO ─────────────────────────────────────────────────── */}
      <section id="company" className="relative pt-28 pb-10 md:pt-36 md:pb-16">
        <div className="absolute inset-0 dot-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Primary hero tile */}
              <Tile
                tone="surface"
                className="col-span-12 lg:col-span-8 p-8 md:p-14 lg:p-16 flex flex-col justify-between min-h-[520px] overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-bg/60 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay">
                      EAURA Pvt. Ltd. · Est. 2024
                    </span>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay border-b border-clay/30 pb-1">
                      Corporate Brief / 26 · Vol I
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-[-0.02em] text-balance">
                    Engineering the <br />
                    <span className="text-clay">autonomic age.</span>
                  </h1>
                  <p className="mt-8 max-w-xl text-lg md:text-xl text-text-secondary leading-relaxed">
                    EAURA is a deep-technology company building the systems
                    layer for intelligent infrastructure — across artificial
                    intelligence, robotics, and large-scale automation.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                  <a
                    href="#capabilities"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-semibold text-bg transition-all hover:bg-clay"
                  >
                    Explore our work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-2 rounded-full border border-clay/40 bg-bg/40 px-6 py-3.5 text-[14px] font-semibold text-ink transition-all hover:bg-bg"
                  >
                    Our products
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Tile>

              {/* Right column */}
              <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                <Tile tone="ink" className="p-7 flex flex-col justify-between min-h-[170px] lg:min-h-[250px]">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-lg bg-clay grid place-items-center font-display font-bold">
                      E
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bg/40">
                      Mission
                    </span>
                  </div>
                  <p className="font-display text-lg md:text-xl leading-snug">
                    To make advanced technology a foundation, not a feature —
                    quietly, reliably, at scale.
                  </p>
                </Tile>

                <Tile tone="sand" className="p-7 flex flex-col justify-between min-h-[170px] lg:min-h-[250px]">
                  <div className="flex items-center justify-between">
                    <Sparkles className="h-5 w-5 text-ink/70" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                      Now
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-3xl md:text-4xl font-bold">
                      04
                    </div>
                    <div className="mt-1 text-sm text-ink/70">
                      Active product lines across AI, robotics & infrastructure
                    </div>
                  </div>
                </Tile>
              </div>

              {/* Bottom ribbon */}
              <Tile
                tone="card"
                className="col-span-12 px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-6"
              >
                <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
                  {[
                    ["Engineering", "AI · Robotics · Systems"],
                    ["Headquarters", "India · Global"],
                    ["Phase", "Scale R&D · Vol I"],
                    ["Reliability", "99.98% uptime"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                        {k}
                      </span>
                      <span className="text-sm font-semibold text-ink mt-0.5">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#research"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  Read the corporate brief
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Tile>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES ─────────────────────────────────────────── */}
      <section id="capabilities" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <SectionLabel index="01" title="Capabilities" />
                <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  Six disciplines, <br />
                  one engineering philosophy.
                </h2>
              </div>
              <p className="max-w-sm text-text-secondary leading-relaxed">
                Each capability is a long-horizon practice — staffed,
                instrumented, and held to the same standard of rigour.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[180px]">
              {/* Big tile */}
              <Tile tone="surface" className="col-span-12 lg:col-span-6 row-span-2 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-ink text-bg grid place-items-center">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                    01 · Core
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    Applied Artificial Intelligence
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed max-w-md">
                    Production-grade models, retrieval systems, and reasoning
                    pipelines engineered for industrial reliability — not demo
                    novelty.
                  </p>
                </div>
              </Tile>

              {/* Medium */}
              <Tile tone="card" className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2 p-7 flex flex-col justify-between">
                <Bot className="h-6 w-6 text-clay" />
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    Robotics
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Perception, control and embodied autonomy for physical
                    systems.
                  </p>
                </div>
              </Tile>

              <Tile tone="sand" className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2 p-7 flex flex-col justify-between">
                <Network className="h-6 w-6 text-ink/70" />
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    Infrastructure
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">
                    Compute, networking and orchestration for high-load
                    workloads.
                  </p>
                </div>
              </Tile>

              <Tile tone="card" className="col-span-12 md:col-span-4 p-7 flex flex-col justify-between">
                <Workflow className="h-5 w-5 text-clay" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    Automation
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Workflow systems that remove human latency from operations.
                  </p>
                </div>
              </Tile>

              <Tile tone="card" className="col-span-12 md:col-span-4 p-7 flex flex-col justify-between">
                <Layers className="h-5 w-5 text-clay" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    Developer Platforms
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Tools and SDKs that engineers actually want to build on.
                  </p>
                </div>
              </Tile>

              <Tile tone="card" className="col-span-12 md:col-span-4 p-7 flex flex-col justify-between">
                <ShieldCheck className="h-5 w-5 text-clay" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    Intelligent Systems
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Closed-loop systems that sense, decide and act — safely.
                  </p>
                </div>
              </Tile>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS ─────────────────────────────────────────────── */}
      <section id="products" className="relative py-24 md:py-32 bg-surface/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <SectionLabel index="02" title="Products" />
                <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  A growing portfolio, <br />engineered in-house.
                </h2>
              </div>
              <p className="max-w-sm text-text-secondary leading-relaxed">
                Each product is a long-running line of work — not a release.
                ENVX is one of several initiatives currently underway.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* ENVX */}
              <Tile tone="ink" className="col-span-12 lg:col-span-7 p-8 md:p-12 min-h-[420px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-clay grid place-items-center font-display font-bold">
                      E
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold tracking-tight">
                        ENVX
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/40 mt-0.5">
                        Product · 01
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full border border-bg/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-bg/70">
                    In market
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight max-w-xl">
                    An AI-native environment for builders shipping serious
                    software.
                  </h3>
                  <p className="mt-5 max-w-xl text-bg/60 leading-relaxed">
                    ENVX combines intelligent tooling, infrastructure and
                    workflow into a single, opinionated surface for modern
                    engineering teams.
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-bg/10 pt-6">
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/40">
                        Uptime
                      </div>
                      <div className="font-display text-lg font-semibold">
                        99.98%
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/40">
                        Latency
                      </div>
                      <div className="font-display text-lg font-semibold">
                        24ms
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-bg"
                  >
                    Visit ENVX
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Tile>

              {/* Right column products */}
              <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
                <Tile tone="sand" className="p-8 flex flex-col justify-between min-h-[200px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-bg grid place-items-center font-display font-bold text-ink">
                        N
                      </div>
                      <div>
                        <div className="font-display text-xl font-bold text-ink">
                          NOVA
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-0.5">
                          Product · 02
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full border border-ink/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/70">
                      Private beta
                    </span>
                  </div>
                  <p className="text-sm text-ink/70 max-w-sm">
                    A robotics control plane for orchestrating embodied agents
                    in industrial environments.
                  </p>
                </Tile>

                <Tile tone="card" className="p-8 flex flex-col justify-between min-h-[200px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-surface border border-hairline grid place-items-center font-display font-bold text-clay">
                        ·
                      </div>
                      <div>
                        <div className="font-display text-xl font-bold text-ink">
                          More in progress
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay mt-0.5">
                          Internal · R&D
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full border border-clay/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Soon
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary max-w-sm">
                    Additional product lines across infrastructure and applied
                    AI are in active development and will be announced.
                  </p>
                </Tile>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESEARCH / PIPELINE ──────────────────────────────────── */}
      <section id="research" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <SectionLabel index="03" title="Research → Scale" />
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                How an idea becomes infrastructure.
              </h2>
              <p className="mt-5 text-text-secondary leading-relaxed max-w-xl">
                EAURA operates as a long-cycle engineering studio. Each product
                line moves through the same disciplined progression — from
                first principles to production scale.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                ["Research", "First-principles exploration with a clear engineering thesis."],
                ["Prototype", "Tight loops, internal benchmarks, real hardware in the loop."],
                ["Pilot", "Live deployments with design partners; instrumented every layer."],
                ["Scale", "Hardened systems, SLAs, and the boring reliability that lasts."],
              ].map(([title, body], i) => (
                <Tile
                  key={title as string}
                  tone={i === 0 || i === 3 ? "surface" : "card"}
                  className="p-7 min-h-[220px] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay">
                      Stage 0{i + 1}
                    </span>
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-clay"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {body}
                    </p>
                  </div>
                </Tile>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP ───────────────────────────────────────────── */}
      <section id="founders" className="relative py-24 md:py-32 bg-surface/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <SectionLabel index="04" title="Leadership" />
                <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  Founded and led <br />by three engineers.
                </h2>
              </div>
              <p className="max-w-sm text-text-secondary leading-relaxed">
                The directors set the engineering culture and stay close to the
                work. Each one runs a discipline end-to-end.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  name: "Director · One",
                  role: "Chief Executive",
                  bio: "Sets the long-term technical agenda and leads the company across products, hiring and partnerships.",
                  tone: "ink" as const,
                  initial: "01",
                },
                {
                  name: "Director · Two",
                  role: "Chief Technology Officer",
                  bio: "Owns the engineering org — architecture, reliability and the platform that every EAURA product is built on.",
                  tone: "surface" as const,
                  initial: "02",
                },
                {
                  name: "Director · Three",
                  role: "Chief Product Officer",
                  bio: "Translates research into products customers can rely on; runs go-to-market and the product portfolio.",
                  tone: "surface" as const,
                  initial: "03",
                },
              ].map((p) => (
                <Tile key={p.name} tone={p.tone} className="p-8 min-h-[360px] flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className={`h-12 w-12 rounded-xl grid place-items-center font-display font-bold ${p.tone === "ink" ? "bg-clay text-bg" : "bg-ink text-bg"}`}>
                      {p.initial}
                    </div>
                    <a
                      href="#"
                      aria-label={`${p.name} on LinkedIn`}
                      className={`h-9 w-9 rounded-full grid place-items-center transition-colors ${
                        p.tone === "ink"
                          ? "bg-bg/10 text-bg hover:bg-bg/20"
                          : "bg-bg text-ink hover:bg-clay hover:text-bg"
                      }`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${p.tone === "ink" ? "text-bg/50" : "text-clay"}`}>
                      {p.role}
                    </div>
                    <h3 className={`mt-2 font-display text-2xl font-semibold tracking-tight ${p.tone === "ink" ? "text-bg" : "text-ink"}`}>
                      {p.name}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${p.tone === "ink" ? "text-bg/60" : "text-text-secondary"}`}>
                      {p.bio}
                    </p>
                  </div>
                </Tile>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Tile tone="ink" className="overflow-hidden p-8 md:p-16">
              <div className="grid grid-cols-12 gap-8 items-end">
                <div className="col-span-12 lg:col-span-8">
                  <SectionLabel index="05" title="Contact" />
                  <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-bg">
                    Build with EAURA.
                  </h2>
                  <p className="mt-5 max-w-xl text-bg/60 leading-relaxed">
                    For partnerships, enterprise enquiries, or to work with us
                    on a problem worth solving — reach the team directly.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
                  <a
                    href="mailto:hello@eaura.com"
                    className="group inline-flex items-center justify-between gap-2 rounded-full bg-bg px-6 py-4 text-sm font-semibold text-ink transition-all hover:bg-clay hover:text-bg"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      hello@eaura.com
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <div className="inline-flex items-center gap-2 rounded-full border border-bg/15 px-6 py-4 text-sm text-bg/70">
                    <MapPin className="h-4 w-4" />
                    India · Operating Globally
                  </div>
                </div>
              </div>
            </Tile>
          </Reveal>
        </div>
      </section>

      {/* FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-bg text-[11px] font-bold font-display">
              E
            </span>
            <span className="font-display text-[15px] font-semibold tracking-[0.22em]">
              EAURA
            </span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-clay">
            © {new Date().getFullYear()} EAURA Pvt. Ltd. · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
