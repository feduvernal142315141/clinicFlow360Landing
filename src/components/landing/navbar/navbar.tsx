import Link from "next/link"
import { navItems, navActions } from "@/data/navigation"
import { NavbarScrollEffect } from "./navbar-scroll-effect"
import { MobileMenu } from "./mobile-menu"
import { BrandLogo } from "../shared/brand-logo"

export function Navbar() {
  return (
    <NavbarScrollEffect>
      {/* Logo — scroll to top */}
      <Link href="/#hero" className="flex items-center">
        <BrandLogo className="h-9 sm:h-10" priority />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-[14px] font-medium text-slate-400 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors duration-150 hover:text-white">
            {item.label === "Recepción IA" ? (
              <span className="flex items-center gap-1.5">
                Recepción IA
                <span className="rounded bg-brand-950/80 px-1.5 py-0.5 text-[10px] font-bold text-brand-400 border border-brand-500/30">24/7</span>
              </span>
            ) : (
              item.label
            )}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="hidden items-center gap-4 md:flex">
        <a href={navActions.login.href} className="text-[14px] font-semibold text-slate-400 transition-colors hover:text-white">
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
