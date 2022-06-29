import { DxcInset } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <div
      style={{
        background: "#f2eafa"
      }}
    >
      <DxcInset top="0.5rem" right="1rem" bottom="1.5rem" left="2rem">
          <Placeholder></Placeholder>
      </DxcInset>
    </div>
  );
}`;

const scope = { DxcInset, Placeholder };

export default { code, scope };
