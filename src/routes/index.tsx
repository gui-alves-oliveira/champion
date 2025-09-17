import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    throw redirect({
      to: "/tournaments"
    })
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>index</p>
    </div>
  );
}
