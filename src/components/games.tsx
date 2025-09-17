import useEmblaCarousel from "embla-carousel-react";
import { Match, type IMatch } from "./match";
import { Heading } from "./ui/heading";

interface Round {
  id: number;
  name: string;
  matchDateAndTime?: Date;
  matches: IMatch[];
}

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

export function Games({ games }: { games: Array<Round> }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        {games.map((round) => (
          <div
            key={round.id}
            className="grow-0 shrink-0 basis-full max-w-[95%]"
          >
            <div className="mb-6 ">
              <Heading intent="subtitle" as="h2">
                {round.name}
              </Heading>
              <span className="text-xs">{`${dateFormatter.format(
                round.matchDateAndTime
              )} às ${timeFormatter.format(round.matchDateAndTime)}`}</span>
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
