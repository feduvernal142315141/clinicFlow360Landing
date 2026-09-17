import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { navItems, navActions } from "@/data/navigation"
import { NavbarScrollEffect } from "./navbar-scroll-effect"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  return (
    <NavbarScrollEffect>
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-ink">
          {siteConfig.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={navActions.login.href}
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            {navActions.login.label}
          </a>
          <a
            href={navActions.cta.href}
            className="inline-flex h-9 items-center rounded-[10px] bg-brand-600 px-4 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-brand-700 hover:shadow-md"
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
