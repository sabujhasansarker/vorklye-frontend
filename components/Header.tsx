"use client";

import { header } from "@/data";
import { useHeaderFixedOnScrollUp } from "@/utility";
import { BriefcaseBusiness, Crown, FolderDot, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ButtonSm } from "./Button";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  const { spacerHeight, scrolled } = useHeaderFixedOnScrollUp(
    headerRef,
    logoRef,
  );

  const { menus, button, logo } = header;

  return (
    <>
      <header
        ref={headerRef}
        className={`hidden xl:block fixed top-0 left-0 w-full z-99 transition-all duration-350 ease-out ${
          scrolled ? "py-4 bg-black/80 backdrop-blur-sm" : "py-10"
        }`}
      >
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-7.5">
              <Link href="/">
                <img src={logo} alt="Logo" className="max-w-38" />
              </Link>

              <div className="w-[1.4px] h-8 bg-gray-200" />

              <a href="#">
                <img
                  src="/images/shopify-patner.png"
                  alt="Shopify Partner"
                  className="max-w-35"
                />
              </a>
            </div>

            {/* MENU */}
            <ul className="flex items-center gap-6 lg:gap-10">
              {menus.map((menu, index) => {
                const isActive =
                  menu.link === "/"
                    ? pathname === "/"
                    : pathname === menu.link ||
                      pathname.startsWith(`${menu.link}/`);

                return (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className={`nav-link font-semibold leading-7 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* BUTTON */}
            <ButtonSm target="_blank" text={button.label} href={button.link} />
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div style={{ height: spacerHeight }} className="hidden sm:block" />
    </>
  );
};

export default Header;

const menus = [
  { label: "Projects", link: "/case-studies", icon: FolderDot },
  { label: "Services", link: "/services", icon: BriefcaseBusiness },
  { label: "Career", link: "/career", icon: Crown },
];

const moreLinks = [
  { label: "Home", desc: "Home is where the Vorklye lives", link: "/" },
  { label: "About us", desc: "The journey of Design Monks", link: "/about" },
  {
    label: "Meet the team",
    desc: "An overview of the Vorklye family",
    link: "/team",
  },
  {
    label: "Career",
    desc: "Work with top global brands, grow your skills",
    link: "/career",
  },
  {
    label: "Contact us",
    desc: "Start your dream growth journey from here",
    link: "/contact",
  },
];

export const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const scrollRef = useRef<HTMLUListElement>(null);

  // Track chatbot open/close state from Chatbot component
  useEffect(() => {
    const handleChatbotState = (e: Event) => {
      const detail = (e as CustomEvent<{ isOpen: boolean }>).detail;
      setIsChatbotOpen(detail.isOpen);
    };
    window.addEventListener("chatbot-state", handleChatbotState);
    return () =>
      window.removeEventListener("chatbot-state", handleChatbotState);
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;

    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };

    el.addEventListener("wheel", stopPropagation, { passive: true });
    el.addEventListener("touchstart", stopPropagation, { passive: true });
    el.addEventListener("touchmove", stopPropagation, { passive: true });

    return () => {
      el.removeEventListener("wheel", stopPropagation);
      el.removeEventListener("touchstart", stopPropagation);
      el.removeEventListener("touchmove", stopPropagation);
    };
  }, [open]);

  return (
    <div className={`xl:hidden ${isChatbotOpen ? "hidden" : "block"}`}>
      {/* backdrop when the "More" sheet is open */}
      {open && (
        <div
          className="fixed inset-0 z-99 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-999999 max-w-200 w-full m-auto">
        {/* "More" sheet — white list, scrollable */}
        <div
          className={`relative z-50 overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-[70vh]" : "max-h-0"
          }`}
        >
          <ul
            ref={scrollRef}
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="bg-white rounded-t-4xl max-h-[60vh] overflow-y-auto overscroll-contain touch-pan-y pb-4"
          >
            {moreLinks.map((item, i) => (
              <li key={i} className="border-b border-black/5 last:border-none">
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4"
                >
                  <p className="text-black font-semibold text-[15px]">
                    {item.label}
                  </p>
                  <p className="text-black/50 text-sm mt-0.5">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom bar */}
        <div className="bg-black relative z-50 w-full rounded-t-4xl px-5 pt-4 pb-6">
          <ul className="flex text-xs text-center font-semibold justify-between items-end relative">
            {menus.slice(0, 2).map((menu, i) => {
              const Icon = menu.icon;
              const isActive = pathname === menu.link;
              return (
                <li key={i} className="flex-1">
                  <Link
                    href={menu.link}
                    className={`flex flex-col items-center gap-1.5 transition-colors ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    <Icon size={22} />
                    <span>{menu.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* floating center action button */}
            <li className="relative flex-1">
              <Link
                href="/"
                className="size-16 rounded-full absolute left-1/2 -translate-x-1/2 -top-20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              >
                <img
                  src={"/images/mobile-home.avif"}
                  alt="AI Chatbot"
                  className="size-16 object-contain"
                />
              </Link>
            </li>

            {menus.slice(2).map((menu, i) => {
              const Icon = menu.icon;
              const isActive = pathname === menu.link;
              return (
                <li key={i} className="flex-1">
                  <Link
                    href={menu.link}
                    className={`flex flex-col items-center gap-1.5 transition-colors ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    <Icon size={22} />
                    <span>{menu.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* More toggle */}
            <li className="flex-1">
              <button
                onClick={() => setOpen((v) => !v)}
                className={`flex flex-col items-center gap-1.5 w-full transition-colors ${
                  open ? "text-white-400" : "text-white/50"
                }`}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
                <span>More</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
