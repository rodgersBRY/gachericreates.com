import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/prints", label: "Prints" },
  { href: "/safaris", label: "Safaris" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-surface">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="GacheriCreates"
            width={140}
            height={40}
            className="object-contain"
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

        <MobileMenuButton />
      </nav>
    </header>
  );
}

function MobileMenuButton() {
  return (
    <button
      aria-label="Open navigation menu"
      className="md:hidden flex flex-col gap-1.5 p-2"
    >
      <span className="block w-6 h-px bg-text-primary" />
      <span className="block w-6 h-px bg-text-primary" />
      <span className="block w-4 h-px bg-text-primary" />
    </button>
  );
}
