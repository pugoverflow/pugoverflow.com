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
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 md:px-8">
        
        {/* LEFT */}
        <div className="flex items-center justify-between gap-3">
          <Button
            asChild
            variant="ghost"
            className="h-auto rounded-lg px-0 py-0 hover:bg-transparent"
          >
            <Link to="/" className="group flex items-center gap-3">
              {/* icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card/80 shadow-sm transition-all duration-200 group-hover:border-border group-hover:bg-card">
                <PawPrint
                  className="h-4.5 w-4.5 text-primary"
                  weight="duotone"
                />
              </div>

              {/* text */}
              <div className="flex flex-col text-left leading-none">
                <span className="text-sm font-semibold tracking-tight md:text-base">
                  {headerContent.brand.name}
                </span>
                <span className="text-[11px] text-muted-foreground md:text-xs">
                  {headerContent.brand.tagline}
                </span>
              </div>
            </Link>
          </Button>

          {/* availability badge */}
          <div className="hidden lg:block">
            <Badge
              variant="outline"
              className="gap-1 rounded-md px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em]"
            >
              <Sparkle className="h-3 w-3 text-primary" weight="fill" />
              {headerContent.availability.label}
            </Badge>
          </div>

          {/* mobile toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Nav />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}