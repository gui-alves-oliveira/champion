import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading } from "../../components/ui/heading";

export const Route = createFileRoute("/tournaments/")({
  component: RouteComponent,
});

const data = [
  {
    id: 1,
    slug: "vp-feminino-iniciante",
    title: "VP Feminino - Iniciante",
    status: 1,
  },
  {
    id: 2,
    slug: "vp-feminino-intermediario",
    title: "VP Feminino - Intermediario",
    status: 1,
  },
  {
    id: 3,
    slug: "vp-feminino-avancado",
    title: "VP Feminino - Avançado",
    status: 2,
  },
];

function RouteComponent() {
  return (
    <div className="p-4 flex flex-col">
      <div className="mb-6 flex justify-between">
        <Heading intent="title" as="h1">
          Campeonatos
        </Heading>
        <Link
          to="/tournaments/create"
          className="bg-green-500 text-green-950 text-xs px-4 h-8 flex items-center rounded"
        >
          Criar campeonato
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {data.map((tournament) => (
          <div className="flex justify-between items-center bg-neutral-800 p-4 rounded">
            <Link
              key={tournament.id}
              to="/tournaments/$slug"
              params={{ slug: tournament.slug }}
            >
              <h3>{tournament.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
