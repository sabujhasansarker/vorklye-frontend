"use client";

import { footer } from "@/data";
import { ArrowDown } from "lucide-react";
import React from "react";

type FooterLink = {
  label: string;
  link: string;
};

type FooterSectionBlockProps = {
  title: string;
  links: string[] | FooterLink[];
};

const FooterSectionBlock: React.FC<FooterSectionBlockProps> = ({
  title,
  links,
}) => {
  return (
    <div className="min-w-0">
      <h6 className="text-white text-base sm:text-lg font-bold leading-6 tracking-tight">
        {title}
      </h6>

      <ul className="mt-4 space-y-2.5 sm:space-y-3">
        {links.map((item, index) => {
          const isObject = typeof item === "object";

          const label = isObject ? item.label : item;
          const link = isObject ? item.link : "#";

          return (
            <li key={index} className="min-w-0">
              <a
                href={link}
                className="inline-block max-w-full text-zinc-400 hover:text-white text-sm sm:text-base font-medium leading-5 tracking-tight transition-colors"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const { logo, info, button, social, menus, contactInfo } = footer;

  return (
    <footer className="relative w-full max-w-full overflow-hidden bg-neutral-950 pt-14 sm:pt-20 md:pt-24 lg:pt-30 pb-20 lg:pb-0">
      {/* MAIN FOOTER */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-14 sm:gap-18 lg:gap-20 xl:gap-50">
          {/* ================= LEFT ================= */}
          <div className="w-full lg:w-[28%] shrink-0">
            {/* LOGO */}
            {logo && (
              <img
                src={logo}
                alt="Vorklye Logo"
                className="block w-28 sm:w-32 lg:w-40 max-w-full"
              />
            )}

            {/* DESCRIPTION */}
            {info && (
              <p className="w-full max-w-md mt-5 sm:mt-7 text-zinc-400 text-sm sm:text-base lg:text-[18px] font-semibold leading-6 sm:leading-7">
                {info}
              </p>
            )}

            {/* BUTTON */}
            {button && (
              <a
                href={button.link}
                className="
                  mt-7 sm:mt-9
                  pl-5 sm:pl-6
                  pr-2
                  py-2
                  bg-[#C9FF00]
                  rounded-sm
                  inline-flex
                  items-center
                  justify-between
                  gap-5 sm:gap-8
                  max-w-full
                  overflow-hidden
                "
              >
                <span
                  data-hover-text
                  className="text-zinc-900 text-sm sm:text-base font-bold leading-6 whitespace-nowrap"
                >
                  {button.label}
                </span>

                <span className="bg-zinc-900 size-8 sm:size-9 flex items-center justify-center shrink-0">
                  <ArrowDown className="text-white size-4 sm:size-5" />
                </span>
              </a>
            )}

            {/* SOCIAL */}
            {social?.length > 0 && (
              <div className="flex flex-wrap mt-8 sm:mt-10 lg:mt-13.5 gap-2.5 sm:gap-3">
                {social.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="
                      size-10
                      sm:size-11
                      lg:size-12
                      shrink-0
                      rounded-full
                      outline
                      -outline-offset-1
                      outline-gray-200/20
                      inline-flex
                      items-center
                      justify-center
                      hover:bg-white/5
                      hover:outline-gray-200/40
                      transition-all
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="size-4 sm:size-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full lg:flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-5 sm:gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-12 lg:gap-y-14">
              {/* MENU ITEMS */}
              {menus.map((menu) => (
                <FooterSectionBlock
                  key={menu.title}
                  title={menu.title}
                  links={menu.menus}
                />
              ))}

              {/* ================= CONTACT ================= */}
              <div className="min-w-0 col-span-2 sm:col-span-1">
                <h6 className="text-zinc-400 text-sm sm:text-base font-bold leading-6">
                  {contactInfo.heading}
                </h6>

                {/* EMAIL */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block mt-3 sm:mt-4 text-white text-sm sm:text-base font-bold leading-5 wrap-break-word hover:text-[#EBFE5B] transition-colors
                  "
                >
                  {contactInfo.email}
                </a>

                {/* CALL */}
                <h6 className="text-zinc-400 text-sm sm:text-base font-bold leading-6 mt-6 sm:mt-8">
                  {contactInfo.callLabel}
                </h6>

                <a
                  href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  className="
                    flex
                    items-center
                    gap-2
                    mt-3 sm:mt-4
                    text-white
                    text-sm sm:text-base
                    font-bold
                    leading-5
                    hover:text-[#EBFE5B]
                    transition-colors
                  "
                >
                  <img
                    src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/69c2734b70719aeb95273a22_WhatsApp.avif"
                    alt="WhatsApp"
                    className="size-5 sm:size-6 shrink-0 object-contain"
                  />

                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BIG FOOTER TEXT
      ===================================================== */}
      <div className="relative w-full max-w-full overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-30">
        <div className="w-full max-w-full overflow-hidden">
          <img src="/images/footer-logo.png" className="w-full" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
