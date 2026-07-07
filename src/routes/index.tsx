import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
import { AbstractTechVisualization } from "@/components/site/AbstractTechVisualization";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "EAURA — Building Intelligent Products That Matter" },
      {
        name: "description",
        content:
          "EAURA is a technology product company building intelligent software, AI-powered platforms and engineering solutions that solve meaningful real-world problems across education, developer productivity and intelligent automation.",
      },
    ],
  }),
});

// ── Standardized Design System Text Button (CTA) ─────────────────────────────
function CTA({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild variant="link" className={className}>
      <a href={href} className="group inline-flex items-center gap-1">
        <span>{children}</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </Button>
  );
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Live telemetry flowrate state (simulation)
  const [opsValue, setOpsValue] = useState(486212);
  useEffect(() => {
    const interval = setInterval(() => {
      setOpsValue((prev) => prev + Math.floor((Math.random() - 0.5) * 110));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Spring-based mouse coordinates for premium smooth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transform bindings - refined for subtle high-fidelity depth control
  const textTranslateX = useTransform(smoothMouseX, [-300, 300], [-4, 4]);
  const textTranslateY = useTransform(smoothMouseY, [-300, 300], [-4, 4]);
  const cardRotateX = useTransform(smoothMouseY, [-300, 300], [2, -2]);
  const cardRotateY = useTransform(smoothMouseX, [-300, 300], [-2, 2]);
  const bgTranslateX = useTransform(smoothMouseX, [-300, 300], [-6, 6]);
  const bgTranslateY = useTransform(smoothMouseY, [-300, 300], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen bg-bg text-ink antialiased overflow-x-hidden">
      <Nav />

      {/* HERO — Centered layout with interactive background & 3D Parallax */}
      <section
        ref={heroRef}
        id="company"
        aria-label="EAURA — Deep Technology Company"
        className="relative overflow-hidden bg-surface min-h-[92vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Network Canvas */}
        <AbstractTechVisualization />

        {/* Subtle radial overlay on the canvas for depth */}
        <motion.div
          style={{ x: bgTranslateX, y: bgTranslateY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_80%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-6 w-full z-10 text-center flex flex-col items-center">
          <motion.div
            style={{ x: textTranslateX, y: textTranslateY }}
            className="max-w-4xl flex flex-col items-center"
          >
            <Reveal>
              <p className="text-[11px] md:text-[12px] font-semibold text-clay tracking-[0.22em] uppercase mb-5">
                Deep Technology · Intelligent Systems
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-bold tracking-[-0.04em] text-[48px] leading-[1.02] md:text-[92px] md:leading-[0.94] text-balance text-ink">
                Building intelligent
                <br />
                <span className="bg-gradient-to-r from-ink via-ink-2 to-clay bg-clip-text text-transparent">
                  products that matter.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-8 max-w-3xl text-[18px] md:text-[20px] leading-[1.65] text-ink-2 tracking-[-0.01em] text-balance font-normal">
                EAURA is a technology product company building intelligent software, AI-powered platforms and engineering solutions that solve meaningful real-world problems across education, developer productivity and intelligent automation.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-clay/5 hover:shadow-lg hover:shadow-clay/10 hover:-translate-y-px transition-all duration-200"
                >
                  <a href="#contact">Request Access</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold border border-ink/15 bg-transparent hover:bg-surface hover:border-ink/25 text-ink transition-all duration-200"
                >
                  <a href="#philosophy">Explore Architecture</a>
                </Button>
              </div>
            </Reveal>
          </motion.div>

          {/* 3D Tilting Hero Telemetry Card */}
          <Reveal delay={0.2} className="w-full">
            <div className="relative mt-16 md:mt-24 w-full max-w-4xl" style={{ perspective: 1200 }}>
              <motion.div
                style={{
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative aspect-[16/9] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0c1424] via-[#090d16] to-[#04060b] border border-white/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.45)] flex flex-col justify-between p-6 md:p-10 group"
              >
                {/* Tech grid texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Card header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">
                      SYSTEM STATE: ACTIVE
                    </span>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">
                    EAURA // OPERATIONAL REPORT
                  </div>
                </div>

                {/* Subtitle center metrics placeholder */}
                <div
                  className="flex flex-col items-center justify-center my-auto z-10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="text-[11px] font-mono tracking-[0.3em] uppercase text-clay mb-2">
                    AUTONOMOUS FLOWRATE
                  </div>
                  <div className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white">
                    {opsValue.toLocaleString()}{" "}
                    <span className="text-xl md:text-2xl font-light text-white/50">OPS/S</span>
                  </div>
                  <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mt-4" />
                </div>

                {/* Card footer */}
                <div
                  className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 z-10"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="text-left">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                      INFRASTRUCTURE HEALTH
                    </div>
                    <div className="mt-1 font-display text-xl font-medium tracking-tight text-white flex items-center gap-2">
                      99.98% SLA
                      <span className="text-xs font-mono text-emerald-400 font-normal">
                        // VERIFIED
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href="#products">Telemetry Node</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP — Credential bar with vertical dividers */}
      <section className="border-y border-hairline bg-bg z-10 relative" aria-label="Company credentials">
        <div className="mx-auto max-w-6xl px-6 py-9">
          <div className="grid grid-cols-2 md:grid-cols-5 text-center md:text-left text-[11px] font-mono uppercase tracking-[0.2em] text-ink-2 divide-y md:divide-y-0 divide-hairline md:divide-x md:divide-hairline">
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">ENTITY</span>
              <span className="text-ink font-semibold text-[12px]">EAURA Pvt. Ltd.</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">ORIGIN</span>
              <span className="text-ink font-semibold text-[12px]">India · Global</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">DOMAIN</span>
              <span className="text-ink font-semibold text-[12px]">Intelligent Software & Platforms</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">STAGE</span>
              <span className="text-ink font-semibold text-[12px]">Product Rollout & Growth</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8 col-span-2 md:col-span-1">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">ESTABLISHED</span>
              <span className="text-ink font-semibold text-[12px]">Est. 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — Text-forward minimal design system section */}
      <section
        id="philosophy"
        className="bg-surface py-28 md:py-36 border-t border-hairline relative"
      >
        {/* Decorative thin vertical grid accents */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-hairline/40 hidden lg:block" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Core Philosophy
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-ink">
                Principles over presets.
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-clay bg-clip-text text-transparent">
                  Systems built to last.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-hairline gap-y-12 lg:gap-y-0 gap-x-0 lg:gap-x-12">
              {[
                {
                  num: "I",
                  title: "Timelessness",
                  desc: "We construct software and hardware systems designed to outlast ephemeral trends. This means simple abstractions, low runtime overhead, and technical longevity.",
                },
                {
                  num: "II",
                  title: "Edge Autonomy",
                  desc: "Systems must execute reliably where the physics happens. We build closed-loop, deterministic execution models that run independently of external cloud variables.",
                },
                {
                  num: "III",
                  title: "High Precision",
                  desc: "Obsessive rigor is our default framework. From mathematical models to hardware-in-the-loop stresses, every code branch is simulated and statically validated.",
                },
              ].map(({ num, title, desc }, idx) => (
                <div
                  key={num}
                  className={`flex flex-col justify-between group ${idx > 0 ? "lg:pl-12 pt-12 lg:pt-0" : ""}`}
                  role="listitem"
                >
                  <div>
                    <div className="font-mono text-clay text-[13px] tracking-widest font-semibold flex items-center gap-2">
                      <span className="h-[1px] w-6 bg-clay/35" />
                      PILLAR // {num}
                    </div>
                    <h3 className="mt-6 font-display text-[22px] font-bold tracking-tight text-ink group-hover:text-clay transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink-2 font-normal">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES — Generously spaced 3-column layout */}
      <section id="capabilities" className="bg-bg py-28 md:py-36 border-t border-hairline relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Capabilities
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-balance text-ink">
                Three core domains.
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-ink-2/60 bg-clip-text text-transparent">
                  First-principles engineering.
                </span>
              </h2>
              <p className="mt-6 text-[17px] md:text-[19px] text-ink-2 max-w-2xl leading-[1.7] tracking-[-0.01em]">
                We build intelligent software, AI-powered platforms and engineering solutions that integrate hardware simulation with high-scale automation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  Icon: Cpu,
                  title: "Intelligent Education",
                  desc: "Next-generation engineering platforms featuring secure compilers, real-time waveform visualization, and gamified skill verification.",
                  brief: "Ecosystem Specs",
                },
                {
                  Icon: Layers,
                  title: "Developer Productivity",
                  desc: "AI-native engineering studios, compiler optimization layers, and unified debuggers built for low-latency operational control.",
                  brief: "Developer SLA Details",
                },
                {
                  Icon: Bot,
                  title: "Intelligent Automation",
                  desc: "Distributed control planes, embodied robotics feedback loops, and secure execution telemetry at physical infrastructure scales.",
                  brief: "Feedback Loop Architecture",
                },
                {
                  Icon: Network,
                  title: "Applied Deep Learning",
                  desc: "Domain-specific reasoning models, semantic search arrays, and custom telemetry parsers built for complex industrial environments.",
                  brief: "Reasoning Model Specs",
                },
                {
                  Icon: Workflow,
                  title: "Systems Engineering",
                  desc: "Low-overhead abstractions, deterministic code execution, and high-performance compilation toolchains designed for peak stability.",
                  brief: "Compiler & SDK Specs",
                },
                {
                  Icon: ShieldCheck,
                  title: "Hardware Integration",
                  desc: "Edge-to-cloud synthesis, logic simulation environments, and automated hardware-in-the-loop stress testing pipelines.",
                  brief: "Simulation Handler Details",
                },
              ].map(({ Icon, title, desc, brief }) => (
                <Card
                  key={title}
                  className="group relative bg-bg hover:bg-surface border-hairline flex flex-col justify-between hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 will-change-transform"
                >
                  <CardHeader className="p-8 pb-0 flex-grow">
                    <div className="h-11 w-11 rounded-xl bg-surface border border-hairline grid place-items-center text-ink-2 transition-all duration-300 group-hover:bg-clay group-hover:text-white group-hover:border-clay/20 group-hover:shadow-md group-hover:shadow-clay/20">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <CardTitle className="mt-6 text-[21px] text-ink">{title}</CardTitle>
                    <CardDescription className="mt-3 text-ink-2 leading-relaxed">
                      {desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-6 border-t border-hairline/40 mt-8">
                    <CTA href="#">{brief}</CTA>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS SECTION — ELEKKI (Flagship) & Core Suites (ENVX, NOVA) ──────────────── */}
      <section id="products" className="bg-bg py-24 md:py-32 border-t border-hairline relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Flagship Offering
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-ink">
                Intelligent infrastructure.
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-clay bg-clip-text text-transparent">
                  Designed for scale.
                </span>
              </h2>
            </div>
          </Reveal>

          {/* 1. Flagship Product: ELEKKI */}
          <Reveal delay={0.05}>
            <Card className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#080711] via-[#030206] to-[#010103] border border-violet-500/20 shadow-[0_30px_90px_-20px_rgba(94,92,230,0.15)] min-h-[500px] flex items-center p-8 md:p-16 hover:shadow-[0_40px_100px_-20px_rgba(94,92,230,0.25)] transition-all duration-300 group">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(closest-side,rgba(94,92,230,0.12),transparent_80%)]" />
                <div className="absolute -bottom-40 -left-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.06),transparent_80%)]" />
              </div>

              <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center z-10">
                <div className="text-left flex flex-col items-start">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-violet-400">
                      FLAGSHIP PLATFORM
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-emerald-400">
                      COMING SOON
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-white/50">
                      BUILT BY EAURA
                    </span>
                  </div>

                  <h3 className="font-display text-[44px] md:text-[68px] font-bold tracking-[-0.04em] leading-[1.0] text-white">
                    ELEKKI
                  </h3>

                  <p className="mt-4 text-[18px] md:text-[20px] font-semibold text-white/90 leading-snug">
                    The Complete Skill Development Ecosystem for Electronics &amp; Communication Engineers.
                  </p>

                  <p className="mt-4 text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
                    If LeetCode transformed coding interview preparation, ELEKKI is building the platform that transforms how ECE students learn, practice, validate, and showcase industry-ready skills.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 py-6 text-base font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/10 hover:shadow-lg hover:shadow-violet-600/20 hover:-translate-y-px transition-all duration-200"
                    >
                      <a href="/elekki">Explore ELEKKI</a>
                    </Button>
                    <CTA href="/elekki#waitlist">Join Waitlist</CTA>
                  </div>
                </div>

                {/* Conceptual preview graphic on the right */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[350px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Mock dashboard element header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-violet-500 animate-pulse" />
                      <span className="font-mono text-[10px] tracking-wider text-white/60">ELEKKI.DASHBOARD.PREVIEW</span>
                    </div>
                    <span className="font-mono text-[9px] text-[#06b6d4]">SYSTEM: ONLINE</span>
                  </div>

                  {/* Mock analytics metrics */}
                  <div className="my-auto grid grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] font-mono text-white/40 block mb-1">SKILL LEVEL</span>
                      <span className="text-xl font-bold font-display text-white">Lvl 4</span>
                      <span className="text-[9px] font-mono text-emerald-400 block mt-1">+12% this week</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] font-mono text-white/40 block mb-1">CHALLENGES</span>
                      <span className="text-xl font-bold font-display text-white">42 / 100</span>
                      <span className="text-[9px] font-mono text-violet-400 block mt-1">Next: UART Rx</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] font-mono text-white/40 block mb-1">GLOBAL RANK</span>
                      <span className="text-xl font-bold font-display text-white">#142</span>
                      <span className="text-[9px] font-mono text-[#06b6d4] block mt-1">Top 2% Globally</span>
                    </div>
                  </div>

                  {/* Mock progress bar */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                    <div className="flex justify-between text-[10px] font-mono text-white/40">
                      <span>RTL DESIGN (VERILOG) PROGRESS</span>
                      <span className="text-white/80">68%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[68%] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Sub-header for other suites */}
          <Reveal delay={0.1}>
            <div className="mt-28 mb-12 text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Core Architectures &amp; Suites
              </div>
              <h3 className="mt-3 font-display text-[28px] md:text-[38px] font-bold tracking-tight text-ink">
                Autonomic Infrastructure Systems
              </h3>
            </div>
          </Reveal>

          {/* Grid for ENVX and NOVA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 2. Core Suite: ENVX */}
            <Reveal delay={0.15}>
              <Card className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0a0f1d] via-[#05070d] to-[#020306] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col justify-between p-8 md:p-10 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Subtle ambient lighting */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-40 -right-32 w-[350px] h-[350px] rounded-full bg-[radial-gradient(closest-side,rgba(41,151,255,0.06),transparent_80%)]" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-[0.2em] uppercase text-[#2997ff]">
                      CORE SUITE // ENVX
                    </div>

                    <h4 className="mt-6 font-display text-[28px] md:text-[34px] font-bold tracking-tight text-white leading-tight">
                      Critical Operations Environment.
                    </h4>

                    <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/70">
                      ENVX is an AI-native engineering studio. We combine sandboxed orchestration, autonomous code compilation, and hardware-in-the-loop debugging onto a single interface.
                    </p>
                  </div>

                  {/* Compact Terminal View */}
                  <div className="w-full mt-6 bg-[#020408] rounded-xl border border-white/5 overflow-hidden text-left shadow-2xl font-mono text-[11px] leading-normal">
                    <div className="bg-[#0b0f19] px-3 py-2 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest">envx // control_loop.rs</div>
                    </div>
                    <div className="p-4 text-white/80 select-none overflow-x-auto max-h-[140px] scrollbar-thin">
                      <div className="text-[#80cbc4]">// Initializing controller...</div>
                      <div className="text-[#f77669]">use <span className="text-[#c792ea]">eaura_systems::prelude::*;</span></div>
                      <div className="text-[#89ddff] mt-1"><span className="text-[#c792ea]">let</span> rate = node.read_flowrate();</div>
                      <div className="text-emerald-400 font-semibold mt-1">✔ [OK] Edge p99 verified: 18ms.</div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <a href="#contact">Request Access</a>
                    </Button>
                    <CTA href="#" className="text-white/60">Read Specs</CTA>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* 3. Core Suite: NOVA */}
            <Reveal delay={0.25}>
              <Card className="relative overflow-hidden rounded-[24px] bg-surface-2 border border-hairline shadow-sm flex flex-col justify-between p-8 md:p-10 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                      OPERATING AGENT // NOVA
                    </div>

                    <h4 className="mt-6 font-display text-[28px] md:text-[34px] font-bold tracking-tight text-ink leading-tight">
                      Physical Control Planes.
                    </h4>

                    <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-ink-2">
                      NOVA acts as a secure, distributed control plane for embodied robotics. Run control feedback loops, sync remote telemetry, and safely handle edge actions at scale.
                    </p>
                  </div>

                  {/* Compact SVG animated Radar */}
                  <div className="relative h-[160px] bg-gradient-to-br from-[#0c1322] via-[#07090e] to-[#030406] border border-hairline rounded-xl overflow-hidden flex items-center justify-center mt-6">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.1),transparent_60%)]" />
                    
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      {/* Outer spinning ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-white/5 border-dashed"
                      />
                      {/* Mid spinning ring */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[80%] h-[80%] rounded-full border border-white/10"
                      />
                      {/* Sweep */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(41,151,255,0.08)_0deg,transparent_120deg)] origin-center"
                      />
                      {/* Pulsating Center */}
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-clay/20 border border-clay flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-hairline">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-2/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                      Sandbox Beta // v0.4
                    </span>
                    <CTA href="#">Interface Access</CTA>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEARCH PIPELINE — High-end horizontal progression tracking */}
      <section id="research" className="bg-bg py-28 md:py-36 border-t border-hairline relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Research Cycle
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-ink">
                From first-principles
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-ink-2/60 bg-clip-text text-transparent">
                  to industrial infrastructure.
                </span>
              </h2>
              <p className="mt-6 text-[17px] md:text-[18px] text-ink-2 max-w-xl leading-[1.7] tracking-[-0.01em]">
                Every system we ship has been mathematically modelled, physically simulated,
                and stress-tested across isolated environments before a single line of production code is written.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-20 relative">
              {/* Desktop horizontal track line — aligned to center of 48px circles = top-6 (24px) */}
              <div className="absolute left-10 right-10 top-[24px] h-[1px] bg-hairline/60 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {[
                  [
                    "01",
                    "Mathematical Modeling",
                    "First-principles evaluation, architecture scoping, and rigorous safety simulations.",
                  ],
                  [
                    "02",
                    "Hardware Testing",
                    "Prototype cycles, localized test environments, and hardware-in-the-loop stress tests.",
                  ],
                  [
                    "03",
                    "Operational Pilot",
                    "Deployments inside isolated partner environments, tracking metrics at millisecond intervals.",
                  ],
                  [
                    "04",
                    "Scale-Out Production",
                    "Production lock, infrastructure hardening, and integration onto our primary SLA frameworks.",
                  ],
                ].map(([num, title, body]) => (
                  <div key={num} className="relative flex flex-col items-start group">
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-bg border border-hairline font-mono text-[13px] font-semibold text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-bg group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-ink/12">
                        {num}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[20px] font-bold tracking-tight text-ink">
                      {title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP — Clean profiles, subtle hover overlays */}
      <section
        id="founders"
        className="bg-surface py-28 md:py-36 border-t border-hairline relative"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Leadership
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[60px] font-bold tracking-[-0.03em] leading-[1.02] text-balance text-ink">
                Built and led
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-ink-2/60 bg-clip-text text-transparent">
                  by engineers.
                </span>
              </h2>
              <p className="mt-5 text-[17px] text-ink-2 max-w-xl leading-[1.7] tracking-[-0.01em]">
                Our leadership team brings deep technical expertise in systems engineering,
                applied AI, and capital strategy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rushyanth Reddy",
                  role: "Chief Executive Officer",
                  bio: "Sets the long-term technical vision. Leads system architecture decisions, strategic partnerships, and the engineering organization.",
                  gradient: "from-[#080d1a] via-[#0e162b] to-[#1d2d54]",
                  image: "/directors/director1.jpg",
                  linkedin: "#",
                },
                {
                  name: "Giridhar Golla",
                  role: "Chief Financial Officer",
                  bio: "Manages financial strategy, capital allocation, and corporate operations, aligning financial frameworks with enterprise growth.",
                  gradient: "from-[#0d0e12] via-[#14161f] to-[#252838]",
                  image: "/directors/director2_cropped.png",
                  linkedin: "https://www.linkedin.com/in/giridhar-golla-26a646336/",
                  objectPosition: "center 15%",
                },
                {
                  name: "Rushyanth Reddy",
                  role: "Chief Technology Officer",
                  bio: "Coordinates the engineering organization, owning compiler frameworks, deep learning libraries, and hardware integration pipelines.",
                  gradient: "from-[#0a1410] via-[#11241a] to-[#254b38]",
                  image: "/directors/director3_cropped.png",
                  linkedin: "https://www.linkedin.com/in/rushyanth-reddy-67a436335/",
                  objectPosition: "center 45%",
                },
              ].map((p) => (
                <Card
                  key={p.name}
                  className="group relative overflow-hidden rounded-[24px] bg-bg border border-hairline hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 will-change-transform"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden flex items-end p-6 border-b border-hairline`}
                  >
                    {/* Render Image if available */}
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ objectPosition: p.objectPosition || "center" }}
                        onError={(e) => {
                          // Hide image on error (e.g. if file is missing) to fall back cleanly to gradient
                          e.currentTarget.style.display = "none";
                        }}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    {/* Gradient Overlay for text contrast when image is loaded */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Minimal Grid Overlay */}
                    <div
                      className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 60%)",
                      }}
                    />

                    <div className="flex items-end justify-between w-full z-10">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
                          {p.role}
                        </div>
                        <div className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white">
                          {p.name}
                        </div>
                      </div>
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} on LinkedIn`}
                        className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 hover:border-white/35 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-black/20"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <CardDescription className="text-ink-2">{p.bio}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT — Large typography, minimalist layout */}
      <section id="contact" className="bg-surface py-28 md:py-40 border-t border-hairline relative overflow-hidden">
        {/* Subtle radial ambient */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.05),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center flex flex-col items-center z-10">
          <Reveal>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-clay mb-6">Get in touch</p>
            <h2 className="font-display text-[48px] md:text-[88px] font-bold tracking-[-0.04em] leading-[1.0] text-ink text-balance">
              Partner with <span className="text-clay">EAURA.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-[17px] md:text-[20px] leading-[1.65] text-ink-2 tracking-[-0.01em] text-balance">
              Reach out to evaluate integration paths, sandbox access, or infrastructure requirements.
              Our technical team responds within one business day.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a
                href="mailto:hello@eaura.com"
                className="group inline-flex items-center justify-center rounded-full bg-ink text-bg border border-transparent px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:bg-clay hover:text-white hover:-translate-y-px shadow-md shadow-ink/10 hover:shadow-lg hover:shadow-clay/20"
              >
                hello@eaura.com
                <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <CTA href="#">View open engineering roles</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER — Premium aligned columns */}
      <footer className="border-t border-hairline bg-surface-2 relative">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 text-[13.5px]">
            <div className="col-span-2">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-bg text-[12px] font-bold font-display">
                  E
                </span>
                <span className="font-display text-[15px] font-bold tracking-[0.25em] text-ink">
                  EAURA
                </span>
              </div>
              <p className="mt-5 max-w-xs text-ink-2 leading-[1.7] text-[13.5px] font-normal">
                Building intelligent software, AI-powered platforms and engineering solutions that solve meaningful real-world problems.
              </p>
            </div>
            {[
              ["Company", ["About", "Leadership", "Research", "Careers"]],
              ["Products", ["ENVX", "NOVA", "Roadmap"]],
              ["Contact", ["hello@eaura.com", "Press", "Partners"]],
            ].map(([title, items]) => (
              <div key={title as string} className="flex flex-col">
                <div className="font-semibold text-ink tracking-wide">{title}</div>
                <ul className="mt-4 space-y-3 text-ink-2">
                  {(items as string[]).map((i) => (
                    <li key={i}>
                      <a href="#" className="link-hover hover:text-ink transition-colors duration-200">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-hairline/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12.5px] text-ink-2 font-normal">
            <div>© {new Date().getFullYear()} EAURA Pvt. Ltd. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="link-hover hover:text-ink transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="link-hover hover:text-ink transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="link-hover hover:text-ink transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
