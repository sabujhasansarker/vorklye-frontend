"use client";

import { useHeaderFixedOnScrollUp } from "@/utility";
import React, { useRef } from "react";
import { ButtonSm } from "./Button";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const { spacerHeight, scrolled } = useHeaderFixedOnScrollUp(
    headerRef,
    logoRef,
  );

  const menus = [
    { id: 1, label: "Work", link: "#" },
    { id: 2, label: "Services", link: "#" },
    { id: 3, label: "Industries", link: "#" },
    { id: 4, label: "About", link: "#" },
    { id: 5, label: "Insights", link: "#" },
  ];

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
              <a href="#">
                <img src="/images/logo.png" alt="" />
              </a>
              <div className="w-[1.70px] h-7 bg-gray-200" />
              <a href="#">
                <img ref={logoRef} src="/images/shopify-patner.png" alt="" />
              </a>
            </div>
            <ul className="flex items-center gap-10">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="nav-link justify-start text-white font-semibold leading-7"
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonSm text="Get in touch" />
          </div>
        </div>
      </header>

      <div style={{ height: spacerHeight }} />
    </>
  );
};

export default Header;
