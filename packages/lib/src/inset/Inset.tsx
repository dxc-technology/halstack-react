import InsetPropsType from "./types";
import DxcContainer from "../container/Container";

export default function DxcInset({ bottom, children, horizontal, left, right, space, top, vertical }: InsetPropsType) {
  return (
    <DxcContainer
      padding={
        space || {
          bottom: (bottom || vertical) ?? "0rem",
          left: (left || horizontal) ?? "0rem",
          right: (right || horizontal) ?? "0rem",
          top: (top || vertical) ?? "0rem",
        }
      }
    >
      {children}
    </DxcContainer>
  );
}
