import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv({
  variants: {
    intent: {
      title: "text-2xl text-nowrap",
      subtitle: "text-xl font-bold text-nowrap",
      section: "text-lg",
    },
  },
  defaultVariants: {
    intent: "section",
  },
});

interface HeadingProps
  extends ComponentProps<"h1">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ intent, as, children, ...props }: HeadingProps) {
  const Tag = as ?? "h3";

  return (
    <Tag className={headingVariants({ intent })} {...props}>
      {children}
    </Tag>
  );
}
