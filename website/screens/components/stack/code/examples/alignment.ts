import { DxcStack, DxcInset } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="1.5rem">
      <DxcStack gutter="0.75rem" alignX="center">
        <Placeholder height="large" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="small" width="large" />
        <Placeholder height="large" width="medium" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcStack,
  DxcInset,
  Placeholder,
};

export default { code, scope };
