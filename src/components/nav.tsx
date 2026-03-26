import { NavLink } from "react-router-dom"
import { LayoutGroup, motion } from "motion/react"

import { navItems } from "@/content/nav"
import { cn } from "@/lib/utils"

export function Nav() {
  return (
    <nav aria-label="Primary navigation" className="w-full">
      <LayoutGroup id="site-nav">
        <div className="inline-flex h-10 w-full items-center gap-1 rounded-xl border border-border/70 bg-card/85 p-1 shadow-sm md:w-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "relative inline-flex h-full flex-1 items-center justify-center rounded-lg px-3 text-[13px] font-medium text-muted-foreground transition-all duration-200 ease-out",
                  "hover:text-foreground",
                  "md:flex-none",
                  isActive && "text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="pointer-events-none absolute inset-0 z-0 rounded-lg border border-border bg-background shadow-sm md:bg-card"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </LayoutGroup>
    </nav>
  )
}