import React from "react";
import TestimonialSlider from "./TestimonialSlider";
export const sampleCards = [
  {
    name: "Beautiful Landscape",
    description:
      "Experience the breathtaking views of mountains and valleys with our guided tours. Perfect for nature lovers and adventure seekers.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    role: "Entreprenuer",
  },
  {
    name: "Urban Adventure",
    description:
      "Discover the hidden gems of the city with our urban exploration packages. From historic sites to modern architecture.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    role: "Store Owner",
  },
  {
    name: "Beach Paradise",
    description:
      "Relax and unwind at the world's most beautiful beaches. Crystal clear waters and white sandy beaches await you.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    role: "Farmer",
  },
  {
    name: "Mountain Trekking",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Challenge yourself with our mountain trekking expeditions. Suitable for both beginners and experienced hikers.",
    role: "Teacher",
  },
  {
    name: "Mountain Trekking",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Challenge yourself with our mountain trekking expeditions. Suitable for both beginners and experienced hikers.",
    role: "Adventure",
  },
  {
    name: "Mountain Trekking",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Challenge yourself with our mountain trekking expeditions. Suitable for both beginners and experienced hikers.",
    role: "Adventure",
  },
  {
    name: "Mountain Trekking",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Challenge yourself with our mountain trekking expeditions. Suitable for both beginners and experienced hikers.",
    role: "Adventure",
  },
  {
    id: 4,
    name: "Mountain Trekking",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Challenge yourself with our mountain trekking expeditions. Suitable for both beginners and experienced hikers.",
    role: "Adventure",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-10 px-5 bg-white rounded-lg w-[95%] mx-auto">
      <h2 className="text-gray-700 mb-1">Our recent user reviews</h2>
      <div className="text-4xl font-starnest-bold">
        <span className="text-orange-400">Trusted</span> by Users Everwhere
      </div>
      <TestimonialSlider testimonials={sampleCards} />
    </div>
  );
};

export default Testimonials;
