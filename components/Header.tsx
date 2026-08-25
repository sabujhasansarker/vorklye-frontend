"use client";

import { header } from "@/data";
import { useHeaderFixedOnScrollUp } from "@/utility";
import {
  BriefcaseBusiness,
  Crown,
  FolderDot,
  Home,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
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
  { label: "Home", desc: "Home is where the monk lives", link: "/" },
  { label: "About us", desc: "The journey of Design Monks", link: "/about" },
  {
    label: "Meet the team",
    desc: "An overview of the Monk family",
    link: "/team",
  },
  { label: "Blogs", desc: "A collection of informative blogs", link: "/blogs" },
  {
    label: "Career",
    desc: "Work with top global brands, grow your skills",
    link: "/career",
  },
  {
    label: "Contact us",
    desc: "Start your dream design journey from here",
    link: "/contact",
  },
];

export const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="block xl:hidden">
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
          <ul className="bg-white rounded-t-4xl max-h-[70vh] overflow-y-auto pb-4">
            {moreLinks.map((item, i) => (
              <li key={i} className="border-b border-black/5 last:border-none">
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4"
                >
                  <p className="text-black font-semibold text-[15px]">
                    {item.label}
                  </p>
                  <p className="text-black/50 text-sm mt-0.5">{item.desc}</p>
                </a>
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
                  <a
                    href={menu.link}
                    className={`flex flex-col items-center gap-1.5 transition-colors ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    <Icon size={22} />
                    <span>{menu.label}</span>
                  </a>
                </li>
              );
            })}

            {/* floating center action button */}
            <li className="relative flex-1">
              <a
                href="/"
                className="flex items-center justify-center bg-gradient-to-br from-[#EBFE5B] to-black text-white size-16 rounded-full absolute left-1/2 -translate-x-1/2 -top-22"
              >
                <Home size={26} />
              </a>
            </li>

            {menus.slice(2).map((menu, i) => {
              const Icon = menu.icon;
              const isActive = pathname === menu.link;
              return (
                <li key={i} className="flex-1">
                  <a
                    href={menu.link}
                    className={`flex flex-col items-center gap-1.5 transition-colors ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    <Icon size={22} />
                    <span>{menu.label}</span>
                  </a>
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
