import useEmblaCarousel from "embla-carousel-react";
import { Match, type IMatch } from "./match";

interface Round {
  id: number;
  name: string;
  matches: IMatch[];
}

const data: Array<Round> = [
  {
    id: 1,
    name: "Rodada 1",
    matches: [
      {
        homeTeam: "Verde",
        homeScore: undefined,
        awayTeam: "Azul",
        awayScore: undefined,
      },
      {
        homeTeam: "Amarelo",
        homeScore: undefined,
        awayTeam: "Branco",
        awayScore: undefined,
      },
    ],
  },
  {
    id: 2,
    name: "Rodada 2",
    matches: [
      {
        homeTeam: "Verde",
        homeScore: undefined,
        awayTeam: "Amarelo",
        awayScore: undefined,
      },
      {
        homeTeam: "Azul",
        homeScore: undefined,
        awayTeam: "Branco",
        awayScore: undefined,
      },
    ],
  },
  {
    id: 3,
    name: "Rodada 3",
    matches: [
      {
        homeTeam: "Verde",
        homeScore: undefined,
        awayTeam: "Branco",
        awayScore: undefined,
      },
      {
        homeTeam: "Azul",
        homeScore: undefined,
        awayTeam: "Amarelo",
        awayScore: undefined,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
    name: "Finais",
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

export function Games() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {data.map((round) => (
          <div key={round.id} className="grow-0 shrink-0 basis-full">
            <h2 className="mb-6 text-2xl font-bold">{round.name}</h2>
            <div className="flex flex-col gap-4">
              {round.matches.map((match, i) => (
                <Match key={i} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
