import useEmblaCarousel from "embla-carousel-react";
import { Match, type IMatch } from "./match";
import { Heading } from "./ui/heading";

interface Phase {
  id: number;
  name: string;
  matches: IMatch[];
}

const data: Array<Phase> = [
  {
    id: 1,
    name: "Semi-finais",
    matches: [
      {
        homeTeam: undefined,
        homeScore: undefined,
        awayTeam: undefined,
        awayScore: undefined,
      },
      {
        homeTeam: undefined,
        homeScore: undefined,
        awayTeam: undefined,
        awayScore: undefined,
      },
    ],
  },
  {
    id: 2,
    name: "Disputa do 3º lugar",
    matches: [
      {
        homeTeam: undefined,
        homeScore: undefined,
        awayTeam: undefined,
        awayScore: undefined,
      },
    ],
  },
  {
    id: 3,
    name: "Final",
    matches: [
      {
        homeTeam: undefined,
        homeScore: undefined,
        awayTeam: undefined,
        awayScore: undefined,
      },
    ],
  },
];

export function Brackets() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {data.map((phase) => (
          <div
            key={phase.id}
            className="grow-0 shrink-0 basis-full max-w-[95%]"
          >
            <Heading className="mb-2" intent="subtitle" as="h2">
              {phase.name}
            </Heading>
            <div className="flex flex-col gap-4">
              {phase.matches.map((match, i) => (
                <Match key={i} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
