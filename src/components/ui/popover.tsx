import { Popover as PopoverPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

function PopoverContent({
  children,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Content
      className="p-4 rounded-lg border border-neutral-800 bg-neutral-900 shadow-lg"
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  );
}

export const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Portal: PopoverPrimitive.Portal,
  Content: PopoverContent,
});
