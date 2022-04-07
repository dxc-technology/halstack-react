import { DxcStack, DxcBleed } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <div
      style={{
        background: "#f2eafa",
        padding: "2rem"
      }}
    >
        <DxcStack gutter="medium">
            <Placeholder></Placeholder>
            <DxcBleed top="xsmall" right="small" bottom="medium" left="large">
                <Placeholder></Placeholder>
            </DxcBleed>
            <Placeholder></Placeholder>
        </DxcStack>
    </div>
  );
}`;

const scope = { DxcStack, DxcBleed, Placeholder };

export default { code, scope };
