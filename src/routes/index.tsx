import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "../components/ui/calendar";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>oi</p>

      <Calendar />
    </div>
  );
}
