import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  BanknoteArrowDown,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Timer,
  TrendingUp,
} from "lucide-react";
import Button from "../GeneralComponent/Button";
import { formatPrice } from "../../utils/formatter";

const RecomendedPlanCarousel: React.FC = () => {
  const mapper = [1, 2, 3, 4, 5];
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!embla) return;

    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    updateButtons();
    embla.on("init", updateButtons);
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);

    // return () => {
    //   embla.off("init", updateButtons);
    //   embla.off("select", updateButtons);
    //   embla.off("reInit", updateButtons);
    // };
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {" "}
          {/* Negative margin to counteract slide padding */}
          {mapper.map((map, index) => (
            <div
              className="first:pl-0 pl-4 py-2 flex-[0_0_60%] min-w-0"
              key={index}
            >
              <div className="flex w-full gap-4 rounded-3xl p-4 h-full bg-white hover:shadow-sm">
                <img
                  src="/happy-family.png"
                  alt={`${map}`}
                  className="w-[40%] rounded-2xl object-cover"
                />
                <div className="flex flex-col w-[60%] gap-3 text-left">
                  <p className="font-starnest-mid">Soosoil Savings Plan</p>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="border border-gray-200 rounded-md p-2">
                      <BanknoteArrowDown
                        size={18}
                        className="text-orange-400"
                      />
                      <div className="mt-1">
                        <div className="">{formatPrice(65000)}</div>
                        <div className="text-sm text-gray-400">One-time</div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md p-2">
                      <div className="flex items-center gap-1 text-green-400">
                        <TrendingUp size={18} />{" "}
                        <span className="text-sm">45%</span>
                      </div>
                      <div className="mt-1">
                        <div className="">+{formatPrice(50000)}</div>
                        <div className="text-sm text-gray-400">Profits</div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md p-2">
                      <Timer size={18} />
                      <div className="mt-1">
                        <div className="">12 months</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    label="Join Plan"
                    className=""
                    icon={<PlusCircle size={18} />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollPrev && (
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md ${
            !canScrollPrev ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollNext && (
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md ${
            !canScrollNext ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default RecomendedPlanCarousel;
