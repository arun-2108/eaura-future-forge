import { motion } from "framer-motion";

/**
 * Cinematic, 3D-inspired tech visualization built with pure SVG + motion.
 * Concentric orbital rings, intersecting nodes, soft glow — no R3F overhead.
 */
export function HeroOrb() {
  const rings = [
    { r: 160, dur: 60, opacity: 0.35 },
    { r: 130, dur: 45, opacity: 0.5 },
    { r: 100, dur: 32, opacity: 0.7 },
    { r: 70, dur: 22, opacity: 0.9 },
  ];
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl" />
      <svg viewBox="-200 -200 400 400" className="relative h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a5c8ff" stopOpacity="1" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {rings.map((ring, i) => (
          <motion.g
            key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "0 0" }}
          >
            <ellipse
              cx="0"
              cy="0"
              rx={ring.r}
              ry={ring.r * 0.32}
              fill="none"
              stroke="url(#ring)"
              strokeOpacity={ring.opacity}
              strokeWidth="0.8"
              transform={`rotate(${i * 22})`}
            />
            <circle cx={ring.r} cy="0" r="2.6" fill="#a5c8ff" transform={`rotate(${i * 22})`}>
              <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
            </circle>
          </motion.g>
        ))}

        {/* core */}
        <circle cx="0" cy="0" r="30" fill="url(#core)" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />

        {/* corner nodes */}
        {[[-180, -60], [170, -90], [160, 110], [-160, 90]].map(([x, y], i) => (
          <g key={i}>
            <line x1="0" y1="0" x2={x} y2={y} stroke="rgba(125,170,255,0.18)" strokeWidth="0.6" />
            <circle cx={x} cy={y} r="3" fill="#06B6D4" />
          </g>
        ))}
      </svg>
    </div>
  );
}