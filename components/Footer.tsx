import {
  footerBottomRow,
  footerContactInfo,
  footerData,
  footerTopRow,
  type FooterLink,
  type FooterSection,
} from "@/data";
import { useFitText } from "@/utility";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

export type { FooterLink, FooterSection };
export { footerBottomRow, footerContactInfo, footerTopRow };

type Props = {};

const FooterSectionBlock: React.FC<{
  title: string;
  links: { label: string; link: string }[];
}> = ({ title, links }) => (
  <div className="footer-menu-item">
    <h6 className="text-white text-[1.125rem] font-bold leading-6 tracking-tight">
      {title}
    </h6>
    <ul className="mt-4 space-y-3">
      {links.map((item) => (
        <li key={item.label}>
          <a
            href={item.link}
            className="text-zinc-400 hover:text-white text-base font-medium leading-5 tracking-tight"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC<Props> = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const fontSize = useFitText(textRef);
  return (
    <footer className="bg-neutral-950 pt-30">
      <div className="container m-auto">
        <div className="flex gap-50">
          <div className="w-1/4">
            <img className="w-35 relative" src={footerData.logo} alt="Logo" />
            <p className="w-96 justify-start text-zinc-400 text-[18px] font-semibold leading-7 mt-7">
              {footerData.description}
            </p>
            <a
              href={footerData.deckLink}
              className="pl-6 pr-2 py-2 bg-[#EBFE5B] rounded-sm inline-flex justify-center items-center gap-8 overflow-hidden mt-10"
            >
              <span
                data-hover-text
                className="justify-start text-zinc-900 text-base font-bold leading-6"
              >
                {footerData.deckLabel}
              </span>
              <span className="bg-zinc-900 size-9 flex items-center justify-center">
                <ArrowDown />
              </span>
            </a>
            <div className="flex mt-13.5">
              {footerData.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="size-13 rounded-[48px] outline -outline-offset-1 outline-gray-200/20 inline-flex justify-center items-center"
                >
                  <img src={social.icon} alt={social.name} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-3/4">
            <div className="grid grid-cols-3 gap-8">
              {footerTopRow.map((section) => (
                <FooterSectionBlock
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
              <div />
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              {footerBottomRow.map((section) => (
                <FooterSectionBlock
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
              <div className="footer-menu-item">
                <h6 className="text-zinc-400 text-base font-bold leading-6">
                  {footerContactInfo.heading}
                </h6>
                <a
                  data-no-hover
                  href={`mailto:${footerContactInfo.email}`}
                  className="block mt-4 text-white text-base font-bold leading-5"
                >
                  {footerContactInfo.email}
                </a>

                <h6 className="text-zinc-400 text-base font-bold leading-6 mt-8">
                  {footerContactInfo.callLabel}
                </h6>
                <a
                  href={`tel:${footerContactInfo.phone.replace(/\s/g, "")}`}
                  className="flex gap-2 items-center mt-4 text-white text-base font-bold leading-5 "
                >
                  <img
                    src={footerData.whatsappIcon}
                    loading="lazy"
                    alt="WhatsApp logo"
                    className="size-6"
                  />
                  {footerContactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden mt-30">
        <p
          ref={textRef}
          className="logo-text font-black uppercase whitespace-nowrap leading-none -mb-50"
          style={{ fontSize: `${fontSize}px` }}
        >
          {footerData.logoText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
