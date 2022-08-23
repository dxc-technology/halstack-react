import { DxcFlex, DxcBleed } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <div
      style={{
        background: "#f2eafa",
        padding: "2rem"
      }}
    >
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="1.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </div>
  );
}`;

const scope = { DxcFlex, DxcBleed, Placeholder };

export default { code, scope };
