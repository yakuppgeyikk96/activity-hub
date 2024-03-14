"use server";

import prisma from "@/lib/prisma";

import { z } from "zod";
import { FormState } from "../common/types";
import { redirect } from "next/navigation";

const LoginFieldSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
    password1: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    password2: z
      .string()
      .min(1, { message: "Password confirmation is required." }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match.",
    path: ["password2"],
  });

export const signup = async (prevState: FormState, formData: FormData) => {
  const validatedFields = LoginFieldSchema.safeParse({
    email: formData.get("email") as string,
    password1: formData.get("password1") as string,
    password2: formData.get("password2") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    console.log(validatedFields.data);
    await prisma.user.create({
      data: {
        email: validatedFields.data.email,
        password: validatedFields.data.password1,
      },
    });
  } catch (error) {
    return {
      message: "An error occurred. Please try again.",
    };
  }

  redirect("/");
};
