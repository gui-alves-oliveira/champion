import { createFileRoute, Link } from "@tanstack/react-router";
import { Tabs } from "radix-ui";
import { Games } from "../../components/games";
import { Group } from "../../components/group";
import { Brackets } from "../../components/brackets";
import { ArrowLeft } from "lucide-react";
import { Heading } from "../../components/ui/heading";
import {
  getBrackets,
  getGames,
  getGroups,
  getTournamentBySlug,
} from "../../data/tournaments";

export const Route = createFileRoute("/tournaments/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const tournament = getTournamentBySlug(slug);
  const groups = getGroups(slug);
  const brackets = getBrackets(slug);
  const games = getGames(slug);

  return (
    <div className="p-4">
      <div className="mb-8 flex items-center gap-4">
        <Link className="inline-flex align-middle" to="/tournaments">
          <ArrowLeft />
        </Link>
        <Heading intent="title" as="h1">
          {tournament?.title}
        </Heading>
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
          <Games games={games} />
        </Tabs.Content>
        <Tabs.Content value="group-phase">
          <Group teams={groups[0].teams} />
        </Tabs.Content>
        <Tabs.Content value="brackets-phase">
          <Brackets brackets={brackets} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
