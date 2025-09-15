import useEmblaCarousel from "embla-carousel-react";
import { Match, type IMatch } from "./match";

interface Round {
  id: number;
  name: string;
  matchDateAndTime?: Date;
  matches: IMatch[];
}

const data: Array<Round> = [
  {
    id: 1,
    name: "Rodada 1",
    matchDateAndTime: new Date("2025-09-17T18:00:00"),
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
    matchDateAndTime: new Date("2025-09-22T18:00:00"),
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
    matchDateAndTime: new Date("2025-09-24T18:00:00"),
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
    matchDateAndTime: new Date("2025-09-29T18:00:00"),
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
    matchDateAndTime: new Date("2025-10-01T18:00:00"),
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
];

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function Games() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {data.map((round) => (
          <div
            key={round.id}
            className="grow-0 shrink-0 basis-full max-w-[95%]"
          >
            <div className="mb-6 ">
              <h2 className="text-2xl font-bold">{round.name}</h2>
              <span className="text-xs">{`${dateFormatter.format(round.matchDateAndTime)} às ${timeFormatter.format(round.matchDateAndTime)}`}</span>
            </div>

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
