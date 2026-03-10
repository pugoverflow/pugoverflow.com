import { motion } from "motion/react"

import { Badge } from "@/components/ui/badge"
import { scrollReveal, staggerTight } from "@/lib/motion"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="max-w-3xl space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerTight}
    >
      <motion.div variants={scrollReveal}>
        <Badge
          variant="secondary"
          className="rounded-md px-3 py-1 text-xs font-medium shadow-sm"
        >
          {eyebrow}
        </Badge>
      </motion.div>

      <motion.h1
        variants={scrollReveal}
        className="text-4xl font-semibold tracking-tight md:text-5xl"
      >
        {title}
      </motion.h1>

      <motion.p
        variants={scrollReveal}
        className="text-base leading-7 text-muted-foreground md:text-lg"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}