import * as RadixPoppover from "@radix-ui/react-popover";
import { Menu } from "lucide-react";

export function Poppover() {
  return (
    <RadixPoppover.Root>
      <RadixPoppover.Trigger>
        <button>
          <Menu className="text-zinc-200" />
        </button>
      </RadixPoppover.Trigger>
      <RadixPoppover.Portal>
        <RadixPoppover.Content className="bg-zinc-900 left-0 top-0 relative h-screen w-96 min-w-96  text-zinc-200">
          <div className="">
            <h2 className="pt-10 text-center text-2xl font-semibold">Futuro garoto de programa</h2>
            
          </div>

            <div className="mt-4">
                <ul>
                <li className="py-2 px-4 hover:bg-zinc-800">Perfil</li>
                <li className="py-2 px-4 hover:bg-zinc-800">Configurações</li>
                <li className="py-2 px-4 hover:bg-zinc-800">Sair</li>
                </ul>
            </div>
        </RadixPoppover.Content>
      </RadixPoppover.Portal>
    </RadixPoppover.Root>
  );
}
