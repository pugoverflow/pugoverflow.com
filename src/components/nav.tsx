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
            transition={{ delay: 0.04 * index, duration: 0.22 }}
          >
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      navigationMenuTriggerStyle(),
                      "h-10 rounded-md border border-transparent bg-transparent px-4 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-border/70 hover:bg-card hover:text-foreground",
                      isActive && "border-border/70 bg-card text-foreground shadow-sm"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}