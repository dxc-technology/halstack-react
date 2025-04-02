import BleedPropsType from "./types";
import DxcContainer from "../container/Container";

export default function DxcBleed({ space, horizontal, vertical, top, right, bottom, left, children }: BleedPropsType) {
  return (
    <DxcContainer
      margin={
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
