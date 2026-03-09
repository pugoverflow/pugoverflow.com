import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "@/components/theme-provider"

export function Header() {
    const { theme, setTheme } = useTheme()

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)

    return (
        <header className="flex flex-row justify-between items-center p-6 border-b">
            <div className="flex flex-row items-center gap-2">
                <span className="text-2xl">🐾</span>
                <h1 className="font-medium">Pug Overflow</h1>
            </div>

            <div className="flex flex-row items-center gap-2">
                <Switch
                    id="theme-toggle"
                    checked={isDark}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
                <Label htmlFor="theme-toggle">Theme toggle</Label>
            </div>
        </header>
    )
}