import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-s)">
        <DxcFlex order={3} grow={1}>
          <Placeholder width="100%">3</Placeholder>
        </DxcFlex>
        <DxcFlex order={2} grow={2}>
          <Placeholder width="100%">2</Placeholder>
        </DxcFlex>
        <DxcFlex order={1} grow={1}>
          <Placeholder width="100%">1</Placeholder>
        </DxcFlex>
        <DxcFlex order={5} grow={4}>
          <Placeholder width="100%">5</Placeholder>
        </DxcFlex>
        <DxcFlex order={4} grow={1}>
          <Placeholder width="100%">4</Placeholder>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcFlex,
  Placeholder,
};

export default { code, scope };
