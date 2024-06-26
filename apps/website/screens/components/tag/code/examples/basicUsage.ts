import { DxcTag, DxcInset } from "@repo/ui";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcTag label="Deprecated" />
      </DxcInset>
    );
  }`;

const scope = {
  DxcTag,
  DxcInset,
};

export default { code, scope };
