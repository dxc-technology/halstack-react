import {
  DxcCheckbox,
  DxcInset,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcCheckbox label="Of legal age" defaultChecked onChange={onChange} />
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
};

export default { code, scope };
