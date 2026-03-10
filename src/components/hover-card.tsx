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
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <Card
        className={[
          "h-full rounded-xl border-border/70 bg-card/95 shadow-sm",
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