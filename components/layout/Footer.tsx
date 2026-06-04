import Link from "next/link";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/prints", label: "Prints" },
  { href: "/safaris", label: "Safaris" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-heading text-heading-3 font-semibold text-text-primary"
          >
            GacheriCreates
          </Link>
          <p className="text-caption text-text-secondary max-w-xs">
            Kenya wildlife photography and photo safaris.
          </p>
          <a
            href="https://instagram.com/gachericreates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption text-accent hover:text-text-primary mt-1"
          >
            @gachericreates
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="link-underline text-caption text-text-secondary hover:text-text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <p className="text-label text-text-secondary">
          &copy; {new Date().getFullYear()} GacheriCreates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
