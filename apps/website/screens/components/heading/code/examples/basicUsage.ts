import { DxcHeading, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-l)" direction="column">
        <DxcHeading level={1} text="Introduction" />
        <DxcHeading level={2} text="Use case" />
        <DxcHeading level={3} text="Default" />
        <DxcHeading level={4} text="Best practices" />
        <DxcHeading level={5} text="Example" />
        <DxcHeading level={6} text="Code" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcHeading,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
