import { DxcStack, DxcInset } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="1.5rem">
      <DxcStack gutter="0.75rem" divider>
        <Placeholder height="large" />
        <Placeholder height="medium" />
        <Placeholder height="small" />
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
