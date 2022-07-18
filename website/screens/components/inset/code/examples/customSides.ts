import { DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset top="0.25rem" right="0.5rem" bottom="1rem" left="1.5rem">
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
