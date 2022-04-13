import { DxcRow } from "@dxc-technology/halstack-react";
import Placeholder from "../../../common/Placeholder";

const code = `() => {
  return (
    <DxcRow gutter="medium" reverse>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
    </DxcRow>
  );
}`;

const scope = {
  DxcRow,
  Placeholder,
};

export default { code, scope };
