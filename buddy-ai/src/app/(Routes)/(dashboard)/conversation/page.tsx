"use client";
import Heading from "@/app/components/Heading";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import { Form, useForm } from "react-hook-form";
import * as z from "zod";
import { formScheme } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Conversation() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  // const onSubmit = async (values: z.infer<typeof formScheme>) => {
  //   console.log(values);
  // };
  const [promt, stepromt] = useState("");
  function onSubmit(e: any) {
    e.preventDefault();
  }
  console.log(promt);
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanve Conversation model"
        icon={MessageSquare}
        iconColor="bg-purple-100"
        bgColor="text-purple-700"
      />
      <div className="w-[95%] rounded  justify-center border mx-auto mt-8 ">
        {/* <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 

                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="How do I calculate the radius of a circle?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div> */}
        <form
          onSubmit={onSubmit}
          className="grid grid-col-12  lg:flex justify-between "
        >
          <input
            name="promt"
            placeholder="Enter the Promt"
            onChange={(e) => stepromt(e.target.value)}
            className="m-3 grow outline-none w-100% "
          />
          <Button className="bg-gray-900 m-2 rounded text-gray-100 uppercase hover:bg-gray-700 hover:text-white font-medium text-base col-span-12">
            Generate
          </Button>
        </form>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}
