"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SILOS, TOOLS, isActive } from "@/lib/navigation";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          {SILOS.map((silo) => (
            <NavigationMenuItem key={silo.href}>
              <Link href={silo.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(pathname, silo.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {silo.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          {TOOLS.children && (
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(pathname, TOOLS.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {TOOLS.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-48">
                  {TOOLS.children.map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className={cn(
                          "block px-3 py-2 text-sm rounded-md transition-colors",
                          isActive(pathname, tool.href)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {tool.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNav;