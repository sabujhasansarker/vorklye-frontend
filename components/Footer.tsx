import { useFitText } from "@/utility";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

type Props = {};

export type FooterLink = {
  label: string;
  link: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerTopRow: FooterSection[] = [
  {
    title: "Design Services",
    links: [
      { label: "UI UX Design", link: "#" },
      { label: "Web Design", link: "#" },
      { label: "Mobile App Design", link: "#" },
      { label: "SaaS Design", link: "#" },
      { label: "Landing Page Design", link: "#" },
      { label: "Brand Identity Design", link: "#" },
    ],
  },
  {
    title: "Strategy & Research",
    links: [
      { label: "UX Research", link: "#" },
      { label: "UX Audit", link: "#" },
      { label: "UX Consultancy", link: "#" },
      { label: "Usability & User Testing", link: "#" },
      { label: "CRO Service", link: "#" },
    ],
  },
  {
    title: "Development Services",
    links: [
      { label: "MVP Development", link: "#" },
      { label: "Webflow Development", link: "#" },
      { label: "AI MVP Development", link: "#" },
      { label: "SaaS MVP Development", link: "#" },
      { label: "Web App MVP Development", link: "#" },
    ],
  },
];

export const footerBottomRow: FooterSection[] = [
  {
    title: "Agency",
    links: [
      { label: "About Us", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Service", link: "#" },
      { label: "Blog", link: "#" },
      { label: "FAQs", link: "#" },
      { label: "Case Studies", link: "#" },
      { label: "Locations", link: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Clutch", link: "#" },
      { label: "Behance", link: "#" },
      { label: "Dribbble", link: "#" },
      { label: "Awwwards", link: "#" },
    ],
  },
];

export const footerContactInfo = {
  heading: "Drop us a line",
  email: "hello@wavespace.agency",
  callLabel: "Call us",
  phone: "+1 628-265-7462",
};

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
            <img className="w-35 relative" src="/images/logo.png" />
            <p className="w-96 justify-start text-zinc-400 text-[18px] font-semibold leading-7 mt-7">
              Wavespace is a global UI/UX design agency that boosts brand value
              with user-friendly, effective designs for web, mobile, and SaaS
              platforms.
            </p>
            <a
              href="#"
              className="pl-6 pr-2 py-2 bg-[#EBFE5B] rounded-sm inline-flex justify-center items-center gap-8 overflow-hidden mt-10"
            >
              <span
                data-hover-text
                className="justify-start text-zinc-900 text-base font-bold leading-6"
              >
                Company Deck
              </span>
              <span className="bg-zinc-900 size-9 flex items-center justify-center">
                <ArrowDown />
              </span>
            </a>
            <div className="flex mt-13.5">
              <a
                href="#"
                className="size-13 rounded-[48px] outline -outline-offset-1 outline-gray-200/20 inline-flex justify-center items-center"
              >
                <img
                  src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6966148bb93b4207a29b9dc7_wavespace-facebook.png"
                  alt=""
                  className="size-5"
                />
              </a>
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
                    src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/69c2734b70719aeb95273a22_WhatsApp.avif"
                    loading="lazy"
                    alt="WhatsApp logo featuring a white phone icon inside a green speech bubble."
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
          Vorklye
        </p>
      </div>
    </footer>
  );
};

export default Footer;
