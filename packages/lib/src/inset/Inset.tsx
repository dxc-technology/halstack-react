import InsetPropsType from "./types";
import DxcContainer from "../container/Container";

export default function DxcInset({ bottom, children, horizontal, left, right, space, top, vertical }: InsetPropsType) {
  return (
    <DxcContainer
      padding={{
        bottom: bottom ?? vertical ?? space ?? "0rem",
        left: left ?? horizontal ?? space ?? "0rem",
        right: right ?? horizontal ?? space ?? "0rem",
        top: top ?? vertical ?? space ?? "0rem",
      }}
    >
      {children}
    </DxcContainer>
  );
}
