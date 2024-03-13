import { DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import LoginForm from "./LoginForm";

export default function LoginDialogContent() {
  return (
    <DialogContent>
      <Tabs defaultValue="login" className=" py-4">
        <TabsList className="flex">
          <TabsTrigger className="w-full m-0" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="w-full" value="signup">
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}
