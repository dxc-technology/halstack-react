import { DxcSwitch } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcSwitch 
      label="Uncontrolled" 
      defaultChecked 
      onChange={onChange} 
      margin="medium" 
    />
  );
}`;

const scope = {
  DxcSwitch,
};

export default { code, scope };
