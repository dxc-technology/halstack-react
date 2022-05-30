import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

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
  DxcInset,
  DxcStack,
};

export default { code, scope };
