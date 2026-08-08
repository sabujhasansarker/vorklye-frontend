import React from "react";
import { ButtonSm } from "./Button";

type Props = {};

const Header: React.FC<Props> = () => {
  const menus = [
    {
      id: 1,
      label: "work",
      link: "#",
    },
    {
      id: 2,
      label: "Services",
      link: "#",
    },
    {
      id: 3,
      label: "Industries",
      link: "#",
    },
    {
      id: 4,
      label: "About",
      link: "#",
    },
    {
      id: 5,
      label: "Insights",
      link: "#",
    },
  ];
  return (
    <header className="relative z-99 py-10">
      <div className="container m-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-7.5">
            <a href="#">
              <img src="/images/logo.png" alt="" />
            </a>
            <div className="w-[1.70px] h-7 bg-gray-200" />
            <a href="#">
              <img src="/images/shopify-patner.png" alt="" />
            </a>
          </div>
          <ul className="flex items-center gap-10">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="nav-link justify-start text-white font-semibold leading-7 capitalize"
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
  );
};

export default Header;
