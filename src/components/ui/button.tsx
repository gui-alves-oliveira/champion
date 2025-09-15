import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  variants: {
    intent: {
      primary: "mt-2 text-sm bg-green-500 h-10 px-4 w-full rounded",
      secondary: "mt-2 text-sm bg-neutral-800 h-10 px-4 w-full rounded",
      transparent: "",
      input:
        "bg-neutral-900 border items-center border-neutral-700 ring-green-500 rounded px-3 py-1 flex h-9 w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm outline-none focus-visible:ring-ring/50 focus-visible:ring-[2px]",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    intent: "secondary",
    size: "md",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export function Button({ intent, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ intent, size })} {...props}>
      {children}
    </button>
  );
}
