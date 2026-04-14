import React from "react";
import TestimonialSlider from "./TestimonialSlider";
export const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "Entrepreneur",
    description:
      "Starnest helped me stay consistent with my savings. For the first time, I was able to complete a financial goal without stress.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha Bello",
    role: "Fashion Designer",
    description:
      "I love how simple and structured everything is. I just pick a plan, save consistently, and watch my money grow.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Emeka Nwosu",
    role: "Business Owner",
    description:
      "The discipline this platform gives is unmatched. I’ve saved more in 3 months than I did the whole of last year.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Fatima Lawal",
    role: "Teacher",
    description:
      "Starnest made saving feel easy. The reminders and structure really helped me stay on track.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Ogunleye",
    role: "Software Developer",
    description:
      "I like the transparency and how I can track everything. It gives me confidence that my money is safe and growing.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Blessing Eze",
    role: "Student",
    description:
      "Even as a student, I’ve been able to save small amounts consistently. It really adds up over time.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];
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
