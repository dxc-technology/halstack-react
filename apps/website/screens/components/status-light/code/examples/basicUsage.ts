import { DxcStatusLight, DxcInset } from "@repo/ui";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcStatusLight label="Accepted" mode="success" size="large" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcInset,
  DxcStatusLight,
};

export default { code, scope };
