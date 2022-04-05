import { DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <DxcStack align="end">
        <Placeholder paddingLeft="30"></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingRight="55"></Placeholder>
    </DxcStack>
  );
}`;

const scope = {
  DxcStack,
  Placeholder,
};

export default { code, scope };
