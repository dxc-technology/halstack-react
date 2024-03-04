import {
  DxcStatusLight,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="StatusLight"size="small" />
          <DxcStatusLight label="StatusLight" />
          <DxcStatusLight label="StatusLight"size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="StatusLight" mode="info" size="small" />
          <DxcStatusLight label="StatusLight" mode="info" />
          <DxcStatusLight label="StatusLight" mode="info" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="StatusLight" mode="success" size="small" />
          <DxcStatusLight label="StatusLight" mode="success" />
          <DxcStatusLight label="StatusLight" mode="success" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="StatusLight" mode="warning" size="small" />
          <DxcStatusLight label="StatusLight" mode="warning" />
          <DxcStatusLight label="StatusLight" mode="warning" size="large" />
        </DxcFlex>
        <DxcFlex gap="1rem" direction="column">
          <DxcStatusLight label="StatusLight" mode="error" size="small" />
          <DxcStatusLight label="StatusLight" mode="error" />
          <DxcStatusLight label="StatusLight" mode="error" size="large" />
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
