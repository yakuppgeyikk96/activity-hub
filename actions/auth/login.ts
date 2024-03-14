"use server";

import { z } from "zod";
import { FormState } from "../common/types";
import { redirect } from "next/navigation";

const LoginFieldSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const login = async (prevState: FormState, formData: FormData) => {
  const validatedFields = LoginFieldSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    console.log(validatedFields.data);
  } catch (error) {
    return {
      message: "An error occurred. Please try again.",
    };
  }

  redirect("/");
};
