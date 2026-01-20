import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { sampleCards } from "./Testimonials";
import TestimonyCard from "./TestimonyCard";
interface Props {
  testimonials: typeof sampleCards;
}
const TestimonialSlider: React.FC<Props> = ({ testimonials }) => {
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
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="w-full my-7">
      <div className="relative w-full mx-auto md:p-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-4 md:p-4">
            {testimonials.map((item, index) => (
              <TestimonyCard key={index} testimonial={item} />
            ))}
          </div>
        </div>

        {canScrollPrev && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {canScrollNext && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
