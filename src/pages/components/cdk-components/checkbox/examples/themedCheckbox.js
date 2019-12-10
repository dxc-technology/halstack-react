import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    const [checked, changeChecked] = useState(true);
    const onChange = (newValue) => {
        changeChecked(newValue);
    };

    const [checked1, changeChecked1] = useState(false);
    const onChange1 = (newValue) => {
        changeChecked1(newValue);
    };
  
    return (
      <div>
        <div style={{background:'#000000'}}>
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            required={true}
            onChange={onChange}
          />

          <DxcCheckbox
            checked={checked1}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange1}
          />

          <DxcCheckbox
            checked={true}
            theme="dark"
            label="Checkbox"
            disabled={true}
          />

          <DxcCheckbox
            checked={false}
            theme="dark"
            label="Checkbox"
            disabled={true}
          />
        </div>

        <div style={{background:'#ffffff'}}>
          <DxcCheckbox
            checked={checked}
            theme="light"
            label="Checkbox"
            required={true}
            onChange={onChange}
          />

          <DxcCheckbox
            checked={checked1}
            theme="light"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange1}
          />

          <DxcCheckbox
            checked={true}
            theme="light"
            label="Checkbox"
            disabled={true}
          />

          <DxcCheckbox
            checked={false}
            theme="light"
            label="Checkbox"
            disabled={true}
          />
        </div>
      </div>
    );
  }`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
