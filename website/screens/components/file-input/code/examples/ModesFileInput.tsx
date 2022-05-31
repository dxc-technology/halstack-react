import { DxcFileInput, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRow gutter="medium" justify="center">
        <DxcFileInput label="File" />
        <DxcFileInput label="Filedrop" mode="filedrop" />
        <DxcFileInput label="Dropzone" mode="dropzone" />
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  DxcRow,
};

export default { code, scope };
