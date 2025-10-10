import styled from "@emotion/styled";
import { SubMenuProps } from "./types";

const SubMenuContainer = styled.ul<{ outline?: boolean }>`
  margin: 0;
  padding: 0;
  display: grid;
  list-style: none;
  /* 
  ${({ outline }) =>
    outline &&
    `
      margin-left: var(--spacing-padding-m);
      border-left: var(--border-width-s) solid var(--border-color-neutral-lighter);
    `} */
`;

export default function SubMenu({ children, id, outline }: SubMenuProps) {
  return (
    <SubMenuContainer id={id} role="menu" outline={outline}>
      {children}
    </SubMenuContainer>
  );
}
