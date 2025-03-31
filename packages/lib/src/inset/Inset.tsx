import styled from "styled-components";
import InsetPropsType from "./types";

const retrieveSpacingValue = (spacingName?: string) => spacingName ?? "0rem";

const Inset = styled.div<InsetPropsType>`
  ${({ space, horizontal, vertical, top, right, bottom, left }) => `
  padding: ${retrieveSpacingValue(top || vertical || space)} ${retrieveSpacingValue(right || horizontal || space)}
    ${retrieveSpacingValue(bottom || vertical || space)} ${retrieveSpacingValue(left || horizontal || space)};
`}
`;

export default function DxcInset({ space, horizontal, vertical, top, right, bottom, left, children }: InsetPropsType) {
  return (
    <Inset
      space={space}
      horizontal={horizontal}
      vertical={vertical}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </Inset>
  );
}
