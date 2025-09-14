import useEmblaCarousel from "embla-carousel-react";
import { Match } from "./match";

export function Games() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Rodada 1</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Rodada 2</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Rodada 3</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Semi-final</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Finais</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>
      </div>
    </div>
  );
}
