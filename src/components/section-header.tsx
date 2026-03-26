import { motion } from "motion/react"

import { Badge } from "@/components/ui/badge"
import {
  sectionDescription,
  sectionEyebrow,
  sectionTitle,
  staggerSectionHeader,
} from "@/lib/motion"

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
      className="max-w-3xl space-y-3 md:space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerSectionHeader}
    >
      <motion.div variants={sectionEyebrow}>
        <Badge
          variant="outline"
          className="rounded-md px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
        >
          {eyebrow}
        </Badge>
      </motion.div>

      <motion.h1
        variants={sectionTitle}
        className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h1>

      <motion.p
        variants={sectionDescription}
        className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}