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
  Volume2,
  X,
  Loader2,
  AlertTriangle
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
  const [activeTab, setActiveTab] = useState<"dashboard" | "voice" | "simulator" | "memory" | "hardware">("dashboard");
  
  // Real voice emotion recording states
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [voiceLoading, setVoiceLoading] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [isMockResult, setIsMockResult] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Interactive Simulation States
  const [simStep, setSimStep] = useState<"idle" | "listening" | "processing" | "complete">("idle");
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulatedSchedule, setSimulatedSchedule] = useState<any[]>([]);

  // 3D Card Rotation Spring Configs for Hardware Render
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 80, damping: 20 });

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
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsBooted(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  // Audio recording handlers
  const startRecording = async () => {
    setResult(null);
    setVoiceError(null);
    setIsMockResult(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        setVoiceLoading(true);
        const blob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("audio", blob);

        try {
          // Post to FastAPI voice analyzer
          const res = await fetch("http://localhost:8000/process/", {
            method: "POST",
            body: formData,
          });

          if (!res.ok) throw new Error("Server error");
          const data = await res.json();
          setResult(data);
          setVoiceError(null);
        } catch (err) {
          console.warn("Backend offline, loading high-fidelity simulation model...");
          // Fall back gracefully to simulator values
          setIsMockResult(true);
          setTimeout(() => {
            setResult({
              text: "Hello NOVA, compile systems diagnostics for my local variables.",
              emotion: "Calm",
              is_owner_voice: true
            });
            setVoiceLoading(false);
          }, 1500);
          return;
        }
        setVoiceLoading(false);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Microphone access error:", err);
      setVoiceError("Failed to access microphone. Please ensure microphone permissions are granted.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  const getEmotionColor = (emotion: string) => {
    if (!emotion) return "text-gray-600";
    const em = emotion.toLowerCase();
    if (em.includes("happy") || em.includes("excited")) return "text-emerald-600";
    if (em.includes("sad")) return "text-blue-600";
    if (em.includes("angry") || em.includes("disgusted")) return "text-red-500";
    if (em.includes("calm")) return "text-cyan-600";
    if (em.includes("neutral")) return "text-slate-500";
    return "text-gray-500";
  };

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
    "Calibrating speech synthesis vectors...",
    "Activating Emotion awareness plane...",
    "NOVA is online."
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased overflow-x-hidden relative selection:bg-blue-500/10 selection:text-blue-700">
      <Nav />

      {/* Decorative background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_80%)] pointer-events-none" />
        <div className="absolute bottom-[15%] right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.03),transparent_80%)] pointer-events-none" />
      </div>

      <AnimatePresence mode="wait">
        {!isBooted ? (
          /* ── BOOT ANIMATION OVERLAY (LIGHT THEME) ── */
          <motion.div
            key="boot"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#f5f5f7] flex flex-col items-center justify-center p-6"
          >
            <div className="max-w-md w-full flex flex-col items-center text-center">
              {/* Spinning Loader */}
              <div className="relative h-20 w-20 mb-8 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-b-2 border-blue-500/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="h-9 w-9 rounded-full bg-blue-500/5 border border-blue-500/15 grid place-items-center"
                >
                  <Bot className="h-4.5 w-4.5 text-blue-500" />
                </motion.div>
              </div>

              <div className="w-full bg-white/70 border border-black/[0.05] rounded-3xl p-6 font-mono text-[11.5px] text-left leading-relaxed shadow-xl shadow-black/[0.02] backdrop-blur-md text-slate-600">
                <div className="flex items-center gap-2 border-b border-black/[0.05] pb-2.5 mb-3.5 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>NOVA // INITIALIZATION</span>
                </div>
                
                <div className="flex flex-col gap-1.5 min-h-[120px]">
                  {bootLogs.slice(0, bootStep + 1).map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -3 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === bootStep ? "text-blue-600 font-semibold" : "text-slate-500"}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ── MAIN IMMERSIVE SHOWCASE (LIGHT THEME) ── */
          <motion.div
            key="showcase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 md:gap-12 min-h-[90vh]"
          >
            {/* Left sidebar controller */}
            <div className="flex flex-col gap-6 text-left">
              <div className="border border-black/[0.05] rounded-3xl p-6 bg-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-500 grid place-items-center text-white shadow shadow-blue-500/20">
                    <Bot className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-[16px] text-[#1d1d1f]">NOVA OS</h2>
                    <p className="text-[9.5px] font-mono text-blue-600">STATUS: CORE ACTIVE</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {[
                    { id: "dashboard", label: "AI Dashboard", icon: Layers },
                    { id: "voice", label: "Voice Interface", icon: Mic },
                    { id: "simulator", label: "Live Simulator", icon: MessageSquare },
                    { id: "memory", label: "Memory Timeline", icon: Database },
                    { id: "hardware", label: "NOVA Hardware", icon: Cpu }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-[13.5px] transition-all duration-300 border cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-blue-500/5 border-blue-500/10 text-blue-600 shadow-sm"
                          : "border-transparent text-slate-500 hover:text-[#1d1d1f] hover:bg-black/[0.01]"
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Edge AI Stat Card */}
              <div className="border border-black/[0.05] rounded-3xl p-5 bg-white/40 font-mono text-[11.5px] text-slate-400 flex flex-col gap-3">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Edge Processing</span>
                  <span className="text-emerald-600 font-bold">100% Local</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Model latency</span>
                  <span className="text-slate-800">12ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>RAM footprint</span>
                  <span className="text-slate-800">1.8 GB</span>
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
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="group relative border border-black/[0.05] rounded-3xl p-6 md:p-8 bg-white/50 hover:bg-white/90 hover:border-blue-500/20 shadow-sm hover:shadow-[0_12px_24px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/[0.02] to-transparent rounded-bl-full pointer-events-none group-hover:from-blue-500/[0.05] transition-all duration-300" />
                        <div>
                          <div className="h-11 w-11 rounded-2xl bg-black/[0.02] border border-black/[0.04] group-hover:border-blue-500/20 group-hover:bg-blue-50/50 grid place-items-center text-slate-500 group-hover:text-blue-600 transition-all duration-300 mb-6">
                            <card.Icon className="h-4.5 w-4.5" />
                          </div>
                          <p className="text-[10px] font-mono tracking-wider text-blue-600 uppercase font-semibold">{card.tag}</p>
                          <h3 className="font-display font-bold text-[18px] text-[#1d1d1f] mt-1.5">{card.title}</h3>
                          <p className="text-[13.5px] leading-relaxed text-slate-500 font-normal mt-2.5">{card.desc}</p>
                        </div>
                        <div className="mt-8 flex items-center text-[12px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                          Inspect Specs
                          <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* 2. REAL VOICE INTERFACE */}
                {activeTab === "voice" && (
                  <motion.div
                    key="voice"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 text-left"
                  >
                    {/* Live Waveform Orb Block */}
                    <div className="border border-black/[0.05] rounded-3xl p-6 md:p-8 bg-white/50 backdrop-blur-md flex flex-col justify-between items-center text-center min-h-[500px]">
                      <div className="w-full border-b border-black/[0.05] pb-4 flex items-center justify-between text-left">
                        <div>
                          <h3 className="font-display font-bold text-[18px] text-[#1d1d1f]">Voice Emotion Detector</h3>
                          <p className="text-[12px] text-slate-500 font-normal mt-1">Talk to NOVA to run offline sentiment analytics.</p>
                        </div>
                        <span className="text-[10px] font-mono text-blue-600 border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 rounded-full uppercase font-semibold">Live Mode</span>
                      </div>

                      {/* Translucent voice orb bubble */}
                      <div className="relative h-44 w-44 flex items-center justify-center my-6">
                        <motion.div
                          animate={{
                            scale: recording ? [1, 1.12, 1] : [1, 1.04, 1],
                            rotate: 360
                          }}
                          transition={{
                            duration: recording ? 2 : 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`absolute inset-0 rounded-full border transition-all duration-500 shadow-inner ${
                            recording
                              ? "bg-red-500/5 border-red-500/20 shadow-red-500/5"
                              : "bg-gradient-to-tr from-blue-500/5 via-cyan-500/5 to-indigo-500/5 border-black/[0.04] shadow-black/[0.01]"
                          }`}
                        />

                        {/* Interactive trigger circle */}
                        <button
                          onClick={recording ? stopRecording : startRecording}
                          disabled={voiceLoading}
                          className={`h-24 w-24 rounded-full flex flex-col items-center justify-center border transition-all duration-350 cursor-pointer shadow-lg hover:shadow-xl ${
                            recording
                              ? "bg-red-500 hover:bg-red-600 border-red-500 text-white"
                              : "bg-white border-black/[0.05] hover:border-blue-500/20 text-slate-700 hover:text-blue-600"
                          }`}
                        >
                          {voiceLoading ? (
                            <Loader2 className="h-7 w-7 animate-spin text-blue-500" />
                          ) : recording ? (
                            <>
                              <X className="h-6 w-6" />
                              <span className="text-[10px] font-mono uppercase font-bold tracking-wider mt-1.5">STOP</span>
                            </>
                          ) : (
                            <>
                              <Mic className="h-6 w-6" />
                              <span className="text-[10px] font-mono uppercase font-bold tracking-wider mt-1.5">TALK</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Waveform graphic bars representation */}
                      <div className="flex items-center gap-1.5 h-6">
                        {recording ? (
                          Array.from({ length: 9 }).map((_, i) => (
                            <motion.span
                              key={i}
                              animate={{
                                height: [8, Math.floor(Math.random() * 20) + 8, 8]
                              }}
                              transition={{
                                duration: 0.5 + i * 0.08,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="w-1.5 bg-red-500/80 rounded-full"
                            />
                          ))
                        ) : (
                          <span className="text-[12.5px] text-slate-400 font-normal">Press button and start talking...</span>
                        )}
                      </div>
                    </div>

                    {/* Results panel */}
                    <div className="flex flex-col gap-6">
                      {voiceError && (
                        <div className="border border-red-500/20 bg-red-500/5 rounded-3xl p-5 flex items-start gap-3.5 text-left">
                          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <div className="text-[13px] leading-relaxed text-red-600">
                            <span className="font-bold block">Access Error</span>
                            {voiceError}
                          </div>
                        </div>
                      )}

                      {/* Simulation/Offline indicator if active */}
                      {isMockResult && (
                        <div className="border border-blue-500/10 bg-blue-500/[0.02] rounded-3xl p-4 flex items-center gap-3 text-left">
                          <ShieldCheck className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                          <p className="text-[12px] text-slate-500 leading-normal">
                            FastAPI server offline. Initialized local fallback simulation parameters safely.
                          </p>
                        </div>
                      )}

                      {/* Display results */}
                      <div className="border border-black/[0.05] rounded-3xl p-6 bg-white/50 backdrop-blur-md flex-grow flex flex-col justify-between text-left min-h-[300px]">
                        <div className="text-[12px] font-mono text-slate-400 tracking-wider mb-6">DIAGNOSTIC OUTCOMES</div>
                        
                        {voiceLoading ? (
                          <div className="my-auto flex flex-col items-center text-center gap-3">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                            <p className="text-[13.5px] text-slate-500">Processing raw voice data...</p>
                          </div>
                        ) : result ? (
                          <div className="flex flex-col gap-6">
                            {result.is_owner_voice === false ? (
                              <div className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-4 flex items-start gap-3 text-[13px]">
                                <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0 mt-0.5" />
                                <div className="text-amber-700 leading-normal">
                                  <span className="font-bold block">🚫 Unauthorized Voice Print</span>
                                  Emotion detection is skipped because the input voice does not match the owner's voice print.
                                </div>
                              </div>
                            ) : (
                              <>
                                <div>
                                  <span className="text-[11px] font-mono text-slate-400 block tracking-wider uppercase">📝 TRANSCRIPTION</span>
                                  <p className="text-[15.5px] leading-relaxed text-[#1d1d1f] font-medium mt-2">
                                    "{result.text || "No speech detected."}"
                                  </p>
                                </div>

                                {result.emotion && result.emotion !== "no_speech_detected" && (
                                  <div>
                                    <span className="text-[11px] font-mono text-slate-400 block tracking-wider uppercase">😊 DETECTED SENTIMENT</span>
                                    <p className={`text-[24px] font-display font-black tracking-tight mt-1.5 ${getEmotionColor(result.emotion)}`}>
                                      {result.emotion.charAt(0).toUpperCase() + result.emotion.slice(1)}
                                    </p>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="my-auto text-center text-slate-400 italic text-[13px]">
                            Awaiting voice diagnostics output. Tap the microphone and speak to trigger.
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. LIVE CONVERSATION SIMULATOR */}
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
                    <div className="border border-black/[0.05] rounded-3xl p-6 md:p-8 bg-white/50 backdrop-blur-md flex flex-col justify-between min-h-[500px]">
                      <div>
                        <div className="flex items-center justify-between border-b border-black/[0.05] pb-4 mb-6">
                          <h3 className="font-display font-bold text-[18px] text-[#1d1d1f]">Live Simulator</h3>
                          <span className="text-[10px] font-mono text-blue-600 border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 rounded-full uppercase font-semibold">Interactive</span>
                        </div>
                        
                        <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6">
                          Select one of the structured template sequences to test how the NOVA core processes parameters locally.
                        </p>

                        <div className="flex flex-col gap-3">
                          {[
                            "NOVA, organize my day.",
                            "NOVA, optimize environment variables and run tests.",
                          ].map((promptText) => (
                            <button
                              key={promptText}
                              onClick={() => runSimulation(promptText)}
                              className={`w-full p-4 rounded-2xl border text-left text-[13.5px] transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                selectedPrompt === promptText
                                  ? "border-blue-500 bg-blue-500/5 text-blue-700"
                                  : "border-black/[0.04] bg-black/[0.01] text-slate-600 hover:bg-black/[0.03] hover:text-[#1d1d1f]"
                              }`}
                            >
                              <span>"{promptText}"</span>
                              <Play className="h-3.5 w-3.5 text-blue-500 opacity-60" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Visual Orb Waveform while processing */}
                      <div className="mt-8 border-t border-black/[0.05] pt-6 flex items-center gap-6">
                        <div className="relative h-14 w-14 flex items-center justify-center shrink-0">
                          <motion.div
                            animate={{
                              scale: simStep === "listening" ? [1, 1.15, 1] : simStep === "processing" ? [1, 1.08, 1] : 1,
                              rotate: 360
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                              simStep === "listening" ? "border-red-500/30 bg-red-500/5" :
                              simStep === "processing" ? "border-blue-500/30 bg-blue-500/5" :
                              "border-black/[0.05] bg-black/[0.02]"
                            }`}
                          />
                          <div className={`h-8 w-8 rounded-full transition-colors duration-300 flex items-center justify-center ${
                            simStep === "listening" ? "bg-red-500/10" :
                            simStep === "processing" ? "bg-blue-500/10" :
                            "bg-black/[0.04]"
                          }`}>
                            <Mic className={`h-4 w-4 ${
                              simStep === "listening" ? "text-red-500 animate-pulse" :
                              simStep === "processing" ? "text-blue-600" :
                              "text-slate-400"
                            }`} />
                          </div>
                        </div>

                        <div className="text-[13px]">
                          <p className="font-semibold text-[#1d1d1f]">
                            {simStep === "idle" && "Select a task query above"}
                            {simStep === "listening" && "Listening to parameters..."}
                            {simStep === "processing" && "Generating planning schema..."}
                            {simStep === "complete" && "Plan compiled successfully!"}
                          </p>
                          <p className="text-slate-400 text-[11.5px] mt-0.5 font-normal">
                            {simStep === "idle" && "Click a button to start"}
                            {simStep === "listening" && "Awaiting voice vector parsing"}
                            {simStep === "processing" && "Local compiler is running test cases"}
                            {simStep === "complete" && "Completed in 3.4 seconds"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Console & Execution Results */}
                    <div className="flex flex-col gap-6">
                      {/* Telemetry Console */}
                      <div className="border border-black/[0.05] rounded-3xl p-5 bg-white/70 shadow-sm font-mono text-[11px] text-slate-600 flex flex-col gap-2 min-h-[220px]">
                        <div className="flex justify-between items-center text-slate-400 border-b border-black/[0.05] pb-2 mb-2">
                          <span>SYSTEM LOGS</span>
                          <span>PORT: 5174</span>
                        </div>
                        {simulationLogs.length === 0 ? (
                          <div className="text-slate-400 italic">No instructions running. Select a template to boot logs.</div>
                        ) : (
                          simulationLogs.map((log, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -3 }}
                              animate={{ opacity: 1, x: 0 }}
                              className={log.includes("✔") ? "text-emerald-600 font-bold" : "text-slate-600"}
                            >
                              {log}
                            </motion.div>
                          ))
                        )}
                        {simStep === "processing" && (
                          <div className="flex items-center gap-2 text-blue-600 mt-1 font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                            <span>Computing parameters...</span>
                          </div>
                        )}
                      </div>

                      {/* Resulting plan */}
                      <div className="border border-black/[0.05] rounded-3xl p-6 bg-white/50 backdrop-blur-md flex-grow flex flex-col justify-between">
                        <div className="text-[11px] font-mono text-slate-400 mb-4 font-semibold">COMPILED SCHEMAS</div>
                        {simulatedSchedule.length === 0 ? (
                          <div className="text-slate-400 italic my-auto">Awaiting schema output...</div>
                        ) : (
                          <div className="flex flex-col gap-3.5">
                            {simulatedSchedule.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08 }}
                                className="p-4 bg-white/80 border border-black/[0.04] rounded-2xl flex items-center justify-between shadow-sm"
                              >
                                <div>
                                  <h4 className="font-semibold text-[#1d1d1f] text-[13.5px]">{item.task}</h4>
                                  <p className="text-[11.5px] text-slate-500 mt-0.5 font-normal">{item.desc}</p>
                                </div>
                                <span className="font-mono text-[10px] text-blue-600 font-bold border border-blue-500/10 bg-blue-500/5 px-2 py-0.5 rounded-lg shrink-0">{item.time}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. LONG-TERM MEMORY TIMELINE */}
                {activeTab === "memory" && (
                  <motion.div
                    key="memory"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="border border-black/[0.05] rounded-3xl p-6 md:p-8 bg-white/50 backdrop-blur-md max-w-3xl mx-auto"
                  >
                    <div className="flex items-center justify-between border-b border-black/[0.05] pb-4 mb-8">
                      <h3 className="font-display font-bold text-[18px] text-[#1d1d1f]">Memory Timeline</h3>
                      <span className="text-[10px] font-mono text-blue-600 font-semibold">PERSISTENT EXPERIENCE ENGINE</span>
                    </div>

                    <div className="relative pl-6 border-l border-black/[0.05] flex flex-col gap-8">
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
                          <div className="absolute -left-[30px] top-1.5 h-2 w-2 rounded-full bg-slate-300 border border-bg group-hover:bg-blue-500 group-hover:border-blue-500/20 transition-all duration-300" />
                          
                          <div>
                            <span className="text-[9.5px] font-mono font-bold tracking-wider text-blue-600">{section.time}</span>
                            <span className="text-[11px] text-slate-400 ml-3 font-normal">{section.date}</span>
                          </div>

                          <div className="mt-3 flex flex-col gap-3">
                            {section.items.map((item, idx) => (
                              <div key={idx} className="p-4 bg-white/70 border border-black/[0.04] rounded-2xl text-[13.5px] leading-relaxed text-slate-600 shadow-sm font-normal">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 5. HARDWARE SHOWCASE */}
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
                        <p className="text-[10px] font-mono tracking-widest text-blue-600 uppercase font-semibold">Interactive Render</p>
                        <h3 className="font-display font-bold text-[32px] text-[#1d1d1f] mt-1 leading-tight">NOVA N1 Edge</h3>
                        <p className="text-[14.5px] leading-relaxed text-slate-500 mt-4">
                          Experience local intelligence with zero latency. The Eaura N1 Edge chip is custom-designed to host large neural parameter cycles on-device, completely bypassing cloud round-trips.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        {[
                          { title: "N1 Neural Engine", desc: "Structured for offline sequence telemetry processing and zero-knowledge vector lookups." },
                          { title: "Zero-Latency Input", desc: "Local digital signal processing paths handle verbal inputs in sub-50ms cycles." }
                        ].map((spec) => (
                          <div key={spec.title} className="p-4 bg-white/50 border border-black/[0.05] rounded-2xl">
                            <h4 className="font-bold text-[13.5px] text-[#1d1d1f]">{spec.title}</h4>
                            <p className="text-[12.5px] leading-relaxed text-slate-500 mt-1 font-normal">{spec.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: 3D Render Canvas */}
                    <div className="relative aspect-square w-full max-w-[420px] mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,113,227,0.03),transparent_80%)] rounded-full blur-2xl pointer-events-none" />
                      
                      <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-72 h-72 rounded-[40px] border border-black/[0.06] bg-white/80 shadow-xl shadow-black/[0.02] overflow-hidden cursor-grab flex items-center justify-center group backdrop-blur-md"
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
                          <div className="flex justify-between items-center border-b border-black/[0.05] pb-4">
                            <span className="font-mono text-[9px] text-slate-400">EAURA.HARDWARE.N1</span>
                            <span className="text-[9px] font-mono text-blue-600 font-bold border border-blue-500/10 bg-blue-500/5 px-2 py-0.5 rounded-full">EDGE ACTIVE</span>
                          </div>

                          {/* Glowing Processor Core */}
                          <div className="relative my-auto flex flex-col items-center justify-center gap-2">
                            <motion.div
                              animate={{ scale: [1, 1.04, 1] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 p-[1.5px] shadow-[0_4px_20px_rgba(59,130,246,0.15)]"
                            >
                              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center border border-black/[0.03]">
                                <Cpu className="h-8 w-8 text-blue-500" />
                              </div>
                            </motion.div>
                            <span className="font-mono text-[9.5px] text-slate-400 tracking-wider mt-4">N1 NEURAL ENGINE</span>
                          </div>

                          <div className="border-t border-black/[0.05] pt-4 flex justify-between text-[8px] font-mono text-slate-400">
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
