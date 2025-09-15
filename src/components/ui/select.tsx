import { Select as SelectPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

const SelectContent = ({
  children,
}: ComponentProps<typeof SelectPrimitive.Content>) => {
  return (
    <SelectPrimitive.Content className="relative z-50 min-w-[8rem] max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md">
      {children}
    </SelectPrimitive.Content>
  );
};

export const Select = Object.assign(SelectPrimitive.Root, {
  Trigger: SelectPrimitive.Trigger,
  Portal: SelectPrimitive.Portal,
  Content: SelectContent,
  Item: SelectPrimitive.Item,
});
