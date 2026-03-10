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
  { to: "/uses", label: "Uses" },
]

export function Nav() {
  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList className="flex flex-wrap justify-start gap-2 md:gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink asChild>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    navigationMenuTriggerStyle(),
                    "h-9 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground",
                    isActive && "bg-muted/50 text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}