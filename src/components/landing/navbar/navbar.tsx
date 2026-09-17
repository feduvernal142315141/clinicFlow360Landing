import Link from "next/link"
import { navItems, navActions } from "@/data/navigation"
import { NavbarScrollEffect } from "./navbar-scroll-effect"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  return (
    <NavbarScrollEffect>
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] text-ink"
          style={{ fontWeight: 680, letterSpacing: "-0.025em" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" fill="white" fillOpacity="0.9" />
            </svg>
          </span>
          <span>
            ClinicFlow<span className="text-brand-600">360</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-[14px] font-medium text-muted transition-colors duration-150 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={navActions.login.href}
            className="text-[14px] font-medium text-muted transition-colors duration-150 hover:text-ink"
          >
            {navActions.login.label}
          </a>
          <a
            href={navActions.cta.href}
            className="btn-primary-gradient inline-flex h-[42px] items-center rounded-[12px] px-[18px] text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.985]"
          >
            {navActions.cta.label}
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </NavbarScrollEffect>
  )
}
