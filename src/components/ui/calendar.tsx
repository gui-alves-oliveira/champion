import { type ComponentProps } from "react";
import { DayPicker } from "react-day-picker";

export function Calendar({ ...props }: ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      mode="single"
      navLayout="around"
      classNames={{
        root: "relative",
        button_previous: "absolute top-0 left-0 bg-neutral-800 rounded p-1",
        month_caption:
          "flex items-center justify-center w-full text-center h-8",
        button_next: "absolute top-0 right-0 bg-neutral-800 rounded p-1",
        chevron: "fill-green-500",
        weekday: "size-9",
        weekdays: "flex mt-4",
        weeks: "flex flex-col mt-1",
        week: "flex",
        outside: "text-neutral-700",
        day_button:
          "flex items-center justify-center size-9 rounded hover:bg-neutral-800",
        selected: "bg-green-500 hover:bg-green-400 text-green-950 rounded",
        today: "outline-1 outline-green-500 rounded",
      }}
      {...props}
    />
  );
}
