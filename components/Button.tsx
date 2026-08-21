import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
  href?: string;
  text?: string;
  /**
   * If true, renders a native <a> tag instead of Next.js <Link>.
   * Use this for external URLs, mailto:, tel:, or anchors (#id) where
   * client-side routing isn't needed / desired.
   * Auto-detected when not explicitly passed (see isExternalLink below).
   */
  external?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
  ariaLabel?: string;
  showIcon?: boolean;
};

/**
 * Decides whether a href should be treated as "external" (native <a>)
 * or an internal route (Next.js <Link>).
 * - Absolute URLs (http/https), mailto:, tel: -> external
 * - Everything else ("/about", "#section", "") -> internal Link
 */
const isExternalLink = (href: string) =>
  /^(https?:\/\/|mailto:|tel:)/i.test(href);

const Button: React.FC<Props> = ({
  text = "Button Title",
  href = "#",
  external,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const useNativeAnchor = external ?? isExternalLink(href);
  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const content = (
    <>
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {showIcon && (
        <span className="btn-icon">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      )}
    </>
  );

  const combinedClassName = `btn-primary group${
    disabled ? " pointer-events-none opacity-50" : ""
  }${className ? ` ${className}` : ""}`;

  if (disabled) {
    return (
      <span
        className={combinedClassName}
        aria-disabled="true"
        aria-label={ariaLabel ?? text}
      >
        {content}
      </span>
    );
  }

  if (useNativeAnchor) {
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </a>
    );
  }

  return (
    <Fragment>
      <Link
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </Link>
    </Fragment>
  );
};

export const ButtonSm: React.FC<Props> = ({
  text = "Button Title",
  href = "#",
  external,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const useNativeAnchor = external ?? isExternalLink(href);
  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const content = (
    <>
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {showIcon && (
        <span className="btn-icon w-10 h-10">
          <ArrowUpRight className="h-5 w-5" />
          <ArrowUpRight className="h-5 w-5" />
        </span>
      )}
    </>
  );

  const combinedClassName = `btn-primary py-2 pl-5 pr-2 group text-[18px] leading-6 font-semibold${
    disabled ? " pointer-events-none opacity-50" : ""
  }${className ? ` ${className}` : ""}`;

  if (disabled) {
    return (
      <span
        className={combinedClassName}
        aria-disabled="true"
        aria-label={ariaLabel ?? text}
      >
        {content}
      </span>
    );
  }

  if (useNativeAnchor) {
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </a>
    );
  }

  return (
    <Fragment>
      <Link
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </Link>
    </Fragment>
  );
};

export default Button;

export const ButtonUnderlineBig: React.FC<Props> = ({
  text = "More about us",
  href = "#",
  external,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const useNativeAnchor = external ?? isExternalLink(href);
  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const content = (
    <>
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {showIcon && (
        <span className="btn-icon">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      )}
    </>
  );

  const combinedClassName = `btn-underline mt-17.5 text-2xl font-semibold pb-2.5 group${
    disabled ? " pointer-events-none opacity-50" : ""
  }${className ? ` ${className}` : ""}`;

  if (useNativeAnchor || disabled) {
    return disabled ? (
      <span
        className={combinedClassName}
        aria-disabled="true"
        aria-label={ariaLabel ?? text}
      >
        {content}
      </span>
    ) : (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={computedRel}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel ?? text}
    >
      {content}
    </Link>
  );
};

export const ButtonUnderline: React.FC<Props> = ({
  text = "More about us",
  href = "#",
  external,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const useNativeAnchor = external ?? isExternalLink(href);
  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const content = (
    <>
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {showIcon && (
        <span className="btn-icon">
          <ArrowUpRight size={20} />
          <ArrowUpRight size={20} />
        </span>
      )}
    </>
  );

  const combinedClassName = `btn-underline mt-12 w-fit group${
    disabled ? " pointer-events-none opacity-50" : ""
  }${className ? ` ${className}` : ""}`;

  if (disabled) {
    return (
      <span
        className={combinedClassName}
        aria-disabled="true"
        aria-label={ariaLabel ?? text}
      >
        {content}
      </span>
    );
  }

  if (useNativeAnchor) {
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={computedRel}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel ?? text}
    >
      {content}
    </Link>
  );
};

export const ButtonNormal: React.FC<Props> = ({
  text = "More about us",
  href = "#",
  external,
  target,
  rel,
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
  showIcon = true,
}) => {
  const useNativeAnchor = external ?? isExternalLink(href);
  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const content = (
    <>
      <span className="btn-text">
        <span>{text}</span>
        <span>{text}</span>
      </span>
      {showIcon && (
        <span className="btn-icon">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      )}
    </>
  );

  const combinedClassName = `group btn-normal${
    disabled ? " pointer-events-none opacity-50" : ""
  }${className ? ` ${className}` : ""}`;

  if (disabled) {
    return (
      <span
        className={combinedClassName}
        aria-disabled="true"
        aria-label={ariaLabel ?? text}
      >
        {content}
      </span>
    );
  }

  if (useNativeAnchor) {
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel ?? text}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={computedRel}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel ?? text}
    >
      {content}
    </Link>
  );
};
