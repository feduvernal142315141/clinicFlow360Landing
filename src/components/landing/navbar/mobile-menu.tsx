"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import { navItems, navActions } from "@/data/navigation"
import { siteConfig } from "@/lib/config"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface-soft hover:text-ink"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] p-6" showCloseButton={false}>
        <div className="flex items-center justify-between">
          <SheetTitle className="text-lg font-bold tracking-tight text-ink">
            {siteConfig.name}
          </SheetTitle>
          <SheetClose
            render={
              <button
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface-soft hover:text-ink"
              />
            }
          >
            <X className="h-5 w-5" />
          </SheetClose>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-[10px] px-3 py-2.5 text-base font-medium text-muted transition-colors hover:bg-surface-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
          <a
            href={navActions.login.href}
            onClick={() => setOpen(false)}
            className="rounded-[10px] px-3 py-2.5 text-center text-base font-medium text-muted transition-colors hover:bg-surface-soft hover:text-ink"
          >
            {navActions.login.label}
          </a>
          <a
            href={navActions.cta.href}
            onClick={() => setOpen(false)}
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-5 text-base font-semibold"
          >
            {navActions.cta.label}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
