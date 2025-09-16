import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="h-dvh bg-neutral-900 text-white overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
