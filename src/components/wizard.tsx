import { Steper } from "./steper";
import { GroupsStep } from "./groups-step";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, type ReactNode } from "react";
import { TournamentStep } from "./tournament-step";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

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
    if (step === steps.length - 1) {
      return;
    }

    setStep((step) => step + 1);
  };

  const back = async () => {
    if (step === 0) {
      return;
    }

    setStep((step) => step - 1);
  };

  const isPreviusEnabled = step === 0;

  const onSubmit = (data: WizardType) => {
    console.log("Dados enviados:", data);
  };

  const isLastStep = step === steps.length - 1;

  return (
    <div>
      <div className="px-4 pt-4">
        <div className="flex gap-2 items-center mb-6">
          <Link className="inline-flex align-middle" to="/tournaments">
            <ArrowLeft />
          </Link>
          <Heading intent="title" as="h1">
            Criador de Torneio
          </Heading>
        </div>
        <Steper steps={steps} active={step} />
      </div>

      <FormProvider {...wizardForm}>
        <form onSubmit={wizardForm.handleSubmit(onSubmit)}>
          <div className="p-4">{steps[step].component()}</div>

          <div className="fixed w-full bottom-0 flex p-4 gap-4">
            <Button disabled={isPreviusEnabled} type="button" onClick={back}>
              Voltar
            </Button>

            {isLastStep ? (
              <Button
                intent="primary"
                type="button"
                onClick={wizardForm.handleSubmit(onSubmit)}
              >
                Criar torneio
              </Button>
            ) : (
              <Button type="button" onClick={next}>
                Proximo
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
