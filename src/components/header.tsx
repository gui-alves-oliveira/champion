import { Menu } from "lucide-react";
import { Dialog } from "radix-ui";

export function Header() {
  return (
    <header className="flex px-4 justify-end items-center h-14 bg-neutral-800">
      <Dialog.Root>
        <Dialog.Trigger>
          <button>
            <Menu />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l border-neutral-800  bg-neutral-900 shadow-lg flex flex-col p-4">
            <p>Meu menu</p>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
