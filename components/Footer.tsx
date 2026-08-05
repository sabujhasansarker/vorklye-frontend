import { ArrowDown } from "lucide-react";
import React from "react";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-neutral-950 py-30">
      <div className="container m-auto">
        <div className="flex gap-50">
          <div className="w-1/4">
            <img
              className="w-44 h-11 relative"
              src="https://placehold.co/184x42"
            />
            <p className="w-96 justify-start text-zinc-400 text-base font-medium leading-6 mt-5">
              Wavespace is a global UI/UX design agency that boosts brand value
              with user-friendly, effective designs for web, mobile, and SaaS
              platforms.
            </p>
            <a
              href="#"
              className="pl-6 pr-2 py-2 bg-yellow-300 rounded-sm inline-flex justify-center items-center gap-8 overflow-hidden mt-10"
            >
              <span className="justify-start text-zinc-900 text-base font-bold leading-6">
                Company Deck
              </span>
              <span className="bg-zinc-900 size-9 flex items-center justify-center">
                <ArrowDown />
              </span>
            </a>
            <div className="flex mt-13.5">
              <a
                href="#"
                className="size-12 rounded-[48px] outline -outline-offset-1 outline-gray-200/20 inline-flex justify-center items-center"
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
            <div className="flex">
              <div className="footer-menu-item">
                <h6 className="text-white text-lg font-bold leading-6 tracking-tight">
                  Design Services
                </h6>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 text-base font-medium leading-5 tracking-tight"
                    >
                      UI UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-zinc-400 text-base font-medium leading-5 tracking-tight"
                    >
                      Web Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
