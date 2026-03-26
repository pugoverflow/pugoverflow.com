import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
    children: ReactNode
    className?: string
    as?: "section" | "div"
}

export function Section({
    children,
    className,
    as: Tag = "section",
}: SectionProps) {
    return (
        <Tag
            className={cn(
                "py-8 md:py-10 lg:py-12",
                className
            )}
        >
            {children}
        </Tag>
    )
}