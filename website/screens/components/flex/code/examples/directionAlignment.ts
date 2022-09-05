import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" alignItems="center" gap="2rem">
        <DxcFlex alignSelf="flex-end" >
          <Placeholder height="large" width="small" />
          <Placeholder height="large" width="small" />
        </DxcFlex>
        <Placeholder height="large" width="large" />
        <Placeholder height="large" width="large" />
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
