"use client";

import { headerData, headerMenus } from "@/data";
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

  const menus = headerMenus;

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
                <img src={headerData.logo} alt="Logo" />
              </Link>
              <div className="w-[1.70px] h-7 bg-gray-200" />
              <a href={headerData.shopifyPartnerLink}>
                <img
                  ref={logoRef}
                  src={headerData.shopifyPartnerLogo}
                  alt="Shopify Partner"
                />
              </a>
            </div>
            <ul className="flex items-center gap-10">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    className="nav-link justify-start text-white font-semibold leading-7"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonSm
              text={headerData.ctaButton.label}
              href={headerData.ctaButton.link}
            />
          </div>
        </div>
      </header>

      <div style={{ height: spacerHeight }} />
    </>
  );
};

export default Header;
