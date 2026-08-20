"use client";

import { footer } from "@/data";
import { useFitText } from "@/utility";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

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
    <div className="footer-menu-item">
      <h6 className="text-white text-[1.125rem] font-bold leading-6 tracking-tight">
        {title}
      </h6>

      <ul className="mt-4 space-y-3">
        {links.map((item, index) => {
          const isObject = typeof item === "object";

          const label = isObject ? item.label : item;
          const link = isObject ? item.link : "#";

          return (
            <li key={index}>
              <a
                href={link}
                className="text-zinc-400 hover:text-white text-base font-medium leading-5 tracking-tight transition-colors"
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
  const textRef = useRef<HTMLParagraphElement>(null);

  const fontSize = useFitText(textRef);

  const { logo, info, button, social, menus, contactInfo } = footer;

  return (
    <footer className="bg-neutral-950 pt-30">
      <div className="container m-auto">
        <div className="flex gap-50">
          {/* LEFT SIDE */}
          <div className="w-1/4">
            {logo && (
              <img className="w-35 relative" src={logo} alt="Vorklye Logo" />
            )}

            {info && (
              <p className="w-96 justify-start text-zinc-400 text-[18px] font-semibold leading-7 mt-7">
                {info}
              </p>
            )}

            {button && (
              <a
                href={button.link}
                className="pl-6 pr-2 py-2 bg-[#EBFE5B] rounded-sm inline-flex justify-center items-center gap-8 overflow-hidden mt-10"
              >
                <span
                  data-hover-text
                  className="justify-start text-zinc-900 text-base font-bold leading-6"
                >
                  {button.label}
                </span>

                <span className="bg-zinc-900 size-9 flex items-center justify-center">
                  <ArrowDown className="text-white" />
                </span>
              </a>
            )}

            {/* SOCIAL */}
            {social?.length > 0 && (
              <div className="flex mt-13.5 gap-3">
                {social.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="size-13 rounded-[48px] outline -outline-offset-1 outline-gray-200/20 inline-flex justify-center items-center"
                  >
                    <img src={item.icon} alt={item.name} className="size-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-3/4">
            <div className="grid grid-cols-3 gap-8 gap-y-15">
              {menus.map((menu) => (
                <FooterSectionBlock
                  key={menu.title}
                  title={menu.title}
                  links={menu.menus}
                />
              ))}

              {/* CONTACT INFO */}
              <div className="footer-menu-item">
                <h6 className="text-zinc-400 text-base font-bold leading-6">
                  {contactInfo.heading}
                </h6>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block mt-4 text-white text-base font-bold leading-5 hover:text-[#EBFE5B] transition-colors"
                >
                  {contactInfo.email}
                </a>

                <h6 className="text-zinc-400 text-base font-bold leading-6 mt-8">
                  {contactInfo.callLabel}
                </h6>

                <div className="flex gap-2 items-center mt-4">
                  <img
                    className="size-6"
                    src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/69c2734b70719aeb95273a22_WhatsApp.avif"
                    alt=""
                  />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-white text-base font-bold leading-5 hover:text-[#EBFE5B] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BIG FOOTER TEXT */}
      <div className="flex-1 overflow-hidden mt-30">
        <p
          ref={textRef}
          className="logo-text font-black uppercase whitespace-nowrap leading-none -mb-50"
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          Vorklye
        </p>
      </div>
    </footer>
  );
};

export default Footer;
