import { aboutText } from "@/data";
import React from "react";
import { ButtonUnderlineBig } from "./Button";

type Props = {};

const About: React.FC<Props> = () => {
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
