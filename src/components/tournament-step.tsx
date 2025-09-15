import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import type { WizardType } from "./wizard";
import { Field } from "./ui/field";
import { DatePicker } from "./ui/date-picker";
import { Heading } from "./ui/heading";

export function TournamentStep() {
  const { register, control } = useFormContext<WizardType>();

  return (
    <div className="flex flex-col gap-6">
      <Heading intent="subtitle" as="h2">
        Detalhes do torneio
      </Heading>

      <Field>
        <Field.Label>Titulo do torneio</Field.Label>
        <Input {...register("tournamentTitle")} />
      </Field>

      <Field className="flex-auto">
        <Field.Label>Data de inicio</Field.Label>
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </Field>

      <Field className="flex-auto">
        <Field.Label>Data de termino</Field.Label>
        <Controller
          control={control}
          name="endDate"
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </Field>
    </div>
  );
}
