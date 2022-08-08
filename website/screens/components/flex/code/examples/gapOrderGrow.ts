import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem">
        <DxcFlex order={3} grow={1}>
          <Placeholder height="large">3</Placeholder>
        </DxcFlex>
        <DxcFlex order={2} grow={2}>
          <Placeholder height="large">2</Placeholder>
        </DxcFlex>
        <DxcFlex order={1} grow={1}>
          <Placeholder height="large">1</Placeholder>
        </DxcFlex>
        <DxcFlex order={5} grow={4}>
          <Placeholder height="large">5</Placeholder>
        </DxcFlex>
        <DxcFlex order={4} grow={1}>
          <Placeholder height="large">4</Placeholder>
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
