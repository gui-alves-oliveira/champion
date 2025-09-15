import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  variants: {
    intent: {
      primary: "",
      secondary: "",
      transparent: "",
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
