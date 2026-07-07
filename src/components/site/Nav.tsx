import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#products", label: "Products" },
  { href: "/#research", label: "Research" },
  { href: "/#founders", label: "Leadership" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll progress indicator
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      scrollProgress.set(progress);
      setScrolled(scrollTop > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollProgress]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = links
      .map((l) => (l.href.includes("#") ? l.href.split("#")[1] : ""))
      .filter(Boolean);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-hairline py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: smoothProgress }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="/#company" className="flex items-center gap-2.5 group">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-bg text-[11px] font-bold font-display transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
            E
          </span>
          <span className="font-display text-[14px] font-semibold tracking-[0.25em] text-ink transition-opacity group-hover:opacity-80">
            EAURA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isCurrentPage = typeof window !== "undefined" && window.location.pathname === l.href;
            const sectionId = l.href.includes("#") ? l.href.split("#")[1] : "";
            const isActive = isCurrentPage || (activeSection === sectionId && sectionId !== "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors duration-200 tracking-tight relative group py-1 ${
                  isActive ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] bg-clay transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            variant="default"
            className="rounded-full px-5 transition-all duration-200 hover:shadow-md hover:shadow-ink/10 hover:-translate-y-px"
          >
            <a href="/#contact">Get in touch</a>
          </Button>
        </div>

        <button
          className="md:hidden text-ink p-1.5 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5 justify-center items-end w-6 h-5">
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-[7.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-200 ${
                open ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-[7.5px]" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[57px] h-[calc(100vh-57px)] bg-bg/98 backdrop-blur-xl px-8 py-10 md:hidden overflow-y-auto flex flex-col justify-between border-t border-hairline"
          >
            <div className="flex flex-col gap-6">
              {links.map((l, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: idx * 0.04,
                  }}
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[20px] font-semibold text-ink hover:text-clay transition-colors duration-200 py-1.5"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: links.length * 0.04,
              }}
              className="pt-6 border-t border-hairline mt-8"
            >
              <Button
                asChild
                className="w-full py-6 rounded-full text-base"
                onClick={() => setOpen(false)}
              >
                <a href="/#contact">Get in touch</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
