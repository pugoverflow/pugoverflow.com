import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"
import { PawPrint, Sun, Moon } from "@phosphor-icons/react"

export function Header() {
    const { theme, setTheme } = useTheme()

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)

    const Icon = isDark ? Moon : Sun

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                        <PawPrint className="h-5 w-5" weight="duotone" />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-semibold tracking-tight">Pug Overflow</span>
                        <Badge variant="outline" className="hidden sm:inline-flex rounded-full">
                            Portfolio
                        </Badge>
                    </div>
                </div>

                {/* Theme toggle */}
                <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" weight="duotone" />

                    <Switch
                        checked={isDark}
                        onCheckedChange={(checked) =>
                            setTheme(checked ? "dark" : "light")
                        }
                    />
                </div>
            </div>
        </header>
    )
}