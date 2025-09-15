import type { ComponentProps } from "react";

export function Input({ ...props }: ComponentProps<"input">) {
  return (
    <input
      className="bg-neutral-900 border border-neutral-700 ring-green-500 rounded px-3 py-1 flex h-9 w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm outline-none focus-visible:ring-ring/50 focus-visible:ring-[2px]"
      {...props}
    />
  );
}
