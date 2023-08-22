import Heading from "@/app/components/Heading";
import { Code } from "lucide-react";

export default function CodeGeneration() {
  return (
    <div>
      <Heading
        title="Code Generation"
        description="Our most advanve Code Geneartion model"
        icon={Code}
        iconColor="bg-green-100"
        bgColor="text-green-700"
      />
    </div>
  );
}
