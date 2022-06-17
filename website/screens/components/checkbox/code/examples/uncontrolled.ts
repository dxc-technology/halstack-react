import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcCheckbox label="Of legal age" defaultChecked onChange={onChange} />
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcStack,
};

export default { code, scope };
