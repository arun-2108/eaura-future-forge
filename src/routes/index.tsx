import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Brain,
  Cpu,
  Bot,
  Workflow,
  CircuitBoard,
  Cloud,
  Shield,
  Code2,
  Sparkles,
  Telescope,
  Linkedin as LinkedinIcon,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { NetworkBackground } from "@/components/site/NetworkBackground";
import { HeroOrb } from "@/components/site/HeroOrb";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EAURA — Engineering the Future Through Intelligent Technology" },
      {
        name: "description",
        content:
          "EAURA Pvt. Ltd. builds deep technology products across AI, Developer Infrastructure, Robotics, Automation and Intelligent Systems.",
      },
      { property: "og:title", content: "EAURA — Engineering the Future" },
      {
        property: "og:description",
        content:
          "Deep technology products across AI, Developer Infrastructure, Robotics, Automation and Intelligent Systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bg text-white antialiased">
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Technology />
        <Products />
        <WhyEaura />
        <Innovation />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        <NetworkBackground className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            EAURA Pvt. Ltd. — Deep Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-7 text-balance text-[clamp(2.6rem,6.2vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
          >
            Engineering the Future Through{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
              Intelligent Technology.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-text-secondary"
          >
            EAURA builds deep technology products across AI, Developer
            Infrastructure, Robotics, Automation and Intelligent Systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#050816] transition-all hover:scale-[1.02] hover:bg-white/90"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-white/[0.06]"
            >
              About EAURA
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/5 pt-6 text-xs text-text-secondary sm:max-w-md"
          >
            <div>
              <div className="font-mono text-white">06</div>
              <div className="mt-1">Technology Pillars</div>
            </div>
            <div>
              <div className="font-mono text-white">02+</div>
              <div className="mt-1">Products Building</div>
            </div>
            <div>
              <div className="font-mono text-white">∞</div>
              <div className="mt-1">Long-term Horizon</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <HeroOrb />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-text-secondary">
      <span className="h-px w-6 bg-text-secondary/60" />
      {children}
    </div>
  );
}

/* ---------------- WHO WE ARE ---------------- */
function WhoWeAre() {
  return (
    <section id="about" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-5xl text-balance text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            We don't just build software.{" "}
            <span className="text-text-secondary">
              We engineer technologies that solve real-world problems.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 text-[16px] leading-relaxed text-text-secondary md:grid-cols-2">
          <Reveal delay={0.1}>
            <p>
              EAURA Pvt. Ltd. is a deep technology company founded to engineer
              systems at the intersection of intelligence, infrastructure and
              physical computing. We work across the full stack — from low-level
              embedded firmware to high-level developer platforms — with a
              singular focus on solving problems that meaningfully advance how
              software, hardware and people work together.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Our work is guided by long-term thinking. We invest in research,
              design and engineering practices that compound over years, not
              quarters. Every product we ship is a deliberate step toward a
              future where intelligent systems are secure, accessible, and built
              with the same care as the most enduring tools of our industry.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGY ---------------- */
const PILLARS = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Foundational models, reasoning systems and applied intelligence for production." },
  { icon: Code2, title: "Developer Infrastructure", desc: "Secure platforms and primitives that engineering teams build on every day." },
  { icon: Bot, title: "Robotics", desc: "Autonomous machines and perception systems engineered for the real world." },
  { icon: Workflow, title: "Automation", desc: "Intelligent workflows that compress engineering and operational complexity." },
  { icon: CircuitBoard, title: "Embedded Systems", desc: "Firmware, edge compute and hardware-software co-design for intelligent devices." },
  { icon: Cloud, title: "Cloud Engineering", desc: "Distributed systems and resilient infrastructure at planetary scale." },
];

function Technology() {
  return (
    <section id="technology" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Technology Pillars</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Six disciplines. One engineering philosophy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[15px] text-text-secondary">
              The technologies we invest in are chosen for durability. Each
              pillar is treated as a long-term engineering practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col justify-between gap-12 bg-[#0a1020] p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white transition-colors group-hover:border-accent-blue/50 group-hover:text-accent-blue">
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">{p.desc}</p>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
const PRODUCTS = [
  {
    name: "ENVX",
    status: "Live",
    statusColor: "bg-emerald-400",
    desc: "A secure developer infrastructure platform for encrypted environment variable management and team collaboration.",
    tag: "Developer Infrastructure",
    icon: Shield,
    cta: "Learn More",
  },
  {
    name: "NOVA",
    status: "Coming Soon",
    statusColor: "bg-accent-blue",
    desc: "AI-powered intelligent companion platform combining software and hardware.",
    tag: "Artificial Intelligence",
    icon: Sparkles,
    cta: "Notify Me",
  },
  {
    name: "Future Products",
    status: "Research",
    statusColor: "bg-accent-violet",
    desc: "Research initiatives and upcoming innovations currently under development.",
    tag: "R&D",
    icon: Telescope,
    cta: "Learn More",
  },
];

function Products() {
  return (
    <section id="products" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Products</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Products engineered by EAURA.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#0c1426_0%,#080d1c_100%)] p-7"
              >
                <div
                  className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.7), transparent 60%)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-text-secondary">
                    <span className={`h-1.5 w-1.5 rounded-full ${p.statusColor}`} />
                    {p.status}
                  </div>
                </div>

                <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                  {p.tag}
                </div>
                <h3 className="mt-2 text-[28px] font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">{p.desc}</p>

                <div className="mt-8 flex-1" />
                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
                >
                  {p.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY EAURA ---------------- */
const WHY = [
  { title: "Engineering Excellence", desc: "We obsess over craft. Code, systems and products built to endure." },
  { title: "Security First", desc: "Trust is engineered. Security is foundational to everything we ship." },
  { title: "Developer Focused", desc: "We build the tools we wish existed for the engineers shaping the future." },
  { title: "Built for the Future", desc: "Long-term thinking. Decisions made for the next decade, not the next quarter." },
];

function WhyEaura() {
  return (
    <section className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Why EAURA</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Principles that shape everything we build.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-accent-blue" strokeWidth={1.5} />
                <h3 className="mt-6 text-[16px] font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{w.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INNOVATION TIMELINE ---------------- */
const STAGES = ["Research", "Prototype", "Build", "Deploy", "Scale"];

function Innovation() {
  return (
    <section className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Innovation</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            How we move from idea to impact.
          </h2>
        </Reveal>

        <div className="mt-20 hidden items-center justify-between md:flex">
          {STAGES.map((s, i) => (
            <div key={s} className="flex flex-1 items-center last:flex-none">
              <Reveal delay={i * 0.1}>
                <div className="flex flex-col items-start gap-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                    <span className="text-[18px] font-semibold tracking-tight">{s}</span>
                  </div>
                </div>
              </Reveal>
              {i < STAGES.length - 1 && (
                <div className="mx-4 h-px flex-1 bg-gradient-to-r from-white/15 to-white/[0.03]" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="mt-16 space-y-6 md:hidden">
          {STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <div className="font-mono text-[11px] text-text-secondary">0{i + 1}</div>
              <span className="h-2 w-2 rounded-full bg-accent-blue" />
              <span className="text-lg font-semibold">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDERS ---------------- */
const FOUNDERS = [
  {
    name: "Sundaravel Arunkumar",
    role: "Director & Shareholder",
    initials: "SA",
    bio: "Engineering leader focused on building durable systems at the intersection of intelligence and infrastructure.",
  },
  {
    name: "Giridhar Golla",
    role: "Director & Shareholder",
    initials: "GG",
    bio: "Product and platform thinker driving EAURA's developer-focused product strategy and execution.",
  },
  {
    name: "Rushyanth Reddy Venkata Dronadula",
    role: "Director & Shareholder",
    initials: "RD",
    bio: "Systems engineer with a long-term view on automation, embedded computing and intelligent hardware.",
  },
];

function Founders() {
  return (
    <section id="founders" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Founders</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            The team building EAURA.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#0c1426_0%,#080d1c_100%)] p-7"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-accent-blue/30 to-accent-violet/20 text-xl font-semibold tracking-wide text-white">
                  {f.initials}
                </div>
                <h3 className="mt-7 text-[18px] font-semibold tracking-tight">{f.name}</h3>
                <div className="mt-1 text-[13px] text-text-secondary">{f.role}</div>
                <p className="mt-4 text-[14px] leading-relaxed text-text-secondary">{f.bio}</p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-white/[0.08]"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Let's Build the{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
              Future Together.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-[16px] text-text-secondary">
            Partner with EAURA, explore our products, or join us in engineering
            the next generation of intelligent systems.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contact@eaura.tech"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#050816] transition-all hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-white/[0.06]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Founders", "Careers", "Press"] },
    { title: "Products", links: ["ENVX", "NOVA", "Future Products"] },
    { title: "Technology", links: ["AI", "Infrastructure", "Robotics", "Embedded"] },
    { title: "Resources", links: ["Documentation", "Research", "Blog"] },
    { title: "Contact", links: ["contact@eaura.tech", "Partnerships", "Support"] },
  ];
  return (
    <footer className="border-t border-white/5 bg-[#04060f] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-blue to-accent-violet text-[11px] font-bold">
                E
              </span>
              <span className="text-[15px] font-semibold tracking-[0.18em]">EAURA</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-text-secondary">
              Engineering the future through intelligent technology.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-text-secondary transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-[12px] text-text-secondary md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} EAURA Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-white">GitHub</a>
            <a href="#" className="transition-colors hover:text-white">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
