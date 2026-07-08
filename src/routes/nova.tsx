import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Database,
  Eye,
  Heart,
  Lock,
  MessageSquare,
  Mic,
  Activity,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  Sliders,
  ChevronRight,
  ShieldCheck,
  Volume2
} from "lucide-react";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/nova")({
  component: NovaShowcase,
  head: () => ({
    meta: [
      { title: "NOVA — The Autonomous Personal AI Companion | EAURA" },
      {
        name: "description",
        content: "Experience NOVA, the next-generation autonomous AI companion featuring long-term memory, offline Edge AI architecture, and emotion intelligence.",
      },
    ],
  }),
});

function NovaShowcase() {
  const [bootStep, setBootStep] = useState(0);
  const [isBooted, setIsBooted] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "simulator" | "memory" | "hardware">("dashboard");
  
  // Interactive Simulation States
  const [simStep, setSimStep] = useState<"idle" | "listening" | "processing" | "complete">("idle");
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulatedSchedule, setSimulatedSchedule] = useState<any[]>([]);

  // 3D Card Rotation Spring Configs for Hardware Render
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Boot Simulation Pipeline
  useEffect(() => {
    if (bootStep < 5) {
      const timer = setTimeout(() => {
        setBootStep((p) => p + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsBooted(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  // Telemetry loop for voice wave orb
  const [orbPulse, setOrbPulse] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setOrbPulse((p) => (p === 3 ? 1 : p + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const runSimulation = (promptText: string) => {
    setSelectedPrompt(promptText);
    setSimStep("listening");
    setSimulationLogs([]);
    setSimulatedSchedule([]);

    setTimeout(() => {
      setSimStep("processing");
      addLog("➔ Handshaking with local secure Edge core...");
      setTimeout(() => {
        addLog("➔ Fetching calendar endpoints (Google/Outlook)...");
        setTimeout(() => {
          addLog("➔ Resolving priority email threads (18 parsed)...");
          setTimeout(() => {
            addLog("➔ Querying real-time traffic telemetry...");
            setTimeout(() => {
              addLog("➔ Applying long-term habits & constraints...");
              setTimeout(() => {
                addLog("✔ Execution schema built successfully.");
                setSimStep("complete");
                if (promptText.includes("day")) {
                  setSimulatedSchedule([
                    { time: "08:30 AM", task: "Systems Architecture Sync", desc: "Edge compilation pipeline discussion" },
                    { time: "11:00 AM", task: "Focus Block: Model Optimization", desc: "Fine-tuning memory telemetry loop" },
                    { time: "01:30 PM", task: "Review Eaura Forge PRs", desc: "Audit and run compiler test suite" },
                    { time: "04:00 PM", task: "Aerobic Run (Suggested)", desc: "Optimum slot due to temperature drop" }
                  ]);
                } else {
                  setSimulatedSchedule([
                    { time: "Active", task: "Optimized webpack chunks", desc: "Reduced initial payload by 14%" },
                    { time: "Active", task: "Audited secure environment variables", desc: "Symmetric key checks passed" }
                  ]);
                }
              }, 600);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 1500);
  };

  const addLog = (log: string) => {
    setSimulationLogs((prev) => [...prev, log]);
  };

  const bootLogs = [
    "Initializing NOVA AI Kernel...",
    "Configuring secure AES-256 Memory Engine...",
    "Handshaking Offline Edge Telemetry loop...",
    "Calibrating neural speech synthesis vectors...",
    "Activating Emotion awareness plane...",
    "NOVA is online and active."
  ];

  return (
    <div className="dark min-h-screen bg-[#030712] text-white antialiased overflow-x-hidden relative selection:bg-cyan-500/20 selection:text-cyan-300">
      <Nav />

      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.06),transparent_80%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.05),transparent_80%)] blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {!isBooted ? (
          /* ── BOOT ANIMATION OVERLAY ── */
          <motion.div
            key="boot"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6"
          >
            <div className="max-w-md w-full flex flex-col items-center text-center">
              {/* Spinning / Glowing Loader */}
              <div className="relative h-24 w-24 mb-10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t border-b border-cyan-500/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-10 w-10 rounded-full bg-cyan-500/10 border border-cyan-500/40 grid place-items-center"
                >
                  <Bot className="h-5 w-5 text-cyan-400" />
                </motion.div>
              </div>

              <div className="w-full bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-[12px] text-left leading-relaxed shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4 text-white/40">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span>NOVA // BOOT_LOADER_V2.0</span>
                </div>
                
                <div className="flex flex-col gap-2 min-h-[140px]">
                  {bootLogs.slice(0, bootStep + 1).map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === bootStep ? "text-cyan-400 font-semibold" : "text-white/60"}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ── MAIN IMMERSIVE SHOWCASE ── */
          <motion.div
            key="showcase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 md:gap-12 min-h-[90vh]"
          >
            {/* Left sidebar controller */}
            <div className="flex flex-col gap-6 text-left">
              <div className="border border-white/5 rounded-3xl p-6 bg-white/[0.01] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 grid place-items-center text-white shadow shadow-cyan-500/20">
                    <Bot className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-[17px] text-white">NOVA OS</h2>
                    <p className="text-[10px] font-mono text-cyan-400">STATUS: CORE LIVE</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {[
                    { id: "dashboard", label: "AI Dashboard", icon: Layers },
                    { id: "simulator", label: "Live Simulator", icon: MessageSquare },
                    { id: "memory", label: "Memory Timeline", icon: Database },
                    { id: "hardware", label: "NOVA Hardware", icon: Cpu }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-3 w-full px-4.5 py-3.5 rounded-xl font-medium text-[14px] transition-all duration-300 border cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-sm"
                          : "border-transparent text-white/50 hover:text-white hover:bg-white/[0.02]"
                      }`}
                    >
                      <tab.icon className="h-4.5 w-4.5" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Edge AI Stat Card */}
              <div className="border border-white/5 rounded-3xl p-5 bg-white/[0.01] backdrop-blur-md text-[12.5px] font-mono text-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center text-white/60">
                  <span>Edge Processing</span>
                  <span className="text-emerald-400 font-bold">100% Local</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Model latency</span>
                  <span className="text-white">12ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>RAM footprint</span>
                  <span className="text-white">1.8 GB</span>
                </div>
              </div>
            </div>

            {/* Right main workspace viewport */}
            <div className="flex flex-col gap-8">
              <AnimatePresence mode="wait">
                {/* 1. INTERACTIVE AI DASHBOARD */}
                {activeTab === "dashboard" && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
                  >
                    {[
                      {
                        Icon: Brain,
                        title: "AI Core",
                        tag: "Cognitive Engine",
                        desc: "Multimodal coordination loop routing text, vision, and system telemetry offline on local architecture."
                      },
                      {
                        Icon: Database,
                        title: "Long-Term Memory",
                        tag: "Vector DB",
                        desc: "Persistent experience database. Indexes daily preferences, habits, and compiler cycles securely."
                      },
                      {
                        Icon: Mic,
                        title: "Voice Intelligence",
                        tag: "Speech Synthesis",
                        desc: "Sub-50ms natural verbal synthesis. Emulates dynamic tone, accents, and cognitive phrasing."
                      },
                      {
                        Icon: Heart,
                        title: "Emotion Engine",
                        tag: "Cognitive Sentiment",
                        desc: "Identifies fatigue, stress, and flow states from input telemetry to adapt assistant guidance cycles."
                      },
                      {
                        Icon: Activity,
                        title: "Health Intelligence",
                        tag: "Bio-Telemetry",
                        desc: "Tracks sleep cycles, cardiovascular metrics, and cognitive load profiles to optimize focus hours."
                      },
                      {
                        Icon: Sliders,
                        title: "Automation Engine",
                        tag: "Workflow Planner",
                        desc: "Generates custom automation script templates, coordinates test suites, and runs local environment scripts."
                      },
                      {
                        Icon: Lock,
                        title: "Privacy Vault",
                        tag: "Zero-Knowledge",
                        desc: "All personal vectors are local-first, encrypted via AES-256-GCM. Zero cloud synchronization telemetry."
                      },
                      {
                        Icon: Cpu,
                        title: "Edge AI Module",
                        tag: "Hardware Optimized",
                        desc: "Tailored to run efficiently on EAURA N1 Edge hardware, bypassing constant API round-trips."
                      }
                    ].map((card, i) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative border border-white/5 rounded-3xl p-6 md:p-8 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan-500/20 shadow-xl hover:shadow-cyan-500/[0.02] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/10 transition-all duration-300" />
                        <div>
                          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 grid place-items-center text-white/70 group-hover:text-cyan-400 transition-all duration-300 mb-6">
                            <card.Icon className="h-5 w-5" />
                          </div>
                          <p className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase">{card.tag}</p>
                          <h3 className="font-display font-bold text-[19px] text-white mt-2">{card.title}</h3>
                          <p className="text-[13.5px] leading-relaxed text-white/50 font-normal mt-3">{card.desc}</p>
                        </div>
                        <div className="mt-8 flex items-center text-[12.5px] font-semibold text-white/30 group-hover:text-cyan-400 transition-colors duration-300">
                          Inspect Specs
                          <ChevronRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* 2. LIVE CONVERSATION SIMULATOR */}
                {activeTab === "simulator" && (
                  <motion.div
                    key="simulator"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 text-left"
                  >
                    {/* Simulator Control Area */}
                    <div className="border border-white/5 rounded-3xl p-6 md:p-8 bg-white/[0.01] flex flex-col justify-between min-h-[500px]">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                          <h3 className="font-display font-bold text-[19px] text-white">Live Simulator</h3>
                          <span className="text-[11px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 rounded-full uppercase">Interactive</span>
                        </div>
                        
                        <p className="text-[14px] text-white/50 leading-relaxed mb-6">
                          Click one of the complex prompt sequences below to test how the NOVA OS models execute tasks locally on local variables.
                        </p>

                        <div className="flex flex-col gap-3">
                          {[
                            "NOVA, organize my day.",
                            "NOVA, optimize environment variables and run tests.",
                          ].map((promptText) => (
                            <button
                              key={promptText}
                              onClick={() => runSimulation(promptText)}
                              className={`w-full p-4 rounded-2xl border text-left text-[14px] transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                selectedPrompt === promptText
                                  ? "border-cyan-500 bg-cyan-500/5 text-white"
                                  : "border-white/5 bg-white/[0.02] text-white/70 hover:bg-white/[0.04] hover:text-white"
                              }`}
                            >
                              <span>"{promptText}"</span>
                              <Play className="h-3.5 w-3.5 text-cyan-400 opacity-60" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Visual Orb Waveform while processing */}
                      <div className="mt-8 border-t border-white/5 pt-6 flex items-center gap-6">
                        <div className="relative h-16 w-16 flex items-center justify-center shrink-0">
                          {/* Animated Voice Orb */}
                          <motion.div
                            animate={{
                              scale: simStep === "listening" ? [1, 1.2, 1] : simStep === "processing" ? [1, 1.1, 1] : 1,
                              rotate: 360
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                              simStep === "listening" ? "border-red-500/40 bg-red-500/5" :
                              simStep === "processing" ? "border-cyan-500/40 bg-cyan-500/5" :
                              "border-white/10 bg-white/5"
                            }`}
                          />
                          <div className={`h-8 w-8 rounded-full transition-colors duration-300 flex items-center justify-center ${
                            simStep === "listening" ? "bg-red-500/20" :
                            simStep === "processing" ? "bg-cyan-500/20" :
                            "bg-white/10"
                          }`}>
                            <Mic className={`h-4 w-4 ${
                              simStep === "listening" ? "text-red-400 animate-pulse" :
                              simStep === "processing" ? "text-cyan-400" :
                              "text-white/40"
                            }`} />
                          </div>
                        </div>

                        <div className="text-[13.5px]">
                          <p className="font-semibold text-white">
                            {simStep === "idle" && "Select a task query above"}
                            {simStep === "listening" && "Listening to input parameters..."}
                            {simStep === "processing" && "Resolving dependencies..."}
                            {simStep === "complete" && "Plan compiled successfully!"}
                          </p>
                          <p className="text-white/40 text-[12px] mt-0.5">
                            {simStep === "idle" && "Click a button to start"}
                            {simStep === "listening" && "Awaiting voice vector compilation"}
                            {simStep === "processing" && "Local pipeline is generating model steps"}
                            {simStep === "complete" && "Completed in 3.4 seconds"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Console & Execution Results */}
                    <div className="flex flex-col gap-6">
                      {/* Telemetry Console */}
                      <div className="border border-white/5 rounded-3xl p-5 bg-black/40 font-mono text-[11.5px] text-left flex flex-col gap-2 min-h-[220px]">
                        <div className="flex justify-between items-center text-white/30 border-b border-white/5 pb-2 mb-2">
                          <span>SYSTEM LOGS</span>
                          <span>PORT: 5174</span>
                        </div>
                        {simulationLogs.length === 0 ? (
                          <div className="text-white/30 italic">No instructions running. Select a prompt to boot logs.</div>
                        ) : (
                          simulationLogs.map((log, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className={log.includes("✔") ? "text-emerald-400 font-bold" : "text-white/60"}
                            >
                              {log}
                            </motion.div>
                          ))
                        )}
                        {simStep === "processing" && (
                          <div className="flex items-center gap-2 text-cyan-400 mt-1">
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                            <span>Thinking...</span>
                          </div>
                        )}
                      </div>

                      {/* Resulting plan */}
                      <div className="border border-white/5 rounded-3xl p-6 bg-white/[0.01] flex-grow flex flex-col justify-between">
                        <div className="text-[13px] font-mono text-white/30 mb-4 text-left">COMPILED SCHEMAS</div>
                        {simulatedSchedule.length === 0 ? (
                          <div className="text-white/30 italic text-left my-auto">Awaiting schema output...</div>
                        ) : (
                          <div className="flex flex-col gap-4 text-left">
                            {simulatedSchedule.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between"
                              >
                                <div>
                                  <h4 className="font-semibold text-white text-[14px]">{item.task}</h4>
                                  <p className="text-[12px] text-white/40 mt-1 font-normal">{item.desc}</p>
                                </div>
                                <span className="font-mono text-[10.5px] text-cyan-400 font-semibold border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 rounded-lg shrink-0">{item.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. LONG-TERM MEMORY TIMELINE */}
                {activeTab === "memory" && (
                  <motion.div
                    key="memory"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="border border-white/5 rounded-3xl p-6 md:p-8 bg-white/[0.01] text-left max-w-3xl mx-auto"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
                      <h3 className="font-display font-bold text-[19px] text-white">Memory Timeline</h3>
                      <span className="text-[11px] font-mono text-cyan-400">VECTOR MEMORIES LOGGED</span>
                    </div>

                    <div className="relative pl-6 border-l border-white/5 flex flex-col gap-10">
                      {[
                        {
                          time: "YESTERDAY",
                          date: "July 7, 2026",
                          items: [
                            "Recalled compiler target configurations for ECE waveform structures.",
                            "Logged user's high-focus cycle between 10:00 AM and 01:00 PM.",
                            "Analyzed environmental variable sync loops for 2 decrypted payloads."
                          ]
                        },
                        {
                          time: "TODAY",
                          date: "July 8, 2026",
                          items: [
                            "Swapped Capabilities layout for Contact Form components on Eaura home.",
                            "Identified user intent for GoDaddy deployment configurations.",
                            "Connected local Vercel terminal tokens for project pipeline alignment."
                          ]
                        },
                        {
                          time: "TOMORROW (EXPECTED)",
                          date: "July 9, 2026",
                          items: [
                            "Autocompile telemetry performance benchmarks for Edge node feedback loops.",
                            "Suggested calendar adjustment for 11:30 AM compiler architecture review."
                          ]
                        }
                      ].map((section) => (
                        <div key={section.time} className="relative group">
                          {/* Bullet marker */}
                          <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-white/20 border border-bg group-hover:bg-cyan-400 group-hover:border-cyan-400/20 transition-all duration-300" />
                          
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400">{section.time}</span>
                            <span className="text-[12px] text-white/30 ml-3">{section.date}</span>
                          </div>

                          <div className="mt-4 flex flex-col gap-3">
                            {section.items.map((item, idx) => (
                              <div key={idx} className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl text-[13.5px] leading-relaxed text-white/70">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 4. HARDWARE SHOWCASE */}
                {activeTab === "hardware" && (
                  <motion.div
                    key="hardware"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 text-left items-center"
                  >
                    {/* Left: Copy & Specifications */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <p className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">Interactive Render</p>
                        <h3 className="font-display font-bold text-[36px] text-white mt-2 leading-tight">NOVA N1 Edge</h3>
                        <p className="text-[15px] leading-relaxed text-white/50 mt-4">
                          Experience local intelligence with zero latency. The Eaura N1 Edge chip is custom-designed to host large neural parameter cycles on-device, completely bypassing cloud round-trips.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        {[
                          { title: "N1 Neural Engine", desc: "Structured for offline sequence telemetry processing and zero-knowledge vector lookups." },
                          { title: "Zero-Latency Input", desc: "Local digital signal processing paths handle verbal inputs in sub-50ms cycles." }
                        ].map((spec) => (
                          <div key={spec.title} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <h4 className="font-bold text-[14px] text-white">{spec.title}</h4>
                            <p className="text-[12.5px] leading-relaxed text-white/50 mt-1 font-normal">{spec.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: 3D Render Canvas */}
                    <div className="relative aspect-square w-full max-w-[420px] mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,113,227,0.06),transparent_80%)] rounded-full blur-2xl pointer-events-none" />
                      
                      <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-72 h-72 rounded-[40px] border border-white/10 bg-[#0d1220]/80 shadow-2xl overflow-hidden cursor-grab flex items-center justify-center group"
                        style={{
                          perspective: 1000
                        }}
                      >
                        <motion.div
                          style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                          }}
                          className="w-full h-full flex flex-col justify-between p-8"
                        >
                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <span className="font-mono text-[9px] text-white/40">EAURA.HARDWARE.N1</span>
                            <span className="text-[9px] font-mono text-cyan-400 font-bold border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 rounded-full">EDGE ACTIVE</span>
                          </div>

                          {/* Glowing Processor Core */}
                          <div className="relative my-auto flex flex-col items-center justify-center gap-2">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-[#1d4ed8] to-[#06b6d4] p-[1.5px] shadow-[0_0_24px_rgba(6,182,212,0.35)]"
                            >
                              <div className="w-full h-full bg-[#0d1220] rounded-2xl flex items-center justify-center border border-white/5">
                                <Cpu className="h-8 w-8 text-cyan-400" />
                              </div>
                            </motion.div>
                            <span className="font-mono text-[10px] text-white/50 tracking-wider mt-4">N1 NEURAL ENGINE</span>
                          </div>

                          <div className="border-t border-white/5 pt-4 flex justify-between text-[8px] font-mono text-white/40">
                            <span>Symmetric Keys: Encrypted</span>
                            <span>S/N: 9283-F1B8</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
