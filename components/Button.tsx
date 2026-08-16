import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
  href?: string;
  text?: string;
};

const Button: React.FC<Props> = ({ text = "Button Title", href = "#" }) => {
  return (
    <Fragment>
      <Link href={href} className="btn-primary group">
        <span className="btn-text">
          <span>{text}</span>
          <span>{text}</span>
        </span>
        <span className="btn-icon">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      </Link>
    </Fragment>
  );
};

export const ButtonSm: React.FC<Props> = ({
  text = "Button Title",
  href = "#",
}) => {
  return (
    <Fragment>
      <Link
        href={href}
        className="btn-primary py-2 pl-5 pr-2 group text-[18px] leading-6 font-semibold"
      >
        <span className="btn-text">
          <span>{text}</span>
          <span>{text}</span>
        </span>
        <span className="btn-icon w-10 h-10">
          <ArrowUpRight className="h-5 w-5" />
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Link>
    </Fragment>
  );
};

export default Button;

export const ButtonUnderlineBig: React.FC<Props> = ({
  text = "More about us",
  href = "#",
}) => {
  return (
    <a
      href={href}
      className="btn-underline mt-17.5 text-2xl font-semibold pb-2.5 group"
    >
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      <span className="btn-icon">
        <ArrowUpRight />
        <ArrowUpRight />
      </span>
    </a>
  );
};

export const ButtonUnderline: React.FC<Props> = ({
  text = "More about us",
  href = "#",
}) => {
  return (
    <a href={href} className="btn-underline mt-12 w-fit group">
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      <span className="btn-icon">
        <ArrowUpRight />
        <ArrowUpRight />
      </span>
    </a>
  );
};

export const ButtonNormal: React.FC<Props> = ({
  text = "More about us",
  href = "#",
}) => {
  return (
    <a href={href} className="group btn-normal">
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      <span className="btn-icon">
        <ArrowUpRight />
        <ArrowUpRight />
      </span>
    </a>
  );
};
