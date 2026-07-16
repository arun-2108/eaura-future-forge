// ────────────────────────────────────────────────────────────────────────────
//  EAURA — Cinematic Storytelling Landing Page
//  A scroll-driven, scene-by-scene experience
// ────────────────────────────────────────────────────────────────────────────
import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  X,
  Loader2,
  Bot,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Linkedin,
  ChevronRight,
  Layers,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import {
  CursorSpotlight,
  FloatingProductChips,
  TechChipCloud,
  ScrollingChipMarquee,
  BentoGrid,
  TiltCard,
  FounderFlipCard,
  AchievementCards,
  AnimatedStackCards,
  MagneticButton,
  StatusBadge,
  type StackCardItem,
} from "@/components/site/PremiumComponents";

// ── ROUTE ─────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "EAURA — Intelligence, Engineered" },
      {
        name: "description",
        content:
          "EAURA builds AI-powered software, developer tools and engineering platforms that solve meaningful problems and create lasting impact.",
      },
    ],
  }),
});

// ── AMBIENT BACKGROUND — Evolves as you scroll ────────────────────────────────
function AmbientBackground({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const bx = useTransform(mouseX, [-600, 600], [-25, 25]);
  const by = useTransform(mouseY, [-400, 400], [-15, 15]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#05070A]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Moving glow orbs */}
      <motion.div style={{ x: bx, y: by }} className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.07),transparent_80%)] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.06),transparent_80%)] blur-3xl" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.04),transparent_80%)] blur-3xl" />
      </motion.div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

