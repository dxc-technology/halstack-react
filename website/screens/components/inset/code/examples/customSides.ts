import { DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="large">
        <Placeholder height="large" />
        <DxcInset top="0.25rem" right="0.5rem" bottom="1rem" left="1.5rem">
          <Placeholder height="large" />
        </DxcInset>
        <Placeholder height="large" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcStack,
  Placeholder,
};

export default { code, scope };
