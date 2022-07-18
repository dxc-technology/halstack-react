import { DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <Placeholder height="large" />
      <Placeholder height="large" />
      <Placeholder height="large" />
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcStack,
  Placeholder,
};

export default { code, scope };