// ── SCENE 1: HERO ─────────────────────────────────────────────────────────────
function SceneHero({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const tx = useTransform(mouseX, [-600, 600], [-18, 18]);
  const ty = useTransform(mouseY, [-400, 400], [-12, 12]);
  const tx2 = useTransform(mouseX, [-600, 600], [-30, 30]);
  const ty2 = useTransform(mouseY, [-400, 400], [-20, 20]);

  return (
    <section
      ref={ref}
      id="company"
      className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="EAURA — Intelligent Technology"
    >
      {/* Floating product chips — diagonal magnetic spring layout */}
      <FloatingProductChips />
      <motion.div
        style={{ y: yText, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <span className="h-px w-12 bg-accent-cyan/60" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-ink-2/60">
            Est. 2025 · DPIIT Recognized · India
          </span>
          <span className="h-px w-12 bg-accent-cyan/60" />
        </motion.div>

        {/* EAURA massive wordmark */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black tracking-[-0.05em] leading-[0.9] select-none"
            style={{ fontSize: "clamp(80px, 16vw, 220px)" }}
          >
            <span className="bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent">
              EAURA
            </span>
          </motion.h1>

          {/* Floating accent behind */}
          <motion.div
            style={{ x: tx2, y: ty2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="opacity-15 font-display font-black tracking-[-0.05em] leading-[0.9] bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(80px, 16vw, 220px)" }}
              aria-hidden="true"
            >
              EAURA
            </div>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[20px] md:text-[28px] font-light tracking-[-0.02em] text-ink-2/70 max-w-2xl"
        >
          Intelligence, Engineered.
        </motion.p>

        {/* Floating chips */}
        <motion.div
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {["AI Automation", "Developer Tools", "EdTech"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-[12px] font-mono text-ink-2/70 tracking-wide"
            >
              <span className="h-1 w-1 rounded-full bg-accent-cyan animate-pulse" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex items-center gap-6"
        >
          <button
            onClick={() => document.getElementById("nova")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 rounded-full bg-accent-cyan text-[#05070A] px-8 py-4 text-[14px] font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 shadow-lg shadow-accent-cyan/20"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#philosophy"
            onClick={(e) => { e.preventDefault(); document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-[14px] font-mono text-ink-2/60 hover:text-ink-2 transition-colors duration-200 underline underline-offset-4 decoration-white/20"
          >
            Our story ↓
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-accent-cyan/60 to-transparent"
          />
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-ink-2/30">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── SCENE 2: PHILOSOPHY ───────────────────────────────────────────────────────
function ScenePhilosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const pillars = [
    { num: "I", title: "Timelessness", desc: "Software built to outlast ephemeral trends." },
    { num: "II", title: "Edge Autonomy", desc: "Systems that execute independently of cloud variables." },
    { num: "III", title: "High Precision", desc: "Obsessive rigor at every layer of the stack." },
  ];

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative z-10 min-h-screen flex items-center py-32 overflow-hidden"
      aria-label="Core Philosophy"
    >
      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left: Massive text block */}
          <motion.div style={{ y: yLeft }} className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent-cyan/70">
                Core Philosophy
              </span>
              <h2
                className="mt-6 font-display font-black tracking-[-0.04em] leading-[0.9] text-ink"
                style={{ fontSize: "clamp(54px, 8vw, 110px)" }}
              >
                Principles
                <br />
                <span className="bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent">
                  over
                </span>
                <br />
                presets.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 text-[17px] leading-[1.75] text-ink-2/70 max-w-md font-normal"
            >
              We don't build for demos. We build for decades. Every product
              begins with first principles and ends with hardware-in-the-loop
              validation.
            </motion.p>
          </motion.div>

          {/* Right: Pillar cards stacked */}
          <motion.div style={{ y: yRight }} className="flex flex-col gap-0">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group border-t border-white/8 py-8 cursor-default"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-accent-cyan/50 mt-1 tracking-widest shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[22px] text-ink group-hover:text-accent-cyan transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-ink-2/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SCENE 3: NOVA ─────────────────────────────────────────────────────────────
function SceneNova() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMockup = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1]);

  return (
    <section
      ref={ref}
      id="nova"
      className="relative z-10 min-h-screen flex items-center py-28 overflow-hidden"
      aria-label="NOVA Product"
    >
      {/* Big NOVA label in background */}
      <div
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 font-display font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-[-0.05em]"
        style={{ fontSize: "clamp(200px, 30vw, 420px)" }}
        aria-hidden="true"
      >
        NOVA
      </div>

      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-emerald-500/60" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400/80">
                  Consumer AI · MVP
                </span>
              </div>

              <h2
                className="font-display font-black tracking-[-0.05em] leading-[0.88] text-ink"
                style={{ fontSize: "clamp(72px, 11vw, 150px)" }}
              >
                NOVA
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-2/70 max-w-lg">
                An intelligent next-generation AI companion designed to simplify
                everyday life through natural conversations, proactive assistance,
                and intelligent automation.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Context-aware interactive companion logic",
                  "Anticipates scheduling, workflow, and analysis queries",
                  "Automates code generation and telemetry pipelines",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-ink-2/60">
                    <span className="h-5 w-5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="/nova"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-accent-cyan hover:text-white transition-colors duration-200"
                >
                  Explore NOVA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Floating mockup */}
          <motion.div style={{ y: yMockup, rotate, scale }} className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.12),transparent_80%)] blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass-card rounded-3xl p-6 shadow-2xl shadow-black/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/8 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[9px] tracking-wider text-ink-2/50">NOVA // ASSISTANT CORE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Pulsating orb */}
              <div className="flex items-center justify-center py-10">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="h-28 w-28 rounded-full bg-gradient-to-tr from-accent-cyan/20 via-blue-500/10 to-violet-500/20 border border-accent-cyan/30 flex items-center justify-center shadow-lg shadow-accent-cyan/10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-16 w-16 rounded-full bg-accent-cyan/20 flex items-center justify-center border border-white/10"
                  >
                    <Bot size={24} className="text-accent-cyan" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Chat bubbles */}
              <div className="flex flex-col gap-3 font-mono text-[11px] text-left">
                <div className="bg-white/5 border border-white/8 p-3 rounded-2xl max-w-[85%] rounded-tl-none">
                  <span className="text-accent-cyan block font-bold mb-1">User</span>
                  NOVA, compile the daily simulation test status.
                </div>
                <div className="bg-accent-cyan/5 border border-accent-cyan/15 p-3 rounded-2xl max-w-[85%] self-end rounded-tr-none text-right">
                  <span className="text-blue-400 block font-bold mb-1">NOVA</span>
                  Running test suite. Detected 2 warnings in sequence_detector.v. Logs generated.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SCENE 4: ELEKKI ───────────────────────────────────────────────────────────
function SceneElekki() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMockup = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section
      ref={ref}
      id="elekki"
      className="relative z-10 min-h-screen flex items-center py-28 overflow-hidden"
      aria-label="ELEKKI Product"
    >
      {/* Big label in background */}
      <div
        className="absolute left-[-8%] top-1/2 -translate-y-1/2 font-display font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-[-0.05em]"
        style={{ fontSize: "clamp(200px, 30vw, 420px)" }}
        aria-hidden="true"
      >
        ELEKKI
      </div>

      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

          {/* Left: Floating mockup */}
          <motion.div style={{ y: yMockup, rotate }} className="relative order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent_80%)] blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass-card rounded-3xl p-6 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center justify-between border-b border-white/8 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="font-mono text-[9px] tracking-wider text-ink-2/50">ELEKKI.SYSTEM.PREVIEW</span>
                </div>
                <span className="font-mono text-[8px] text-violet-400">SANDBOX COMPILED</span>
              </div>

              <div className="my-4 flex flex-col gap-4">
                {[
                  { name: "Verilog / FSM Logic", val: 85, color: "bg-violet-500" },
                  { name: "4-to-1 Multiplexer", val: 100, color: "bg-emerald-400" },
                  { name: "D Flip-Flop Storage", val: 68, color: "bg-accent-cyan" },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col gap-1.5 text-[11px] font-mono text-left">
                    <div className="flex justify-between text-ink-2/60">
                      <span>{item.name}</span>
                      <span className="text-ink font-semibold">{item.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.val}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 pt-4 flex justify-between text-[10px] font-mono text-ink-2/50">
                <span>Rank: Top 2% Globally</span>
                <span className="text-violet-400">14,820 XP</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-violet-500/60" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-violet-400/80">
                  EdTech · Beta
                </span>
              </div>

              <h2
                className="font-display font-black tracking-[-0.05em] leading-[0.88] text-ink"
                style={{ fontSize: "clamp(72px, 11vw, 150px)" }}
              >
                ELEKKI
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-2/70 max-w-lg">
                The complete skill development ecosystem for Electronics and
                Communication Engineering students — learning, practice,
                assessments and career readiness in one unified platform.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Conceptual tracks with secure client-side simulators",
                  "Gamified ECE skill progression and rankings",
                  "Direct recruitment pipelines to silicon employers",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-ink-2/60">
                    <span className="h-5 w-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="/elekki"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-violet-400 hover:text-white transition-colors duration-200"
                >
                  Explore ELEKKI
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SCENE 5: ENVX ─────────────────────────────────────────────────────────────
function SceneEnvx() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMockup = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section
      ref={ref}
      id="products"
      className="relative z-10 min-h-screen flex items-center py-28 overflow-hidden"
      aria-label="ENVX Product"
    >
      <div
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 font-display font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-[-0.05em]"
        style={{ fontSize: "clamp(200px, 30vw, 420px)" }}
        aria-hidden="true"
      >
        ENVX
      </div>

      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-emerald-500/60" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-emerald-400/80">
                  Developer Infrastructure · MVP
                </span>
              </div>

              <h2
                className="font-display font-black tracking-[-0.05em] leading-[0.88] text-ink"
                style={{ fontSize: "clamp(72px, 11vw, 150px)" }}
              >
                ENVX
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-2/70 max-w-lg">
                A secure CLI-first environment variable management platform
                enabling development teams to synchronize secrets safely with
                AES-256 encryption and enterprise-grade audit trails.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Zero-trust variables via AES-256 payload encryption",
                  "GitHub Authentication for single sign-on integration",
                  "Traceable audit trails for every sync cycle",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-ink-2/60">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <button
                  onClick={() => window.open("https://envx-eight.vercel.app/", "_blank", "noopener,noreferrer")}
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-400 hover:text-white transition-colors duration-200"
                >
                  Explore ENVX
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Terminal mockup */}
          <motion.div style={{ y: yMockup, rotate }} className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent_80%)] blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass-card rounded-3xl p-6 shadow-2xl shadow-black/50 bg-[#03060A]/80"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">envx // cli terminal</span>
                </div>
                <span className="font-mono text-[8px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded-full">ACTIVE SECURE</span>
              </div>

              <div className="font-mono text-[12px] leading-loose text-left flex flex-col gap-2 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-accent-cyan font-bold">$</span>
                  <span className="text-white/90">envx pull production</span>
                </div>
                <div className="text-white/40 flex flex-col gap-1 pl-4 border-l border-white/5">
                  <div>➔ Authenticating with GitHub (arun-2108)...</div>
                  <div className="text-emerald-400">✔ GitHub Auth successful.</div>
                  <div>➔ Retrieving encrypted payload keys...</div>
                  <div>➔ Decrypting via AES-256-GCM...</div>
                  <div className="text-emerald-400">✔ Decryption complete.</div>
                  <div>➔ Injecting 18 secrets into local .env</div>
                </div>
                <div className="text-blue-400 mt-2 font-semibold text-[11px]">
                  [INFO] Audit trail generated: TX_ID: 864fa91b.
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-between text-[10px] font-mono text-white/30">
                <span>Symmetric Keys: Encrypted</span>
                <span className="text-accent-cyan">GitHub Connected</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SCENE 6: TECHNOLOGY (Enhanced) ───────────────────────────────────────────
function SceneTechnology() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Stack cards data for the product showcase
  const stackItems: StackCardItem[] = [
    {
      label: "NOVA",
      subtitle: "Consumer AI",
      description: "An intelligent AI companion for everyday tasks and automation.",
      icon: <Bot className="h-5 w-5" style={{ color: "#06b6d4" }} />,
      accentColor: "#06b6d4",
      status: "MVP",
      statusColor: "cyan",
      href: "/nova",
    },
    {
      label: "ELEKKI",
      subtitle: "EdTech Platform",
      description: "ECE skill development ecosystem with gamified progress.",
      icon: <Layers className="h-5 w-5" style={{ color: "#8b5cf6" }} />,
      accentColor: "#8b5cf6",
      status: "Beta",
      statusColor: "violet",
      href: "/elekki",
    },
    {
      label: "ENVX",
      subtitle: "Dev Infrastructure",
      description: "Secure, AES-256 encrypted environment variable management.",
      icon: <ShieldCheck className="h-5 w-5" style={{ color: "#10b981" }} />,
      accentColor: "#10b981",
      status: "Live",
      statusColor: "emerald",
    },
  ];

  return (
    <>
      {/* Technology section */}
      <section
        ref={ref}
        className="relative z-10 py-28 overflow-hidden"
        aria-label="Technology Stack"
      >
        <div className="absolute inset-0 border-t border-white/5 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-8">
          <motion.div style={{ y: yText }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="mb-14 text-center"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Technology</span>
              <h2
                className="mt-4 font-display font-black tracking-[-0.05em] leading-[0.9] text-ink"
                style={{ fontSize: "clamp(50px, 8vw, 100px)" }}
              >
                Built with
                <br />
                <span className="bg-gradient-to-r from-accent-cyan via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  precision.
                </span>
              </h2>
            </motion.div>

            {/* Enhanced dual-row scrolling chip marquee */}
            <ScrollingChipMarquee />

            {/* Interactive floating tech chip cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10"
            >
              <TechChipCloud />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid section — premium asymmetric tiles */}
      <section className="relative z-10 py-20 overflow-hidden" aria-label="EAURA Overview Bento Grid">
        <div className="mx-auto max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Overview</span>
            <h2
              className="mt-4 font-display font-black tracking-[-0.04em] leading-[0.9] text-ink"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Everything
              <br />
              <span className="text-ink-2/30">in one place.</span>
            </h2>
          </motion.div>
          <BentoGrid />
        </div>
      </section>

      {/* Animated Stack Cards — product reveal on hover */}
      <section className="relative z-10 py-20 overflow-hidden" aria-label="Product Stack Showcase">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1 }}
              className="shrink-0"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Product Suite</span>
              <h2
                className="mt-4 font-display font-black tracking-[-0.04em] leading-[0.9] text-ink max-w-sm"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Three products.
                <br />
                <span className="bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent">
                  One mission.
                </span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2/60 leading-[1.75] max-w-sm">
                Hover the cards to explore all three EAURA products — each one built from first principles.
              </p>
              <p className="mt-4 text-[11px] font-mono text-ink-2/30 tracking-widest">HOVER THE STACK →</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex items-center justify-center lg:justify-end"
            >
              <AnimatedStackCards items={stackItems} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── SCENE 7: LEADERSHIP ───────────────────────────────────────────────────────
function SceneLeadership() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const leaders = [
    {
      name: "Arunkumar Sundaravel",
      role: "Chief Executive Officer",
      bio: "Sets the long-term technical vision. Leads system architecture decisions, strategic partnerships, and the engineering organization.",
      gradient: "from-[#080d1a] via-[#0e162b] to-[#1d2d54]",
      image: "/directors/Director_1.jpg",
      linkedin: "https://www.linkedin.com/in/arun-kumar-7755492a5/",
      objectPosition: "42% 70%",
      zoom: 1.7,
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
  ];

  return (
    <section
      ref={ref}
      id="leadership-board"
      className="relative z-10 min-h-screen flex flex-col justify-center py-32 overflow-hidden"
      aria-label="Leadership"
    >
      <div className="mx-auto max-w-7xl px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Team</span>
          <h2
            className="mt-4 font-display font-black tracking-[-0.04em] leading-[0.9] text-ink"
            style={{ fontSize: "clamp(50px, 7vw, 90px)" }}
          >
            Built and led
            <br />
            <span className="text-ink-2/40">by engineers.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="rounded-[24px]" maxTilt={6}>
                <div className="group relative overflow-hidden rounded-[24px] glass-card transition-all duration-500 will-change-transform">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden border-b border-white/8`}
                  >
                    {p.image && (
                      <div className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{
                            objectPosition: p.objectPosition || "center",
                            transform: p.zoom ? `scale(${p.zoom})` : undefined,
                            transformOrigin: p.objectPosition || "center",
                          }}
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    {/* Light sweep on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">{p.role}</div>
                        <div className="mt-1 font-display text-xl font-bold text-white">{p.name}</div>
                      </div>
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#06b6d4]/30 border border-white/15 flex items-center justify-center text-white transition-all duration-200"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[13px] text-ink-2/60 leading-relaxed">{p.bio}</p>
                    {/* Status badge */}
                    <div className="mt-4">
                      <StatusBadge label={i === 0 ? "Founder" : i === 1 ? "Co-Founder" : "Co-Founder"} color={i === 0 ? "cyan" : i === 1 ? "blue" : "emerald"} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="/team"
            className="inline-flex items-center gap-2 text-[13px] font-mono text-ink-2/40 hover:text-ink-2 transition-colors duration-200"
          >
            View full team
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ── SCENE 8: RECOGNITION ──────────────────────────────────────────────────────
function SceneRecognition() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const badges = [
    { Icon: CheckCircle2, label: "Startup India", color: "from-accent-cyan/20 to-blue-500/10", border: "border-accent-cyan/20", textColor: "text-accent-cyan" },
    { Icon: ShieldCheck, label: "DPIIT Recognized", color: "from-blue-500/20 to-violet-500/10", border: "border-blue-500/20", textColor: "text-blue-400" },
    { Icon: Workflow, label: "Govt. Recognized", color: "from-emerald-500/20 to-cyan-500/10", border: "border-emerald-500/20", textColor: "text-emerald-400" },
    { Icon: Briefcase, label: "CIN: U72200TZ2026", color: "from-violet-500/20 to-pink-500/10", border: "border-violet-500/20", textColor: "text-violet-400" },
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative z-10 py-32 overflow-hidden"
      aria-label="Government Recognition"
    >
      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Recognition</span>
            <h2
              className="mt-6 font-display font-black tracking-[-0.04em] leading-[0.9] text-ink"
              style={{ fontSize: "clamp(42px, 6vw, 80px)" }}
            >
              Recognized
              <br />
              by those who
              <br />
              <span className="bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent">
                build nations.
              </span>
            </h2>
            <p className="mt-8 text-[16px] leading-[1.75] text-ink-2/60 max-w-md">
              EAURA is officially recognized by the Government of India under
              the Startup India initiative, certified by DPIIT as an innovative
              deep-tech enterprise driving national technological value.
            </p>
          </motion.div>

          {/* Right: Achievement Cards grid with scroll-triggered stagger */}
          <motion.div style={{ y: yBg }}>
            <AchievementCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SCENE 9: CTA ──────────────────────────────────────────────────────────────
function SceneCTA({ onContact }: { onContact: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative z-10 min-h-[90vh] flex items-center justify-center py-32 overflow-hidden"
      aria-label="Contact EAURA"
    >
      {/* Giant glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.08),rgba(59,130,246,0.04),transparent_70%)] blur-3xl" />
      </div>

      <motion.div style={{ y: yText }} className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2"
        >
          <span className="h-px w-10 bg-accent-cyan/50" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-2/40">Get in touch</span>
          <span className="h-px w-10 bg-accent-cyan/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black tracking-[-0.05em] leading-[0.88] text-ink"
          style={{ fontSize: "clamp(64px, 11vw, 150px)" }}
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent">
            build.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 text-[18px] md:text-[20px] leading-[1.65] text-ink-2/60 max-w-2xl mx-auto"
        >
          Reach out to evaluate integration paths, sandbox access, or
          infrastructure requirements. Our technical team responds within one
          business day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={onContact}
            className="group inline-flex items-center gap-3 rounded-full bg-accent-cyan text-[#05070A] px-8 py-4 text-[15px] font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-lg shadow-accent-cyan/20"
          >
            Send a message
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <a
            href="mailto:info@eauraone.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-ink px-8 py-4 text-[15px] font-semibold transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4 text-accent-cyan" />
            info@eauraone.com
          </a>
          <a
            href="tel:+918639657245"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-ink px-8 py-4 text-[15px] font-semibold transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 text-accent-cyan" />
            +91 86396 57245
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ onCareers }: { onCareers: () => void }) {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#05070A]">
      <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 text-[13px]">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-cyan text-[#05070A] text-[12px] font-bold font-display">E</span>
              <span className="font-display text-[15px] font-bold tracking-[0.25em] text-ink">EAURA</span>
            </div>
            <p className="mt-4 max-w-xs text-ink-2/50 leading-[1.7] text-[13px]">
              Building intelligent software, AI-powered platforms and engineering solutions that solve meaningful real-world problems.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-2/30">CIN: U72200TZ2026PTC045871</p>
          </div>
          {[
            ["Company", ["About", "Team", "Research", "Careers"]],
            ["Products", ["ENVX", "NOVA", "ELEKKI", "Roadmap"]],
            ["Contact", ["info@eauraone.com", "+91 86396 57245", "Press"]],
          ].map(([title, items]) => (
            <div key={title as string} className="flex flex-col">
              <div className="font-semibold text-ink tracking-wide text-[12px]">{title}</div>
              <ul className="mt-4 space-y-3 text-ink-2/50">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "+91 86396 57245" ? "tel:+918639657245"
                        : item === "info@eauraone.com" ? "mailto:info@eauraone.com"
                        : item === "Team" ? "/team"
                        : item === "ELEKKI" ? "/elekki"
                        : "#"
                      }
                      onClick={(e) => {
                        if (item === "Careers") { e.preventDefault(); onCareers(); }
                      }}
                      className="hover:text-ink transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-ink-2/30">
          <div>© {new Date().getFullYear()} EAURA Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((l) => (
              <a key={l} href="#" className="hover:text-ink-2 transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── CONTACT MODAL ─────────────────────────────────────────────────────────────
function ContactModal({
  contactForm,
  setContactForm,
  contactStatus,
  setContactStatus,
  onClose,
}: {
  contactForm: { name: string; email: string; org: string; message: string };
  setContactForm: (f: any) => void;
  contactStatus: "idle" | "sending" | "success";
  setContactStatus: (s: any) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 cursor-pointer"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        className="relative w-full max-w-lg glass-card rounded-[28px] shadow-2xl p-8 md:p-10 flex flex-col z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[radial-gradient(closest-side,rgba(6,182,212,0.1),transparent_80%)] rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-ink-2/60 hover:text-ink hover:rotate-90 transition-all duration-300"
        >
          <X className="h-4 w-4" />
        </button>

        {contactStatus !== "success" ? (
          <>
            <div className="text-left mb-8">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent-cyan mb-2">Get in touch</p>
              <h3 className="font-display text-[26px] font-bold text-ink leading-tight">Partner with EAURA</h3>
              <p className="mt-2 text-[14px] text-ink-2/60 leading-relaxed">
                Reach out to evaluate integration paths, sandbox access, or telemetry requirements.
              </p>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setContactStatus("sending");
                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                      access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
                      name: contactForm.name,
                      email: contactForm.email,
                      subject: `New Contact: ${contactForm.name} (${contactForm.org})`,
                      from_name: "Eaura Website",
                      message: `Org: ${contactForm.org}\nEmail: ${contactForm.email}\n\n${contactForm.message}`,
                    }),
                  });
                  const result = await response.json();
                  if (result.success) { setContactStatus("success"); }
                  else { setContactStatus("idle"); alert("Failed to send. Please email info@eauraone.com directly."); }
                } catch { setContactStatus("idle"); alert("An error occurred. Please try again."); }
              }}
              className="flex flex-col gap-4 text-left"
            >
              {[
                { label: "Full Name", key: "name", type: "text", placeholder: "John Doe" },
                { label: "Work Email", key: "email", type: "email", placeholder: "john@company.com" },
                { label: "Organization", key: "org", type: "text", placeholder: "Acme Corp" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2/50 mb-1.5">{label}</label>
                  <input
                    required
                    type={type}
                    value={contactForm[key as keyof typeof contactForm] as string}
                    onChange={(e) => setContactForm({ ...contactForm, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-ink text-[14px] focus:outline-none focus:border-accent-cyan/40 transition-all duration-200 placeholder-ink-2/30"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2/50 mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="How can we assist you?"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-ink text-[14px] focus:outline-none focus:border-accent-cyan/40 resize-none transition-all duration-200 placeholder-ink-2/30"
                />
              </div>
              <button
                type="submit"
                disabled={contactStatus === "sending"}
                className="mt-1 w-full group inline-flex items-center justify-center rounded-xl bg-accent-cyan text-[#05070A] py-4 text-[14px] font-semibold transition-all duration-200 hover:bg-blue-500 hover:text-white disabled:opacity-40"
              >
                {contactStatus === "sending" ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Inquiry <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-7 w-7 text-emerald-400" />
            </div>
            <h3 className="font-display text-[24px] font-bold text-ink">Message Sent</h3>
            <p className="mt-3 text-[14px] text-ink-2/60 max-w-sm leading-relaxed">
              Thank you for reaching out. Our technical team will respond within one business day.
            </p>
            <button onClick={onClose} className="mt-8 text-[13px] font-mono text-accent-cyan hover:text-ink transition-colors duration-200">
              Close ✕
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function Home() {
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  // Contact modal
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", org: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleCloseContact = () => {
    setContactForm({ name: "", email: "", org: "", message: "" });
    setContactStatus("idle");
    setIsContactOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#05070A] text-ink antialiased overflow-x-hidden">
      {/* Cursor spotlight — follows mouse with cyan radial gradient */}
      <CursorSpotlight />

      {/* Fixed ambient background */}
      <AmbientBackground mouseX={smoothX} mouseY={smoothY} />

      {/* Navigation */}
      <Nav />

      {/* Cinematic Scenes */}
      <SceneHero mouseX={smoothX} mouseY={smoothY} />
      <ScenePhilosophy />
      <SceneNova />
      <SceneElekki />
      <SceneEnvx />
      <SceneTechnology />
      <SceneLeadership />
      <SceneRecognition />
      <SceneCTA onContact={() => setIsContactOpen(true)} />
      <Footer onCareers={() => {}} />

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal
            contactForm={contactForm}
            setContactForm={setContactForm}
            contactStatus={contactStatus}
            setContactStatus={setContactStatus}
            onClose={handleCloseContact}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
