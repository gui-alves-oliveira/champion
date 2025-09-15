import { Tabs } from "radix-ui";
import { Brackets } from "../components/brackets";
import { Games } from "../components/games";
import { Group } from "../components/group";

const teams = [
  {
    name: "Verde",
    points: 0,
  },
  {
    name: "Azul",
    points: 0,
  },
  {
    name: "Amarelo",
    points: 0,
  },
  {
    name: "Branco",
    points: 0,
  },
];

export function Home() {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="p-6 h-screen bg-neutral-900 text-white overflow-hidden">
      <h1 className="text-2xl mb-8">VP Feminino - Iniciante</h1>

      <Tabs.Root defaultValue="matches">
        <Tabs.List className="flex mb-6 gap-4">
          <Tabs.Trigger className="group flex flex-col gap-1" value="matches">
            Partidas
            <span className="h-0.5 w-full bg-transparent group-data-[state=active]:bg-green-500 rounded"></span>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="group flex flex-col gap-1"
            value="group-phase"
          >
            Grupos
            <span className="h-0.5 w-full bg-transparent group-data-[state=active]:bg-green-500 rounded"></span>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="group flex flex-col gap-1"
            value="brackets-phase"
          >
            Chave
            <span className="h-0.5 w-full bg-transparent group-data-[state=active]:bg-green-500 rounded"></span>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="matches">
          <Games />
        </Tabs.Content>
        <Tabs.Content value="group-phase">
          <Group teams={sortedTeams} />
        </Tabs.Content>
        <Tabs.Content value="brackets-phase">
          <Brackets />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
