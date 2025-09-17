import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading } from "../../components/ui/heading";
import { getTournaments } from "../../data/tournaments";

export const Route = createFileRoute("/tournaments/")({
  component: RouteComponent,
});

function RouteComponent() {
  const tournaments = getTournaments();

  return (
    <div className="p-4 flex flex-col">
      <div className="mb-6 flex justify-between">
        <Heading intent="title" as="h1">
          Campeonatos
        </Heading>
      </div>

      <div className="flex flex-col gap-2">
        {tournaments.map((tournament) => (
          <Link
            key={tournament.id}
            to="/tournaments/$slug"
            params={{ slug: tournament.slug }}
          >
            <div className="flex justify-between items-center bg-neutral-800 p-4 rounded">
              <h3>{tournament.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
