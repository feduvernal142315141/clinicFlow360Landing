import Link from "next/link"
import { featurePagesCopy, featurePath, type FeaturePage } from "@/data/feature-pages"

export function FeatureCardList({ pages }: { pages: FeaturePage[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {pages.map((page) => (
        <li key={page.slug}>
          <Link
            href={featurePath(page.slug)}
            className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-brand-400/40 hover:bg-white/[0.05]"
          >
            <h3 className="text-[17px] font-bold text-white">{page.name}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{page.summary}</p>
            <span className="mt-4 inline-block text-[13px] font-semibold text-brand-300">
              {featurePagesCopy.learnMore} →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
