"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

const routes = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-100",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
    bgColor: "bg-pink-100",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
    bgColor: "bg-orange-100",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
    bgColor: "bg-emerald-100",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
    bgColor: "bg-green-100",
  },
];

export default function DashBoardLink() {
  return (
    <div className="flex flex-col gap-4 ">
      {routes.map((route) => (
        <div
          key={route.href}
          className="border-black/50 hover:shadow  transition rounded p-3"
        >
          <Link href={route.href} className="flex items-center  flex-1">
            <route.icon
              className={cn(
                "h-10 w-10 mr-3 p-[7px] rounded-[0.4rem]",
                route.color,
                route.bgColor
              )}
            />
            <p className="text-1.2xl font-semibold pl-3">{route.label}</p>
            <ArrowRight className="ml-auto opacity-70 h-10" />
          </Link>
        </div>
      ))}
    </div>
  );
}
