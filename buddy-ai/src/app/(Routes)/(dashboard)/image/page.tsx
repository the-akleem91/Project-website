import Heading from "@/app/components/Heading";
import { Image } from "lucide-react";

export default function ImageGeneration() {
  return (
    <div>
      <Heading
        title="Image Generation"
        description="Our most advanve Image Geneartion model"
        icon={Image}
        iconColor="bg-pink-100"
        bgColor="text-pink-700"
      />
    </div>
  );
}
