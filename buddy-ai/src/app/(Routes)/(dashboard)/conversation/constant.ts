import * as z from "zod";

export const formScheme = z.object({
  prompt: z.string().min(1, {
    message: "Promt is required",
  }),
});
