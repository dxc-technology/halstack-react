import { DxcStatusLight, DxcInset, DxcFlex } from '@dxc-technology/halstack-react';

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcFlex direction="column" gap="3rem">
          <DxcStatusLight label="Default" />
          <DxcStatusLight label="Info" mode="info" />
          <DxcStatusLight label="Success" mode="success" />
          <DxcStatusLight label="Warning" mode="warning" />
          <DxcStatusLight label="Error" mode="error" />
        </DxcFlex>
      </DxcInset>
    );
  }`;

const scope = {
  DxcFlex,
  DxcInset,
  DxcStatusLight,
};

export default { code, scope };
