import type { ReactNode } from "react"

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
    <HoverCard>
      {icon ? (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border/70 bg-muted/50 shadow-sm">
          {icon}
        </div>
      ) : null}

      <TitleTag className="text-base font-semibold tracking-tight md:text-lg">
        {title}
      </TitleTag>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </HoverCard>
  )
}