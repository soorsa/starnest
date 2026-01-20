import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
const CONTACTS = [
  {
    name: "Address",
    content: "451 Wall Street, UK, London",
    icon: <MapPin size={20} />,
  },
  {
    name: "Phone",
    content: "+234 812 345 6789",
    icon: <PhoneCall size={20} />,
  },
  {
    name: "Email",
    content: "451 Wall Street, UK, London",
    icon: <Mail size={20} />,
  },
];
const LINKS = [
  {
    header: "Useful links",
    links: [
      { name: "About Us", href: "/" },
      { name: "Contact Us", href: "/" },
      { name: "Investment Plans", href: "/" },
    ],
  },
  {
    header: "Resources",
    links: [
      { name: "Privacy policy", href: "/" },
      { name: "Terms and Conditions", href: "/" },
      { name: "Partnership", href: "/" },
      { name: "Customer Care", href: "/" },
    ],
  },
  {
    header: "Office Locations",
    links: [
      { name: "Lagos state", href: "/" },
      { name: "Abuja state", href: "/" },
      { name: "Imo state", href: "/" },
      { name: "Rivers state", href: "/" },
      { name: "Kano state", href: "/" },
    ],
  },
];
const Footer: React.FC = () => {
  return (
    <div className="p-5 bg-white">
      <div className="grid md:grid-cols-4 ">
        <div className="text-left space-y-4 p-2">
          <div className="w-full ">
            <img src="/logo-h2.png" alt="" className="h-full w-[50%] " />
          </div>
          <p className="text-sm">
            Challenge yourself with our mountain trekking expeditions. Suitable
            for both beginners and experienced hikers.
          </p>
          <div className="space-y-2 text-gray-700">
            {CONTACTS.map((info) => (
              <div className="flex gap-2 items-center text-sm">
                {info.icon}
                <div className="">{info.content}</div>
              </div>
            ))}
          </div>
        </div>
        {LINKS.map((section) => (
          <div className="text-left p-2 space-y-4">
            <div className="text-lg font-starnest-bold">{section.header}</div>
            <ul className="text-sm space-y-2 text-gray-600">
              {section.links.map((link) => (
                <li>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-4 border-t mt-4 p-4 text-sm border-t-gray-300">
          Copyright@2025 Starnest.
        </div>
      </div>
    </div>
  );
};

export default Footer;
