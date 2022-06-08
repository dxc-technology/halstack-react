import { DxcHeading, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="large">
      <DxcHeading text="Title for main section" />
      <DxcHeading level={2} text="Heading for sections" />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeading,
  DxcInset,
};

export default { code, scope };
