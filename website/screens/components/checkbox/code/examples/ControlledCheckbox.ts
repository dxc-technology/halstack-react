import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const [checked, changeChecked] = useState(false);
    const onChange = newValue => {
      changeChecked(newValue);
    };
  
    return (
        <DxcInset space="large">
            <DxcStack gutter="large">
                <DxcCheckbox
                label="Controlled"
                checked={checked}
                onChange={onChange}
                margin="medium"
                />
            </DxcStack>
        </DxcInset>
    );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };
