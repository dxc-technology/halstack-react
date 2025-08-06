import { DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcButton label="Default" icon="edit" />
        <DxcButton semantic="error" label="Error" icon="delete" />
        <DxcButton semantic="info" label="Info" icon="info" />
        <DxcButton semantic="success" label="Success" icon="check_circle" />
        <DxcButton semantic="warning" label="Warning" icon="warning" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
