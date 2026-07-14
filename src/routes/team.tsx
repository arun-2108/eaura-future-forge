import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Globe, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — EAURA" },
      {
        name: "description",
        content:
          "Meet the people behind EAURA—builders, thinkers, and innovators united by a shared vision to create meaningful impact.",
      },
    ],
  }),
});

// ── Team Data ─────────────────────────────────────────────────────────────────
// To add a member: append one object to this array. UI updates automatically.

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
  containerBg?: string;
  description: string;
  linkedin?: string;
  github?: string;
  email?: string;
  portfolio?: string;
}

const DEPARTMENT_ORDER = [
  "Executive Leadership",
  "AI & Research",
  "Software Engineering",
  "Robotics & Embedded Systems",
  "Product & Design",
  "Operations & Business",
  "Marketing & Community",
  "Team Members",
  "Advisors & Mentors",
  "Interns",
];

const team: TeamMember[] = [
  // ── Executive Leadership ──
  {
    name: "Arunkumar Sundaravel",
    role: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    image: "/directors/Director_1.jpg",
    description:
      "Sets long-term vision, drives technology strategy, and leads product engineering across EAURA.",
    linkedin: "https://www.linkedin.com/in/arunkumar-sundaravel/",
    github: "https://github.com/arun-2108",
    email: "info@eauraone.com",
  },
  {
    name: "Giridhar Golla",
    role: "Chief Financial Officer",
    department: "Executive Leadership",
    image: "/directors/director2_cropped.png",
    description:
      "Manages financial strategy, capital allocation, and corporate operations.",
    linkedin: "https://www.linkedin.com/in/giridhar-golla-26a646336/",
  },
  {
    name: "Rushyanth Reddy",
    role: "Chief Technology Officer",
    department: "Executive Leadership",
    image: "/directors/director3_cropped.png",
    description:
      "Coordinates engineering, compiler frameworks, deep learning libraries, and hardware integration.",
    linkedin: "https://www.linkedin.com/in/rushyanth-reddy-67a436335/",
  },

  // ── Team Members ── Add your members here ──
  {
    name: "Rishitha",
    role: "UI/UX Designer",
    department: "Team Members",
    image: "/team/rishitha.jpg",
    description: "Designs intuitive, beautiful user interfaces and crafts seamless user experiences for EAURA's platforms.",
    linkedin: "",
  },
  {
    name: "Madhulekha",
    role: "Full Stack Developer",
    department: "Team Members",
    image: "/team/madhulekha_white.jpg",
    imagePosition: "center 42%",
    imageScale: 0.88,
    description: "Develops robust, scalable front-end and back-end architectures driving EAURA's web applications.",
    linkedin: "",
  },
  {
    name: "Member Name",
    role: "Role / Position",
    department: "Team Members",
    description: "Short description of their responsibilities at EAURA.",
    linkedin: "",
  },
  {
    name: "Member Name",
    role: "Role / Position",
    department: "Team Members",
    description: "Short description of their responsibilities at EAURA.",
    linkedin: "",
  },
  {
    name: "Member Name",
    role: "Role / Position",
    department: "Team Members",
    description: "Short description of their responsibilities at EAURA.",
    linkedin: "",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function groupByDepartment(members: TeamMember[]) {
  const map = new Map<string, TeamMember[]>();
  members.forEach((m) => {
    if (!map.has(m.department)) map.set(m.department, []);
    map.get(m.department)!.push(m);
  });
  // Sort departments by DEPARTMENT_ORDER; unknown depts go last alphabetically
  const ordered = new Map<string, TeamMember[]>();
  DEPARTMENT_ORDER.forEach((dept) => {
    if (map.has(dept)) ordered.set(dept, map.get(dept)!);
  });
  map.forEach((members, dept) => {
    if (!ordered.has(dept)) ordered.set(dept, members);
  });
  return ordered;
}

// ── Sub-Components ────────────────────────────────────────────────────────────

function SectionDivider({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-5 mb-12"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-hairline origin-right"
      />
      <div className="flex-shrink-0 text-center">
        <span className="text-[11px] font-mono tracking-[0.26em] uppercase text-clay font-semibold px-4 py-1.5 rounded-full border border-clay/20 bg-clay/5">
          {label}
        </span>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-hairline origin-left"
      />
    </motion.div>
  );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col items-center bg-bg border border-hairline rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300"
    >
      {/* Gradient top accent — animated on hover */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0071E3] via-[#38bdf8] to-[#8b5cf6] opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[24px]" />

      {/* Card Body */}
      <div className="pt-10 pb-7 px-6 flex flex-col items-center w-full">
        {/* Profile picture */}
        <div className="relative mb-5">
          <div 
            className="h-[120px] w-[120px] rounded-full overflow-hidden border-2 border-hairline shadow-md group-hover:shadow-lg group-hover:border-clay/25 transition-all duration-300"
            style={{ backgroundColor: member.containerBg || "transparent" }}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
                className="w-full h-full object-cover transition-all duration-500 origin-center group-hover:scale-[1.05]"
                style={{ 
                  objectPosition: member.imagePosition || "top",
                  transform: `scale(${member.imageScale || 1})`,
                }}
              />
            ) : null}
            {/* Fallback initials */}
            <div
              className={`${member.image ? "hidden" : "flex"} w-full h-full items-center justify-center bg-gradient-to-br from-ink/10 to-clay/10 text-ink font-display font-bold text-[28px] select-none`}
            >
              {initials}
            </div>
          </div>
          {/* Subtle ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-clay/20 transition-all duration-300 scale-110" />
        </div>

        {/* Name */}
        <h3 className="font-display font-bold text-[17px] text-ink tracking-tight text-center leading-snug mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-[12.5px] font-mono text-clay tracking-wide text-center mb-3 font-medium">
          {member.role}
        </p>

        {/* Description */}
        <p className="text-[13px] leading-[1.65] text-ink-2 text-center max-w-[220px] mb-6">
          {member.description}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-hairline mb-5" />

        {/* Social links */}
        <div className="flex items-center justify-center gap-2.5">
          {member.linkedin && (
            <SocialIcon
              href={member.linkedin}
              label={`${member.name} on LinkedIn`}
              icon={<Linkedin className="h-3.5 w-3.5" />}
            />
          )}
          {member.github && (
            <SocialIcon
              href={member.github}
              label={`${member.name} on GitHub`}
              icon={<Github className="h-3.5 w-3.5" />}
            />
          )}
          {member.email && (
            <SocialIcon
              href={`mailto:${member.email}`}
              label={`Email ${member.name}`}
              icon={<Mail className="h-3.5 w-3.5" />}
            />
          )}
          {member.portfolio && (
            <SocialIcon
              href={member.portfolio}
              label={`${member.name}'s portfolio`}
              icon={<Globe className="h-3.5 w-3.5" />}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.18, y: -2 }}
      whileTap={{ scale: 0.92 }}
      className="h-8 w-8 rounded-full border border-hairline bg-surface flex items-center justify-center text-ink-2 hover:text-ink hover:border-clay/35 hover:bg-clay/5 hover:shadow-sm transition-colors duration-200"
    >
      {icon}
    </motion.a>
  );
}

