interface GroupProps {
  teams: { name: string; points: number }[];
}

export function Group({ teams }: GroupProps) {
  const sortedTeams = teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="border border-neutral-800 rounded overflow-hidden">
      <table className="w-full divide-y divide-neutral-800">
        <thead>
          <tr>
            <td className="px-6 py-4">Time</td>
            <td className="px-6 py-4">Pts.</td>
          </tr>
        </thead>
        <tbody className="w-full divide-y divide-neutral-800">
          {sortedTeams.map((team) => (
            <tr key={team.name}>
              <td className="px-6 py-2">{team.name}</td>
              <td className="px-6 py-2">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
