import { DxcRow } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <DxcRow align="end" justify="center">
        <Placeholder paddingTop="30"></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingBottom="55"></Placeholder>
    </DxcRow>
  );
}`;

const scope = {
  DxcRow,
  Placeholder,
};

export default { code, scope };
