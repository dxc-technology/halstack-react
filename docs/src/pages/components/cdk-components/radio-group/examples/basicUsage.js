import { DxcRadioGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "100px", margin: "36px" }}>
      <DxcRadioGroup
        label="Default"
        options={options}
      />
      <DxcRadioGroup
        label="Error"
        options={options}
        error="Error message"
      />
      <DxcRadioGroup
        label="Readonly"
        options={options}
        readonly
      />
      <DxcRadioGroup
        label="Disabled"
        options={options}
        disabled
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
};

export default { code, scope };
