import { homePage } from "@/data";
import React from "react";
import { ButtonUnderlineBig } from "./Button";

const About: React.FC = () => {
  const { about } = homePage;
  const { text, button } = about;
  return (
    about && (
      <div className="border-b border-neutral-900 py-16 sm:py-28 lg:py-30 text-center bg-background">
        <div className="container m-auto px-5 sm:px-8 lg:px-0">
          <p
            className="text-center section-title text-2xl sm:text-4xl md:text-5xl leading-normal"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <ButtonUnderlineBig text={button.text} href={button.link} />
        </div>
      </div>
    )
  );
};

export default About;
