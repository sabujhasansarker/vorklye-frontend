import { ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {};

const About: React.FC<Props> = () => {
  const aboutText: string =
    "<span> Welcome to Vorklye — We're a </span> Shopify design and development <span>studio, dedicated to bringing your brand's essence to life online. From custom themes to seamless user experiences, every project is a bespoke journey — we collaborate closely with you to build something that truly stands out. </span>";
  return (
    aboutText && (
      <div className="border-b border-neutral-900 py-42.5 text-center">
        <div className="container m-auto">
          <p
            className="text-center section-title"
            dangerouslySetInnerHTML={{ __html: aboutText }}
          ></p>
          <a
            href="#"
            className="btn-underline mt-17.5 text-2xl font-semibold pb-2.5"
          >
            <span>More about us</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    )
  );
};

export default About;
