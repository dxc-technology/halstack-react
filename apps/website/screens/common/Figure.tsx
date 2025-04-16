import styled from "styled-components";
import { DxcFlex } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

const StyledFigure = styled.figure`
  margin: 0;
  padding: var(--spacing-padding-none);
`;

const StyledFigcaption = styled.figcaption`
  font-size: var(--typography-label-m);
  color: var(--color-fg-neutral-dark);
`;

const Figure = ({ caption, children }: { caption: string | ReactNode; children: ReactNode }) => (
  <StyledFigure>
    <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
      {children}
      <StyledFigcaption>{caption}</StyledFigcaption>
    </DxcFlex>
  </StyledFigure>
);

export default Figure;
