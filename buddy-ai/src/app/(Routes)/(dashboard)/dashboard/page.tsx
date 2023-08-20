import DashBoardLink from "@/app/components/dashboardLink";

export default function Dahboard() {
  return (
    <div className="px-5 py-10 h-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Explore the Power of AI</h1>
      </div>

      <p className="text-center py-2 opacity-80">
        Chat with the smartest AI , Do Anything with AI
      </p>

      <div className=" flex flex-col md:items-center mt-9 md:mt-10 m-6">
        <div className="w-min-[90%] md:min-w-[75%] mb-10">
          <DashBoardLink />
        </div>
      </div>
    </div>
  );
}
