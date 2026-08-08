import React from "react";
import { ButtonUnderlineBig } from "./Button";

type Props = {};

const About: React.FC<Props> = () => {
  const aboutText: string =
    "<span>Welcome to Vorklye — We're a</span> Shopify design and development <span>studio, dedicated to bringing your brand's essence to life online. From custom themes to seamless user experiences, every project is a bespoke journey — we collaborate closely with you to build something that truly stands out.</span>";
  return (
    aboutText && (
      <div className="border-b border-neutral-900 py-42.5 text-center bg-background">
        <div className="container m-auto">
          <p
            className="text-center section-title"
            dangerouslySetInnerHTML={{ __html: aboutText }}
          ></p>
          <ButtonUnderlineBig />
        </div>
      </div>
    )
  );
};

export default About;
