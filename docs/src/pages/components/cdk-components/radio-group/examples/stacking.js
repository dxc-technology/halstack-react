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
        label="Column (default)"
        helperText="By default, stacking is set to column"
        options={options}
        stacking="column"
      />
      <DxcRadioGroup
        label="Row"
        helperText="But with the prop 'stacking' you can make the options display in a row"
        options={options}
        stacking="row"
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
};

export default { code, scope };
