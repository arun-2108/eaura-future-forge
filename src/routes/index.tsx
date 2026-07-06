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
      { title: "EAURA — Engineering the autonomic age" },
      {
        name: "description",
        content:
          "EAURA Pvt. Ltd. is a deep-technology company building the systems layer for intelligent infrastructure — across AI, robotics, and automation at scale.",
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
                Engineering the
                <br />
                <span className="bg-gradient-to-r from-ink via-ink-2 to-clay bg-clip-text text-transparent">
                  autonomic age.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-8 max-w-xl text-[18px] md:text-[20px] leading-[1.65] text-ink-2 tracking-[-0.01em] text-balance font-normal">
                We build the systems layer for intelligent infrastructure —
                AI, robotics, and automation operating at industrial scale.
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
              <span className="text-ink font-semibold text-[12px]">AI · Robotics · Infra</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">STAGE</span>
              <span className="text-ink font-semibold text-[12px]">Deep R&amp;D · Pre-launch</span>
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
                Six core disciplines.
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-ink-2/60 bg-clip-text text-transparent">
                  One unified systems standard.
                </span>
              </h2>
              <p className="mt-6 text-[17px] md:text-[19px] text-ink-2 max-w-2xl leading-[1.7] tracking-[-0.01em]">
                Every practice is integrated from design to manufacturing,
                ensuring no system operates in isolation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  Icon: Cpu,
                  title: "Applied AI",
                  desc: "Production-grade models, retrieval mechanics, and reasoning engines optimized for industrial telemetry.",
                  brief: "Applied AI Specifications",
                },
                {
                  Icon: Bot,
                  title: "Robotics",
                  desc: "Kinematics, dynamic feedback control, and embodied intelligence for real-world automation.",
                  brief: "Feedback Loops Architecture",
                },
                {
                  Icon: Network,
                  title: "Infrastructure",
                  desc: "Distributed execution, isolated networking layers, and computing systems built for critical loads.",
                  brief: "Edge Execution SLAs",
                },
                {
                  Icon: Workflow,
                  title: "Automation",
                  desc: "Autonomous operational cycles that eliminate latency across every production tier.",
                  brief: "Closed-Loop Cycle Telemetry",
                },
                {
                  Icon: Layers,
                  title: "Developer Platforms",
                  desc: "High-performance SDKs and compilation tools that feel intuitive to build on.",
                  brief: "Compiler & SDK Specs",
                },
                {
                  Icon: ShieldCheck,
                  title: "Intelligent Systems",
                  desc: "Closed-loop platforms designed to monitor, resolve, and report anomalies automatically.",
                  brief: "Anomaly Handler Details",
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

      {/* PRODUCT — ENVX (Premium Premium Dark Card) ──────────────── */}
      <section id="products" className="bg-bg py-16 md:py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Card className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0a0f1d] via-[#05070d] to-[#020306] border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.35)] min-h-[640px] md:min-h-[700px] flex items-center p-8 md:p-16 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.55)] transition-all duration-300">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(closest-side,rgba(41,151,255,0.08),transparent_80%)]" />
                <div className="absolute -bottom-40 -left-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(closest-side,rgba(94,92,230,0.08),transparent_80%)]" />
              </div>

              <div className="relative mx-auto w-full max-w-4xl py-12 text-center flex flex-col items-center z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-[0.2em] uppercase text-[#2997ff]">
                  CORE SUITE // ENVX
                </div>

                <h3 className="mt-6 font-display text-[44px] md:text-[76px] font-bold tracking-[-0.04em] leading-[1.0] text-white">
                  The environment for
                  <br />
                  <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                    critical operations.
                  </span>
                </h3>

                <p className="mx-auto mt-6 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-white/70 tracking-tight">
                  ENVX is an AI-native engineering studio. We combine sandboxed orchestration,
                  autonomous code compilation, and hardware-in-the-loop debugging onto a single
                  interface.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                  >
                    <a href="#contact">Request Early Access</a>
                  </Button>
                  <CTA href="#">Read the technical architecture brief</CTA>
                </div>

                {/* Mock code terminal container */}
                <div className="w-full max-w-2xl mt-12 bg-[#020408] rounded-xl border border-white/5 overflow-hidden text-left shadow-2xl font-mono text-[12px] leading-relaxed">
                  {/* Window chrome header */}
                  <div className="bg-[#0b0f19] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-[11px] text-white/40 uppercase tracking-widest font-mono">
                      envx // control_loop.rs
                    </div>
                    <div className="w-12" />
                  </div>
                  {/* Console body */}
                  <div className="p-5 overflow-x-auto text-white/80 select-none">
                    <div className="text-[#80cbc4] font-normal">
                      // Initializing telemetry feedback controller...
                    </div>
                    <div className="text-[#f77669]">
                      <span className="text-[#c792ea]">use</span> eaura_systems::prelude::*;
                    </div>
                    <div className="text-[#c792ea] mt-2">
                      fn <span className="text-[#82aaff]">optimize_flowrate</span>(node: &amp;mut
                      TelemetryNode) -&gt; Result&lt;(), CoreError&gt; &#123;
                    </div>
                    <div className="pl-4 text-[#89ddff]">
                      <span className="text-[#c792ea]">let</span> rate = node.read_flowrate();
                    </div>
                    <div className="pl-4 text-[#89ddff]">
                      <span className="text-[#c792ea]">if</span> rate &gt;{" "}
                      <span className="text-[#f78c6c]">480_000</span> &#123;
                    </div>
                    <div className="pl-8 text-[#f07178]">
                      node.dampen_latency(<span className="text-[#c792ea]">Duration</span>
                      ::from_millis(<span className="text-[#f78c6c]">18</span>))?;
                    </div>
                    <div className="pl-8 text-[#80cbc4]">
                      // System locking active, SLA compliance true
                    </div>
                    <div className="pl-8 text-[#c3e88d]">
                      node.set_compliance_flag(<span className="text-[#f78c6c]">true</span>);
                    </div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4 text-[#c792ea]">Ok(())</div>
                    <div>&#125;</div>
                    <div className="text-[#c3e88d] mt-2">
                      Running:{" "}
                      <span className="text-[#f78c6c]">cargo run --bin envx-controller</span>
                    </div>
                    <div className="text-emerald-400 font-semibold mt-1">
                      ✔ [OK] Telemetry nodes locked. Edge p99 verified: 18ms.
                    </div>
                  </div>
                </div>

                {/* Clean, detailed Telemetry Stats Box */}
                <div className="mt-16 w-full max-w-2xl grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                  {[
                    { val: "99.992%", key: "Core Availability", dot: "bg-emerald-500" },
                    { val: "18ms", key: "Edge p99 Latency", dot: "bg-blue-400" },
                    { val: "24/7", key: "Active Health Engine", dot: "bg-cyan-400" },
                  ].map(({ val, key, dot }) => (
                    <div
                      key={key}
                      className="bg-[#05070d]/90 py-6 px-4 flex flex-col items-center justify-center relative group"
                    >
                      <div className="font-mono text-xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                        />
                        {val}
                      </div>
                      <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT — NOVA (Split layout with Canvas Radar scope) */}
      <section id="nova" className="bg-bg py-16 md:py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Card className="relative overflow-hidden rounded-[24px] bg-surface-2 border border-hairline shadow-sm min-h-[580px] md:min-h-[640px] grid md:grid-cols-2 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 will-change-transform">
              <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 w-fit rounded-full border border-hairline bg-surface px-3 py-1 text-[11px] font-mono tracking-[0.2em] uppercase text-clay mb-6">
                  OPERATING AGENT // NOVA
                </div>
                <h3 className="font-display text-[38px] md:text-[56px] font-bold tracking-[-0.035em] leading-[1.04] text-ink">
                  Autonomous planes of physical control.
                </h3>
                <p className="mt-5 text-[16px] md:text-[18px] text-ink-2 leading-relaxed">
                  NOVA acts as a secure, distributed control plane for embodied robotics. Run
                  control feedback loops, sync remote telemetry, and safely handle edge actions at
                  scale.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 border-t border-hairline">
                  <CTA href="#">Request interface credentials</CTA>
                  <span className="inline-flex items-center gap-2 text-[12.5px] font-mono text-ink-2/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                    Private Sandbox Beta // v0.4
                  </span>
                </div>
              </div>

              {/* Advanced SVG animated Radar / telemetry visualization on the right */}
              <div className="relative min-h-[360px] md:min-h-full bg-gradient-to-br from-[#0c1322] via-[#07090e] to-[#030406] border-t md:border-t-0 md:border-l border-hairline overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(0,113,227,0.15), transparent 60%)",
                  }}
                />

                {/* Radar Grid Graphic */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
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
                  {/* Inner ring */}
                  <div className="absolute w-[50%] h-[50%] rounded-full border border-white/5" />

                  {/* Radar Sweep */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(41,151,255,0.12)_0deg,transparent_120deg)] origin-center"
                  />

                  {/* Floating Telemetry Targets (Blinking) */}
                  <motion.div
                    animate={{ opacity: [0.1, 0.9, 0.1] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
                    className="absolute top-1/4 left-1/4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <span className="h-2 w-2 rounded-full bg-clay shadow-[0_0_8px_rgba(0,113,227,0.8)]" />
                    <span className="font-mono text-[9px] text-[#2997ff]/60 tracking-wider">
                      TRK-24
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.1, 0.7, 0.1] }}
                    transition={{ duration: 4.2, repeat: Infinity, delay: 2.2 }}
                    className="absolute bottom-1/3 right-1/4 flex items-center gap-1.5 pointer-events-none"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="font-mono text-[9px] text-emerald-400/60 tracking-wider">
                      TRK-09
                    </span>
                  </motion.div>

                  {/* Pulsating Center Node */}
                  <div className="absolute w-6 h-6 rounded-full bg-clay/20 border border-clay flex items-center justify-center shadow-lg shadow-clay/35">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>

                  {/* Telemetry labels */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest text-white/30">
                    NOVA // CENTERED POINT
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest text-emerald-400/70 uppercase">
                    SYS.LOCKED
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
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
                We build computing, control, and intelligence systems
                for the next generation of physical infrastructure.
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
