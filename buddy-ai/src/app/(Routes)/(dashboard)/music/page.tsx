import Heading from "@/app/components/Heading";
import { Music } from "lucide-react";

export default function MusicGeneration() {
  return (
    <div>
      <Heading
        title="Music Generation"
        description="Our most advanve Music Geneartion model"
        icon={Music}
        iconColor="bg-emerald-100"
        bgColor="text-emerald-700"
      />
    </div>
  );
}
