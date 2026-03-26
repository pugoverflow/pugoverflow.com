import type { ReactNode } from "react"
import { motion } from "motion/react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
      className="group h-full"
      whileHover={{ y: -1.5 }}
      transition={{
        type: "spring",
        stiffness: 460,
        damping: 32,
        mass: 0.85,
      }}
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-border/70 bg-card/90 backdrop-blur-sm transition-[box-shadow,border-color,background-color] duration-300 ease-out",
          "shadow-sm hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)]",
          "group-hover:border-border group-hover:bg-card",
          "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/35 before:to-transparent",
          className
        )}
      >
        <CardContent className={contentClassName ?? "p-6 md:p-7"}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}
