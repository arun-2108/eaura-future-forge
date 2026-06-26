import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Bot,
  Network,
  Layers,
  Workflow,
  ShieldCheck,
  Linkedin,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "EAURA — Engineering the autonomic age" },
      {
        name: "description",
        content:
          "EAURA Pvt. Ltd. is a deep-technology company building the systems layer for intelligent infrastructure — artificial intelligence, robotics, and large-scale automation.",
      },
    ],
  }),
});

// ── Inline CTA link (Apple-style) ─────────────────────────────
function CTA({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1 text-[17px] font-medium tracking-tight transition-colors ${
        light ? "text-clay hover:text-[#2997ff]" : "text-clay hover:opacity-80"
      }`}
    >
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function PillButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium tracking-tight transition-all";
  const styles =
    variant === "primary"
      ? "bg-clay text-white hover:bg-[#0077ed]"
      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <Nav />

      {/* HERO — Apple-style large centered ──────────────────── */}
      <section id="company" className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.10),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
          <Reveal>
            <p className="text-[13px] md:text-[14px] font-medium text-clay tracking-tight">
              Introducing EAURA
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-display font-semibold tracking-[-0.04em] text-[44px] leading-[1.05] md:text-[88px] md:leading-[0.98] text-balance">
              Engineering the
              <br className="hidden md:block" />{" "}
              <span className="bg-gradient-to-r from-ink via-ink-2 to-clay bg-clip-text text-transparent">
                autonomic age.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-[19px] md:text-[22px] leading-snug text-ink-2 tracking-tight">
              EAURA is a deep-technology company building the systems layer
              for intelligent infrastructure — across AI, robotics, and
              automation at scale.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <CTA href="#products">See our products</CTA>
              <CTA href="#capabilities">Explore capabilities</CTA>
            </div>
          </Reveal>

          {/* Visual hero artifact — gradient device card */}
          <Reveal delay={0.2}>
            <div className="relative mt-16 md:mt-20 mx-auto max-w-5xl">
              <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#0a1733] via-[#0f2a52] to-[#1a4a8a] shadow-[0_30px_80px_-30px_rgba(15,42,82,0.45)]">
                {/* subtle grid */}
                <div className="absolute inset-0 opacity-40"
                     style={{
                       backgroundImage:
                         "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                       backgroundSize: "48px 48px",
                       maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
                     }}
                />
                {/* orb */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#7cb8ff,#2563eb_45%,#0a1733_75%)] blur-[2px]"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[580px] md:h-[580px] rounded-full border border-white/15"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] md:w-[760px] md:h-[760px] rounded-full border border-white/8"
                />

                {/* corner labels */}
                <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  EAURA · Systems Layer
                </div>
                <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  v01 · 2026
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">Now Operating</div>
                    <div className="mt-1 font-display text-2xl md:text-3xl font-semibold tracking-tight">99.98% reliability across product lines</div>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <PillButton href="#products">Discover</PillButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP ──────────────────────────────────────────── */}
      <section className="border-y border-hairline bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-2/70">
            <span>EAURA Pvt. Ltd.</span>
            <span>Engineering · India · Global</span>
            <span>04 Active Product Lines</span>
            <span>99.98% Reliability</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — Google Cloud–style 3-col ──────────────── */}
      <section id="capabilities" className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[13px] font-medium text-clay tracking-tight">Capabilities</p>
              <h2 className="mt-3 font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.03em] leading-[1.02]">
                Six disciplines.
                <br /> <span className="text-ink-2">One engineering philosophy.</span>
              </h2>
              <p className="mt-6 text-[18px] md:text-[19px] text-ink-2 max-w-xl leading-relaxed">
                Each capability is a long-horizon practice — staffed, instrumented,
                and held to the same standard of rigour.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-[28px] overflow-hidden border border-hairline">
              {[
                { Icon: Cpu, title: "Applied AI", desc: "Production-grade models, retrieval and reasoning systems engineered for industrial reliability." },
                { Icon: Bot, title: "Robotics", desc: "Perception, control and embodied autonomy for physical systems and operations." },
                { Icon: Network, title: "Infrastructure", desc: "Compute, networking and orchestration purpose-built for high-load workloads." },
                { Icon: Workflow, title: "Automation", desc: "Workflow systems that remove human latency from real operations." },
                { Icon: Layers, title: "Developer Platforms", desc: "SDKs and tools engineers actually want to build their next product on." },
                { Icon: ShieldCheck, title: "Intelligent Systems", desc: "Closed-loop systems that sense, decide and act — safely, at scale." },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative bg-bg p-10 transition-colors hover:bg-surface-2"
                >
                  <div className="h-11 w-11 rounded-2xl bg-surface grid place-items-center text-ink transition-colors group-hover:bg-clay group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{desc}</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-[14px] font-medium text-clay">
                      Learn more
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT — ENVX (dark, Apple Pro-style) ──────────────── */}
      <section id="products" className="bg-bg pb-px">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <article className="relative overflow-hidden rounded-[32px] bg-[#0b1220] text-white min-h-[640px] md:min-h-[720px] flex items-center">
              <div className="absolute inset-0">
                <div className="absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(41,151,255,0.35),transparent_70%)]" />
                <div className="absolute -bottom-40 -left-32 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(94,92,230,0.28),transparent_70%)]" />
              </div>
              <div className="relative mx-auto w-full max-w-5xl px-8 md:px-14 py-20 md:py-28 text-center">
                <p className="text-[13px] font-medium text-[#2997ff] tracking-tight">Product · ENVX</p>
                <h3 className="mt-4 font-display text-[44px] md:text-[80px] font-semibold tracking-[-0.04em] leading-[0.98]">
                  The environment for
                  <br />
                  <span className="bg-gradient-to-r from-white via-[#a5c8ff] to-[#2997ff] bg-clip-text text-transparent">
                    serious builders.
                  </span>
                </h3>
                <p className="mx-auto mt-6 max-w-2xl text-[18px] md:text-[20px] text-white/70 tracking-tight">
                  ENVX is an AI-native engineering environment — intelligent tooling,
                  infrastructure and workflow on a single, opinionated surface.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <PillButton href="#">Visit ENVX</PillButton>
                  <a href="#" className="text-[15px] font-medium text-[#2997ff] hover:text-white transition-colors">
                    Read the technical brief →
                  </a>
                </div>

                <div className="mt-14 grid grid-cols-3 max-w-xl mx-auto gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                  {[
                    ["99.98%", "Uptime"],
                    ["24ms", "p95 latency"],
                    ["18", "Regions"],
                  ].map(([v, k]) => (
                    <div key={k as string} className="bg-[#0b1220] py-5">
                      <div className="font-display text-2xl md:text-3xl font-semibold">{v}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/50">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT — NOVA (light, Microsoft-style) ─────────────── */}
      <section className="bg-bg py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <article className="relative overflow-hidden rounded-[32px] bg-surface min-h-[560px] md:min-h-[640px] grid md:grid-cols-2">
              <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center">
                <p className="text-[13px] font-medium text-clay tracking-tight">Product · NOVA</p>
                <h3 className="mt-3 font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.035em] leading-[1.02] text-ink">
                  A control plane for embodied intelligence.
                </h3>
                <p className="mt-5 text-[17px] md:text-[19px] text-ink-2 max-w-md leading-relaxed">
                  NOVA orchestrates robotic agents, sensors and operational
                  workflows across industrial environments — safely, reliably,
                  and at scale.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <CTA href="#">Request access</CTA>
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-2/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                    Private beta · 2026
                  </span>
                </div>
              </div>
              <div className="relative min-h-[320px] md:min-h-full bg-gradient-to-br from-[#eaf2ff] via-[#dde9ff] to-[#cbdcff] overflow-hidden">
                <div className="absolute inset-0"
                     style={{
                       backgroundImage:
                         "radial-gradient(circle at 20% 30%, rgba(0,113,227,0.25), transparent 45%), radial-gradient(circle at 75% 75%, rgba(94,92,230,0.25), transparent 50%)",
                     }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-[40px] bg-white/70 backdrop-blur-md border border-white shadow-[0_30px_80px_-20px_rgba(0,60,150,0.25)] grid place-items-center"
                >
                  <div className="text-center">
                    <div className="font-display text-5xl md:text-6xl font-semibold text-ink">N</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-2/70">
                      NOVA · Core
                    </div>
                  </div>
                </motion.div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* RESEARCH PIPELINE — Microsoft-style horizontal ──────── */}
      <section id="research" className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[13px] font-medium text-clay tracking-tight">Research → Scale</p>
              <h2 className="mt-3 font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.03em] leading-[1.02]">
                How an idea becomes <span className="text-ink-2">infrastructure.</span>
              </h2>
              <p className="mt-6 text-[18px] md:text-[19px] text-ink-2 max-w-xl leading-relaxed">
                EAURA operates as a long-cycle engineering studio. Every product
                line moves through the same disciplined progression.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ol className="mt-16 relative">
              <div className="absolute left-0 right-0 top-5 h-px bg-hairline hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                {[
                  ["01", "Research", "First-principles exploration with a clear engineering thesis."],
                  ["02", "Prototype", "Tight loops, internal benchmarks, real hardware in the loop."],
                  ["03", "Pilot", "Live deployments with design partners; every layer instrumented."],
                  ["04", "Scale", "Hardened systems, SLAs, and the boring reliability that lasts."],
                ].map(([num, title, body]) => (
                  <li key={num} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center h-10 w-10 rounded-full bg-bg border border-hairline font-mono text-[12px] font-medium text-ink">
                        {num}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.01em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{body}</p>
                  </li>
                ))}
              </div>
            </ol>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP ───────────────────────────────────────────── */}
      <section id="founders" className="bg-surface py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[13px] font-medium text-clay tracking-tight">Leadership</p>
              <h2 className="mt-3 font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.03em] leading-[1.02]">
                Founded and led
                <br />
                <span className="text-ink-2">by three engineers.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Director · One",
                  role: "Chief Executive Officer",
                  bio: "Sets the long-term technical agenda. Leads the company across products, hiring and partnerships.",
                  gradient: "from-[#0a1733] via-[#1e3a8a] to-[#2997ff]",
                },
                {
                  name: "Director · Two",
                  role: "Chief Technology Officer",
                  bio: "Owns the engineering org — architecture, reliability, and the platform every EAURA product is built on.",
                  gradient: "from-[#1a1a1a] via-[#3a3a3a] to-[#6e6e73]",
                },
                {
                  name: "Director · Three",
                  role: "Chief Product Officer",
                  bio: "Translates research into products customers can rely on. Runs go-to-market and the product portfolio.",
                  gradient: "from-[#1b3a2e] via-[#2d6a4f] to-[#5e5ce6]",
                },
              ].map((p) => (
                <article
                  key={p.name}
                  className="group relative overflow-hidden rounded-[24px] bg-white border border-hairline transition-all hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30"
                         style={{
                           backgroundImage:
                             "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)",
                         }}
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div className="text-white">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                          {p.role}
                        </div>
                        <div className="mt-1 font-display text-xl font-semibold tracking-tight">
                          {p.name}
                        </div>
                      </div>
                      <a
                        href="#"
                        aria-label={`${p.name} on LinkedIn`}
                        className="h-9 w-9 rounded-full bg-white/15 backdrop-blur grid place-items-center text-white hover:bg-white/25 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[15px] leading-relaxed text-ink-2">{p.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="bg-bg py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-[44px] md:text-[80px] font-semibold tracking-[-0.04em] leading-[1.0]">
              Build with <span className="text-clay">EAURA.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[18px] md:text-[20px] text-ink-2 tracking-tight">
              For partnerships, enterprise enquiries, or to work with us on a
              problem worth solving — reach the team directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href="mailto:hello@eaura.com"
                className="inline-flex items-center justify-center rounded-full bg-ink text-white px-6 py-3 text-[15px] font-medium tracking-tight transition-all hover:bg-clay"
              >
                hello@eaura.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <CTA href="#">View open roles</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-[13px]">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-bg text-[11px] font-bold font-display">E</span>
                <span className="font-display text-[15px] font-semibold tracking-[0.22em]">EAURA</span>
              </div>
              <p className="mt-4 max-w-xs text-ink-2 leading-relaxed">
                Engineering the autonomic age. Deep-tech systems for intelligent infrastructure.
              </p>
            </div>
            {[
              ["Company", ["About", "Leadership", "Research", "Careers"]],
              ["Products", ["ENVX", "NOVA", "Roadmap"]],
              ["Contact", ["hello@eaura.com", "Press", "Partners"]],
            ].map(([title, items]) => (
              <div key={title as string}>
                <div className="font-semibold text-ink">{title}</div>
                <ul className="mt-3 space-y-2 text-ink-2">
                  {(items as string[]).map((i) => (
                    <li key={i}><a href="#" className="hover:text-ink transition-colors">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-ink-2">
            <div>© {new Date().getFullYear()} EAURA Pvt. Ltd. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-ink transition-colors">Privacy</a>
              <a href="#" className="hover:text-ink transition-colors">Terms</a>
              <a href="#" className="hover:text-ink transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
