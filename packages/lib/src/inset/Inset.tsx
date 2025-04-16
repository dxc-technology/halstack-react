import InsetPropsType from "./types";
import DxcContainer from "../container/Container";

export default function DxcInset({ bottom, children, horizontal, left, right, space, top, vertical }: InsetPropsType) {
  return (
    <DxcContainer
      padding={{
        bottom: bottom ?? vertical ?? space ?? "var(--spacing-padding-none)",
        left: left ?? horizontal ?? space ?? "var(--spacing-padding-none)",
        right: right ?? horizontal ?? space ?? "var(--spacing-padding-none)",
        top: top ?? vertical ?? space ?? "var(--spacing-padding-none)",
      }}
    >
      {children}
    </DxcContainer>
  );
}
