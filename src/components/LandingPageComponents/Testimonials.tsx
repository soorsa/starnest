import React from "react";
import { testimonials } from "../../data/constants";
import TestimonialSlider from "./TestimonialSlider";
const Testimonials: React.FC = () => {
  return (
    <div className="py-10 px-5 bg-white rounded-lg w-[95%] mx-auto">
      <h2 className="text-gray-700 mb-1">Our recent user reviews</h2>
      <div className="text-4xl font-starnest-bold">
        <span className="text-orange-400">Trusted</span> by Users Everwhere
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
