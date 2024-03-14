import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AuthDialogContent from "./AuthDialogContent";

export default function AuthDialogDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <AuthDialogContent />
    </Dialog>
  );
}
