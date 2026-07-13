import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  X,
  Mail,
  Briefcase,
  MapPin,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Cpu,
  Bot,
  Network,
  Layers,
  Workflow,
  ShieldCheck,
  Linkedin,
  Users,
  TrendingUp,
  Calendar,
  Phone,
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

  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  // Contact Form Simulation State
  const [contactForm, setContactForm] = useState({ name: "", email: "", org: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success">("idle");

  // Careers Form Simulation State
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeApplyRole, setActiveApplyRole] = useState<{ id: string; title: string } | null>(null);
  const [careersForm, setCareersForm] = useState<{
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    whyJoin: string;
    resume: File | null;
  }>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    whyJoin: "",
    resume: null,
  });
  const [careersStatus, setCareersStatus] = useState<"idle" | "submitting" | "success">("idle");

  const resetContactForm = () => {
    setContactForm({ name: "", email: "", org: "", message: "" });
    setContactStatus("idle");
    setIsContactOpen(false);
  };

  const resetCareersForm = () => {
    setCareersForm({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      whyJoin: "",
      resume: null,
    });
    setSelectedRole(null);
    setActiveApplyRole(null);
    setCareersStatus("idle");
    setIsCareersOpen(false);
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


      {/* VISION SECTION — Premium Minimal Typography */}
      <section id="vision" className="bg-surface py-16 md:py-24 border-t border-hairline relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.03),transparent_80%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay mb-3">
              Our Vision
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Vision Statement */}
            <div className="lg:col-span-5 text-left">
              <Reveal>
                <h2 className="font-display text-[38px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1.05] text-ink text-balance">
                  Engineering Tomorrow
                  <br />
                  <span className="bg-gradient-to-r from-ink-2 to-clay bg-clip-text text-transparent">
                    Through Intelligent Products.
                  </span>
                </h2>
              </Reveal>
              
              <div className="flex flex-col gap-5 text-left mt-8">
                <Reveal delay={0.05}>
                  <p className="text-[18px] font-medium leading-relaxed text-ink tracking-tight">
                    Technology should solve meaningful problems, not create unnecessary complexity.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[14.5px] leading-relaxed text-ink-2">
                    At EAURA, we design products that empower students, developers and individuals by combining artificial intelligence, engineering and thoughtful product design.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="text-[14.5px] leading-relaxed text-ink-2">
                    We believe the future belongs to products that are practical, intelligent and built with purpose.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Embedded Features Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Layers,
                    title: "Product First",
                    desc: "We build products, not one-off solutions.",
                    borderClass: "group-hover:border-violet-500 group-hover:bg-violet-50 group-hover:text-violet-600"
                  },
                  {
                    Icon: Cpu,
                    title: "Engineering Excellence",
                    desc: "Every product is backed by engineering precision and thoughtful design.",
                    borderClass: "group-hover:border-cyan-500 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                  },
                  {
                    Icon: TrendingUp,
                    title: "Long-Term Vision",
                    desc: "We focus on creating technology with lasting value.",
                    borderClass: "group-hover:border-emerald-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                  },
                  {
                    Icon: Users,
                    title: "User-Centric Innovation",
                    desc: "Every feature exists to solve a real problem.",
                    borderClass: "group-hover:border-rose-500 group-hover:bg-rose-50 group-hover:text-rose-600"
                  }
                ].map(({ Icon, title, desc, borderClass }, idx) => (
                  <Reveal key={title} delay={idx * 0.05}>
                    <Card className="group relative bg-bg border-hairline p-5.5 min-h-[160px] flex flex-col justify-between hover:shadow-[0_15px_30px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full">
                      <div>
                        {/* Icon container */}
                        <div className={`h-10 w-10 rounded-xl bg-surface border border-hairline grid place-items-center text-ink-2 transition-all duration-300 ${borderClass}`}>
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <h4 className="mt-4 font-display font-semibold text-[16.5px] text-ink leading-tight">
                          {title}
                        </h4>

                        <p className="mt-2 text-[13px] text-ink-2 leading-relaxed font-normal">
                          {desc}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
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
                      asChild
                      size="lg"
                      className="rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-clay/5 hover:shadow-lg hover:shadow-clay/10 hover:-translate-y-px transition-all duration-200"
                    >
                      <a href="/nova">Explore NOVA</a>
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
                      onClick={() => window.open("https://envx-eight.vercel.app/", "_blank", "noopener,noreferrer")}
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
                  name: "Arunkumar Sundaravel",
                  role: "Chief Executive Officer",
                  bio: "Sets the long-term technical vision. Leads system architecture decisions, strategic partnerships, and the engineering organization.",
                  gradient: "from-[#080d1a] via-[#0e162b] to-[#1d2d54]",
                  image: "/directors/Director_1.jpg",
                  linkedin: "https://www.linkedin.com/in/arun-kumar-7755492a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgVnDYQ1KSVeMB55%2FQO2sEA%3D%3D",
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
                      <div className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ 
                            objectPosition: p.objectPosition || "center",
                            transform: p.zoom ? `scale(${p.zoom})` : undefined,
                            transformOrigin: p.objectPosition || "center",
                          }}
                          onError={(e) => {
                            // Hide image on error (e.g. if file is missing) to fall back cleanly to gradient
                            e.currentTarget.style.display = "none";
                          }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
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

      {/* ROADMAP SECTION — Interactive Premium Dashboard Switched Experience (Light Theme) */}
      <section id="roadmap" className="bg-surface py-24 border-t border-hairline relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.02),transparent_80%)] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Switched Navigation */}
            <div className="lg:col-span-4 text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay mb-3">
                  Our Journey
                </div>
                <h2 className="font-display text-[36px] md:text-[50px] font-bold tracking-tight text-ink leading-[1.05]">
                  Roadmap
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2 max-w-sm mb-8">
                  Every product begins with a vision. Every milestone brings us closer to building intelligent products that create meaningful impact.
                </p>
              </Reveal>

              {/* Phase Switcher Tabs */}
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    phase: "PHASE 01",
                    label: "Foundation",
                    date: "June 2025",
                    bgClass: "bg-indigo-50/60 border-indigo-500 text-indigo-950 shadow-sm",
                    badgeClass: "bg-indigo-100 text-indigo-700 border-indigo-200",
                    hoverClass: "hover:border-indigo-300 hover:bg-indigo-50/10 text-ink-2 hover:text-indigo-900",
                    indicatorColor: "bg-indigo-500",
                    textTheme: "text-indigo-600 border-indigo-500/20 bg-indigo-500/5",
                    bulletColor: "bg-indigo-500"
                  },
                  {
                    phase: "PHASE 02",
                    label: "Innovation",
                    date: "In Progress",
                    bgClass: "bg-purple-50/60 border-purple-500 text-purple-950 shadow-sm",
                    badgeClass: "bg-purple-100 text-purple-700 border-purple-200",
                    hoverClass: "hover:border-purple-300 hover:bg-purple-50/10 text-ink-2 hover:text-purple-900",
                    indicatorColor: "bg-purple-500",
                    textTheme: "text-purple-600 border-purple-500/20 bg-purple-500/5",
                    bulletColor: "bg-purple-500"
                  },
                  {
                    phase: "PHASE 03",
                    label: "Growth",
                    date: "Q3 2026",
                    bgClass: "bg-blue-50/60 border-blue-500 text-blue-950 shadow-sm",
                    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
                    hoverClass: "hover:border-blue-300 hover:bg-blue-50/10 text-ink-2 hover:text-blue-900",
                    indicatorColor: "bg-blue-500",
                    textTheme: "text-blue-600 border-blue-500/20 bg-blue-500/5",
                    bulletColor: "bg-blue-500"
                  },
                  {
                    phase: "PHASE 04",
                    label: "Scale",
                    date: "2027",
                    bgClass: "bg-emerald-50/60 border-emerald-500 text-emerald-950 shadow-sm",
                    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
                    hoverClass: "hover:border-emerald-300 hover:bg-emerald-50/10 text-ink-2 hover:text-emerald-900",
                    indicatorColor: "bg-emerald-500",
                    textTheme: "text-emerald-600 border-emerald-500/20 bg-emerald-500/5",
                    bulletColor: "bg-emerald-500"
                  },
                  {
                    phase: "PHASE 05",
                    label: "Future",
                    date: "Long-term",
                    bgClass: "bg-rose-50/60 border-rose-500 text-rose-950 shadow-sm",
                    badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
                    hoverClass: "hover:border-rose-300 hover:bg-rose-50/10 text-ink-2 hover:text-rose-900",
                    indicatorColor: "bg-rose-500",
                    textTheme: "text-rose-600 border-rose-500/20 bg-rose-500/5",
                    bulletColor: "bg-rose-500"
                  }
                ].map((item, idx) => {
                  const isActive = activePhaseIndex === idx;
                  return (
                    <button
                      key={item.phase}
                      onClick={() => setActivePhaseIndex(idx)}
                      className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? item.bgClass
                          : `bg-transparent border-hairline ${item.hoverClass}`
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-mono tracking-widest block transition-colors duration-300 ${
                          isActive ? "opacity-90 font-semibold text-ink" : "opacity-60"
                        }`}>{item.phase}</span>
                        <span className="text-[15px] font-bold font-display block mt-0.5">{item.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? item.badgeClass
                          : "opacity-65 bg-surface border-hairline text-ink-2 group-hover:bg-bg group-hover:border-hairline"
                      }`}>{item.date}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Console Details */}
            <div className="lg:col-span-8 w-full">
              {[
                {
                  indicatorColor: "bg-indigo-500",
                  textColor: "text-indigo-600",
                  borderColor: "border-indigo-500/20",
                  bgLight: "bg-indigo-500/5",
                  bullet: "bg-indigo-500"
                },
                {
                  indicatorColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-500/20",
                  bgLight: "bg-purple-500/5",
                  bullet: "bg-purple-500"
                },
                {
                  indicatorColor: "bg-blue-500",
                  textColor: "text-blue-600",
                  borderColor: "border-blue-500/20",
                  bgLight: "bg-blue-500/5",
                  bullet: "bg-blue-500"
                },
                {
                  indicatorColor: "bg-emerald-500",
                  textColor: "text-emerald-600",
                  borderColor: "border-emerald-500/20",
                  bgLight: "bg-emerald-500/5",
                  bullet: "bg-emerald-500"
                },
                {
                  indicatorColor: "bg-rose-500",
                  textColor: "text-rose-600",
                  borderColor: "border-rose-500/20",
                  bgLight: "bg-rose-500/5",
                  bullet: "bg-rose-500"
                }
              ].map((style, idx) => {
                if (activePhaseIndex !== idx) return null;
                return (
                  <div key={idx} className="bg-bg border border-hairline rounded-2xl p-6 md:p-10 min-h-[460px] flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-clay/10">
                    {/* Visual element indicators */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-clay/5 to-transparent rounded-full blur-xl pointer-events-none" />
                    
                    {/* Top console header info */}
                    <div className="flex items-center justify-between border-b border-hairline pb-4.5 mb-6 text-left">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${style.indicatorColor} animate-pulse`} />
                        <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink-2">
                          ROADMAP // PANEL_0{idx + 1}
                        </span>
                      </div>
                      <span className={`font-mono text-[9px] ${style.textColor} font-semibold`}>STATUS: ACTIVE</span>
                    </div>

                    {/* Main Dynamic content */}
                    <div className="flex-grow flex flex-col justify-center text-left">
                      {idx === 0 && (
                        <div>
                          <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.borderColor} ${style.bgLight} px-2.5 py-0.5 text-[9px] font-mono ${style.textColor} font-semibold mb-4`}>
                            PHASE 01 // FOUNDATION
                          </div>
                          <h3 className="font-display text-2xl md:text-3.5xl font-bold text-ink mb-4">
                            EAURA Founded
                          </h3>
                          <p className="text-[14.5px] md:text-[16px] leading-relaxed text-ink-2 max-w-xl">
                            EAURA was established with a vision to build intelligent technology products that solve meaningful real-world problems across AI, developer infrastructure and engineering education.
                          </p>
                          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-ink-2 font-mono text-[11.5px]">
                            <div className="flex items-center gap-2.5">
                              <span className={`h-1.5 w-1.5 rounded-full ${style.bullet}`} />
                              <span>June 2025 Incorporation</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <span className={`h-1.5 w-1.5 rounded-full ${style.bullet}`} />
                              <span>Core Architecture Scoping</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div>
                          <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.borderColor} ${style.bgLight} px-2.5 py-0.5 text-[9px] font-mono ${style.textColor} font-semibold mb-4`}>
                            PHASE 02 // INNOVATION
                          </div>
                          <h3 className="font-display text-2xl md:text-3.5xl font-bold text-ink mb-6">
                            Product Inception
                          </h3>
                          
                          {/* Products milestone cards */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              {
                                name: "NOVA",
                                status: "Prototype",
                                color: "text-amber-600 border-amber-500/20 bg-amber-500/5",
                                milestones: ["Voice Assistant MVP", "Smart Home Sync", "Hardware Prototype"]
                              },
                              {
                                name: "ENVX",
                                status: "MVP",
                                color: "text-emerald-600 border-emerald-500/20 bg-emerald-500/5",
                                milestones: ["Public Beta", "VS Code Extension", "GitHub Integration"]
                              },
                              {
                                name: "ELEKKI",
                                status: "Beta",
                                color: "text-violet-600 border-violet-500/20 bg-violet-500/5",
                                milestones: ["College Pilots", "AI Learning Mentor", "Recruiter Portal"]
                              }
                            ].map((p) => (
                              <div key={p.name} className="bg-surface/50 border border-hairline rounded-xl p-4.5">
                                <div className="flex justify-between items-center mb-2.5">
                                  <span className="font-mono font-semibold text-[14px] text-ink">{p.name}</span>
                                  <span className={`px-2 py-0.5 text-[8.5px] font-mono border rounded-full ${p.color}`}>{p.status}</span>
                                </div>
                                <ul className="flex flex-col gap-1.5 text-[11px] text-ink-2 font-mono text-left">
                                  {p.milestones.map((m) => (
                                    <li key={m} className="flex items-center gap-1.5">
                                      <span className={`h-1 w-1 rounded-full ${style.bullet}`} />
                                      <span>{m}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div>
                          <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.borderColor} ${style.bgLight} px-2.5 py-0.5 text-[9px] font-mono ${style.textColor} font-semibold mb-4`}>
                            PHASE 03 // GROWTH
                          </div>
                          <h3 className="font-display text-2xl md:text-3.5xl font-bold text-ink mb-4">
                            Building a Product Ecosystem
                          </h3>
                          <p className="text-[14.5px] md:text-[16px] leading-relaxed text-ink-2 max-w-xl mb-6">
                            Expand EAURA into a multi-product technology company serving students, developers, professionals and businesses through intelligent software and AI-powered solutions.
                          </p>
                          
                          {/* Growth Tracks tags */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                            {["Developer Tools", "Artificial Intelligence", "Education Technology", "Future Products"].map((item) => (
                              <div key={item} className="bg-surface/50 border border-hairline rounded-xl p-3.5">
                                <span className={`font-mono text-[10px] ${style.textColor} font-semibold block`}>ECOSYSTEM</span>
                                <span className="text-[13px] text-ink font-medium block mt-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {idx === 3 && (
                        <div>
                          <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.borderColor} ${style.bgLight} px-2.5 py-0.5 text-[9px] font-mono ${style.textColor} font-semibold mb-4`}>
                            PHASE 04 // SCALE
                          </div>
                          <h3 className="font-display text-2xl md:text-3.5xl font-bold text-ink mb-4">
                            Strategic Growth
                          </h3>
                          <p className="text-[14.5px] md:text-[16px] leading-relaxed text-ink-2 max-w-xl mb-6">
                            Scale global integrations, secure strategic developer partnerships, and enter enterprise solutions markets.
                          </p>

                          {/* Milestones list */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px] text-ink-2 font-mono">
                            {[
                              "Seed Funding Scoping",
                              "Strategic Partnerships",
                              "Enterprise Solutions",
                              "Growing Product Ecosystem",
                              "Global Developer Community",
                              "College Partnerships",
                              "Industry Collaborations"
                            ].map((item) => (
                              <div key={item} className="flex items-center gap-2">
                                <span className={`h-1.5 w-1.5 rounded-full ${style.bullet}`} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {idx === 4 && (
                        <div className="relative py-4">
                          <div className={`inline-flex items-center gap-1.5 rounded-full border ${style.borderColor} ${style.bgLight} px-2.5 py-0.5 text-[9px] font-mono ${style.textColor} font-semibold mb-6`}>
                            PHASE 05 // FUTURE
                          </div>
                          
                          <h4 className="font-display text-[26px] md:text-[40px] font-bold tracking-tight text-ink leading-tight mb-4">
                            Our journey is just beginning.
                          </h4>
                          <p className="text-[15px] md:text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
                            We envision EAURA becoming a globally recognized technology company building intelligent products that simplify complexity, empower people and create lasting impact across industries.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom interactive guide */}
                    <div className="border-t border-hairline pt-4 flex items-center justify-between text-[10px] font-mono text-ink-2">
                      <span>SELECT OTHER TABS TO EXPLORE</span>
                      <span>EAURA ORCHESTRATION</span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Ending CTA */}
          <Reveal>
            <div className="mt-24 max-w-4xl mx-auto text-center border-t border-hairline pt-16">
              <h3 className="font-display text-[30px] md:text-[48px] font-bold text-ink mb-6">
                Ready to build the future with us?
              </h3>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold bg-ink text-bg hover:bg-clay hover:text-white shadow-lg shadow-ink/5 transition-all duration-200"
                >
                  Explore Our Products
                </Button>
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-semibold border-hairline bg-bg hover:bg-surface text-ink transition-all duration-200"
                >
                  Contact EAURA
                </Button>
              </div>
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
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => setIsContactOpen(true)}
                className="group inline-flex items-center justify-center rounded-full bg-ink text-bg border border-transparent px-8 py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:bg-clay hover:text-white hover:-translate-y-px shadow-md shadow-ink/10 hover:shadow-lg hover:shadow-clay/20 cursor-pointer"
              >
                Send a message
                <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:info@eauraone.com"
                className="group inline-flex items-center justify-center rounded-full border border-hairline bg-bg hover:bg-surface text-ink px-8 py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:border-clay/35 hover:-translate-y-px shadow-sm hover:shadow cursor-pointer"
              >
                <Mail className="mr-2 h-4 w-4 text-clay transition-transform duration-300 group-hover:scale-110" />
                info@eauraone.com
              </a>
              <a
                href="tel:+918639657245"
                className="group inline-flex items-center justify-center rounded-full border border-hairline bg-bg hover:bg-surface text-ink px-8 py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:border-clay/35 hover:-translate-y-px shadow-sm hover:shadow cursor-pointer"
              >
                <Phone className="mr-2 h-4 w-4 text-clay transition-transform duration-300 group-hover:scale-110" />
                +91 86396 57245
              </a>
              <button
                onClick={() => setIsCareersOpen(true)}
                className="group inline-flex items-center justify-center rounded-full border border-hairline bg-bg hover:bg-surface text-ink px-8 py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:border-clay/35 hover:-translate-y-px shadow-sm hover:shadow cursor-pointer"
              >
                View open engineering roles
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
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
              ["Contact", ["info@eauraone.com", "+91 86396 57245", "Press", "Partners"]],
            ].map(([title, items]) => (
              <div key={title as string} className="flex flex-col">
                <div className="font-semibold text-ink tracking-wide">{title}</div>
                <ul className="mt-4 space-y-3 text-ink-2">
                  {(items as string[]).map((i) => (
                    <li key={i}>
                      <a
                        href={i === "+91 86396 57245" ? "tel:+918639657245" : i === "info@eauraone.com" ? "mailto:info@eauraone.com" : "#"}
                        onClick={(e) => {
                          if (i === "Careers") {
                            e.preventDefault();
                            setIsCareersOpen(true);
                          } else if (i === "info@eauraone.com") {
                            // Do not prevent default so mailto: works
                          } else if (i === "+91 86396 57245") {
                            // Do not prevent default so tel: works
                          } else {
                            e.preventDefault();
                          }
                        }}
                        className="link-hover hover:text-ink transition-colors duration-200"
                      >
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
      {/* ── INTERACTIVE MODALS ────────────────────────────────────────────── */}
      <AnimatePresence>
        {/* 1. Contact Form Modal */}
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetContactForm}
              className="absolute inset-0 cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-bg border border-hairline rounded-[28px] shadow-2xl p-8 md:p-10 flex flex-col z-10 overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[radial-gradient(closest-side,rgba(0,113,227,0.06),transparent_80%)] rounded-full blur-2xl pointer-events-none" />

              <button
                onClick={resetContactForm}
                className="absolute top-6 right-6 h-8 w-8 rounded-full border border-hairline bg-surface hover:bg-hairline flex items-center justify-center text-ink-2 hover:text-ink hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {contactStatus !== "success" ? (
                <>
                  <div className="text-left">
                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-clay mb-2.5">Get in touch</p>
                    <h3 className="font-display text-[28px] font-bold text-ink leading-tight">Partner with EAURA</h3>
                    <p className="mt-3 text-[14px] text-ink-2 leading-relaxed">
                      Reach out to evaluate integration paths, sandbox access, or telemetry infrastructure requirements.
                    </p>
                  </div>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setContactStatus("sending");
                      try {
                        const response = await fetch("https://api.web3forms.com/submit", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify({
                            access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
                            name: contactForm.name,
                            email: contactForm.email,
                            subject: `New Contact Form Inquiry from ${contactForm.name} (${contactForm.org})`,
                            from_name: "Eaura Website",
                            message: `Organization: ${contactForm.org}\nEmail: ${contactForm.email}\nName: ${contactForm.name}\n\nMessage:\n${contactForm.message}`,
                          }),
                        });
                        const result = await response.json();
                        if (result.success) {
                          setContactStatus("success");
                        } else {
                          console.error("Web3Forms Submission Failed:", result);
                          setContactStatus("idle");
                          alert("Failed to send message. Please try again or email us directly at info@eauraone.com.");
                        }
                      } catch (error) {
                        console.error("Web3Forms Submission Error:", error);
                        setContactStatus("idle");
                        alert("An error occurred. Please try again or email us directly at info@eauraone.com.");
                      }
                    }}
                    className="mt-8 flex flex-col gap-4 text-left"
                  >
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface text-ink text-[14.5px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Work Email
                        </label>
                        <input
                          required
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface text-ink text-[14.5px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Organization
                        </label>
                        <input
                          required
                          type="text"
                          value={contactForm.org}
                          onChange={(e) => setContactForm({ ...contactForm, org: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface text-ink text-[14.5px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="How can we assist you?"
                        className="w-full px-4 py-3 rounded-xl border border-hairline bg-surface text-ink text-[14.5px] focus:outline-none focus:border-clay/40 resize-none transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactStatus === "sending"}
                      className="mt-2 w-full group inline-flex items-center justify-center rounded-xl bg-ink text-bg py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:bg-clay hover:text-white disabled:bg-hairline disabled:text-ink-2 cursor-pointer shadow"
                    >
                      {contactStatus === "sending" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 grid place-items-center text-emerald-500 mb-6 shadow-md shadow-emerald-500/5">
                    <CheckCircle2 className="h-8 w-8 animate-bounce" />
                  </div>
                  <h3 className="font-display text-[24px] font-bold text-ink">Inquiry Received</h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2 max-w-sm">
                    Thank you for reaching out, <span className="font-semibold text-ink">{contactForm.name}</span>. 
                    Our systems engineering team has logged your inquiry. We will contact you at <span className="font-semibold text-ink">{contactForm.email}</span> within one business day.
                  </p>
                  <button
                    onClick={resetContactForm}
                    className="mt-8 px-8 py-3 bg-ink hover:bg-clay text-bg hover:text-white text-[14px] font-semibold rounded-full shadow transition-all duration-200 cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}

        {/* 2. Careers Modal */}
        {isCareersOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetCareersForm}
              className="absolute inset-0 cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-bg border border-hairline rounded-[28px] shadow-2xl p-8 md:p-10 flex flex-col z-10 max-h-[85vh] overflow-hidden"
            >
              <button
                onClick={resetCareersForm}
                className="absolute top-6 right-6 h-8 w-8 rounded-full border border-hairline bg-surface hover:bg-hairline flex items-center justify-center text-ink-2 hover:text-ink hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="text-left border-b border-hairline pb-5">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-clay mb-2.5">Join the team</p>
                <h3 className="font-display text-[28px] font-bold text-ink leading-tight">Open Engineering Roles</h3>
                <p className="mt-2 text-[14px] text-ink-2 leading-relaxed">
                  We are looking for engineers, compiler designers, and product creators who think from first principles.
                </p>
              </div>

              <div className="overflow-y-auto pr-2 mt-6 flex-grow flex flex-col gap-4 text-left">
                {[
                  {
                    id: "full-stack",
                    title: "Full Stack Software Engineer",
                    type: "Full-Time / Internship",
                    mode: "Remote / Hybrid",
                    desc: "Build scalable web applications and intelligent software products using modern technologies. Work across frontend, backend, APIs, databases, cloud infrastructure, and contribute to products including NOVA, ENVX, and ELEKKI."
                  },
                  {
                    id: "platform",
                    title: "Platform Engineer",
                    type: "Full-Time",
                    mode: "Remote",
                    desc: "Design and maintain secure, scalable backend infrastructure, cloud services, deployment pipelines, authentication systems, APIs, databases, and developer tooling that power EAURA's technology platform."
                  },
                  {
                    id: "ai-product",
                    title: "AI Product Engineer (NOVA)",
                    type: "Full-Time",
                    mode: "Remote",
                    desc: "Build intelligent AI-powered experiences for NOVA. Develop AI agents, LLM integrations, conversational interfaces, automation workflows, and next-generation productivity features."
                  }
                ].map((role) => (
                  <div
                    key={role.id}
                    className={`border rounded-2xl p-5 transition-all duration-300 ${
                      selectedRole === role.id
                        ? "border-clay bg-clay/[0.02]"
                        : "border-hairline bg-surface hover:bg-hairline/40 hover:border-hairline-2"
                    }`}
                  >
                    <div
                      className="flex flex-wrap items-start justify-between gap-3 cursor-pointer"
                      onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
                    >
                      <div>
                        <h4 className="font-display font-bold text-[16.5px] text-ink">{role.title}</h4>
                        <div className="mt-1 flex items-center gap-4 text-[12px] font-mono text-ink-2">
                          <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {role.type}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {role.mode}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveApplyRole(role);
                        }}
                        className="px-4 py-1.5 border border-hairline bg-bg hover:bg-surface text-[12.5px] font-semibold rounded-full transition-all duration-200 cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>

                    <AnimatePresence>
                      {selectedRole === role.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-hairline/60 flex flex-col gap-4">
                            <p className="text-[13.5px] leading-relaxed text-ink-2">{role.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-hairline/60 flex justify-between items-center text-[12px] text-ink-2 font-mono">
                <div>hiring contact: <a href="mailto:info@eauraone.com" className="text-clay hover:underline">info@eauraone.com</a></div>
                <div>tel: <a href="tel:+918639657245" className="text-clay hover:underline">+91 86396 57245</a></div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 3. Job Application Modal */}
        {activeApplyRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveApplyRole(null)}
              className="absolute inset-0 cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-xl bg-bg border border-hairline rounded-[28px] shadow-2xl p-8 md:p-10 flex flex-col z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveApplyRole(null)}
                className="absolute top-6 right-6 h-8 w-8 rounded-full border border-hairline bg-surface hover:bg-hairline flex items-center justify-center text-ink-2 hover:text-ink hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {careersStatus !== "success" ? (
                <>
                  <div className="text-left border-b border-hairline pb-5">
                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-clay mb-2.5">Join the team</p>
                    <h3 className="font-display text-[24px] font-bold text-ink leading-tight">Apply for Role</h3>
                    <p className="mt-2 text-[14.5px] text-ink-2">
                      Submit your credentials to join EAURA.
                    </p>
                  </div>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setCareersStatus("submitting");

                      try {
                        const formData = new FormData();
                        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");
                        formData.append("name", careersForm.name);
                        formData.append("email", careersForm.email);
                        formData.append("phone", careersForm.phone);
                        formData.append("linkedin", careersForm.linkedin);
                        formData.append("github", careersForm.github);
                        formData.append("why_join", careersForm.whyJoin);
                        formData.append("subject", `Job Application: ${activeApplyRole.title} - ${careersForm.name}`);
                        formData.append("from_name", "Eaura Careers");

                        let messageBody = `Candidate Name: ${careersForm.name}\n`;
                        messageBody += `Candidate Email: ${careersForm.email}\n`;
                        messageBody += `Phone Number: ${careersForm.phone}\n`;
                        messageBody += `LinkedIn: ${careersForm.linkedin}\n`;
                        messageBody += `GitHub/Portfolio: ${careersForm.github}\n`;
                        messageBody += `Applied Role: ${activeApplyRole.title}\n\n`;
                        messageBody += `Why join EAURA:\n${careersForm.whyJoin}\n`;

                        formData.append("message", messageBody);

                        if (careersForm.resume) {
                          formData.append("attachment", careersForm.resume);
                        }

                        const response = await fetch("https://api.web3forms.com/submit", {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                          },
                          body: formData,
                        });

                        const result = await response.json();
                        if (result.success) {
                          setCareersStatus("success");
                        } else {
                          console.error("Web3Forms Careers Submission Failed:", result);
                          setCareersStatus("idle");
                          alert("Failed to submit application. Please try again or email us directly at info@eauraone.com.");
                        }
                      } catch (error) {
                        console.error("Web3Forms Careers Submission Error:", error);
                        setCareersStatus("idle");
                        alert("An error occurred. Please try again or email us directly at info@eauraone.com.");
                      }
                    }}
                    className="mt-6 flex flex-col gap-4 text-left"
                  >
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                        Role Applied For
                      </label>
                      <input
                        disabled
                        type="text"
                        value={activeApplyRole.title}
                        className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface/50 text-ink-2 text-[14px] cursor-not-allowed"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          value={careersForm.name}
                          onChange={(e) => setCareersForm({ ...careersForm, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          value={careersForm.email}
                          onChange={(e) => setCareersForm({ ...careersForm, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          value={careersForm.phone}
                          onChange={(e) => setCareersForm({ ...careersForm, phone: e.target.value })}
                          placeholder="+91 86396 57245"
                          className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          LinkedIn Profile
                        </label>
                        <input
                          required
                          type="url"
                          value={careersForm.linkedin}
                          onChange={(e) => setCareersForm({ ...careersForm, linkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          GitHub / Portfolio URL
                        </label>
                        <input
                          required
                          type="url"
                          value={careersForm.github}
                          onChange={(e) => setCareersForm({ ...careersForm, github: e.target.value })}
                          placeholder="https://github.com/username"
                          className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                          Resume Upload (PDF only)
                        </label>
                        <input
                          required
                          type="file"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            if (file && file.type !== "application/pdf") {
                              alert("Please upload a PDF file only.");
                              e.target.value = "";
                              setCareersForm({ ...careersForm, resume: null });
                            } else {
                              setCareersForm({ ...careersForm, resume: file });
                            }
                          }}
                          className="w-full px-4 py-2 rounded-xl border border-hairline bg-surface text-ink text-[13px] focus:outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[12px] file:font-semibold file:bg-hairline file:text-ink hover:file:bg-hairline/80 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink-2 mb-1.5 font-semibold">
                        Why do you want to join EAURA?
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={careersForm.whyJoin}
                        onChange={(e) => setCareersForm({ ...careersForm, whyJoin: e.target.value })}
                        placeholder="What drives you to build products with us?"
                        className="w-full px-4 py-2.5 rounded-xl border border-hairline bg-surface text-ink text-[14px] focus:outline-none focus:border-clay/40 resize-none transition-all duration-200"
                      />
                    </div>

                    <div className="mt-2 text-[12px] text-ink-2 font-mono flex flex-col gap-1">
                      <div>hiring contact: <a href="mailto:info@eauraone.com" className="text-clay hover:underline">info@eauraone.com</a></div>
                      <div>tel: <a href="tel:+918639657245" className="text-clay hover:underline">+91 86396 57245</a></div>
                    </div>

                    <button
                      type="submit"
                      disabled={careersStatus === "submitting"}
                      className="mt-2 w-full group inline-flex items-center justify-center rounded-xl bg-ink text-bg py-4 text-[15px] font-semibold tracking-tight transition-all duration-200 hover:bg-clay hover:text-white disabled:bg-hairline disabled:text-ink-2 cursor-pointer shadow"
                    >
                      {careersStatus === "submitting" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 grid place-items-center text-emerald-500 mb-6">
                    <CheckCircle2 className="h-8 w-8 animate-bounce" />
                  </div>
                  <h3 className="font-display text-[24px] font-bold text-ink">Application Submitted</h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2 max-w-sm">
                    Thank you for applying, <span className="font-semibold text-ink">{careersForm.name}</span>. 
                    Your application has been compiled successfully. We will review your materials and contact you at <span className="font-semibold text-ink">{careersForm.email}</span>.
                  </p>
                  <button
                    onClick={resetCareersForm}
                    className="mt-8 px-8 py-3 bg-ink hover:bg-clay text-bg hover:text-white text-[14px] font-semibold rounded-full shadow transition-all duration-200 cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Home;
