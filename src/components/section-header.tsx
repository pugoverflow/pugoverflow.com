import { Badge } from "@/components/ui/badge"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge
        variant="secondary"
        className="rounded-md px-3 py-1 text-xs font-medium shadow-sm"
      >
        {eyebrow}
      </Badge>

      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>

      <p className="text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  )
}