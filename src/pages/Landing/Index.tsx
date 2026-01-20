import React from "react";
import Button from "../../components/GeneralComponent/Button";
import Stats from "../../components/LandingPageComponents/Stats";
import { ArrowUpRightFromCircle } from "lucide-react";
import WhyChoseUs from "../../components/LandingPageComponents/WhyChoseUs";
import WhatWeOffer from "../../components/LandingPageComponents/WhatWeOffer";
import AboutUseSection from "../../components/LandingPageComponents/AboutUseSection";
import MissionVision from "../../components/LandingPageComponents/MissionVision";
import GetStartedGuide from "../../components/LandingPageComponents/GetStartedGuide";
import Testimonials from "../../components/LandingPageComponents/Testimonials";
import ContactSection from "../../components/LandingPageComponents/ContactSection";

const Index: React.FC = () => {
  return (
    <div>
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 justify-between relative md:mt-30">
        <div className="mt-5">
          <div className="space-y-6 md:space-y-10 text-black px-4 w-full">
            <h2 className="text-3xl md:text-5xl font-starnest-mid text-left">
              Unlocking{" "}
              <span className="font-starnest-ultra">Financial Freedom</span>
            </h2>
            <div className="max-w-[550px] text-justify space-y-3">
              <div className="md:text-base">
                <span className="font-starnest-bold">StarNest </span>
                is a Trusted and Respected Platform with a mission to Grow
                African Businesses and Economy From The Nest and Unlock
                Financial Freedom.
              </div>
              <div className="flex gap-4 text-xs md:text-base">
                <Button
                  rightIcon={<ArrowUpRightFromCircle size={20} />}
                  label="Get Started"
                  className="max-w-[150px] md:max-w-[240px]"
                />
                <Button
                  label="Read More"
                  className="max-w-[150px] md:max-w-[240px] bg-primary hover:bg-gray-900 hover:!text-primary border border-gray-900 !text-black"
                />
              </div>
              <div className="pt-5">
                <Stats />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <img
            src="/happy-family.png"
            alt="happy-family"
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="py-20 space-y-10">
        <WhatWeOffer />
        <AboutUseSection />
        <MissionVision />
        <WhyChoseUs />
        <GetStartedGuide />
        <Testimonials />
        <ContactSection />
      </div>
      {/* <div className="py-20"></div> */}
    </div>
  );
};

export default Index;
