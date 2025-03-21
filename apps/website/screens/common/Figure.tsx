import styled from "styled-components";
import { DxcFlex } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

type DocImageProps = {
  children: ReactNode;
  caption: string | ReactNode;
};
const Figure = ({ caption, children }: DocImageProps) => {
  return (
    <StyledFigure>
      <DxcFlex direction="column" gap="1rem">
        {children}
        <StyledFigcaption>{caption}</StyledFigcaption>
      </DxcFlex>
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 0.875rem;
`;

export default Figure;
