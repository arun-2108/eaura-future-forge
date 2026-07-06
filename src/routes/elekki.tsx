import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileSpreadsheet,
  Award,
  Sparkles,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  Lock,
  ChevronRight,
  Plus,
  Minus,
  Check,
  CheckCircle,
  HelpCircle,
  Terminal,
  Cpu,
  Workflow,
  Network
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/elekki")({
  component: ElekkiShowcase,
  head: () => ({
    meta: [
      { title: "ELEKKI — The Complete Skill Development Ecosystem for ECE | EAURA" },
      {
        name: "description",
        content: "Elevate your Electronics & Communication Engineering skills. Learn, practice, build, validate, and grow with ELEKKI, the flagship ecosystem built by EAURA.",
      },
    ],
  }),
});

function ElekkiShowcase() {
  const waitlistRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  // Email Waitlist States
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 1200);
  };

  // Mock Dashboard Interaction States
  const [activeMockTab, setActiveMockTab] = useState<"problems" | "path" | "stats" | "leaderboard">("problems");
  const [activeCodeTab, setActiveCodeTab] = useState<"problem" | "code" | "output">("code");
  const [selectedNode, setSelectedNode] = useState<string>("node-2");

  // Telemetry loop for active dashboard simulator
  const [telemetrySim, setTelemetrySim] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetrySim((p) => (p === 3 ? 1 : p + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark min-h-screen bg-bg text-ink antialiased overflow-x-hidden">
      <Nav />

      {/* Grid background effect */}
      <div className="fixed inset-0 pointer-events-none z-0 grid-bg opacity-[0.03] dark:opacity-[0.05]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-bg min-h-[95vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 z-10">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(94,92,230,0.07),transparent_80%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.05),transparent_80%)] pointer-events-none blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-violet-400">
                  FLAGSHIP OFFERING
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-white/40">
                  BUILT BY EAURA
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-bold tracking-[-0.04em] text-[48px] leading-[1.0] md:text-[84px] md:leading-[0.92] text-white">
                ELEKKI
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[18px] md:text-[23px] font-semibold text-white/90 leading-tight tracking-tight max-w-xl">
                The Complete Skill Development Ecosystem for Electronics &amp; Communication Engineers.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-white/60 max-w-lg">
                If LeetCode transformed coding interview preparation, ELEKKI is building the platform that transforms how ECE students learn, practice, validate, and showcase industry-ready skills.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => visionRef.current?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold bg-white text-bg hover:bg-white/90 shadow-md shadow-white/5 transition-all duration-200"
                >
                  Explore Vision
                </Button>
                <Button
                  onClick={() => waitlistRef.current?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-200"
                >
                  Join Waitlist
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero Right: Premium Interactive Dashboard Mockup */}
          <Reveal delay={0.25}>
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[500px] mx-auto rounded-[32px] border border-white/10 bg-[#0a0d14]/70 backdrop-blur-xl shadow-2xl p-6 flex flex-col overflow-hidden group/dash">
              {/* Dashboard Inner Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header Chrome */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet-500 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase">ELEKKI.SYSTEM // V0.1.2</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-full px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[9px] tracking-wider text-emerald-400">SIMULATOR ACTIVE</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-4 bg-white/5 p-1 rounded-xl border border-white/5 text-[11px] font-mono">
                {[
                  { id: "problems", label: "Challenge" },
                  { id: "path", label: "Path" },
                  { id: "stats", label: "Analytics" },
                  { id: "leaderboard", label: "Rankings" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMockTab(tab.id as any)}
                    className={`py-2 rounded-lg transition-all duration-200 ${
                      activeMockTab === tab.id
                        ? "bg-white/10 text-white shadow-sm font-semibold"
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Display Areas */}
              <div className="flex-grow relative overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  {/* TAB 1: DAILY CHALLENGE / CODE WRITER */}
                  {activeMockTab === "problems" && (
                    <motion.div
                      key="problems"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div className="bg-[#03060a] border border-white/5 rounded-2xl flex-grow overflow-hidden flex flex-col">
                        {/* Tab header inside window */}
                        <div className="bg-[#0c1017] px-4 py-2 border-b border-white/5 flex items-center justify-between text-[10px] font-mono">
                          <div className="flex gap-2">
                            {["problem", "code", "output"].map((t) => (
                              <button
                                key={t}
                                onClick={() => setActiveCodeTab(t as any)}
                                className={`capitalize py-1 px-2.5 rounded-md ${
                                  activeCodeTab === t ? "bg-white/5 text-white" : "text-white/40 hover:text-white/60"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                          <span className="text-[#a5b4fc] text-[9px]">UART_TX_RX.v</span>
                        </div>

                        {/* Content viewport */}
                        <div className="p-4 flex-grow overflow-y-auto font-mono text-[11px] leading-relaxed text-left max-h-[220px]">
                          {activeCodeTab === "problem" && (
                            <div className="text-white/60">
                              <span className="text-violet-400 font-bold block mb-2"># Task: Sequence Detector (1101 FSM)</span>
                              Implement a synchronous Mealy or Moore Sequence Detector FSM that outputs a high pulse `detected` when the input stream `x` completes the sequence "1101".
                              <div className="mt-3 p-2 bg-white/5 border border-white/5 rounded-lg text-emerald-400">
                                ➔ Inputs: clk, rst, x (1-bit)<br />
                                ➔ Outputs: detected (1-bit)
                              </div>
                            </div>
                          )}

                          {activeCodeTab === "code" && (
                            <div className="text-white/70 select-none">
                              <div><span className="text-violet-400">module</span> sequence_detector (</div>
                              <div className="pl-4">input clk, rst, x,</div>
                              <div className="pl-4">output reg detected</div>
                              <div>);</div>
                              <div className="text-emerald-400 mt-2">// State definitions &amp; transitions:</div>
                              <div><span className="text-cyan-400">always</span> @(<span className="text-cyan-400">posedge</span> clk) <span className="text-cyan-400">begin</span></div>
                              <div className="pl-4 text-violet-300">if (rst) state &lt;= IDLE;</div>
                              <div className="pl-4 text-violet-300">else state &lt;= next_state;</div>
                              <div>end</div>
                            </div>
                          )}

                          {activeCodeTab === "output" && (
                            <div className="text-white/80">
                              <div className="text-[#06b6d4] font-semibold">// Running Icarus Verilog Simulation...</div>
                              <div className="text-white/40 mt-1">iverilog -o main_tb.vvp sequence_detector.v main_tb.v</div>
                              <div className="text-white/40">vvp main_tb.vvp +vcd</div>
                              <div className="text-emerald-400 font-semibold mt-3 flex items-center gap-1.5">
                                <Check size={12} /> Testbench Passed successfully.
                              </div>
                              <div className="text-[#a5b4fc] text-[10px] mt-2 border-t border-white/5 pt-2">
                                Output Waveforms generated (VCD).<br />
                                Sequence "1101" detected at cycle 18 and 42.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-white/40 font-mono">
                        <span>Difficulty: Hard</span>
                        <div className="flex gap-2">
                          <span className="text-emerald-400">★ +100 XP</span>
                          <span className="text-white/20">|</span>
                          <span className="text-violet-400 font-semibold flex items-center gap-0.5">Run Simulation <ChevronRight size={12} /></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: LEARNING PATH TREE */}
                  {activeMockTab === "path" && (
                    <motion.div
                      key="path"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div className="border border-white/5 rounded-2xl bg-[#03060a] p-4 flex-grow flex items-center justify-center relative overflow-hidden">
                        {/* Glowing Background Radial */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />

                        {/* Interactive Graph Node Layout */}
                        <div className="relative flex flex-col items-center gap-8 w-full max-w-xs z-10">
                          {/* Connections Path SVG */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                            <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                            <line x1="50%" y1="45%" x2="25%" y2="60%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                            <line x1="50%" y1="45%" x2="75%" y2="60%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                          </svg>

                          {/* Node 1: Root */}
                          <button
                            onClick={() => setSelectedNode("node-1")}
                            className={`relative z-10 h-10 px-4 rounded-full border text-[11px] font-mono tracking-tight flex items-center gap-2 transition-all duration-200 ${
                              selectedNode === "node-1"
                                ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                                : "bg-[#0b0f19] border-white/10 text-white/70 hover:border-white/20"
                            }`}
                          >
                            <CheckCircle size={10} className="text-emerald-400" />
                            2-Input AND Gate
                          </button>

                          {/* Node 2: Selected default */}
                          <button
                            onClick={() => setSelectedNode("node-2")}
                            className={`relative z-10 h-10 px-4 rounded-full border text-[11px] font-mono tracking-tight flex items-center gap-2 transition-all duration-200 ${
                              selectedNode === "node-2"
                                ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                                : "bg-[#0b0f19] border-white/10 text-white/70 hover:border-white/20"
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                            4-to-1 Multiplexer
                          </button>

                          {/* Level 3 options split */}
                          <div className="flex gap-4 w-full justify-center">
                            <button
                              onClick={() => setSelectedNode("node-3")}
                              className={`relative z-10 h-9 px-3.5 rounded-full border text-[10px] font-mono tracking-tight flex items-center gap-1.5 transition-all duration-200 ${
                                selectedNode === "node-3"
                                  ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                                  : "bg-[#0b0f19] border-white/10 text-white/40 hover:border-white/20"
                              }`}
                            >
                              <Lock size={8} />
                              D Flip-Flop Reset
                            </button>
                            <button
                              onClick={() => setSelectedNode("node-4")}
                              className={`relative z-10 h-9 px-3.5 rounded-full border text-[10px] font-mono tracking-tight flex items-center gap-1.5 transition-all duration-200 ${
                                selectedNode === "node-4"
                                  ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                                  : "bg-[#0b0f19] border-white/10 text-white/40 hover:border-white/20"
                              }`}
                            >
                              <Lock size={8} />
                              4-bit Binary Counter
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Display descriptions of selected node */}
                      <div className="mt-3 p-3 bg-white/5 border border-white/5 rounded-xl text-left text-[11px] font-mono text-white/60">
                        {selectedNode === "node-1" && "✓ COMPLETED: Boolean AND logic gate behavior."}
                        {selectedNode === "node-2" && "✦ ACTIVE: Combinational multiplexer with selection control (sel)."}
                        {selectedNode === "node-3" && "🔒 LOCKED: D Flip-Flop with synchronous active-high reset."}
                        {selectedNode === "node-4" && "🔒 LOCKED: 4-bit Binary Counter with active-high reset."}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: SKILL ANALYTICS */}
                  {activeMockTab === "stats" && (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div className="border border-white/5 rounded-2xl bg-[#03060a] p-5 flex-grow flex flex-col justify-between text-left">
                        <div>
                          <span className="text-[10px] font-mono text-white/40 block mb-2">WEEKLY ACTIVITY SUMMARY</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold font-display text-white">4,850 XP</span>
                            <span className="text-xs font-mono text-emerald-400 font-medium flex items-center"><TrendingUp size={12} /> +24%</span>
                          </div>
                        </div>

                        {/* Skill Distribution chart lines */}
                        <div className="flex flex-col gap-3.5 my-4">
                          {[
                            { name: "Verilog / RTL", val: 82, color: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]" },
                            { name: "UVM / Verification", val: 45, color: "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" },
                            { name: "Embedded C / RTOS", val: 68, color: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" },
                            { name: "FPGA / Synthesis", val: 30, color: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" },
                          ].map((sk) => (
                            <div key={sk.name} className="flex flex-col gap-1 text-[11px] font-mono">
                              <div className="flex justify-between text-white/60">
                                <span>{sk.name}</span>
                                <span className="text-white/80">{sk.val}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full ${sk.color} rounded-full`} style={{ width: `${sk.val}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px] font-mono text-white/40">
                          <span>Weakness: Assertions (SVA)</span>
                          <span className="text-violet-400 hover:underline cursor-pointer">Practice Now</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 4: LEADERBOARD rankings */}
                  {activeMockTab === "leaderboard" && (
                    <motion.div
                      key="leaderboard"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <div className="border border-white/5 rounded-2xl bg-[#03060a] p-4 flex-grow overflow-y-auto text-left flex flex-col gap-2 max-h-[220px]">
                        {[
                          { rank: 1, name: "Pranav M.", college: "IIT Madras", xp: "14,820", active: true },
                          { rank: 2, name: "Srinivas K.", college: "BITS Pilani", xp: "12,940", active: false },
                          { rank: 3, name: "Arunkumar S.", college: "Anna University", xp: "12,852", active: true },
                          { rank: 4, name: "Divya R.", college: "NIT Trichy", xp: "11,200", active: true },
                          { rank: 5, name: "Rahul S.", college: "RVCE Bangalore", xp: "10,950", active: false },
                        ].map((user) => (
                          <div
                            key={user.rank}
                            className={`flex items-center justify-between p-2 rounded-xl border transition-all duration-200 ${
                              user.name.includes("Arunkumar")
                                ? "bg-violet-500/10 border-violet-500/30 text-white"
                                : "bg-white/5 border-transparent text-white/70"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-xs text-white/40 w-4">#{user.rank}</span>
                              <div className="relative">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-display text-[10px] font-semibold text-white">
                                  {user.name.charAt(0)}
                                </div>
                                {user.active && (
                                  <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-emerald-400 border border-[#03060a] animate-pulse" />
                                )}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-sans text-[11px] font-semibold tracking-tight">{user.name}</span>
                                <span className="font-mono text-[9px] text-white/40">{user.college}</span>
                              </div>
                            </div>
                            <span className="font-mono text-[11px] font-bold text-[#06b6d4]">{user.xp} XP</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-center text-[10px] font-mono text-white/40">
                        Top rankings updated every 10 mins.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#050811] py-24 md:py-36 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                  The Problem
                </div>
                <h2 className="mt-4 font-display text-[36px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.05] text-white">
                  Fragmented resources.
                  <br />
                  <span className="bg-gradient-to-r from-white/70 to-white/45 bg-clip-text text-transparent">
                    Fragmented minds.
                  </span>
                </h2>
                <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/60">
                  Electronics and Communication Engineering students face a steep learning curve. Unlike general software, ECE requires combining physical concepts, design compilation, and hardware architecture. 
                  <br /><br />
                  Currently, students must manage multiple disconnected channels for their development, creating a disjointed experience.
                </p>
              </div>
            </Reveal>

            {/* Fragmentation Diagram Grid */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Learning Sites", desc: "Disconnected lectures, static PDFs.", icon: BookOpen },
                  { name: "Practice Portals", desc: "Generic coding sites missing RTL design.", icon: Code2 },
                  { name: "Notes & Repos", desc: "Scattered papers, unversioned directories.", icon: FileSpreadsheet },
                  { name: "Interview Prep", desc: "No automated ECE mock tests.", icon: Award },
                  { name: "Guided Projects", desc: "Theoretical kits, no portfolio value.", icon: Cpu },
                  { name: "Assessments", desc: "Offline tests without visual waveform feedback.", icon: BarChart3 },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-200 text-left flex flex-col justify-between aspect-square"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#0d1222] border border-white/5 grid place-items-center text-white/70">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-[15px] text-white mt-4">{item.name}</h4>
                      <p className="text-[12px] text-white/40 leading-snug mt-1.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Unified Platform Banner */}
          <Reveal delay={0.15}>
            <div className="mt-20 p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-violet-950/20 via-black to-[#050811] border border-violet-500/20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(165,180,252,0.06),transparent_60%)]" />
              <h3 className="font-display text-[26px] md:text-[38px] font-bold text-white tracking-tight">
                ELEKKI unifies all of these into one intelligent platform.
              </h3>
              <p className="mt-3 text-white/50 text-[14px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
                We combine structured learning paths, sandbox compiler logic, hardware waveforms, and portfolio portfolios into a seamless, modern SaaS workspace.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Timeline Section */}
      <section ref={visionRef} className="bg-bg py-24 md:py-36 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Future Standard
              </div>
              <h2 className="mt-4 font-display text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-none">
                \"Our vision is to become the global standard platform for ECE students.\"
              </h2>
              <p className="mt-6 text-white/60 text-[15px] md:text-[17px] leading-relaxed">
                By standardizing skills validation from day one of college to professional hiring.
              </p>
            </Reveal>
          </div>

          {/* Elegant Timeline Animation */}
          <div className="relative max-w-lg mx-auto pl-12 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:max-w-4xl text-left">
            {/* Center Timeline Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-600 via-cyan-400 to-emerald-500 hidden md:block md:left-1/2 md:-translate-x-1/2" />
            <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-600 via-cyan-400 to-emerald-500 md:hidden" />

            {[
              { step: "Today", desc: "Fragmented resources, no clear path of validation.", color: "bg-violet-600 ring-violet-500/25", align: "right" },
              { step: "Learning", desc: "Visual interactive concepts, verified ECE hardware syllabi.", color: "bg-violet-500 ring-violet-400/25", align: "left" },
              { step: "Practice", desc: "Solve challenges with auto-graded Verilog and Waveform feedback.", color: "bg-cyan-400 ring-cyan-400/25", align: "right" },
              { step: "Projects", desc: "Develop and test hardware designs on actual edge platforms.", color: "bg-teal-400 ring-teal-400/25", align: "left" },
              { step: "Assessments", desc: "Demonstrate capabilities via adaptive benchmarking tasks.", color: "bg-emerald-400 ring-emerald-400/25", align: "right" },
              { step: "Industry Ready", desc: "Verified portfolios matched directly with top silicon recruiters.", color: "bg-emerald-500 ring-emerald-500/25", align: "left" },
            ].map((node, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={node.step} className="relative mb-16 last:mb-0 md:contents">
                  {/* Timeline Dot (Mobile + Desktop Center) */}
                  <div className="absolute left-[11px] top-1.5 md:left-1/2 md:-translate-x-1/2 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#020408] border-2 border-white ring-4 ring-white/5" />

                  {/* Left Column Content (for Left-aligned nodes) */}
                  <div className={`md:flex md:justify-end ${isEven ? "md:opacity-0" : ""}`}>
                    {!isEven && (
                      <Reveal delay={index * 0.05} className="w-full">
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur text-left hover:border-white/10 transition-colors">
                          <span className="font-mono text-[10px] tracking-widest text-[#06b6d4] uppercase block mb-2">STAGE 0{index + 1}</span>
                          <h4 className="font-display font-semibold text-lg text-white">{node.step}</h4>
                          <p className="mt-2 text-sm text-white/50 leading-relaxed">{node.desc}</p>
                        </div>
                      </Reveal>
                    )}
                  </div>

                  {/* Spacer for structure grid */}
                  <div className="hidden md:block w-8" />

                  {/* Right Column Content (for Right-aligned nodes) */}
                  <div className={`md:flex md:justify-start ${!isEven ? "md:opacity-0" : ""}`}>
                    {isEven && (
                      <Reveal delay={index * 0.05} className="w-full">
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur text-left hover:border-white/10 transition-colors">
                          <span className="font-mono text-[10px] tracking-widest text-violet-400 uppercase block mb-2">STAGE 0{index + 1}</span>
                          <h4 className="font-display font-semibold text-lg text-white">{node.step}</h4>
                          <p className="mt-2 text-sm text-white/50 leading-relaxed">{node.desc}</p>
                        </div>
                      </Reveal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-[#050811] py-24 md:py-36 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-20 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Core Engine
              </div>
              <h2 className="mt-4 font-display text-[40px] md:text-[54px] font-bold tracking-[-0.03em] leading-none text-white">
                Engineered from the ground up.
              </h2>
              <p className="mt-4 text-[16px] md:text-[18px] text-white/60">
                Eight robust features that build a reliable roadmap for skill verification.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Learning Hub",
                bullets: ["Structured learning", "Visual concepts", "Roadmaps"],
                icon: BookOpen,
                theme: "border-violet-500/10 hover:border-violet-500/30 text-violet-400 bg-violet-950/5"
              },
              {
                title: "Practice Arena",
                bullets: ["Topic challenges", "Daily problems", "Interactive exercises"],
                icon: Code2,
                theme: "border-cyan-500/10 hover:border-cyan-500/30 text-cyan-400 bg-cyan-950/5"
              },
              {
                title: "Assessments",
                bullets: ["Adaptive tests", "Mock interviews", "Skill validation"],
                icon: Award,
                theme: "border-emerald-500/10 hover:border-emerald-500/30 text-emerald-400 bg-emerald-950/5"
              },
              {
                title: "Projects",
                bullets: ["Guided projects", "Portfolio building", "Real-world applications"],
                icon: Cpu,
                theme: "border-blue-500/10 hover:border-blue-500/30 text-blue-400 bg-blue-950/5"
              },
              {
                title: "Analytics",
                bullets: ["Skill graph", "Progress tracking", "Weakness detection"],
                icon: BarChart3,
                theme: "border-indigo-500/10 hover:border-indigo-500/30 text-indigo-400 bg-indigo-950/5"
              },
              {
                title: "Leaderboard",
                bullets: ["College rankings", "Global rankings", "Weekly challenges"],
                icon: FileSpreadsheet,
                theme: "border-rose-500/10 hover:border-rose-500/30 text-rose-400 bg-rose-950/5"
              },
              {
                title: "AI Mentor",
                comingSoon: true,
                bullets: ["Personalized roadmap", "AI doubt solving", "Industry recommendations"],
                icon: BrainCircuit,
                theme: "border-white/5 hover:border-white/10 text-white/50 bg-white/5"
              },
              {
                title: "Career Hub",
                future: true,
                bullets: ["Internships", "Placements", "Recruiter access"],
                icon: Network,
                theme: "border-white/5 hover:border-white/10 text-white/50 bg-white/5"
              }
            ].map((feat, index) => (
              <Reveal key={feat.title} delay={index * 0.04}>
                <div className={`group rounded-[24px] border ${feat.theme} p-6 h-full flex flex-col justify-between hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/70">
                        <feat.icon size={18} />
                      </div>
                      {feat.comingSoon && (
                        <span className="text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border border-violet-500/30 text-violet-400 bg-violet-500/10 uppercase">
                          COMING SOON
                        </span>
                      )}
                      {feat.future && (
                        <span className="text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border border-white/10 text-white/40 bg-white/5 uppercase">
                          FUTURE
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-semibold text-lg text-white">{feat.title}</h4>
                    
                    <ul className="mt-4 flex flex-col gap-2.5 text-[13px] text-white/50">
                      {feat.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/25 group-hover:bg-white/45 transition-colors" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] font-semibold text-white/45 group-hover:text-white transition-colors cursor-pointer">
                    Explore specifications <ChevronRight size={12} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Domains chips cloud */}
      <section className="bg-bg py-24 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay mb-3">
                Broad Coverage
              </div>
              <h3 className="font-display text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-none">
                All ECE Core Domains
              </h3>
              <p className="mt-4 text-white/60 text-[14.5px] leading-relaxed">
                Whether you specialize in system microcode or silicon logic layout.
              </p>
            </div>
          </Reveal>

          {/* Cloud of Chips */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
              {[
                "Embedded Systems",
                "VLSI",
                "Digital Electronics",
                "Analog Electronics",
                "FPGA",
                "Verilog",
                "SystemVerilog",
                "IoT",
                "PCB Design",
                "Communication Systems",
                "Signal Processing",
                "Robotics",
                "Microcontrollers",
                "ARM",
                "RISC-V",
                "EDA Tools",
                "Semiconductors",
                "Control Systems",
                "Power Electronics",
                "More..."
              ].map((domain, index) => (
                <span
                  key={domain}
                  className={`px-4.5 py-2.5 rounded-full border border-white/5 bg-[#0a0d14]/80 text-[13px] font-medium transition-all duration-200 cursor-default hover:border-violet-500/30 hover:bg-violet-950/10 hover:text-violet-400`}
                >
                  {domain}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why ELEKKI (Comparison Section) */}
      <section className="bg-[#050811] py-24 md:py-36 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Comparisons
              </div>
              <h2 className="mt-4 font-display text-[38px] md:text-[52px] font-bold text-white tracking-tight leading-none">
                The ELEKKI Edge
              </h2>
              <p className="mt-4 text-white/50 text-[15px]">
                How we contrast against traditional engineering learning pipelines.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              {/* Traditional Learning */}
              <div className="rounded-3xl border border-red-500/10 bg-red-950/5 p-8 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-[22px] text-white flex items-center gap-2.5">
                    Traditional Learning
                  </h4>
                  
                  <div className="flex flex-col gap-6 mt-8">
                    {[
                      "Multiple disconnected platforms",
                      "No centralized progress tracking",
                      "No automated skill validation",
                      "Fragmented, theoretical learning",
                      "No defined roadmap to hardware jobs"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3.5 text-white/70 text-[14.5px]">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-semibold text-[10px]">
                          ✕
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ELEKKI Ecosystem */}
              <div className="rounded-3xl border border-violet-500/20 bg-violet-950/5 p-8 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
                <div className="text-left">
                  <h4 className="font-display font-bold text-[22px] text-white flex items-center gap-2.5">
                    ELEKKI Ecosystem
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-violet-500/30 text-violet-400 bg-violet-500/10 uppercase">
                      UNIFIED
                    </span>
                  </h4>
                  
                  <div className="flex flex-col gap-6 mt-8">
                    {[
                      "One cohesive engineering workspace",
                      "Centralized progress & capability analytics",
                      "Automated testbenches & waveform validation",
                      "Hands-on practice + assessed projects",
                      "Verified portfolio connected to recruiters"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3.5 text-white/90 text-[14.5px]">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-[10px]">
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Philosophy Sequential Scroll */}
      <section className="bg-bg py-32 md:py-48 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              {[
                { word: "Learn.", delay: 0 },
                { word: "Practice.", delay: 0.1 },
                { word: "Build.", delay: 0.2 },
                { word: "Validate.", delay: 0.3 },
                { word: "Grow.", delay: 0.4 },
                { word: "Become Industry Ready.", delay: 0.5 }
              ].map((item) => (
                <h2
                  key={item.word}
                  className={`font-display text-[48px] md:text-[84px] font-extrabold tracking-[-0.04em] leading-none ${
                    item.word.includes("Industry")
                      ? "bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mt-4"
                      : "text-white"
                  }`}
                  style={{
                    opacity: 1,
                  }}
                >
                  {item.word}
                </h2>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[#050811] py-24 md:py-36 border-t border-hairline relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-clay">
                Timeline
              </div>
              <h2 className="mt-4 font-display text-[38px] md:text-[52px] font-bold text-white tracking-tight leading-none">
                Development Roadmap
              </h2>
              <p className="mt-4 text-white/50 text-[15px]">
                Our modular rollout schedule as we construct the ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {[
              {
                phase: "Phase 1: Foundation",
                status: "Active Dev",
                items: ["Interactive Learning Modules", "Verilog Sandbox Practice", "RTL Auto-grade Assessments", "Leaderboards & Weekly Challenges"],
                theme: "border-violet-500/20 bg-violet-950/5 shadow-[0_15px_45px_-10px_rgba(139,92,246,0.06)]"
              },
              {
                phase: "Phase 2: Growth",
                status: "Planned",
                items: ["Guided Hardware Projects", "Collaborative ECE Communities", "Global Online Hardware Hackathons", "Skills Validation Certificates"],
                theme: "border-white/5 bg-white/5"
              },
              {
                phase: "Phase 3: Integration",
                status: "Longterm",
                items: ["AI doubt-solving Mentor", "Company Challenge Boards", "Automated Recruiter Dashboards", "Integrated Hiring Platform"],
                theme: "border-white/5 bg-white/5"
              }
            ].map((step, idx) => (
              <Reveal key={step.phase} delay={idx * 0.05}>
                <div className={`p-8 rounded-3xl border ${step.theme} h-full flex flex-col justify-between`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#06b6d4]">0{idx + 1} // DEVELOPMENT</span>
                      <span className="text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/5 uppercase">
                        {step.status}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-white mb-6">{step.phase}</h4>

                    <div className="flex flex-col gap-4">
                      {step.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-white/60 text-[13.5px]">
                          <span className="flex-shrink-0 h-4 w-4 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA & Waitlist Form */}
      <section ref={waitlistRef} id="waitlist" className="bg-bg py-28 md:py-36 border-t border-hairline relative z-10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(94,92,230,0.06),transparent_70%)]" />
        
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10 flex flex-col items-center">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-violet-400">
                COMING SOON
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-[0.15em] uppercase text-white/50">
                BUILT BY EAURA
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-[38px] md:text-[60px] tracking-[-0.03em] leading-tight text-white max-w-2xl">
              Ready to redefine Electronics Education?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-[16px] md:text-[18px] text-white/55 max-w-xl leading-relaxed">
              Join ELEKKI's journey. Sign up for early access, beta test privileges, and updates on our global rollout milestones.
            </p>
          </Reveal>

          {/* Waitlist Form Component */}
          <Reveal delay={0.15} className="w-full max-w-md mt-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleWaitlistSubmit}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex flex-col sm:flex-row gap-3 w-full"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    className="flex-grow px-5 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-violet-500/60 focus:bg-white/10 transition-all"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="rounded-full px-8 py-4 text-[14px] font-semibold bg-white text-bg hover:bg-white/90 disabled:opacity-50 transition-all shrink-0"
                  >
                    {loading ? "Registering..." : "Notify Me"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/5 flex flex-col items-center gap-3 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-display font-semibold text-lg text-white">Successfully registered!</h4>
                  <p className="text-xs text-white/50 leading-relaxed max-w-xs">
                    You have joined the ELEKKI waitlist. We will notify you when early access sandboxes become available in your region.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="border-t border-hairline bg-[#020408] py-8 text-center text-[12px] text-white/30 z-10 relative">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono">© 2026 EAURA PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6 font-mono">
            <a href="/#" className="hover:text-white transition-colors">Homepage</a>
            <a href="/#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
