import { Steper } from "./steper";
import { GroupsStep } from "./groups-step";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, type ReactNode } from "react";
import { TournamentStep } from "./tournament-step";

const wizardSchema = z.object({
  tournamentTitle: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export type WizardType = z.Infer<typeof wizardSchema>;

const steps: Array<{
  title: string;
  component: () => ReactNode;
}> = [
  {
    title: "Campeonato",
    component: () => <TournamentStep />,
  },
  {
    title: "Grupos",
    component: () => <GroupsStep />,
  },
  {
    title: "Partidas",
    component: () => (
      <div>
        <p>Partidas</p>
      </div>
    ),
  },
  {
    title: "Revisão",
    component: () => (
      <div>
        <p>Revisão</p>
      </div>
    ),
  },
];

export function Wizard() {
  const wizardForm = useForm({
    resolver: zodResolver(wizardSchema),
  });

  const [step, setStep] = useState(0);

  const next = async () => {
    setStep((step) => step + 1);
  };

  const back = async () => {
    setStep((step) => step - 1);
  };

  const onSubmit = (data: WizardType) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="p-4">
      <Steper steps={steps} active={step} />

      <FormProvider {...wizardForm}>
        <form onSubmit={wizardForm.handleSubmit(onSubmit)}>
          {steps[step].component()}

          <div className="flex gap-2">
            {step > 0 && (
              <button type="button" onClick={back}>
                Voltar
              </button>
            )}
            {step < steps.length - 1 ? (
              <button type="button" onClick={next}>
                Próximo
              </button>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
