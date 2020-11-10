import { DxcToggleGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  return (
    <DxcToggleGroup
      options={options}
      onChange={onChange}
      label="Multiple toggle group"
      margin="medium"
      multiple
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
};

export default { code, scope };
