import { DxcTextInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcTextInput
        label="Default"
        placeholder="Placeholder"
        margin="medium"
      />
      <DxcTextInput
        label="Error"
        placeholder="Placeholder"
        error="Error message"
        margin="medium"
      />
      <DxcTextInput
        label="Disabled"
        placeholder="Placeholder"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcTextInput,
};

export default { code, scope };
