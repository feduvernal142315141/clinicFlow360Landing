import Link from "next/link"
import { navItems, navActions } from "@/data/navigation"
import { NavbarScrollEffect } from "./navbar-scroll-effect"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  return (
    <NavbarScrollEffect>
      {/* Logo — dental icon */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 text-white shadow-md shadow-brand-500/20">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
            <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
            <path d="M9 9c1.5 1 4.5 1 6 0" />
          </svg>
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-black tracking-tight text-ink">ClinicFlow</span>
          <span className="text-2xl font-extrabold tracking-tight text-brand-600">360</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-[14px] font-medium text-muted md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors duration-150 hover:text-brand-600">
            {item.label === "Recepción IA" ? (
              <span className="flex items-center gap-1.5">
                Recepción IA
                <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-200">24/7</span>
              </span>
            ) : (
              item.label
            )}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="hidden items-center gap-4 md:flex">
        <a href={navActions.login.href} className="text-[14px] font-semibold text-ink-tertiary transition-colors hover:text-ink">
          {navActions.login.label}
        </a>
        <a href={navActions.cta.href} className="btn-primary inline-flex h-[42px] items-center rounded-full px-5 text-[14px] font-semibold">
          {navActions.cta.label}
        </a>
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </NavbarScrollEffect>
  )
}
