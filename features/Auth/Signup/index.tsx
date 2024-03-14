"use client";

import { FormState } from "@/actions/common/types";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormTextInput from "@/features/Form/FormInput";
import { signup } from "@/actions/auth/signup";

const initialState: FormState = {
  message: "",
};

export default function SignupForm() {
  const [state, dispatch] = useFormState(signup, initialState);

  return (
    <form className="py-4" action={dispatch}>
      <FormTextInput
        name="email"
        label="Email"
        placeholder="Please enter your email"
        errors={state?.errors}
      />
      <FormTextInput
        name="password1"
        label="Password"
        type="password"
        placeholder="Please enter your password"
        errors={state?.errors}
      />
      <FormTextInput
        name="password2"
        type="password"
        placeholder="Please confirm password"
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
