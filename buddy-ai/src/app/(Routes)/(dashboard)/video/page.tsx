import Heading from "@/app/components/Heading";
import { Video } from "lucide-react";

export default function VideoGeneration() {
  return (
    <div>
      <Heading
        title="Video Generation"
        description="Our most advanve Video Geneartion model"
        icon={Video}
        iconColor="bg-orange-100"
        bgColor="text-orange-700"
      />
    </div>
  );
}
