"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function pageHasHero(pathname: string): boolean {
  return pathname === "/" || pathname === "/safaris" || pathname === "/about";
}

const links = [
  { href: "/gallery", label: "Gallery" },
  // { href: "/prints", label: "Prints" },
  { href: "/safaris", label: "Safaris" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasHero = pageHasHero(pathname);
  const isFloating = !hasHero || scrolled;

  useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => {
      const heroEl = document.querySelector("[data-hero]") as HTMLElement | null;
      const threshold = heroEl
        ? heroEl.offsetHeight * 0.85
        : window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero, pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        className="pointer-events-none backdrop-blur-sm"
        initial={false}
        animate={{
          width: isFloating ? "80%" : "100%",
          marginTop: isFloating ? 12 : 0,
          borderRadius: isFloating ? 14 : 0,
          backgroundColor: isFloating
            ? "rgba(250, 248, 245, 0.95)"
            : "rgba(250, 248, 245, 0)",
          boxShadow: isFloating
            ? "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <nav className="px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center pointer-events-auto">
            <Image
              src="/logo.png"
              alt="GacheriCreates"
              width={140}
              height={60}
              className={`object-contain transition-[filter,transform] duration-400 ${
                isFloating
                  ? "brightness-0 scale-[1.3]"
                  : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 pointer-events-auto">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`link-underline font-body text-caption tracking-widest uppercase transition-colors duration-300 ${
                    isFloating
                      ? "text-text-secondary hover:text-text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5 p-2 pointer-events-auto"
          >
            {open ? (
              <>
                <span
                  className={`block w-6 h-px rotate-45 translate-y-[5px] transition-all duration-300 ${
                    isFloating ? "bg-text-primary" : "bg-white"
                  }`}
                />
                <span
                  className={`block w-6 h-px -rotate-45 transition-all duration-300 ${
                    isFloating ? "bg-text-primary" : "bg-white"
                  }`}
                />
              </>
            ) : (
              <>
                <span
                  className={`block w-6 h-px transition-colors duration-300 ${
                    isFloating ? "bg-text-primary" : "bg-white"
                  }`}
                />
                <span
                  className={`block w-6 h-px transition-colors duration-300 ${
                    isFloating ? "bg-text-primary" : "bg-white"
                  }`}
                />
                <span
                  className={`block w-4 h-px transition-colors duration-300 ${
                    isFloating ? "bg-text-primary" : "bg-white"
                  }`}
                />
              </>
            )}
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-background border-t border-surface px-6 py-4 pointer-events-auto">
            <ul className="flex flex-col gap-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-caption text-text-secondary hover:text-text-primary tracking-widest uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </header>
  );
}
