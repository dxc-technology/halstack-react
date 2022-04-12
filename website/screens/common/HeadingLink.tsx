import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import { DxcHeading } from "@dxc-technology/halstack-react";

type HeadingLinkProps = {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
};

function HeadingLink({ children, level, as }: HeadingLinkProps) {
  const elementId = slugify(children, { lower: true });
  return (
    <HeadingLinkContainer id={elementId}>
      <HeadingAnchor href={`#${elementId}`}>{linkIcon}</HeadingAnchor>
      <DxcHeading
        weight="bold"
        text={children}
        level={level}
        as={as}
      ></DxcHeading>
    </HeadingLinkContainer>
  );
}

const linkIcon = (
  <svg
    aria-hidden="true"
    role="img"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
    ></path>
  </svg>
);

const HeadingLinkContainer = styled.div`
  display: flex;
  align-items: center;
  scroll-margin-top: 64px;
  &:hover svg {
    opacity: 0.5;
  }
`;

const HeadingAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin-left: -32px;
  & svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }
  &:focus {
    outline-color: #0095ff;
    outline-offset: -0.25rem;
    svg {
      opacity: 0.5;
    }
  }
`;
export default HeadingLink;
