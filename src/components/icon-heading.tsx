import type { ReactNode, ElementType } from "react"
import { motion } from "motion/react"

import { scrollRevealSubtle } from "@/lib/motion"

type IconHeadingProps = {
  icon: ReactNode
  title: string
  description?: string
  as?: ElementType
}

export function IconHeading({
  icon,
  title,
  description,
  as: TitleTag = "h2",
}: IconHeadingProps) {
  return (
    <motion.div
      className="space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scrollRevealSubtle}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-primary shadow-sm">
          {icon}
        </div>

        <TitleTag className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
          {title}
        </TitleTag>
      </div>

      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}