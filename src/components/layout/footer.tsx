import { GithubLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/motion"

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="w-full border-t border-border/70 bg-background/85"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 xl:px-12">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>© 2026 Amanda Cashin</p>
          <p className="text-xs">
            Built with React, shadcn/ui, and Minnie nearby.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
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
              <GithubLogo className="h-4 w-4" weight="fill" />
              Source code
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.footer>
  )
}