import type { ReactNode } from "react"
import { motion } from "motion/react"

import { HoverCard } from "@/components/hover-card"

type FeatureCardProps = {
  title: string
  description: string
  icon?: ReactNode
  titleAs?: "h2" | "h3"
}

export function FeatureCard({
  title,
  description,
  icon,
  titleAs = "h3",
}: FeatureCardProps) {
  const TitleTag = titleAs

  return (
    <HoverCard className="group">
      {icon ? (
        <motion.div
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-primary shadow-sm transition-colors group-hover:bg-muted/60"
          whileHover={{ scale: 1.025, y: -0.5 }}
          transition={{
            type: "spring",
            stiffness: 440,
            damping: 26,
          }}
        >
          {icon}
        </motion.div>
      ) : null}

      <TitleTag className="text-base font-semibold leading-tight tracking-tight md:text-lg">
        {title}
      </TitleTag>

      <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-[15px]">
        {description}
      </p>
    </HoverCard>
  )
}
