import useEmblaCarousel from "embla-carousel-react";
import { Match, type IMatch } from "./match";

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
          <div key={phase.id} className="grow-0 shrink-0 basis-full">
            <h2 className="mb-6 text-2xl font-bold">Semi-final</h2>
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
