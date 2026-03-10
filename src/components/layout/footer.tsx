import { GithubLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { scrollRevealSubtle } from "@/lib/motion"

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scrollRevealSubtle}
      className="relative w-full border-t border-border/70 bg-background/85"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 xl:px-12">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>© 2026 Amanda Cashin</p>
          <p className="text-xs">
            Built with React, shadcn/ui, and occasional input from Minnie the
            pug.
          </p>
        </div>

        <div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 rounded-md shadow-sm"
          >
            <a
              href="https://github.com/pugoverflow/pugoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <GithubLogo className="h-4 w-4" weight="fill" />
                <span>Source code</span>
              </span>
            </a>
          </Button>
        </div>
      </div>
    </motion.footer>
  )
}