import { DxcRow } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <DxcRow>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
    </DxcRow>
  );
}`;

const scope = {
  DxcRow,
  Placeholder,
};

export default { code, scope };
