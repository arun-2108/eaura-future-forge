import { useEffect, useState } from "react";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#products", label: "Products" },
  { href: "#research", label: "Research" },
  { href: "#founders", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/72 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <a href="#company" className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-bg text-[10px] font-bold font-display">
            E
          </span>
          <span className="font-display text-[13px] font-semibold tracking-[0.22em] text-ink">
            EAURA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12.5px] font-medium text-ink/85 hover:text-ink transition-colors tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-clay px-4 py-1.5 text-[12.5px] font-medium text-white tracking-tight transition-all hover:bg-[#0077ed]"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-white/95 backdrop-blur-xl px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-clay px-4 py-2 text-[13px] font-medium text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
