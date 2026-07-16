// ────────────────────────────────────────────────────────────────────────────
//  EAURA Premium Interactive Components
//  Magnetic buttons · Cursor spotlight · Card tilt · Flip cards
//  Floating chips · Bento grid · Achievement cards · Stack cards
// ────────────────────────────────────────────────────────────────────────────
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  Bot,
  Layers,
  ShieldCheck,
  Linkedin,
  ArrowRight,
  Brain,
  Zap,
  Globe,
  Server,
  Eye,
  Wifi,
  Database,
  FlaskConical,
  Target,
  Rocket,
  Trophy,
  Star,
  Cpu,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. CURSOR SPOTLIGHT
// ─────────────────────────────────────────────────────────────────────────────
export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(6,182,212,0.04), transparent 50%)`,
        transition: "background 0.05s linear",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MAGNETIC BUTTON
// ─────────────────────────────────────────────────────────────────────────────
export function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  }, [mx, my, strength]);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. TILT CARD
// ─────────────────────────────────────────────────────────────────────────────
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 22, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 180, damping: 22, mass: 0.4 });
  const [hovered, setHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set((py - 0.5) * -maxTilt * 2);
    ry.set((px - 0.5) * maxTilt * 2);
    setGlare({ x: px * 100, y: py * 100 });
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { rx.set(0); ry.set(0); setHovered(false); }}
      className={`relative ${className}`}
    >
      {children}
      {hovered && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.1), transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. STATUS BADGE
// ─────────────────────────────────────────────────────────────────────────────
const badgeColors: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  cyan:    { dot: "bg-[#06b6d4]", text: "text-[#06b6d4]",   border: "border-[#06b6d4]/25", bg: "bg-[#06b6d4]/8" },
  emerald: { dot: "bg-emerald-400", text: "text-emerald-400", border: "border-emerald-500/25", bg: "bg-emerald-500/8" },
  violet:  { dot: "bg-violet-400",  text: "text-violet-400",  border: "border-violet-500/25",  bg: "bg-violet-500/8"  },
  amber:   { dot: "bg-amber-400",   text: "text-amber-400",   border: "border-amber-500/25",   bg: "bg-amber-500/8"   },
  blue:    { dot: "bg-blue-400",    text: "text-blue-400",    border: "border-blue-500/25",    bg: "bg-blue-500/8"    },
  rose:    { dot: "bg-rose-400",    text: "text-rose-400",    border: "border-rose-500/25",    bg: "bg-rose-500/8"    },
};

export function StatusBadge({
  label,
  color = "cyan",
  pulse = true,
}: {
  label: string;
  color?: "cyan" | "emerald" | "violet" | "amber" | "blue" | "rose";
  pulse?: boolean;
}) {
  const c = badgeColors[color];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${c.border} ${c.bg} backdrop-blur px-2.5 py-1 text-[10px] font-mono tracking-wide ${c.text} whitespace-nowrap`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot} ${pulse ? "animate-pulse" : ""}`} />
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. FLOATING PRODUCT CHIPS — Diagonal magnetic spring chips
// ─────────────────────────────────────────────────────────────────────────────
function ProductChip({
  label,
  subtitle,
  icon,
  status,
  statusColor,
  accentColor,
  floatDelay = 0,
  style = {},
  initialRotate = 0,
}: {
  label: string;
  subtitle: string;
  icon: ReactNode;
  status: string;
  statusColor: "cyan" | "emerald" | "violet";
  accentColor: string;
  floatDelay?: number;
  style?: React.CSSProperties;
  initialRotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hx = useMotionValue(0);
  const hy = useMotionValue(0);
  const shx = useSpring(hx, { stiffness: 150, damping: 16, mass: 0.3 });
  const shy = useSpring(hy, { stiffness: 150, damping: 16, mass: 0.3 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    hx.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    hy.set((e.clientY - (r.top + r.height / 2)) * 0.22);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: shx, y: shy, position: "absolute", ...style }}
      animate={{
        y: [0, -10, 0, 5, 0],
        rotate: [initialRotate, initialRotate + 1.5, initialRotate, initialRotate - 1.5, initialRotate],
      }}
      transition={{ duration: 5 + floatDelay * 0.7, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      whileHover={{ scale: 1.08 }}
      onMouseMove={onMove}
      onMouseLeave={() => { hx.set(0); hy.set(0); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-2xl transition-all duration-300"
        style={{
          minWidth: 185,
          boxShadow: hovered
            ? `0 0 0 1px ${accentColor}60, 0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${accentColor}25`
            : "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07)",
          background: hovered ? `linear-gradient(135deg, ${accentColor}12, rgba(255,255,255,0.04))` : undefined,
        }}
      >
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}
        >
          {icon}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-display font-bold text-[14px] text-ink leading-tight">{label}</span>
          <span className="text-[10px] font-mono text-ink-2/50 mt-0.5">{subtitle}</span>
        </div>
        <StatusBadge label={status} color={statusColor} />
      </div>
    </motion.div>
  );
}

export function FloatingProductChips() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ pointerEvents: "all" }}>
        <ProductChip
          label="NOVA"
          subtitle="Consumer AI"
          icon={<Bot className="h-4 w-4" style={{ color: "#06b6d4" }} />}
          status="MVP"
          statusColor="cyan"
          accentColor="#06b6d4"
          floatDelay={0}
          style={{ top: "16%", right: "7%" }}
          initialRotate={-2}
        />
        <ProductChip
          label="ELEKKI"
          subtitle="EdTech Platform"
          icon={<Layers className="h-4 w-4" style={{ color: "#8b5cf6" }} />}
          status="Beta"
          statusColor="violet"
          accentColor="#8b5cf6"
          floatDelay={1.3}
          style={{ top: "43%", right: "3%" }}
          initialRotate={1.5}
        />
        <ProductChip
          label="ENVX"
          subtitle="Dev Infrastructure"
          icon={<ShieldCheck className="h-4 w-4" style={{ color: "#10b981" }} />}
          status="Live"
          statusColor="emerald"
          accentColor="#10b981"
          floatDelay={2.2}
          style={{ bottom: "20%", right: "9%" }}
          initialRotate={-1}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. TECH CHIP CLOUD
// ─────────────────────────────────────────────────────────────────────────────
const techItems = [
  { label: "Artificial Intelligence", Icon: Brain,       color: "#06b6d4" },
  { label: "Robotics",                 Icon: Cpu,          color: "#8b5cf6" },
  { label: "Automation",               Icon: Zap,          color: "#f59e0b" },
  { label: "Computer Vision",          Icon: Eye,          color: "#3b82f6" },
  { label: "Embedded Systems",         Icon: Server,       color: "#10b981" },
  { label: "Machine Learning",         Icon: Brain,        color: "#06b6d4" },
  { label: "IoT",                      Icon: Wifi,         color: "#ec4899" },
  { label: "Cloud Computing",          Icon: Globe,        color: "#6366f1" },
  { label: "Data Engineering",         Icon: Database,     color: "#14b8a6" },
  { label: "Edge AI",                  Icon: Cpu,          color: "#f97316" },
  { label: "Cyber Security",           Icon: ShieldCheck,  color: "#ef4444" },
  { label: "Semiconductors",           Icon: FlaskConical, color: "#84cc16" },
];

export function TechChipCloud() {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {techItems.map(({ label, Icon, color }, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.08, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.04, type: "spring", stiffness: 200, damping: 18 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 backdrop-blur-md px-4 py-2.5 text-[12px] font-mono text-ink-2/60 cursor-default select-none hover:text-white transition-all duration-200"
          style={{ ["--ac" as string]: color } as React.CSSProperties}
        >
          <Icon className="h-3 w-3 shrink-0" style={{ color }} />
          {label}
        </motion.span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. FOUNDER FLIP CARD
// ─────────────────────────────────────────────────────────────────────────────
export function FounderFlipCard({
  name = "Arunkumar Sundaravel",
  role = "Founder & CEO",
  image = "/directors/Director_1.jpg",
  quote = "Build for decades, not demos.",
  linkedin = "https://www.linkedin.com/in/arun-kumar-7755492a5/",
}: {
  name?: string;
  role?: string;
  image?: string;
  quote?: string;
  linkedin?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[290px] h-[400px] cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[24px] overflow-hidden glass-card shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-60 overflow-hidden rounded-t-[24px]">
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "42% 30%", transform: "scale(1.6)", transformOrigin: "42% 30%" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/70 to-transparent"
            />
            <div className="absolute bottom-4 left-5 right-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mb-0.5">{role}</p>
              <h3 className="font-display font-bold text-[18px] text-white leading-tight">{name}</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-[13px] italic text-ink-2/60 leading-relaxed">"{quote}"</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <StatusBadge label="Startup India" color="cyan" />
              <StatusBadge label="DPIIT" color="emerald" />
            </div>
            <p className="mt-3 text-[9px] font-mono text-ink-2/25 tracking-widest">HOVER TO FLIP →</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[24px] overflow-hidden p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0a1628 0%, #05070A 60%, #0d1f12 100%)",
            border: "1px solid rgba(6,182,212,0.22)",
            boxShadow: "0 0 40px rgba(6,182,212,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent pointer-events-none"
          />
          <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(closest-side,rgba(6,182,212,0.1),transparent)] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#06b6d4]/60 mb-3">About</p>
            <h3 className="font-display font-bold text-[19px] text-white">{name}</h3>
            <p className="text-[11px] font-mono text-white/40 mb-5">{role} · EAURA</p>
            <div className="flex flex-col gap-2.5">
              {[
                { k: "Company",  v: "EAURA Pvt. Ltd." },
                { k: "Focus",    v: "AI · EdTech · Dev Tools" },
                { k: "Vision",   v: "Products that last decades" },
                { k: "Location", v: "India" },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-start gap-3">
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-wide shrink-0 mt-0.5 w-16">{k}</span>
                  <span className="text-[12px] text-white/60">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="DPIIT Recognized" color="cyan" />
              <StatusBadge label="Startup India" color="emerald" />
            </div>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#06b6d4]/30 bg-[#06b6d4]/8 px-4 py-2.5 text-[13px] font-semibold text-[#06b6d4] hover:bg-[#06b6d4] hover:text-[#05070A] transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
              <ArrowRight className="h-3.5 w-3.5 ml-auto" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. ANIMATED STACK CARDS
// ─────────────────────────────────────────────────────────────────────────────
export interface StackCardItem {
  label: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  accentColor: string;
  status: string;
  statusColor: "cyan" | "emerald" | "violet";
  href?: string;
}

export function AnimatedStackCards({ items }: { items: StackCardItem[] }) {
  const [hovered, setHovered] = useState(false);

  const closed = [
    { y: 0,  x: 0,   rotate: 0,    zIndex: 3, scale: 1,    opacity: 1 },
    { y: 16, x: 8,   rotate: 1.5,  zIndex: 2, scale: 0.96, opacity: 0.85 },
    { y: 30, x: 16,  rotate: 3,    zIndex: 1, scale: 0.92, opacity: 0.7 },
  ];
  const open = [
    { y: 0,    x: 0,   rotate: -2,  zIndex: 3, scale: 1,    opacity: 1 },
    { y: -8,   x: 165, rotate: 0,   zIndex: 2, scale: 0.98, opacity: 1 },
    { y: 10,   x: 330, rotate: 2,   zIndex: 1, scale: 0.96, opacity: 1 },
  ];

  return (
    <div
      className="relative"
      style={{ width: 270, height: 320 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {items.slice(0, 3).map((item, i) => {
        const st = hovered ? open[i] : closed[i];
        return (
          <motion.div
            key={item.label}
            animate={{ y: st.y, x: st.x, rotate: st.rotate, scale: st.scale, opacity: st.opacity, zIndex: st.zIndex }}
            transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.5 }}
            className="absolute inset-0 rounded-[20px] glass-card p-5 flex flex-col justify-between shadow-2xl"
          >
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-[20px] pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}60, transparent)` }}
            />
            <div>
              <div className="flex items-start justify-between mb-3">
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accentColor}18`, border: `1px solid ${item.accentColor}30` }}
                >
                  {item.icon}
                </div>
                <StatusBadge label={item.status} color={item.statusColor} />
              </div>
              <h3 className="font-display font-black text-[26px] text-ink leading-none tracking-[-0.04em]">{item.label}</h3>
              <p className="mt-0.5 text-[10px] font-mono text-ink-2/50">{item.subtitle}</p>
              <p className="mt-3 text-[12px] text-ink-2/60 leading-relaxed">{item.description}</p>
            </div>
            {item.href && (
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-200"
                style={{ color: item.accentColor }}
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. ACHIEVEMENT CARDS
// ─────────────────────────────────────────────────────────────────────────────
interface AchItem { icon: ReactNode; label: string; sublabel: string; color: string; delay?: number; }

function AchCard({ icon, label, sublabel, color, delay = 0 }: AchItem) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, type: "spring", stiffness: 150, damping: 18 }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="glass-card rounded-2xl p-5 flex flex-col gap-3 cursor-default"
      style={{ boxShadow: `0 0 0 1px ${color}20, 0 20px 40px rgba(0,0,0,0.4)` }}
    >
      <div
        className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        {icon}
      </div>
      <div>
        <div className="font-display font-bold text-[15px] text-ink">{label}</div>
        <div className="text-[11px] font-mono text-ink-2/50 mt-0.5">{sublabel}</div>
      </div>
    </motion.div>
  );
}

export function AchievementCards() {
  const items: AchItem[] = [
    { icon: <Trophy className="h-5 w-5" style={{ color: "#06b6d4" }} />,      label: "DPIIT Recognized",  sublabel: "Ministry of Commerce",  color: "#06b6d4", delay: 0 },
    { icon: <Rocket className="h-5 w-5" style={{ color: "#10b981" }} />,      label: "Startup India",      sublabel: "Govt. of India",        color: "#10b981", delay: 0.1 },
    { icon: <Zap className="h-5 w-5" style={{ color: "#f59e0b" }} />,         label: "AI Products",        sublabel: "3 live builds",         color: "#f59e0b", delay: 0.2 },
    { icon: <FlaskConical className="h-5 w-5" style={{ color: "#8b5cf6" }} />,label: "Research Focus",     sublabel: "Deep Tech",             color: "#8b5cf6", delay: 0.3 },
    { icon: <Target className="h-5 w-5" style={{ color: "#ef4444" }} />,      label: "Innovation First",   sublabel: "First Principles",      color: "#ef4444", delay: 0.4 },
    { icon: <Star className="h-5 w-5" style={{ color: "#3b82f6" }} />,        label: "Est. 2025",          sublabel: "CIN Registered",        color: "#3b82f6", delay: 0.5 },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((a) => <AchCard key={a.label} {...a} />)}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. BENTO GRID
// ─────────────────────────────────────────────────────────────────────────────
export function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const tiles = [
    { id: "vision",  span: "col-span-2 row-span-2", label: "EAURA Vision",  eyebrow: "Our Purpose",   content: "Building intelligent products that solve real problems and create lasting impact — at the intersection of AI, education, and infrastructure.", icon: <Star className="h-6 w-6" style={{ color: "#06b6d4" }} />, accent: "#06b6d4", delay: 0 },
    { id: "nova",    span: "col-span-1",             label: "NOVA",          eyebrow: "Consumer AI",   content: "Your intelligent AI companion.",             icon: <Bot className="h-5 w-5" style={{ color: "#3b82f6" }} />,  accent: "#3b82f6", delay: 0.1 },
    { id: "elekki",  span: "col-span-1",             label: "ELEKKI",        eyebrow: "EdTech",        content: "ECE education reimagined.",                   icon: <Layers className="h-5 w-5" style={{ color: "#8b5cf6" }} />, accent: "#8b5cf6", delay: 0.15 },
    { id: "envx",    span: "col-span-1",             label: "ENVX",          eyebrow: "Dev Tools",     content: "Secure secrets management.",                  icon: <ShieldCheck className="h-5 w-5" style={{ color: "#10b981" }} />, accent: "#10b981", delay: 0.2 },
    { id: "ai",      span: "col-span-1",             label: "AI",            eyebrow: "Core Domain",   content: "Artificial Intelligence at the core of everything.", icon: <Brain className="h-5 w-5" style={{ color: "#06b6d4" }} />, accent: "#06b6d4", delay: 0.25 },
    { id: "res",     span: "col-span-1",             label: "Research",      eyebrow: "Deep Tech",     content: "First principles. Hardware loops.",           icon: <FlaskConical className="h-5 w-5" style={{ color: "#f59e0b" }} />, accent: "#f59e0b", delay: 0.3 },
    { id: "auto",    span: "col-span-1",             label: "Automation",    eyebrow: "Scale",         content: "Automate complexity, amplify capability.",   icon: <Zap className="h-5 w-5" style={{ color: "#eab308" }} />,  accent: "#eab308", delay: 0.35 },
    { id: "innov",   span: "col-span-1",             label: "Innovation",    eyebrow: "Philosophy",    content: "Build timeless, not trendy.",                 icon: <Target className="h-5 w-5" style={{ color: "#f43f5e" }} />, accent: "#f43f5e", delay: 0.4 },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-4">
      {tiles.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: t.delay, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          className={`${t.span} relative rounded-[20px] glass-card p-5 flex flex-col justify-between overflow-hidden cursor-default group`}
        >
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${t.accent}50, transparent)` }} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]" style={{ background: `radial-gradient(circle at 50% 0%, ${t.accent}12, transparent 60%)` }} />
          <div className="relative z-10 flex flex-col h-full gap-2">
            <div className="flex items-start justify-between">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}25` }}>
                {t.icon}
              </div>
              <span className="text-[9px] font-mono text-ink-2/25 tracking-widest uppercase">{t.eyebrow}</span>
            </div>
            <div className="mt-auto">
              <h3 className="font-display font-bold text-ink text-[15px] leading-tight">{t.label}</h3>
              <p className="text-[11px] text-ink-2/50 leading-relaxed mt-1 line-clamp-2">{t.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. SCROLLING CHIP MARQUEE (Enhanced dual-row)
// ─────────────────────────────────────────────────────────────────────────────
const marqueeChips = [
  { label: "Artificial Intelligence", color: "#06b6d4" },
  { label: "Automation",              color: "#f59e0b" },
  { label: "Robotics",                color: "#8b5cf6" },
  { label: "Semiconductors",          color: "#10b981" },
  { label: "IoT",                     color: "#ec4899" },
  { label: "Embedded Systems",        color: "#3b82f6" },
  { label: "Machine Learning",        color: "#06b6d4" },
  { label: "Cybersecurity",           color: "#ef4444" },
  { label: "Data Engineering",        color: "#14b8a6" },
  { label: "Edge AI",                 color: "#f97316" },
  { label: "Computer Vision",         color: "#6366f1" },
  { label: "Cloud Computing",         color: "#84cc16" },
];

export function ScrollingChipMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#05070A] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#05070A] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee flex gap-3 mb-3">
        {[...marqueeChips, ...marqueeChips].map((c, i) => (
          <span key={i} className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 backdrop-blur px-5 py-2.5 text-[12px] font-mono text-ink-2/60 cursor-default">
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: c.color }} />
            {c.label}
          </span>
        ))}
      </div>
      <div className="animate-marquee-reverse flex gap-3">
        {[...[...marqueeChips].reverse(), ...[...marqueeChips].reverse()].map((c, i) => (
          <span key={i} className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 backdrop-blur px-5 py-2.5 text-[12px] font-mono text-ink-2/60 cursor-default">
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: c.color }} />
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}
