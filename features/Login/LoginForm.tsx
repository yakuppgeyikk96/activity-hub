"use client";

import { FormState } from "@/actions/common/types";
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import LoginEmailInput from "./LoginEmailInput";
import LoginPasswordInput from "./LoginPasswordInput";

const initialState: FormState = {
  message: "",
};

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, initialState);

  return (
    <form className="py-4" action={dispatch}>
      <LoginEmailInput errors={state.errors} />
      <LoginPasswordInput errors={state.errors} />
      <div className="h-fit mt-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
