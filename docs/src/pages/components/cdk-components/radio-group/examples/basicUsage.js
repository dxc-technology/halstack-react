import { DxcRadioGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];

  const single_disabled_options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B", disabled: true },
    { label: "Option C", value: "C" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "100px", margin: "36px" }}>
      <DxcRadioGroup
        label="Default"
        defaultValue="A"
        options={options}
      />
      <DxcRadioGroup
        label="Error"
        defaultValue="A"
        options={options}
        error="Error message"
      />
      <DxcRadioGroup
        label="Readonly"
        defaultValue="A"
        options={options}
        readonly
      />
      <DxcRadioGroup
        label="Disabled group"
        defaultValue="A"
        options={options}
        disabled
      />
      <DxcRadioGroup
        label="Disabled option"
        defaultValue="A"
        options={single_disabled_options}
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
};

export default { code, scope };
