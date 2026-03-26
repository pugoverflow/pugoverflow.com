import { Code } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { footerContent } from "@/content/footer"
import { Button } from "@/components/ui/button"
import { scrollRevealSubtle } from "@/lib/motion"

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scrollRevealSubtle}
      className="relative mt-12 w-full border-t border-border/70 bg-background/70 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between md:px-8">

        {/* text */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-sm font-medium text-foreground">
            {footerContent.copyright}
          </p>
          <p className="max-w-md text-xs leading-6">
            {footerContent.description}
          </p>
        </div>

        {/* links */}
        <div className="flex flex-wrap gap-3">
          {footerContent.links.map(({ label, href, variant }) => (
            <Button
              key={label}
              asChild
              variant={variant}
              size="sm"
              className="gap-2 rounded-lg px-4"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4" weight="bold" />
                <span>{label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}