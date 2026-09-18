import Link from "next/link"
import { navItems, navActions } from "@/data/navigation"
import { NavbarScrollEffect } from "./navbar-scroll-effect"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  return (
    <NavbarScrollEffect>
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-brand-600">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5L14 5V11L8 14.5L2 11V5L8 1.5Z" fill="white" fillOpacity="0.9" />
          </svg>
        </span>
        <span
          className="text-[18px] text-ink"
          style={{ fontWeight: 680, letterSpacing: "-0.03em" }}
        >
          ClinicFlow<span className="text-brand-600">360</span>
        </span>
      </Link>

      {/* Desktop nav — centered links + right actions */}
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative text-[14px] font-medium text-muted transition-colors duration-150 hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div className="hidden items-center gap-4 md:flex">
        <a
          href={navActions.login.href}
          className="text-[14px] font-medium text-muted transition-colors duration-150 hover:text-ink"
        >
          {navActions.login.label}
        </a>
        <a
          href={navActions.cta.href}
          className="inline-flex h-[42px] items-center rounded-[12px] bg-brand-600 px-[18px] text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-700"
          style={{ boxShadow: "0 8px 24px rgba(3,126,204,0.18)" }}
        >
          {navActions.cta.label}
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </NavbarScrollEffect>
  )
}
