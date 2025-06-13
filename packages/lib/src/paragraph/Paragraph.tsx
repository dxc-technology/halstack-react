import { ReactNode } from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  display: "block";
  font-family: var(--typography-font-family);
  font-size: var(--typography-body-m);
  font-weight: var(--typography-body-regular);
  letter-spacing: var(--spacing-gap-none);
  line-height: var(--height-s);
  text-align: "left";
  color: var(--color-fg-neutral-dark);
  text-decoration: none;
  text-overflow: unset;
  margin: var(--spacing-padding-none);
`;

export default function DxcParagraph({ children }: { children: ReactNode }) {
  return <Paragraph>{children}</Paragraph>;
}
