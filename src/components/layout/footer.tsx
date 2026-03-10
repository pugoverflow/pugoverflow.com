import { GithubLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full border-t border-border/60 bg-background/70"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 xl:px-12">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>© 2026 Pug Overflow. All rights reserved.</p>
          <p className="text-xs">Built with React, shadcn/ui, and a little dog energy.</p>
        </div>

        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
          <Button asChild variant="outline" size="sm" className="gap-2 rounded-full shadow-sm">
            <a
              href="https://github.com/pugoverflow/pugoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="h-4 w-4" weight="fill" />
              Source code
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.footer>
  )
}