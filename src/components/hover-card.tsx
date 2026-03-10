import type { ReactNode } from "react"
import { motion } from "motion/react"

import { Card, CardContent } from "@/components/ui/card"

type HoverCardProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
}

export function HoverCard({
  children,
  className,
  contentClassName,
}: HoverCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card
        className={[
          "h-full rounded-xl border-border/70 bg-card/95 shadow-sm transition-shadow duration-300 group-hover:shadow-md",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <CardContent className={contentClassName ?? "p-6"}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}