import useEmblaCarousel from "embla-carousel-react";
import { Match } from "./match";

export function Brackets() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef}>
      <div className="flex gap-4">
        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Semi-final</h2>
          <div className="flex flex-col gap-4">
            <Match />
            <Match />
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Terceiro lugar</h2>
          <div className="flex flex-col gap-4">
            <Match />
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-full">
          <h2 className="mb-6 text-2xl font-bold">Final</h2>
          <div className="flex flex-col gap-4">
            <Match />
          </div>
        </div>
      </div>
    </div>
  );
}
