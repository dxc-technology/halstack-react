import styled from "@emotion/styled";
import slugify from "slugify";
import { DxcBleed, DxcHeading, DxcTooltip } from "@dxc-technology/halstack-react";
import { responsiveSizes } from "../common/variables";

const linkIcon = (
  <svg aria-hidden="true" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
    />
  </svg>
);

const HeadingLinkContainer = styled.div`
  display: flex;
  align-items: center;
  scroll-margin-top: 64px;

  @media (max-width: ${responsiveSizes.tablet}px) {
    word-break: break-word;
  }
  @media (max-width: 45rem) {
    scroll-margin-top: 116px;
  }
`;

const HeadingAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  border-radius: var(--border-radius-s);
  color: var(--color-fg-neutral-strong);
  opacity: 0;
  padding: var(--spacing-gap-s);
  text-decoration: none;

  svg {
    height: var(--height-xxs);
    width: 16px;
  }
  &:focus {
    opacity: 1;
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -4px;
  }
  &:hover {
    opacity: 1;
  }
`;

type HeadingLinkProps = {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  navSubtitle?: string;
};

const HeadingLink = ({ children, level, as, navSubtitle }: HeadingLinkProps) => {
  const elementId = slugify(navSubtitle ?? children, { lower: true });
  return (
    <HeadingLinkContainer id={elementId}>
      <DxcBleed left="var(--spacing-gap-xl)">
        <DxcTooltip label={`Go to '${children}'`}>
          <HeadingAnchor href={`#${elementId}`} aria-label={`Go to the section '${children}'`}>
            {linkIcon}
          </HeadingAnchor>
        </DxcTooltip>
      </DxcBleed>
      <DxcHeading text={children} level={level} as={as} />
    </HeadingLinkContainer>
  );
};

export default HeadingLink;
