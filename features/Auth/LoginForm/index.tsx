"use client";

import { FormState } from "@/actions/common/types";
import { login } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormTextInput from "@/features/Form/FormInput";

const initialState: FormState = {
  message: "",
};

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, initialState);

  return (
    <form className="py-4" action={dispatch}>
      <FormTextInput
        name="email"
        label="Email"
        placeholder="Please enter your email"
        errors={state?.errors}
      />
      <FormTextInput
        name="password"
        label="Password"
        type="password"
        placeholder="Please enter your password"
        errors={state?.errors}
      />
      <div className="h-fit mt-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
