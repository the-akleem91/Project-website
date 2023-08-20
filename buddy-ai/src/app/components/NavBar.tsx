"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";

export default function NavBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden ml-6 mt-5">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0 h-full text-white">
          <MobileSideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
