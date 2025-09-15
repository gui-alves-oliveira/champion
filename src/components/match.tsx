export interface IMatch {
  homeTeam?: string;
  awayTeam?: string;
  homeScore?: number;
  awayScore?: number;
}

interface MatchProps {
  match: IMatch;
}

export function Match({ match }: MatchProps) {
  return (
    <div className="bg-neutral-800 rounded divide-y divide-neutral-900">
      <div className="flex justify-between px-4 py-2">
        <span>{match.homeTeam ? match.homeTeam : "TBD"}</span>
        <span className="flex items-center justify-center bg-neutral-700 size-6 rounded">
          {match.homeScore ? match.homeScore : "-"}
        </span>
      </div>
      <div className="flex justify-between px-4 py-2">
        <span>{match.awayTeam ? match.awayTeam : "TBD"}</span>
        <span className="flex items-center justify-center bg-neutral-700 size-6 rounded">
          {match.awayScore ? match.awayScore : "-"}
        </span>
      </div>
    </div>
  );
}
