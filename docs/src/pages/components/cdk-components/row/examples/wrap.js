import { DxcRow } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <div
      style={{
        background: "#f2eafa",
        padding: "10px",
        width: "300px",
      }}
    >
        <DxcRow wrap={false}>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder> 
        </DxcRow>
    </div>
  );
}`;

const scope = {
  DxcRow,
  Placeholder,
};

export default { code, scope };
