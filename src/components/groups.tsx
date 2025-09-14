export function Groups() {
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
          <tr>
            <td className="px-6 py-2">Verde</td>
            <td className="px-6 py-2">4</td>
          </tr>

          <tr>
            <td className="px-6 py-2">Amarelo</td>
            <td className="px-6 py-2">2</td>
          </tr>

          <tr>
            <td className="px-6 py-2">Azul</td>
            <td className="px-6 py-2">2</td>
          </tr>

          <tr>
            <td className="px-6 py-2">Branco</td>
            <td className="px-6 py-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
