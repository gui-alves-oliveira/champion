interface SteperProps {
  steps: Array<{ title: string }>;
  active: number;
}

export function Steper({ steps, active }: SteperProps) {
  return (
    <div
      className="mb-4 grid gap-2"
      style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
    >
      {steps.map((step, index) => {
        const isCompleted = index <= active;

        return (
          <div key={step.title} className="flex flex-col items-center">
            <div
              className={`block h-1 rounded w-full ${
                isCompleted ? "bg-green-500" : "bg-neutral-400"
              }`}
            ></div>
            <div
              className={`flex text-xs ${
                isCompleted ? "text-green-500" : "text-neutral-400"
              }`}
            >
              <span>{step.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
