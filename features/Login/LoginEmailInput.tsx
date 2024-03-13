"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import FormFieldError from "../FormFieldError";

export interface Props {
  errors?: {
    [key: string]: string[];
  };
}

export default function LoginEmailInput({ errors }: Props) {
  return (
    <div className="py-2">
      <Label htmlFor="email" className="block mb-2 pl-2">
        Email
      </Label>
      <Input
        id="email"
        name="email"
        className="w-full"
        placeholder="Please enter your email address"
      />
      <FormFieldError errors={errors} field="email" />
    </div>
  );
}
