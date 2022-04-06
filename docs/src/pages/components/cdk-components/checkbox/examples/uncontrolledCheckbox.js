import { DxcCheckbox } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return (
    <DxcCheckbox 
      label="Uncontrolled"
      defaultChecked
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcCheckbox,
};

export default { code, scope };
