"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormFieldError from "../FormFieldError";

export interface Props {
  errors?: {
    [key: string]: string[];
  };
}

export default function LoginPasswordInput({ errors }: Props) {
  return (
    <div className="py-2">
      <Label htmlFor="login-password" className="block mb-2 pl-2">
        Password
      </Label>
      <Input
        id="login-password"
        type="password"
        name="password"
        className="w-full"
        placeholder="Please enter your password"
      />
      <FormFieldError errors={errors} field="password" />
    </div>
  );
}
