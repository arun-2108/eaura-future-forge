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

      {/* HERO — Two-column layout with interactive background & Ecosystem Hub */}
      <section
        ref={heroRef}
        id="company"
        aria-label="EAURA — Intelligent Products Startup"
        className="relative overflow-hidden bg-surface min-h-[92vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flowDash {
            to {
              stroke-dashoffset: -20;
            }
          }
          .animate-flow-dash {
            animation: flowDash 1.5s linear infinite;
          }
        `}} />

        {/* Background Network Canvas */}
        <AbstractTechVisualization />

        {/* Subtle radial overlay on the canvas for depth */}
        <motion.div
          style={{ x: bgTranslateX, y: bgTranslateY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.03),transparent_80%)]" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center text-left">
          {/* Left Column: Headline, Subheading, CTAs */}
          <motion.div
            style={{ x: textTranslateX, y: textTranslateY }}
            className="flex flex-col items-start w-full"
          >
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-clay/10 bg-clay/5 px-3.5 py-1 text-[11px] font-mono tracking-[0.22em] uppercase text-clay mb-6">
                Deep Tech · Intelligent Systems
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-bold tracking-[-0.04em] text-[44px] leading-[1.05] md:text-[76px] md:leading-[0.94] text-ink">
                Building Intelligent
                <br />
                <span className="bg-gradient-to-r from-ink via-ink-2 to-clay bg-clip-text text-transparent">
                  Products That Matter.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-ink-2 tracking-[-0.01em] max-w-xl font-normal">
                EAURA builds AI-powered software, developer tools and engineering platforms that solve meaningful problems and create lasting impact.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-clay/5 hover:shadow-lg hover:shadow-clay/10 hover:-translate-y-px transition-all duration-200"
                >
                  Explore Products
                </Button>
                <Button
                  onClick={() => document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold border border-ink/15 bg-transparent hover:bg-surface hover:border-ink/25 text-ink transition-all duration-200"
                >
                  Our Vision
                </Button>
              </div>
            </Reveal>
          </motion.div>

          {/* Right Column: Floating Ecosystem Visualization */}
          <Reveal delay={0.2} className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] py-6 flex items-center justify-center min-h-[460px]">
              {/* Background gradient lighting / radial glows */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[320px] h-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_80%)] blur-3xl" />
              </div>

              {/* Ecosystem layout container */}
              <div className="relative flex flex-col items-center gap-6 w-full z-10">
                {/* Connecting SVG lines with moving dash arrays for flow effect */}
                <svg className="absolute inset-y-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="var(--hairline)" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line 
                    x1="50%" 
                    y1="12%" 
                    x2="50%" 
                    y2="88%" 
                    stroke="var(--clay)" 
                    strokeWidth="1.5" 
                    strokeDasharray="5 5"
                    className="animate-flow-dash"
                  />
                </svg>

                {/* 1. NOVA Node */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative z-10 w-full rounded-2xl border border-hairline bg-surface/85 backdrop-blur-md p-4 flex items-center gap-4 hover:border-clay/35 hover:shadow-lg hover:shadow-clay/5 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-surface border border-hairline grid place-items-center text-clay group-hover:bg-clay group-hover:text-white group-hover:border-clay/20 transition-all duration-300">
                    <Bot size={18} />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-[15px] text-ink">NOVA</div>
                    <div className="font-mono text-[9px] text-ink-2 uppercase tracking-widest mt-0.5">Intelligent Automation</div>
                  </div>
                  <div className="absolute top-3.5 right-4 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </motion.div>

                {/* 2. EAURA Logo Central Hub (Connected Through) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-20 h-14 w-14 rounded-full bg-ink text-bg flex items-center justify-center shadow-xl border border-hairline group cursor-default"
                >
                  <div className="absolute -inset-1.5 rounded-full border border-clay/10 group-hover:border-clay/30 animate-pulse opacity-30 pointer-events-none" />
                  <span className="font-display font-extrabold text-[20px] tracking-wide">E</span>
                </motion.div>

                {/* 3. ENVX Node */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative z-10 w-full rounded-2xl border border-hairline bg-surface/85 backdrop-blur-md p-4 flex items-center gap-4 hover:border-clay/35 hover:shadow-lg hover:shadow-clay/5 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-surface border border-hairline grid place-items-center text-clay group-hover:bg-clay group-hover:text-white group-hover:border-clay/20 transition-all duration-300">
                    <Layers size={18} />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-[15px] text-ink">ENVX</div>
                    <div className="font-mono text-[9px] text-ink-2 uppercase tracking-widest mt-0.5">Developer Tools</div>
                  </div>
                  <div className="absolute top-3.5 right-4 h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                </motion.div>

                {/* 4. ELEKKI Node */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative z-10 w-full rounded-2xl border border-hairline bg-surface/85 backdrop-blur-md p-4 flex items-center gap-4 hover:border-clay/35 hover:shadow-lg hover:shadow-clay/5 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-surface border border-hairline grid place-items-center text-clay group-hover:bg-clay group-hover:text-white group-hover:border-clay/20 transition-all duration-300">
                    <Cpu size={18} />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-[15px] text-ink">ELEKKI</div>
                    <div className="font-mono text-[9px] text-ink-2 uppercase tracking-widest mt-0.5">Intelligent Education</div>
                  </div>
                  <a 
                    href="/elekki" 
                    className="absolute top-3.5 right-4 h-5 w-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-clay hover:text-white transition-all duration-200" 
                    title="View Showcase"
                  >
                    <ChevronRight size={10} />
                  </a>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP — Minimal aligned columns */}
      <section className="border-y border-hairline bg-bg z-10 relative" aria-label="Company highlights">
        <div className="mx-auto max-w-6xl px-6 py-9">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center md:text-left text-[11px] font-mono uppercase tracking-[0.2em] text-ink-2 divide-y md:divide-y-0 divide-hairline md:divide-x md:divide-hairline">
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">TYPE</span>
              <span className="text-ink font-semibold text-[12px]">Technology Product Company</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">PORTFOLIO</span>
              <span className="text-ink font-semibold text-[12px]">3 Flagship Products</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">SECTORS</span>
              <span className="text-ink font-semibold text-[12px]">AI + Developer Tools + Education</span>
            </div>
            <div className="flex flex-col gap-1.5 py-6 md:py-0 md:px-8">
              <span className="text-ink-2/45 text-[10px] font-medium tracking-[0.14em]">TRAJECTORY</span>
              <span className="text-ink font-semibold text-[12px]">Growing Startup</span>
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

      {/* VISION SECTION — Premium Minimal Typography */}
      <section id="vision" className="bg-surface py-28 md:py-36 border-t border-hairline relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.03),transparent_80%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay mb-6">
              Our Vision
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-display text-[40px] md:text-[60px] font-bold tracking-[-0.04em] leading-[1.05] text-ink text-balance">
                Engineering Tomorrow
                <br />
                <span className="bg-gradient-to-r from-ink-2 to-clay bg-clip-text text-transparent">
                  Through Intelligent Products.
                </span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6 text-left lg:pt-2">
              <Reveal delay={0.05}>
                <p className="text-[19px] md:text-[21px] font-medium leading-relaxed text-ink tracking-tight">
                  Technology should solve meaningful problems, not create unnecessary complexity.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] md:text-[16.5px] leading-relaxed text-ink-2">
                  At EAURA, we design products that empower students, developers and individuals by combining artificial intelligence, engineering and thoughtful product design.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-[15px] md:text-[16.5px] leading-relaxed text-ink-2">
                  We believe the future belongs to products that are practical, intelligent and built with purpose.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION — Full-width Premium Product Showcases */}
      <section id="products" className="bg-bg py-28 md:py-36 border-t border-hairline relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl mb-24 text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Our Ecosystem
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

          {/* Product Showcases Grid */}
          <div className="flex flex-col gap-24 md:gap-36">
            
            {/* 1. NOVA (Consumer AI) */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side: Content */}
                <div className="text-left flex flex-col items-start lg:pr-6">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/5 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-clay font-semibold">
                      Category // Consumer AI
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-emerald-400 font-semibold">
                      MVP Status
                    </span>
                  </div>

                  <h3 className="font-display text-[36px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1.0] text-ink">
                    NOVA
                  </h3>

                  <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-2">
                    An intelligent next-generation AI companion designed to simplify everyday life through natural conversations, proactive assistance and intelligent automation.
                  </p>

                  {/* Animated Feature List */}
                  <ul className="mt-8 flex flex-col gap-3 w-full">
                    {[
                      "Natural Conversations: Context-aware interactive companion logic.",
                      "Proactive Assistance: Anticipates scheduling, workflow, and analysis queries.",
                      "Intelligent Automation: Automates code generation and telemetry pipelines."
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 2 }}
                        className="flex items-start gap-3 text-[14px] text-ink-2"
                      >
                        <span className="h-5 w-5 rounded-full bg-clay/10 border border-clay/20 flex items-center justify-center text-clay text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 flex items-center gap-6">
                    <Button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      size="lg"
                      className="rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-clay/5 hover:shadow-lg hover:shadow-clay/10 hover:-translate-y-px transition-all duration-200"
                    >
                      Explore NOVA
                    </Button>
                  </div>
                </div>

                {/* Right Side: Mockup */}
                <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square max-w-[480px] mx-auto rounded-3xl border border-hairline bg-surface/70 backdrop-blur-md p-6 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-clay/20 transition-all duration-300 group">
                  {/* Glowing core ambient */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[radial-gradient(closest-side,rgba(0,113,227,0.06),transparent_80%)] rounded-full blur-2xl" />
                  
                  {/* Mock Window Header */}
                  <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="font-mono text-[9px] tracking-wider text-ink-2">NOVA // ASSISTANT CORE</span>
                  </div>

                  {/* Pulsating Orb in center */}
                  <div className="relative flex-grow flex items-center justify-center my-6 z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: 360
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="h-28 w-28 rounded-full bg-gradient-to-tr from-clay/20 via-indigo-500/10 to-cyan-500/20 border border-clay/30 flex items-center justify-center shadow-lg shadow-clay/10"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="h-16 w-16 rounded-full bg-clay/35 flex items-center justify-center border border-white/10"
                      >
                        <Bot size={24} className="text-ink" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Conversation bubbles */}
                  <div className="flex flex-col gap-3 font-mono text-[11px] text-left z-10">
                    <div className="bg-hairline/25 border border-hairline p-3 rounded-2xl max-w-[85%] self-start rounded-tl-none">
                      <span className="text-clay block font-bold mb-1">User</span>
                      NOVA, compile the daily simulation test status.
                    </div>
                    <div className="bg-clay/5 border border-clay/15 p-3 rounded-2xl max-w-[85%] self-end rounded-tr-none text-right">
                      <span className="text-indigo-400 block font-bold mb-1">NOVA</span>
                      Running test suite. Detected 2 warnings in sequence_detector.v. Logs generated.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. ENVX (Developer Infrastructure) */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side: Mockup (Alternating on Desktop) */}
                <div className="order-2 lg:order-1 relative w-full aspect-video md:aspect-[4/3] lg:aspect-square max-w-[480px] mx-auto rounded-3xl border border-hairline bg-[#03060a]/90 p-6 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-clay/20 transition-all duration-300 group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(closest-side,rgba(0,113,227,0.06),transparent_80%)] rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Mock terminal header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">envx // cli terminal</span>
                    </div>
                    <span className="font-mono text-[8px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded-full">ACTIVE SECURE</span>
                  </div>

                  {/* Terminal CLI code outputs */}
                  <div className="flex-grow font-mono text-[11px] leading-relaxed text-left flex flex-col justify-center gap-3 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-clay font-bold">$</span>
                      <span className="text-white/90">envx pull production</span>
                    </div>
                    <div className="text-white/40 flex flex-col gap-1 pl-4 border-l border-white/5">
                      <div>➔ Authenticating with GitHub (arun-2108)...</div>
                      <div className="text-emerald-400">✔ GitHub Auth successful.</div>
                      <div>➔ Retrieving encrypted payload keys...</div>
                      <div>➔ Decrypting payload via AES-256-GCM...</div>
                      <div className="text-emerald-400">✔ Decryption complete.</div>
                      <div>➔ Injecting 18 secrets safely into local .env</div>
                    </div>
                    <div className="text-indigo-400 mt-2 font-semibold">
                      [INFO] Audit trail generated: TX_ID: 864fa91b.
                    </div>
                  </div>

                  {/* Interactive lock visualization */}
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>Symmetric Keys: Encrypted</span>
                    <span className="text-clay">GitHub Connected</span>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="order-1 lg:order-2 text-left flex flex-col items-start lg:pl-6">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/5 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-clay font-semibold">
                      Category // Developer Infrastructure
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-emerald-400 font-semibold">
                      MVP Status
                    </span>
                  </div>

                  <h3 className="font-display text-[36px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1.0] text-ink">
                    ENVX
                  </h3>

                  <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-2">
                    A secure CLI-first environment variable management platform enabling development teams to synchronize secrets safely with encrypted workflows, GitHub authentication and enterprise-grade audit trails.
                  </p>

                  <ul className="mt-8 flex flex-col gap-3 w-full">
                    {[
                      "Encrypted Workflows: Zero-trust variables synchronized via AES-256 payload encryption.",
                      "GitHub Authentication: Integrates cleanly onto developer teams' single sign-on cycles.",
                      "Enterprise-grade Audit Trails: Trace secret synchronization cycles dynamically."
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 2 }}
                        className="flex items-start gap-3 text-[14px] text-ink-2"
                      >
                        <span className="h-5 w-5 rounded-full bg-clay/10 border border-clay/20 flex items-center justify-center text-clay text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 flex items-center gap-6">
                    <Button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      size="lg"
                      className="rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-clay/5 hover:shadow-lg hover:shadow-clay/10 hover:-translate-y-px transition-all duration-200"
                    >
                      Explore ENVX
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. ELEKKI (Education Technology) */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side: Content */}
                <div className="text-left flex flex-col items-start lg:pr-6">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/5 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-clay font-semibold">
                      Category // Education Technology
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-mono tracking-[0.1em] uppercase text-violet-400 font-semibold">
                      Beta Status
                    </span>
                  </div>

                  <h3 className="font-display text-[36px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1.0] text-ink">
                    ELEKKI
                  </h3>

                  <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-2">
                    The complete skill development ecosystem for Electronics and Communication Engineering students, bringing learning, practice, assessments and career readiness into one unified platform.
                  </p>

                  <ul className="mt-8 flex flex-col gap-3 w-full">
                    {[
                      "Unified Learning Sandbox: Conceptual tracks integrated directly with secure, client-side fallback simulators.",
                      "Gamified Problem Solver: Tracks ECE skill progression across digital circuits, VLSI, and FSM design.",
                      "Recruiter Matchmaking: Direct recruitment pipelines linking certified skill portfolios with top silicon employers."
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 2 }}
                        className="flex items-start gap-3 text-[14px] text-ink-2"
                      >
                        <span className="h-5 w-5 rounded-full bg-clay/10 border border-clay/20 flex items-center justify-center text-clay text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 flex items-center gap-6">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 py-6 text-base font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/10 hover:shadow-lg hover:shadow-violet-600/20 hover:-translate-y-px transition-all duration-200"
                    >
                      <a href="/elekki">Explore ELEKKI</a>
                    </Button>
                  </div>
                </div>

                {/* Right Side: Mockup */}
                <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square max-w-[480px] mx-auto rounded-3xl border border-hairline bg-surface/70 backdrop-blur-md p-6 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-clay/20 transition-all duration-300 group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Mock panel header */}
                  <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4 z-10">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                      <span className="font-mono text-[9px] tracking-wider text-ink-2">ELEKKI.SYSTEM.PREVIEW</span>
                    </div>
                    <span className="font-mono text-[8px] text-violet-400">SANDBOX COMPILED</span>
                  </div>

                  {/* ECE Skill levels */}
                  <div className="my-auto flex flex-col gap-3.5 z-10">
                    {[
                      { name: "Verilog / FSM Logic", val: 85, color: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]" },
                      { name: "4-to-1 Multiplexer", val: 100, color: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" },
                      { name: "D Flip-Flop Storage", val: 68, color: "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]" }
                    ].map((item) => (
                      <div key={item.name} className="flex flex-col gap-1 text-[11px] font-mono text-left">
                        <div className="flex justify-between text-ink-2">
                          <span>{item.name}</span>
                          <span className="text-ink font-semibold">{item.val}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-hairline/20 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Level stats */}
                  <div className="border-t border-hairline pt-4 flex items-center justify-between text-[10px] font-mono text-ink-2 z-10">
                    <span>Rank: Top 2% Globally</span>
                    <span className="text-violet-400 font-semibold">14,820 XP</span>
                  </div>
                </div>
              </div>
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
