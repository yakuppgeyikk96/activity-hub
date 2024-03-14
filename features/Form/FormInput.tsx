"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormFieldError from "../FormFieldError";

export interface Props {
  name: string;
  errors?: {
    [key: string]: string[];
  };
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
}

export default function FormTextInput({
  errors,
  label,
  name,
  placeholder,
  type,
}: Props) {
  return (
    <div className="py-2">
      {label ? (
        <Label htmlFor={name} className="block mb-2 pl-2">
          {label}
        </Label>
      ) : null}
      <Input
        id={name}
        name={name}
        className="w-full"
        placeholder={placeholder || ""}
        type={type}
      />
      <FormFieldError errors={errors} field={name} />
    </div>
  );
}
