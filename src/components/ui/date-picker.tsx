import { CalendarIcon } from "lucide-react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover } from "./popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button intent="input">
          {value ? (
            format(value, "PPP", { locale: ptBR })
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-auto text-neutral-600" size={16} />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </Popover.Content>
    </Popover>
  );
}
