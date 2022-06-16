import { DxcToggleGroup, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Facebook",
    },
    {
      value: 2,
      label: "Twitter",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];

  return (
    <DxcInset space="large">
      <DxcToggleGroup
        label="Choose a social network"
        options={options}
        onChange={onChange}
      ></DxcToggleGroup>
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
};

export default { code, scope };
