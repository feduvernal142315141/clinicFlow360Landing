import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { footerColumns, footerCopy, footerLegalLinks, type FooterLink } from "@/data/footer"
import { BrandLogo } from "../shared/brand-logo"

const linkClass =
  "group inline-flex items-center gap-1.5 text-[13.5px] text-slate-400 transition-colors duration-150 hover:text-white"

function FooterNavLink({ link }: { link: FooterLink }) {
  const content = (
    <>
      <span>{link.label}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden="true"
        className="-translate-x-1 text-brand-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      >
        <path d="M2 5h6M5.5 2.5 8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )

  if (link.external) {
    return (
      <a href={link.href} className={linkClass}>
        {content}
      </a>
    )
  }

  return (
    <Link href={link.href} className={linkClass}>
      {content}
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden text-slate-400" style={{ background: "#060d1a" }}>
      {/* Top edge: hairline with a brand highlight and a soft glow under it */}
      <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(50,180,254,0.55) 50%, rgba(255,255,255,0.08) 80%, transparent)" }} />
        <div
          className="mx-auto h-[260px] max-w-3xl"
          style={{ background: "radial-gradient(ellipse at top, rgba(7,156,251,0.13) 0%, transparent 65%)" }}
        />
      </div>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:linear-gradient(to_bottom,black,transparent_55%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/#hero" className="inline-flex">
              <BrandLogo className="h-10" />
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate-400">{footerCopy.tagline}</p>

            <div className="mt-7 max-w-sm rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                {footerCopy.trial.badge}
              </div>
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-3">
                <Link
                  href={siteConfig.trialSignupPath}
                  className="btn-primary inline-flex h-[42px] items-center gap-2 rounded-full px-5 text-[13.5px] font-semibold"
                >
                  {footerCopy.trial.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href={siteConfig.loginUrl} className="text-[13.5px] font-semibold text-slate-300 transition-colors hover:text-white">
                  {footerCopy.trial.login}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group mt-6 inline-flex items-center gap-2.5 text-[13.5px] text-slate-400 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-400 transition-colors group-hover:border-brand-500/40 group-hover:text-brand-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>
                <span className="sr-only">{footerCopy.contactLabel}: </span>
                {siteConfig.contactEmail}
              </span>
            </a>
          </div>

          {/* Link columns */}
          <nav aria-label={footerCopy.navLabel} className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-200">{column.title}</h2>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <FooterNavLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 h-px lg:mt-16" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />
        <div className="flex flex-col gap-5 py-7 text-[12px] text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <p className="text-slate-400">
              © {year} {siteConfig.publisher}. {footerCopy.rights}
            </p>
            <p className="text-[11px] text-slate-500">{footerCopy.operatedBy}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <nav aria-label={footerCopy.legalLabel} className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLegalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="#top"
              aria-label={footerCopy.backToTop}
              title={footerCopy.backToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-colors hover:border-brand-500/40 hover:text-brand-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 10V2M2.5 5.5 6 2l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the bottom edge */}
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <div
          className="mx-auto -mb-[0.17em] whitespace-nowrap text-center font-heading leading-none"
          style={{
            fontSize: "clamp(44px, 13.6vw, 204px)",
            fontWeight: 780,
            letterSpacing: "-0.055em",
            backgroundImage: "linear-gradient(180deg, rgba(121,205,255,0.26) 0%, rgba(50,180,254,0.1) 50%, rgba(6,13,26,0) 92%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    </footer>
  )
}
