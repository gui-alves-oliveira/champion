import { createFileRoute, Link } from "@tanstack/react-router";
import { Tabs } from "radix-ui";
import { Games } from "../../components/games";
import { Group } from "../../components/group";
import { Brackets } from "../../components/brackets";
import { ArrowLeft } from "lucide-react";

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

export const Route = createFileRoute("/tournaments/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="p-4">
      <div className="mb-8 flex items-center gap-4">
        <Link to="/tournaments">
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl text-nowrap">VP Feminino - Iniciante</h1>
      </div>
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
