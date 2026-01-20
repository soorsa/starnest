import React from "react";
import type { sampleCards } from "./Testimonials";
interface Props {
  testimonial: (typeof sampleCards)[0];
}
const TestimonyCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg text-left min-w-[300px] w-xs space-y-2">
      <div className="flex gap-2 items-center">
        <div className="rounded-full overflow-hidden h-14 w-14">
          <img src={testimonial.image} alt="" className="w-full h-full" />
        </div>
        <div className="">
          <div className="text-sm">{testimonial.name}</div>
          <div className="text-gray-600 text-xs">{testimonial.role}</div>
        </div>
      </div>
      <div className="text-sm text-gray-700">"{testimonial.description}"</div>
    </div>
  );
};

export default TestimonyCard;
