import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <DxcNewDate
      label="Uncontrolled"
      onChange={onChange}
      margin="medium"
      clearable
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };
