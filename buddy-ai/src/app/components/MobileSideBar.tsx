"use client";
import { Heading1 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import SideBarContent from "./SideBarContent";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function MobileSideBar() {
  const pathname = usePathname();
  return (
    <div className="md:flex flex-col  justify-center bg-gray-900 h-full">
      <h1 className="text-gray-100 text-2xl font-bold pt-6 mr-1 text-center">
        AI BUDDY
      </h1>

      <div className="pt-14">
        <div className="px-3 transition text-sm font-medium   rounded-[0.5rem] flex flex-col gap-2">
          {routes.map((route) => (
            <SideBarContent route={route} key={route.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
