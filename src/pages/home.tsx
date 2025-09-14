import { Tabs } from "radix-ui";
import { Groups } from "../components/groups";
import { Brackets } from "../components/brackets";
import { Games } from "../components/games";

export function Home() {
  return (
    <div className="p-6 h-screen bg-neutral-900 text-white overflow-hidden">
      <Tabs.Root defaultValue="matches">
        <Tabs.List className="flex mb-6">
          <Tabs.Trigger
            className="px-2 border-b-2 border-b-transparent data-[state=active]:border-green-500"
            value="matches"
          >
            Partidas
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-2 border-b-2 border-b-transparent data-[state=active]:border-green-500"
            value="group-phase"
          >
            Grupos
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-2 border-b-2 border-b-transparent data-[state=active]:border-green-500"
            value="brackets-phase"
          >
            Chave
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="matches">
          <Games />
        </Tabs.Content>
        <Tabs.Content value="group-phase">
          <Groups />
        </Tabs.Content>
        <Tabs.Content value="brackets-phase">
          <Brackets />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
