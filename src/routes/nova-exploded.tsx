import { createFileRoute, Link } from "@tanstack/react-router";
import { SequenceCanvas } from "@/components/canvas/SequenceCanvas";
import { ArrowLeft, Cpu, Activity, Lock, Zap } from "lucide-react";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/nova-exploded")({
  component: NovaExploded,
  head: () => ({
    meta: [
      { title: "NOVA N1 Edge Architecture | EAURA" },
      {
        name: "description",
        content: "Explore the internal 3D architecture of the NOVA N1 Edge chip.",
      },
    ],
  }),
});

function NovaExploded() {
  return (
    <div className="bg-[#020408] text-ink min-h-screen selection:bg-accent-cyan/10 selection:text-accent-cyan">
      <Nav />
      
      {/* Back to OS Button Overlay */}
      <div className="fixed top-24 left-6 z-50 pointer-events-auto">
        <Link 
          to="/nova" 
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[13px] text-ink-2/70 hover:text-white hover:border-accent-cyan/30 transition-all duration-300 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to NOVA OS
        </Link>
      </div>

      <div className="relative">
        <SequenceCanvas>
          {/* Cinematic Overlay Content (Scrolls over the pinned canvas) */}
          <div className="h-[4000px] w-full pointer-events-none relative">
            
            {/* Act 1: Introduction */}
            <div className="absolute top-[10vh] left-0 w-full flex flex-col items-center text-center px-6">
              <span className="text-accent-cyan font-mono text-[11px] tracking-[0.2em] uppercase font-semibold mb-4 opacity-80">
                Architecture Reveal
              </span>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-white mb-6">
                The N1 Edge Engine.
              </h1>
              <p className="text-lg text-white/50 max-w-2xl font-normal leading-relaxed">
                Scroll to dissect the most advanced local neural processor ever designed. Zero cloud latency. Infinite potential.
              </p>
            </div>

            {/* Act 2: Deep Architecture */}
            <div className="absolute top-[1200px] right-[10%] max-w-md text-left px-6">
              <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 grid place-items-center mb-6 text-white shadow-xl">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-4xl text-white mb-4">
                Symmetric Processing.
              </h2>
              <p className="text-white/60 leading-relaxed text-[15px]">
                The dual-layered neural architecture processes raw telemetry at 12ms per cycle, completely offline. We designed the N1 chip to balance immense vector processing with microscopic thermal output.
              </p>
            </div>

            {/* Act 3: Secure Enclave */}
            <div className="absolute top-[2200px] left-[10%] max-w-md text-left px-6">
              <div className="h-12 w-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 grid place-items-center mb-6 text-accent-cyan shadow-xl">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-4xl text-white mb-4">
                Zero-Knowledge Vault.
              </h2>
              <p className="text-white/60 leading-relaxed text-[15px]">
                Every emotion vector, schedule, and memory node is encrypted at the hardware level via AES-256-GCM. Your local context never leaves the casing of the NOVA unit.
              </p>
            </div>

            {/* Act 4: Final Conclusion */}
            <div className="absolute top-[3200px] left-0 w-full flex flex-col items-center text-center px-6">
              <div className="flex gap-4 mb-8">
                <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1.5px]">
                  <div className="w-full h-full bg-[#05070a] rounded-full flex items-center justify-center">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-accent-cyan to-emerald-400 p-[1.5px]">
                  <div className="w-full h-full bg-[#05070a] rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                Pure Local Intelligence.
              </h2>
              <Link 
                to="/nova" 
                className="mt-4 pointer-events-auto bg-white text-black px-8 py-3.5 rounded-full font-semibold text-[14px] hover:bg-accent-cyan hover:text-white transition-all duration-300"
              >
                Return to Dashboard
              </Link>
            </div>

          </div>
        </SequenceCanvas>
      </div>
    </div>
  );
}
