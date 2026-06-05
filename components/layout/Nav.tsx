"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/gallery", label: "Gallery" },
  // { href: "/prints", label: "Prints" },
  { href: "/safaris", label: "Safaris" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-surface">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="GacheriCreates"
            width={140}
            height={40}
            className="object-contain brightness-0"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="link-underline font-body text-caption text-text-secondary hover:text-text-primary tracking-widest uppercase"
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
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          {open ? (
            <>
              <span className="block w-6 h-px bg-text-primary rotate-45 translate-y-[5px] transition-transform" />
              <span className="block w-6 h-px bg-text-primary -rotate-45 transition-transform" />
            </>
          ) : (
            <>
              <span className="block w-6 h-px bg-text-primary" />
              <span className="block w-6 h-px bg-text-primary" />
              <span className="block w-4 h-px bg-text-primary" />
            </>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-surface px-6 py-4">
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
    </header>
  );
}
