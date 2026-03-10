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
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card
        className={[
          "h-full rounded-[1.75rem] border-border/60 bg-card/90 shadow-sm",
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