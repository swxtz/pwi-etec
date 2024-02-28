import { Menu } from "lucide-react";

export function Navbar() {

    function openMenu() {
        console.log('Menu opened');
    }

  return (
    <header className="bg-zinc-800 py-4 px-3">
      <button onClick={openMenu}>
        <Menu className="size-8 text-zinc-200 ml-10" />
      </button>
    </header>
  );
}
