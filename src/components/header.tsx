import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import { PawPrint, Sun, Moon } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "motion/react"
import { Nav } from "@/components/nav"

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"
  const Icon = isDark ? Moon : Sun

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted"
            >
              <PawPrint className="h-5 w-5" weight="duotone" />
            </motion.div>

            <span className="font-semibold tracking-tight">Pug Overflow</span>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Icon
                  className="h-4 w-4 text-muted-foreground"
                  weight="duotone"
                />
              </motion.div>
            </AnimatePresence>

            <Switch
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </div>
        </div>

        <div className="md:hidden">
          <Nav />
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          <Nav />

          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Icon
                  className="h-4 w-4 text-muted-foreground"
                  weight="duotone"
                />
              </motion.div>
            </AnimatePresence>

            <Switch
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </div>
        </div>
      </div>
    </motion.header>
  )
}