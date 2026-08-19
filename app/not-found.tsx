"use client";

import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  FolderGit2,
  Home as HomeIcon,
  Layers,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Services",
      description:
        "Explore our UI/UX, Shopify, Migration & Growth capabilities.",
      href: "/services",
      icon: Layers,
    },
    {
      title: "Case Studies",
      description:
        "Discover real results and case studies from our global clients.",
      href: "/case-studies",
      icon: FolderGit2,
    },
    {
      title: "Careers",
      description:
        "Join our team of designers, engineers, and growth strategists.",
      href: "/career",
      icon: Briefcase,
    },
    {
      title: "Contact Us",
      description:
        "Get in touch with our leadership to discuss your next project.",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen antialiased flex flex-col justify-between">
      {/* Main 404 Content */}
      <section className="relative pt-44 pb-32 overflow-hidden flex-1 flex items-center">
        {/* Subtle grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8">
            <span className="size-2 rounded-full bg-red-500 animate-pulse" />
            Error 404 • Page Not Found
          </div>

          {/* Big Typographic 404 */}
          <div className="relative mb-6">
            <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-400 to-neutral-900 select-none block">
              404
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            Lost in the digital expanse?
          </h1>

          <p className="text-neutral-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link href="/" className="btn-primary">
              <span className="btn-text">
                <span>Back to Homepage</span>
                <span>Back to Homepage</span>
              </span>
              <span className="btn-icon">
                <HomeIcon className="size-5" />
                <HomeIcon className="size-5" />
              </span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-3.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white font-semibold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="size-4" /> Go Back
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="border-t border-neutral-900 pt-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-neutral-600 mb-8">
              / Popular Destinations
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-6 rounded-sm bg-neutral-950 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="size-10 rounded-sm bg-black border border-neutral-800 flex items-center justify-center mb-4 group-hover:border-neutral-600 transition-colors">
                        <Icon className="size-4 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 group-hover:text-white mt-6 transition-colors">
                      Visit Page <ArrowUpRight className="size-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
