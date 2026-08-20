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
        className={`fixed top-0 left-0 w-full z-99 transition-all duration-350 ease-out ${
          scrolled ? "py-4 scrolled bg-black/80 backdrop-blur-sm" : "py-10"
        }`}
      >
        <div className="container m-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-7.5">
              <Link href="/">
                <img src={logo} alt="Logo" />
              </Link>
              <div className="w-[1.70px] h-7 bg-gray-200" />
              <a href="#">
                <img
                  ref={logoRef}
                  src="https://vorklye-frontend-nine.vercel.app/images/shopify-patner.png"
                  alt="Shopify Partner"
                />
              </a>
            </div>
            <ul className="flex items-center gap-10">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="nav-link justify-start text-white font-semibold leading-7"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonSm text={button.label} href={button.link} />
          </div>
        </div>
      </header>

      <div style={{ height: spacerHeight }} />
    </>
  );
};

export default Header;
