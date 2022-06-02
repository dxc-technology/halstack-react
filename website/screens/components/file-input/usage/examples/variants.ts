import {
  DxcFileInput,
  DxcInset,
  DxcRow,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcFileInput label="File" />
        <DxcFileInput label="Filedrop" mode="filedrop" />
        <DxcFileInput label="Dropzone" mode="dropzone" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  DxcRow,
  DxcStack,
};

export default { code, scope };
