import { DxcInset } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <div
      style={{
        background: "#f2eafa"
      }}
    >
      <DxcInset top="xsmall" right="small" bottom="medium" left="large">
          <Placeholder></Placeholder>
      </DxcInset>
    </div>
  );
}`;

const scope = { DxcInset, Placeholder };

export default { code, scope };
