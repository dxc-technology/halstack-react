import { DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <DxcStack>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
    </DxcStack>
  );
}`;

const scope = {
  DxcStack,
  Placeholder,
};

export default { code, scope };
