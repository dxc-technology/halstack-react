import styled from "styled-components";
import { DxcFlex } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: var(--typography-label-m);
`;

const Figure = ({ caption, children }: { caption: string | ReactNode; children: ReactNode }) => (
  <StyledFigure>
    <DxcFlex direction="column" gap="1rem">
      {children}
      <StyledFigcaption>{caption}</StyledFigcaption>
    </DxcFlex>
  </StyledFigure>
);

export default Figure;
