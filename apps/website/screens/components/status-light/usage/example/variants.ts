import { DxcStatusLight, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="Default" size="small" />
          <DxcStatusLight label="Default" />
          <DxcStatusLight label="Default"size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="Info" mode="info" size="small" />
          <DxcStatusLight label="Info" mode="info" />
          <DxcStatusLight label="Info" mode="info" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="Success" mode="success" size="small" />
          <DxcStatusLight label="Success" mode="success" />
          <DxcStatusLight label="Success" mode="success" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="Warning" mode="warning" size="small" />
          <DxcStatusLight label="Warning" mode="warning" />
          <DxcStatusLight label="Warning" mode="warning" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
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
