import { PawPrint } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Nav } from "@/components/nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between gap-4">
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-md px-0 py-0 hover:bg-transparent"
            >
              <Link to="/" className="group flex items-center gap-3 rounded-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card shadow-sm">
                  <PawPrint
                    className="h-5 w-5 text-foreground"
                    weight="duotone"
                  />
                </div>

                <div className="flex flex-col text-left leading-none">
                  <span className="font-semibold tracking-tight text-foreground">
                    Pug Overflow
                  </span>

                  <span className="text-xs text-muted-foreground">
                    Front-end engineering by Amanda and Minnie
                  </span>
                </div>
              </Link>
            </Button>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
          <Nav />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}