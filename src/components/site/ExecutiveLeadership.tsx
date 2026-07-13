import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Linkedin,
  Github,
  Globe,
  Mail,
  Twitter,
  Eye,
  Cpu,
  Network,
  Layers,
  Telescope,
  Handshake,
  Compass,
  Settings,
  BrainCircuit,
  Zap,
  FlaskConical,
  Target,
  ShieldCheck,
  Code2,
  Database,
  Cloud,
  TrendingUp,
} from "lucide-react";

// ── Executive Data ────────────────────────────────────────────────────────────
const RESPONSIBILITY_ICON_MAP: Record<string, React.ElementType> = {
  "Company Vision": Eye,
  "Technology Strategy": Telescope,
  "Engineering Leadership": Cpu,
  "Research & Innovation": FlaskConical,
  "Strategic Partnerships": Handshake,
  "Product Direction": Target,
  Operations: Settings,
  "AI Development": BrainCircuit,
  "Hardware Integration": Zap,
  "Systems Architecture": Network,
  "Cloud Infrastructure": Cloud,
  "Developer Tooling": Code2,
  "Data Engineering": Database,
  "Business Growth": TrendingUp,
  "Team Building": Layers,
  "Security & Compliance": ShieldCheck,
  "Platform Engineering": Compass,
};

export interface Executive {
  name: string;
  role: string;
  image: string;
  bio: string[];
  expertise: string[];
  responsibilities: string[];
  linkedin?: string;
  github?: string;
  portfolio?: string;
  email?: string;
  twitter?: string;
}

export const executives: Executive[] = [
  {
    name: "Arunkumar S",
    role: "Founder & Chief Executive Officer",
    image: "https://avatars.githubusercontent.com/arun-2108",
    bio: [
      "Arunkumar S founded EAURA with a singular conviction: that intelligent technology, when built with discipline and purpose, has the power to reshape how humans learn, work, and create. As Chief Executive Officer, he drives the company's strategic direction, product roadmap, and long-term research initiatives—translating a foundational philosophy of engineering excellence into products that generate real-world impact.",
      "With deep expertise spanning artificial intelligence, cloud infrastructure, and full-stack engineering, Arunkumar personally oversees EAURA's flagship platforms—NOVA, ENVX, and ELEKKI—ensuring each product reflects the company's commitment to precision, scalability, and thoughtful design. He operates at the intersection of product thinking and systems engineering, making technical architecture decisions alongside championing user-centered innovation.",
      "Arunkumar's vision for EAURA extends beyond software: he is building an organization that invests in research, develops proprietary AI capabilities, and scales global partnerships. His leadership philosophy centers on first-principles thinking, intellectual honesty, and the relentless pursuit of meaningful, lasting products that the world will rely on for decades.",
    ],
    expertise: [
      "Artificial Intelligence",
      "Full Stack Engineering",
      "Cloud Infrastructure",
      "Product Strategy",
      "Systems Architecture",
      "Machine Learning",
      "Business Strategy",
      "Research",
      "Leadership",
      "Developer Tools",
    ],
    responsibilities: [
      "Company Vision",
      "Technology Strategy",
      "Engineering Leadership",
      "Research & Innovation",
      "Strategic Partnerships",
      "Product Direction",
      "AI Development",
      "Operations",
    ],
    linkedin: "https://www.linkedin.com/in/arunkumar-sundaravel/",
    github: "https://github.com/arun-2108",
    email: "info@eauraone.com",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        y: [0, -24, 0],
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function ExpertisePill({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.82, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-flex items-center rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-ink-2 hover:border-clay/50 hover:text-ink hover:bg-clay/[0.04] transition-all duration-200 cursor-default select-none"
    >
      {label}
    </motion.span>
  );
}

function ResponsibilityCard({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const Icon = RESPONSIBILITY_ICON_MAP[label] ?? Settings;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.1 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04, y: -2 }}
      className="group flex flex-col items-center gap-2 rounded-2xl border border-hairline bg-surface p-4 text-center hover:border-clay/30 hover:bg-clay/[0.03] hover:shadow-sm transition-all duration-250 cursor-default"
    >
      <div className="h-8 w-8 rounded-xl bg-bg border border-hairline flex items-center justify-center text-ink-2 group-hover:text-clay group-hover:border-clay/25 group-hover:bg-clay/5 transition-all duration-200">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-[11.5px] font-medium text-ink-2 group-hover:text-ink leading-tight transition-colors duration-200">
        {label}
      </span>
    </motion.div>
  );
}

