import { DxcFileInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcFileInput label="File" />
        <DxcFileInput label="Filedrop" mode="filedrop" />
        <DxcFileInput label="Dropzone" mode="dropzone" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
