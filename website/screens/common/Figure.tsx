import styled from "styled-components";
import { DxcStack } from "@dxc-technology/halstack-react";

type DocImageProps = {
  children: React.ReactNode;
  caption: string | React.ReactNode;
};
const Figure = ({ caption, children }: DocImageProps) => {
  return (
    <StyledFigure>
      <DxcStack gutter="small">
        {children}
        <StyledFigcaption>{caption}</StyledFigcaption>
      </DxcStack>
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
