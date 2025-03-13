import styled from "styled-components";
import { SubMenuProps } from "./types";

const SubMenuContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--spacing-gap-xs);
  list-style: none;
`;

export default function SubMenu({ children, id }: SubMenuProps) {
  return (
    <SubMenuContainer id={id} role="menu">
      {children}
    </SubMenuContainer>
  );
}
