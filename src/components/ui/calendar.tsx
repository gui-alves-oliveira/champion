import { type ComponentProps } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

export function Calendar({ ...props }: ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      classNames={{
        today: `border-green-500`,
        selected: `bg-green-500 border-green-500 text-white`,
        root: `${defaultClassNames.root}`,
        chevron: `${defaultClassNames.chevron} fill-green-500`,
      }}
      {...props}
    />
  );
}
