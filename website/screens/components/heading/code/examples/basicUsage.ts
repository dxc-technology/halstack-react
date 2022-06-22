import { DxcHeading, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="large">
      <DxcHeading level={2} text="Introduction" />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeading,
  DxcInset,
};

export default { code, scope };
