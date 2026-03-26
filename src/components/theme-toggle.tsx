import { Moon, Sun } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"

import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"
  const Icon = isDark ? Moon : Sun

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.15 }}
          className="flex items-center justify-center"
        >
          <Icon className="h-4 w-4 text-muted-foreground" weight="duotone" />
        </motion.div>
      </AnimatePresence>

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
    </div>
  )
}