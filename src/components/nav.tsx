import { NavLink } from "react-router-dom"
import { LayoutGroup, motion } from "motion/react"

import { navItems } from "@/content/nav"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Nav() {
  return (
    <NavigationMenu className="max-w-full justify-start">
      <LayoutGroup id="site-nav">
        <NavigationMenuList className="flex flex-wrap justify-start gap-1.5">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.to}>
              <NavigationMenuLink asChild>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      navigationMenuTriggerStyle(),
                      "relative inline-flex h-9 items-center justify-center rounded-md border border-transparent bg-transparent px-4 text-[13px] font-medium text-muted-foreground transition-all duration-200 ease-out",
                      "hover:border-border/70 hover:bg-card hover:text-foreground hover:shadow-sm",
                      isActive &&
                      "text-foreground hover:border-transparent hover:bg-transparent hover:shadow-none"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-bg"
                          className="pointer-events-none absolute inset-0 z-0 rounded-md border border-border bg-card shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 34,
                          }}
                        />
                      ) : null}

                      <span className="relative z-10">
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </LayoutGroup>
    </NavigationMenu>
  )
}