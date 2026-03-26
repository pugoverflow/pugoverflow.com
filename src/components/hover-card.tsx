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
      whileHover={{ y: -2 }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 28,
        mass: 0.9,
      }}
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-border/70 bg-card/90 backdrop-blur-sm transition-[box-shadow,border-color,background-color,transform] duration-300 ease-out",
          "shadow-sm hover:shadow-[0_18px_48px_rgba(0,0,0,0.06)]",
          "group-hover:border-border group-hover:bg-card",
          "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/35 before:to-transparent",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.06)_0%,transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardContent className={contentClassName ?? "relative p-6 md:p-7"}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}