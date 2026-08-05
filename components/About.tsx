import { ArrowDownRight } from "lucide-react";
import React from "react";

type Props = {};

const About: React.FC<Props> = () => {
  return (
    <div className="border-b border-neutral-900 py-42.5 text-center">
      <div className="container m-auto">
        <p className="max-w-276 m-auto text-center justify-start text-gray-200 text-3xl font-medium leading-12.5">
          Welcome to Vorklye — We&apos;re a Shopify design and development
          studio, dedicated to bringing your brand&apos;s essence to life
          online. From custom themes to seamless user experiences, every project
          is a bespoke journey — we collaborate closely with you to build
          something that truly stands out.
        </p>

        <a href="#" className="btn-underline mt-17.5 ">
          <span>More about us</span>
          <ArrowDownRight />
        </a>
      </div>
    </div>
  );
};

export default About;
