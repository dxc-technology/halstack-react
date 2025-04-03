import BleedPropsType from "./types";
import DxcContainer from "../container/Container";

const getNegativeValue = (value?: string) => (value ? `-${value}` : null);

export default function DxcBleed({ space, horizontal, vertical, top, right, bottom, left, children }: BleedPropsType) {
  return (
    <DxcContainer
      margin={{
        top: getNegativeValue(top) ?? getNegativeValue(vertical) ?? getNegativeValue(space) ?? "0rem",
        right: getNegativeValue(right) ?? getNegativeValue(horizontal) ?? getNegativeValue(space) ?? "0rem",
        bottom: getNegativeValue(bottom) ?? getNegativeValue(vertical) ?? getNegativeValue(space) ?? "0rem",
        left: getNegativeValue(left) ?? getNegativeValue(horizontal) ?? getNegativeValue(space) ?? "0rem",
      }}
    >
      {children}
    </DxcContainer>
  );
}
