"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarContent({ route }) {
  const pathname = usePathname();
  return (
    <Link
      key={route.href}
      href={route.href}
      className={cn(
        "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-[0.5rem] transition",
        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
      )}
    >
      <div className="flex items-center flex-1">
        <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
        {route.label}
      </div>
    </Link>
  );
}
