import { DxcStatusLight, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
          <DxcStatusLight label="Default" size="small" />
          <DxcStatusLight label="Default" />
          <DxcStatusLight label="Default"size="large" />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
          <DxcStatusLight label="Info" mode="info" size="small" />
          <DxcStatusLight label="Info" mode="info" />
          <DxcStatusLight label="Info" mode="info" size="large" />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
          <DxcStatusLight label="Success" mode="success" size="small" />
          <DxcStatusLight label="Success" mode="success" />
          <DxcStatusLight label="Success" mode="success" size="large" />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
          <DxcStatusLight label="Warning" mode="warning" size="small" />
          <DxcStatusLight label="Warning" mode="warning" />
          <DxcStatusLight label="Warning" mode="warning" size="large" />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
          <DxcStatusLight label="Error" mode="error" size="small" />
          <DxcStatusLight label="Error" mode="error" />
          <DxcStatusLight label="Error" mode="error" size="large" />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcStatusLight,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
