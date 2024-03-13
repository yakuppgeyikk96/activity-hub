import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginDialogContent from "./LoginDialogContent";

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <LoginDialogContent />
    </Dialog>
  );
}
