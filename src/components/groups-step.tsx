import { X, Plus } from "lucide-react";
import { Dialog } from "./ui/dialog";
import { Heading } from "./ui/heading";

export function GroupsStep() {
  return (
    <div>
      <Heading intent="subtitle" as="h2">
        Grupos
      </Heading>

      <div className="p-4 mb-6 border border-neutral-800 rounded">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="font-semibold">Grupo A</h3>
          <button>
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-neutral-800 rounded p-2 flex justify-between items-center">
            <div className="text-sm">Verde</div>
            <button>
              <X size={16} />
            </button>
          </div>

          <Dialog>
            <Dialog.Trigger asChild>
              <button className="mt-2 text-sm bg-neutral-800 h-10 px-4 w-full rounded">
                Adicionar Time
              </button>
            </Dialog.Trigger>

            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>
                <Heading>Selecione um time</Heading>
              </Dialog.Title>
            </Dialog.Content>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button className="bg-neutral-800 size-12 rounded-full flex justify-center items-center">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
