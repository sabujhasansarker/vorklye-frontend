"use client";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import React, { Fragment } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header, { MobileMenu } from "./Header";
import LinkHoverEffect from "./LinkHoverEffect";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

type Props = {
  children: React.ReactNode;
};

const VorklyeLayout: React.FC<Props> = ({ children }) => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");
  return (
    <Fragment>
      <Header />
      <MobileMenu />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
      <CustomCursor />
      <LinkHoverEffect />
      <div className="fixed bottom-0 left-0 right-0 z-999 h-50 flex-none pointer-events-none visible backdrop-blur-md [mask:linear-gradient(180deg,rgba(0,0,0,0)_0%,black_100%)]"></div>
    </Fragment>
  );
};

export default VorklyeLayout;