function DepartmentSection({
  dept,
  members,
}: {
  dept: string;
  members: TeamMember[];
}) {
  return (
    <section aria-label={dept} className="mb-20 last:mb-0">
      <SectionDivider label={dept} />
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, idx) => (
          <div key={`${member.name}-${idx}`} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-[280px]">
            <MemberCard member={member} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function TeamPage() {
  const grouped = groupByDepartment(team);

  return (
    <div className="min-h-screen bg-bg text-ink antialiased overflow-x-hidden">
      <Nav />

      {/* Background mesh */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.022]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="team-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-grid)" />
        </svg>
        <div className="absolute top-[-20vh] left-[-10vw] w-[900px] h-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.04),transparent_75%)] blur-3xl" />
        <div className="absolute bottom-[-10vh] right-[-5vw] w-[600px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.04),transparent_75%)] blur-3xl" />
      </div>

      {/* Page Header */}
      <header className="relative z-10 pt-36 pb-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono tracking-[0.18em] uppercase text-ink-2 hover:text-clay transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to EAURA
          </Link>

          <div className="mt-2">
            <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-clay mb-5">
              EAURA · People
            </p>
            <h1 className="font-display text-[52px] md:text-[80px] font-bold tracking-[-0.04em] leading-[1.0] text-ink">
              Our Team
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[17px] md:text-[19px] leading-[1.65] text-ink-2 tracking-[-0.01em]">
              Meet the people behind EAURA—builders, thinkers, and innovators united by a shared vision to create meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-hairline to-transparent"
        />
      </header>

      {/* Team Sections */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        {Array.from(grouped.entries()).map(([dept, members]) => (
          <DepartmentSection key={dept} dept={dept} members={members} />
        ))}

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 text-center border-t border-hairline pt-20"
        >
          <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-clay mb-4">
            Join the team
          </p>
          <h2 className="font-display text-[36px] md:text-[52px] font-bold tracking-[-0.04em] text-ink mb-5">
            We're always looking for
            <br />
            <span className="bg-gradient-to-r from-ink-2 to-clay bg-clip-text text-transparent">
              exceptional people.
            </span>
          </h2>
          <p className="text-[16px] text-ink-2 leading-relaxed max-w-xl mx-auto mb-8">
            If you're passionate about building intelligent technology that
            creates meaningful impact, we'd love to hear from you.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-8 py-4 text-[15px] font-semibold hover:bg-clay hover:text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px"
          >
            Get in touch
          </a>
        </motion.div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-hairline bg-surface py-10 text-center text-[12.5px] text-ink-2 font-normal">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span>© {new Date().getFullYear()} EAURA Pvt. Ltd. All rights reserved.</span>
          <div className="hidden sm:block h-3.5 w-[1px] bg-hairline" />
          <a href="/" className="hover:text-ink transition-colors duration-200">
            Back to Homepage
          </a>
        </div>
      </footer>
    </div>
  );
}
