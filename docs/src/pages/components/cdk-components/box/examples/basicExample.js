import { DxcBox } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcBox margin="medium" padding="medium">
      Box Content
    </DxcBox>
  );
}`;

const scope = {
  DxcBox
};

export default { code, scope };
