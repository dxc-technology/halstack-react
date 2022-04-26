import { DxcRadioGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "100px", margin: "36px" }}>
      <DxcRadioGroup
        label="Label"
        helperText="Adds a predefined option whose value is the empty string"
        options={options}
        optional
      />
      <DxcRadioGroup
        label="Label"
        helperText="You can customize the label of the optional item to suit bettter your context"
        options={options}
        optional
        optionalItemLabel="Decide later"
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
};

export default { code, scope };
