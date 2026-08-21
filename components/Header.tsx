"use client";

import { header } from "@/data";
import { useHeaderFixedOnScrollUp } from "@/utility";
import Link from "next/link";
import React, { useRef } from "react";
import { ButtonSm } from "./Button";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const { spacerHeight, scrolled } = useHeaderFixedOnScrollUp(
    headerRef,
    logoRef,
  );

  const { menus, button, logo } = header;

  return (
    <>
      <header
        ref={headerRef}
        className={`hidden sm:block fixed top-0 left-0 w-full z-[99] transition-all duration-350 ease-out ${
          scrolled ? "py-4 bg-black/80 backdrop-blur-sm" : "py-10"
        }`}
      >
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-7.5">
              <Link href="/">
                <img src={logo} alt="Logo" />
              </Link>

              <div className="w-[1.7px] h-7 bg-gray-200" />

              <a href="#">
                <img
                  ref={logoRef}
                  src="https://vorklye-frontend-nine.vercel.app/images/shopify-patner.png"
                  alt="Shopify Partner"
                />
              </a>
            </div>

            {/* MENU */}
            <ul className="flex items-center gap-6 lg:gap-10">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="nav-link text-white font-semibold leading-7"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <ButtonSm text={button.label} href={button.link} />
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div style={{ height: spacerHeight }} className="hidden sm:block" />
    </>
  );
};

export default Header;
