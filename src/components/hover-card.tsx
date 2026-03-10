import type { ReactNode } from "react"

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
    <div className="group">
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
    </div>
  )
}