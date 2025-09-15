import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv({
  variants: {
    intent: {
      title: "text-4xl",
      subtitle: "text-3xl",
      section: "text-2xl",
    },
  },
  defaultVariants: {
    intent: "section",
  },
});

interface HeadingProps
  extends ComponentProps<"h1">,
    VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ as, children, ...props }: HeadingProps) {
  const Tag = as ?? "h3";

  return (
    <Tag className={headingVariants()} {...props}>
      {children}
    </Tag>
  );
}
