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
      className="relative w-full overflow-hidden border-t border-border/70 bg-background/85"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 xl:px-12">
        <motion.div
          className="space-y-1 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <p>© 2026 Amanda Cashin</p>

          <motion.p
            className="text-xs"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.3 }}
          >
            Built with React, shadcn/ui, and occasional input from Minnie the
            pug.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.25 }}
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
              <span className="flex items-center gap-2">
                <GithubLogo className="h-4 w-4" weight="fill" />
                <span>Source code</span>
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.footer>
  )
}