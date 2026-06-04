import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-caption font-body tracking-widest uppercase transition-colors duration-200";
  const variants = {
    primary: "bg-accent text-white hover:bg-text-primary",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "text-text-secondary hover:text-text-primary",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
