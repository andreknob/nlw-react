import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";

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
    </main>
  );
}
