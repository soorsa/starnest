import { Mail, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Support = () => {
  const support = [
    {
      name: "Phone",
      contact: "08122857589",
      icon: <PhoneCall size={40} />,
    },
    {
      name: "WhatsApp",
      contact: "08122857589",
      icon: <FaWhatsapp size={40} />,
    },
    {
      name: "Mail",
      contact: "info@api.starnest.com.ng",
      icon: <Mail size={40} />,
    },
  ];
  return (
    <div className="text-left w-sm max-w-xs md:max-w-sm space-y-12">
      <div className="text-4xl font-starnest-bold">Support</div>
      <div className="space-y-2">
        {support.map((item, i) => (
          <div className="flex gap-4 bg-primary py-2 px-4 rounded-lg" key={i}>
            {item.icon}
            <div className="">
              <div className="text-2xl">{item.name}</div>
              <div className="text-gray-700">{item.contact}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
