"use client";

import { ArrowRight, Check, Menu, Star, X } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatter";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      price: "22500",
      period: "month",
      description: "Perfect for small businesses starting their brand journey",
      features: [
        "Brand Strategy Workshop",
        "Basic Logo Design",
        "Social Media Setup (3 platforms)",
        "5 Static Graphics/month",
        "Monthly Performance Report",
        "Email Support",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "50500",
      period: "month",
      description: "For growing companies ready to scale their presence",
      features: [
        "Full Brand Identity System",
        "Custom Logo + Brand Guidelines",
        "Website Copy & SEO Basics",
        "Content Creation (12 posts/month)",
        "Paid Ads Management ($2k budget)",
        "Bi-weekly Strategy Calls",
        "Priority Support",
      ],
      popular: true,
      cta: "Scale Now",
    },
    {
      name: "Enterprise",
      price: "120000",
      period: "month",
      description: "Comprehensive solution for established brands",
      features: [
        "Complete Brand Overhaul",
        "Multi-channel Campaign Strategy",
        "Full Website Development",
        "Video Production & Animation",
        "Influencer & PR Management",
        "Advanced Analytics Dashboard",
        "Dedicated Account Manager",
        "24/7 Priority Support",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-2xl flex items-center justify-center font-bold text-2xl">
              ✦
            </div>
            <div>
              <span className="text-2xl font-semibold tracking-tight">
                STARNEST
              </span>
              <span className="text-violet-400 text-sm font-medium ml-1">
                AGENCY
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a
              href="#services"
              className="hover:text-violet-400 transition-colors"
            >
              Services
            </a>
            <a href="#work" className="hover:text-violet-400 transition-colors">
              Work
            </a>
            <a
              href="#pricing"
              className="hover:text-violet-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="hover:text-violet-400 transition-colors"
            >
              About
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium hover:bg-white/5 rounded-full transition-colors">
              Login
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-violet-400 hover:text-white transition-all active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950 py-6">
            <div className="flex flex-col gap-6 px-6 text-lg">
              <a href="#services" className="hover:text-violet-400">
                Services
              </a>
              <a href="#work" className="hover:text-violet-400">
                Work
              </a>
              <a href="#pricing" className="hover:text-violet-400">
                Pricing
              </a>
              <a href="#about" className="hover:text-violet-400">
                About
              </a>
              <button className="mt-4 bg-white text-black py-4 rounded-2xl font-semibold">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-1.5 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium tracking-wide">
              NOW BOOKING Q3 2026 PROJECTS
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Your brand.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Unforgettable.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-12">
            We craft bold identities and powerful marketing strategies that cut
            through the noise and drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-10 py-5 bg-white text-black rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-violet-500 hover:text-white transition-all active:scale-[0.98]"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-5 border border-zinc-700 hover:border-zinc-400 rounded-3xl font-medium text-lg transition-colors"
            >
              See Our Work →
            </button>
          </div>

          <div className="mt-16 flex justify-center items-center gap-12 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Star className="text-amber-400" fill="currentColor" size={18} />
              <span>4.9/5</span>
            </div>
            <div>120+ Brands Transformed</div>
            <div>Trusted by startups &amp; Fortune 500s</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[3px] text-violet-400 text-sm font-medium mb-3">
              WHAT WE DO
            </div>
            <h2 className="text-5xl font-bold tracking-tight">
              End-to-End Brand Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Strategy",
                desc: "Positioning, storytelling, and visual systems that make your brand magnetic.",
                icon: "🎯",
              },
              {
                title: "Creative Campaigns",
                desc: "Bold, data-driven campaigns across digital, social, and traditional channels.",
                icon: "🚀",
              },
              {
                title: "Digital Growth",
                desc: "SEO, paid media, content marketing, and conversion optimization.",
                icon: "📈",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 hover:border-violet-500/50 p-10 rounded-3xl transition-all group"
              >
                <div className="text-6xl mb-8">{service.icon}</div>
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                <div className="mt-10 text-violet-400 group-hover:translate-x-3 transition inline-flex items-center gap-2 text-sm font-medium">
                  Learn more <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[3px] text-violet-400 text-sm font-medium mb-3">
              PRICING
            </div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-zinc-400 max-w-md mx-auto">
              Choose the package that matches your ambition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-10 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-violet-500 bg-zinc-900 scale-[1.03] shadow-2xl shadow-violet-500/20"
                    : "border-zinc-800 hover:border-zinc-700 bg-zinc-950"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-sm font-semibold px-6 py-1 rounded-full flex items-center gap-2">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl font-semibold">{plan.name}</h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10">
                  <span className="text-6xl font-bold tracking-tighter">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-zinc-400">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <Check className="text-emerald-400 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-5 rounded-2xl font-semibold text-lg transition-all ${
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-500"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500 mt-12">
            All plans include strategy sessions, unlimited revisions on core
            deliverables, and monthly reporting.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight">
              Real results. Real love.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Starnest completely transformed how our audience perceives us. The rebrand increased our conversion rate by 340% in just 90 days.",
                name: "Sarah Chen",
                role: "CEO, NovaTech",
                avatar: "SC",
              },
              {
                quote:
                  "The most strategic and creative team I've ever worked with. They don't just design — they architect growth.",
                name: "Marcus Okonkwo",
                role: "Founder, Kinfolk Coffee",
                avatar: "MO",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 p-10 rounded-3xl"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-2xl leading-tight mb-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 border-t border-zinc-800 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter mb-8">
            Ready to make your brand legendary?
          </h2>
          <p className="text-2xl text-zinc-400 mb-12">
            Let's create something the market can't ignore.
          </p>
          <button
            onClick={() =>
              alert("Thank you! Our team will contact you shortly. (Demo)")
            }
            className="px-16 py-6 text-xl bg-white text-black rounded-3xl font-semibold hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Brand Journey
          </button>
          <p className="text-zinc-500 mt-8">
            Average response time: &lt; 4 hours
          </p>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-2xl flex items-center justify-center text-2xl">
                ✦
              </div>
              <span className="font-semibold text-2xl">Starnest</span>
            </div>
            <p className="text-sm">
              Strategic branding and performance marketing that drives
              measurable growth.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Company</div>
            <div className="space-y-2 text-sm">
              <p>About Us</p>
              <p>Our Process</p>
              <p>Careers</p>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Services</div>
            <div className="space-y-2 text-sm">
              <p>Brand Identity</p>
              <p>Digital Marketing</p>
              <p>Content Strategy</p>
              <p>Campaigns</p>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4">Connect</div>
            <div className="flex gap-4 justify-center">
              <Link
                to={`tel:2348122857589`}
                className="cursor-pointer hover:text-white flex items-center gap-2"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to={`tel:2348122857589`}
                className="cursor-pointer hover:text-white flex items-center gap-2"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to={`tel:2348122857589`}
                className="cursor-pointer hover:text-white flex items-center gap-2"
              >
                <RiTwitterXFill size={20} />
              </Link>
              <Link
                to={`tel:2348122857589`}
                className="cursor-pointer hover:text-white flex items-center gap-2"
              >
                <FaPhoneAlt size={20} />
              </Link>
            </div>
            <p className="mt-8 text-xs">
              © 2026 Starnest Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
