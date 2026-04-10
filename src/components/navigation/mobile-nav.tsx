"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SILOS, TOOLS, isActive } from "@/lib/navigation";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 space-y-1">
          {/* Main Silos */}
          {SILOS.map((silo) => (
            <Link
              key={silo.href}
              href={silo.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors",
                isActive(pathname, silo.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {silo.title}
            </Link>
          ))}

          {/* Divider */}
          <div className="border-t my-4" />

          {/* Tools Section */}
          <div className="px-4 py-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tools
            </span>
          </div>
          {TOOLS.children?.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center py-2.5 px-4 text-sm font-medium rounded-md transition-colors",
                isActive(pathname, tool.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {tool.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;