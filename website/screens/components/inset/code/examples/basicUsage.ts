import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <Placeholder height="large" />
        <DxcInset space="1rem">
          <Placeholder height="large" />
        </DxcInset>
        <Placeholder height="large" />
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
