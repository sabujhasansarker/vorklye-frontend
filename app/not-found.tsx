"use client";

import { Briefcase, FolderGit2, House, Layers, Mail } from "lucide-react";
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
          <div className="w-125 h-75 bg-white/3 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Big Typographic 404 */}
          <div className="relative mb-6">
            <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-400 to-neutral-900 select-none block">
              404
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Lost in the digital expanse?
          </h1>

          <p className="text-neutral-400 font-semibold text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link
              href="/"
              className="btn-primary py-2 pl-7 pr-2 group text-[20px] leading-6 font-semibold"
            >
              <span className="btn-text">
                <span>Back to Homepage</span>
                <span>Back to Homepage</span>
              </span>
              <span className="size-12 bg-black rounded-full text-white flex items-center justify-center">
                <House className="size-6" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
