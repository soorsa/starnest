import clsx from "clsx";
import {
  ArrowUpRightFromCircle,
  ChartArea,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  Star,
  Stars,
  UserCircle,
  X,
} from "lucide-react"; // or use any icon you prefer
import { useEffect, useState } from "react";
import { BiCog, BiLogOut } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";
import LogoutModal from "../AuthComponents/LogoutModal";
import Button from "./Button";
import LinkButton from "./LinkButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, user } = useUserState();
  const modal = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Dropdown menu links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "See the Nest", href: "/get-started", isPop: true },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-red-400/50 shadow" : "bg-primary"
      }`}
    >
      <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center py-2">
        <div className="flex items-center space-x-2 h-12">
          <img
            src="/logo-h2.png"
            alt="Star Nest"
            className="object-contain h-full w-full"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-sm relative">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={clsx("relative", link.isPop && "group")}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-orange-300 font-starnest-mid"
                      : " hover:text-purple-950"
                  }`
                }
              >
                {link.name}
              </NavLink>

              {/* Dropdown on hover */}
              {link.isPop && (
                <div className="absolute top-full left-0 mt-5 w-[360px] p-4 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-sm text-left text-gray-500">
                      Trusted and Respected Platform with a mission to Grow
                      African Families, Businesses and Economy From The Nest and
                      Unlock Financial Freedom. Register now, start saving and
                      turn your savings into passive income.
                    </p>
                    <LinkButton
                      link="/register"
                      rightIcon={<ArrowUpRightFromCircle />}
                      label="Get Started"
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        {isLoggedIn ? (
          <div
            // to="/dashboard"
            className="hidden cursor-pointer relative group md:flex gap-1 items-center bg-black py-2 px-5 text-white rounded-xl"
          >
            {user?.profile_picture ? (
              <img
                src={user.profile_picture}
                className="h-7 w-7 rounded-full"
                alt=""
              />
            ) : (
              <UserCircle />
            )}
            <div className="text-xs">
              {user?.first_name} {user?.last_name}
            </div>
            <ChevronDown className="ml-1 w-5 h-5" />
            <div className="absolute top-full right-0 mt-5 w-[200px] p-4 bg-white text-black shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
              <div className=" flex flex-col divide divide-y-1 text-xs space-y-0 divide-gray-200">
                <Link
                  to="/dashboard"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <ChartArea className="h-4 w-4 text-black" />
                  Go to Dashboard
                </Link>
                <Link
                  to="/dashboard/my-plans"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <Stars className="h-4 w-4" />
                  My Saving Plans
                </Link>
                <Link
                  to="/dashboard/plans"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50 text-yellow-600"
                >
                  <Star className="h-4 w-4" />
                  Join a Saving Plan
                </Link>
                <Link
                  to="/dashboard/profile"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <BiCog />
                  My Profile
                </Link>
                <div
                  onClick={() => {
                    modal.openModal(<LogoutModal />);
                  }}
                  className="py-2 flex items-center gap-1 hover:bg-red-100/50 text-red-500"
                >
                  <BiLogOut />
                  Logout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex space-x-2">
            <button className="text-black text-sm px-4 py-2">
              <Link to="/login" className="w-full">
                Login
              </Link>
            </button>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
              <Link to="/register" className="w-full">
                Sign up
              </Link>
            </button>
          </div>
        )}

        {/* Hamburger Button */}
        <div className="md:hidden bg-transparent">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay + Mobile Menu Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "flex"
        )}
      >
        {/* Transparent dark overlay */}
        <div
          className="flex-1 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side drawer menu */}
        <div className="w-64 bg-white h-full p-6 shadow-lg">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-start space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base block ${
                    location.pathname === link.href
                      ? "text-adron-green font-semibold"
                      : "text-gray-700 hover:text-adron-green"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {isLoggedIn ? (
            <div className="mt-5">
              <hr className="text-gray-200" />

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-1">
                  {user?.profile_picture ? (
                    <img src={user.profile_picture} alt="" />
                  ) : (
                    <UserCircle />
                  )}
                  <div className="">
                    {user?.first_name} {user?.last_name}
                  </div>
                </div>
                <div className="ml-2 border-l-1 border-gray-200">
                  <div className="flex items-center">
                    <div className="h-[0.5px] w-[10px] text-black bg-gray-200"></div>
                    <LinkButton
                      label="Go to Dashboard"
                      link="/dashboard"
                      className="bg-transparent text-black! text-sm w-fit! px-2"
                      icon={<ChartArea size={15} />}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="h-[0.5px] w-[10px] text-black bg-gray-200"></div>
                    <LinkButton
                      label="My Saving Plans"
                      link="/dashboard/my-plans"
                      className="bg-transparent text-black! text-sm w-fit! px-2"
                      icon={<Stars size={15} />}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="h-[0.5px] w-[10px] text-black bg-gray-200"></div>
                    <LinkButton
                      label="Join a Saving Plans"
                      link="/dashboard/plans"
                      className="bg-transparent text-yellow-600! text-xs w-fit! px-2"
                      icon={<Star size={15} />}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="h-[0.5px] w-[10px] text-black bg-gray-200"></div>
                    <LinkButton
                      label="My Profile"
                      link="/dashboard/my-profile"
                      className="bg-transparent text-black! text-sm w-fit! px-2"
                      icon={<Settings size={15} />}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="h-[0.5px] w-[10px] text-black bg-gray-200"></div>
                    <Button
                      label="Logout"
                      onClick={() => {
                        modal.openModal(<LogoutModal />);
                      }}
                      className="bg-transparent text-red-500! text-xs w-fit! px-2"
                      icon={<LogOut size={15} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-20 space-y-3">
              <button className="w-full bg-black text-white py-2 rounded-full">
                <Link to="/register" className="w-full">
                  Sign up
                </Link>
              </button>
              <button className="w-full text-center text-black">
                <Link to="/login" className="w-full ">
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
