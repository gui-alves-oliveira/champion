import { createFileRoute } from "@tanstack/react-router";
import { Wizard } from "../../components/wizard";

export const Route = createFileRoute("/tournaments/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Wizard />
    </div>
  );
}
