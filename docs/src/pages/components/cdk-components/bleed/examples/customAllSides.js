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
            <DxcBleed top="0.5rem" right="1rem" bottom="1.5rem" left="2rem">
                <Placeholder></Placeholder>
            </DxcBleed>
            <Placeholder></Placeholder>
        </DxcStack>
    </div>
  );
}`;

const scope = { DxcStack, DxcBleed, Placeholder };

export default { code, scope };
