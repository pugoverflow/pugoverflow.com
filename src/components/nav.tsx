import { motion } from "motion/react"
import { NavLink } from "react-router-dom"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/articles", label: "Articles" },
  { to: "/uses", label: "Things I Use" },
]

export function Nav() {
  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList className="flex flex-wrap justify-start gap-2 md:gap-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.03 * index,
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      navigationMenuTriggerStyle(),
                      "group relative h-10 overflow-hidden rounded-md border border-transparent bg-transparent px-4 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-border/70 hover:bg-card hover:text-foreground",
                      isActive &&
                        "border-border/70 bg-card text-foreground shadow-sm"
                    )
                  }
                >
                  {({ isActive }) => (
                    <span className="relative flex items-center justify-center">
                      <span className="relative z-10">{item.label}</span>

                      <motion.span
                        className="absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-foreground/80"
                        initial={false}
                        animate={
                          isActive
                            ? { width: "70%", opacity: 1 }
                            : { width: 0, opacity: 0.7 }
                        }
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      />
                    </span>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}