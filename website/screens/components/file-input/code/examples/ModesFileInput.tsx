import {
  DxcFileInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DxcFileInput label="File" helperText="Helper Text" margin="small" />
          <DxcFileInput
            label="Filedrop"
            mode="filedrop"
            helperText="Helper Text"
            margin="small"
          />
          <DxcFileInput
            label="Dropzone"
            mode="dropzone"
            helperText="Helper Text"
            margin="small"
          />
        </div>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcFileInput,
  DxcInset,
  DxcStack,
};

export default { code, scope };