function SocialButton({
  href,
  icon: Icon,
  label,
  index,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="h-11 w-11 rounded-full border border-hairline bg-surface/80 backdrop-blur-sm flex items-center justify-center text-ink-2 hover:text-ink hover:border-clay/40 hover:bg-bg hover:shadow-md transition-all duration-200"
    >
      <Icon className="h-4.5 w-4.5" />
    </motion.a>
  );
}

// ── Executive Profile Card ────────────────────────────────────────────────────

function ExecutiveCard({
  exec,
  index,
}: {
  exec: Executive;
  index: number;
}) {
  const isImageLeft = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  const socialLinks = [
    exec.linkedin && { href: exec.linkedin, icon: Linkedin, label: "LinkedIn" },
    exec.github && { href: exec.github, icon: Github, label: "GitHub" },
    exec.portfolio && { href: exec.portfolio, icon: Globe, label: "Portfolio" },
    exec.email && { href: `mailto:${exec.email}`, icon: Mail, label: "Email" },
    exec.twitter && { href: exec.twitter, icon: Twitter, label: "X / Twitter" },
  ].filter(Boolean) as { href: string; icon: React.ElementType; label: string }[];

  return (
    <div
      ref={cardRef}
      className="relative py-24 md:py-36 border-b border-hairline/60 last:border-b-0 overflow-hidden"
    >
      {/* Per-card ambient background */}
      <FloatingOrb
        className="w-[600px] h-[600px] bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_75%)] blur-3xl"
        delay={index * 1.5}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bg-[radial-gradient(closest-side,rgba(180,120,80,0.03),transparent_75%)] blur-2xl right-0 bottom-0"
        delay={index * 2 + 1}
      />

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
            isImageLeft ? "" : "lg:[&>:first-child]:order-2"
          }`}
        >
          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative group aspect-[3/4] max-w-[460px] mx-auto overflow-hidden rounded-[28px] shadow-2xl shadow-black/10">
              {/* Image */}
              <motion.img
                src={exec.image}
                alt={`${exec.name} — ${exec.role}`}
                style={{ y: imageY }}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.1] transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[28px]" />

              {/* Name badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2">
                  <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/80">
                    {exec.role.split(" ").slice(-1)[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute -bottom-5 ${isImageLeft ? "-right-5" : "-left-5"} h-24 w-24 rounded-2xl border border-hairline bg-bg shadow-sm hidden lg:block`}
            >
              <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-clay/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-clay/60">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Content Column ── */}
          <div className="flex flex-col">
            {/* Label + Role + Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-clay mb-3">
                Executive Leadership
              </p>
              <p className="text-[15px] font-medium text-ink-2 tracking-tight mb-3">
                {exec.role}
              </p>
              <h3 className="font-display text-[42px] md:text-[58px] font-bold tracking-[-0.04em] leading-[0.95] text-ink mb-8">
                {exec.name}
              </h3>
            </motion.div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 mb-10">
              {exec.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15px] leading-[1.75] text-ink-2"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Expertise Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-2"
            >
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-ink-2 mb-3">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {exec.expertise.map((tag, i) => (
                  <ExpertisePill key={tag} label={tag} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="my-8 h-[1px] bg-hairline origin-left"
            />

            {/* Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8"
            >
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-ink-2 mb-4">
                Key Responsibilities
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {exec.responsibilities.map((resp, i) => (
                  <ResponsibilityCard key={resp} label={resp} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((link, i) => (
                  <SocialButton
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    index={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Executive Leadership Section ────────────────────────────────────────

export function ExecutiveLeadership() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="founders"
      ref={sectionRef}
      aria-label="Executive Leadership"
      className="relative bg-bg overflow-hidden border-t border-hairline"
    >
      {/* Static background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Animated grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="exec-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#exec-grid)" />
        </svg>

        {/* Large ambient glows */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-200px] left-[-100px] w-[900px] h-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_70%)] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(180,120,80,0.04),transparent_70%)] blur-3xl"
        />
      </div>

      {/* Section Header */}
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-clay mb-5">
            EAURA · People
          </p>
          <h2 className="font-display text-[44px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.0] text-ink">
            Executive Leadership
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-[17px] md:text-[19px] leading-[1.65] text-ink-2 tracking-[-0.01em]">
            The people shaping EAURA's future through innovation, engineering,
            artificial intelligence, and robotics.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-hairline to-transparent origin-center"
        />
      </div>

      {/* Executive Cards */}
      <div className="relative z-10">
        {executives.map((exec, index) => (
          <ExecutiveCard key={exec.name} exec={exec} index={index} />
        ))}
      </div>
    </section>
  );
}
