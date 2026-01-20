import { PhoneCall } from "lucide-react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-5 md:flex justify-between items-center w-[98%] md:w-[65%] mx-auto p-10">
      <div className="text-left space-y-2">
        <div className="text-4xl font-starnest-bold text-yellow-800">
          Have a Question?
        </div>
        <div className="">
          Call us or send us a message, and we'll get in touch.
        </div>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 md:flex gap-4">
          <a href="tel:+2347012345678">
            <button className="bg-blue-600 rounded-lg px-7 py-2 text-white w-full min-w-[100px] flex items-center justify-center gap-2">
              <PhoneCall size={20} />
              Call Us
            </button>
          </a>
          <a href="https://wa.me/2347012345678">
            <button className="bg-green-600 text-white px-7 py-2 rounded-lg w-full min-w-[100px] flex items-center justify-center gap-2">
              <IoLogoWhatsapp size={20} />
              Chat Us
            </button>
          </a>
        </div>
        <div className="text-xl">We are online 24/7</div>
      </div>
    </div>
  );
};

export default ContactSection;
