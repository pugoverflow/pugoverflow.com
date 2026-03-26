import { PawPrint, Sparkle } from "@phosphor-icons/react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

import { headerContent } from "@/content/header"
import { Nav } from "@/components/nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/78 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-3 sm:px-6 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3 md:min-w-0 md:flex-1 md:justify-start">
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-lg px-0 py-0 hover:bg-transparent"
            >
              <Link to="/" className="group flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-card/85 shadow-sm transition-all duration-300 group-hover:-translate-y-[1px] group-hover:border-border group-hover:shadow-md">
                  <PawPrint className="h-5 w-5 text-primary" weight="duotone" />
                </div>

                <div className="min-w-0 text-left leading-none">
                  <div className="truncate text-sm font-semibold tracking-tight md:text-base">
                    {headerContent.brand.name}
                  </div>
                  <div className="mt-1 truncate text-[11px] text-muted-foreground md:text-xs">
                    {headerContent.brand.tagline}
                  </div>
                </div>
              </Link>
            </Button>

            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 md:justify-end">
            <Nav />

            <div className="hidden md:block">
              <Badge
                variant="outline"
                className="h-10 gap-1.5 rounded-xl px-3 text-[10px] font-medium tracking-[0.12em] uppercase"
              >
                <Sparkle className="h-3 w-3 text-primary" weight="fill" />
                {headerContent.availability.label}
              </Badge>
            </div>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}