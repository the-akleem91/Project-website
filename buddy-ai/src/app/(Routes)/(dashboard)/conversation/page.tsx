import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

export default function Conversation() {
  return (
    <div className="ml-8 mt-8">
      <div className="">
        <MessageSquare className={cn("h-10 w-10 bg-t-100")} />
      </div>
    </div>
  );
}
