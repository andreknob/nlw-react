import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";

export default function Home() {
  return (
    <main>
      <Button>
        Send 
        <ArrowRight />
      </Button>

      <IconButton>
        <ArrowRight />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
