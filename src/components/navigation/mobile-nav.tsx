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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
        <nav className="mt-4">
          <Accordion type="multiple" defaultValue={[]} className="w-full">
            {/* Silos - direct links */}
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

            {/* Tools - accordion submenu */}
            {TOOLS.children && (
              <AccordionItem value="tools">
                <AccordionTrigger className="py-3 px-4 text-sm font-medium">
                  {TOOLS.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    {TOOLS.children.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "py-2.5 pl-8 pr-4 text-sm font-medium rounded-md transition-colors",
                          isActive(pathname, tool.href)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;