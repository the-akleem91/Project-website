import { cn } from "@/lib/utils";
import { LucideIcon, MessageSquare } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: any;
  iconColor?: string;
  bgColor?: string;
}
export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div className="ml-8 sm:mt-5 mt-2 ">
      <div className="flex items-center gap-3">
        <div className={cn("rounded ", bgColor)}>
          <Icon className={cn("h-12 w-12 rounded p-1", iconColor)} />
        </div>
        <div>
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-sm opacity-60">{description}</p>
        </div>
      </div>
    </div>
  );
}
