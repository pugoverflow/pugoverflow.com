import type { ReactNode } from "react"
import { motion } from "motion/react"

import { scrollRevealSubtle } from "@/lib/motion"

type IconHeadingProps = {
  icon: ReactNode
  title: string
  description?: string
}

export function IconHeading({
  icon,
  title,
  description,
}: IconHeadingProps) {
  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scrollRevealSubtle}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/70 bg-muted/50 shadow-sm">
          {icon}
        </div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}