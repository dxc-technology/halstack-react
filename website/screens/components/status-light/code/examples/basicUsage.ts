import {
  DxcStatusLight,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcFlex direction="column" gap="3rem">
          <DxcStatusLight label="Accepted" mode="success" size="large" />
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
