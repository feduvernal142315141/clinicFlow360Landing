import Image from "next/image"
import { siteConfig } from "@/lib/config"

/** Horizontal ClinicFlow360 logo for dark backgrounds. Set its height with `className`. */
export function BrandLogo({ className = "h-9", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo-horizontal-dark.svg"
      alt={siteConfig.name}
      width={289}
      height={64}
      unoptimized
      priority={priority}
      className={`w-auto ${className}`}
    />
  )
}

/**
 * Brand tooth-and-sparkle outline for background decoration.
 * Inherits its colour from `currentColor`.
 */
export function BrandToothOutline({ className, dashed = false }: { className?: string; dashed?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        transform="translate(-3 4)"
        d="M32 20C28 15 17 15 17 26C17 34 21 38 22 46C22.6 50.5 27 51 28 46C29 41 30 38 32 38C34 38 35 41 36 46C37 51 41.4 50.5 42 46C43 38 47 34 47 26C47 15 36 15 32 20Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "2 2" : undefined}
      />
      <path
        d="M47 6.5C47.9 12.5 50.5 15.1 56.5 16C50.5 16.9 47.9 19.5 47 25.5C46.1 19.5 43.5 16.9 37.5 16C43.5 15.1 46.1 12.5 47 6.5Z"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}
