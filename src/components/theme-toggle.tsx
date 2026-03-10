import { Moon, Sun } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"

import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"
  const Icon = isDark ? Moon : Sun

  return (
    <motion.div
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/85 px-3 py-2 shadow-sm backdrop-blur-md"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -45, opacity: 0, scale: 0.9 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.18 }}
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
    </motion.div>
  )
}