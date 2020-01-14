import React, { useState } from "react";
import { DxcCheckbox } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };
  return (
    <div>
      <h2>Small size</h2>
      <h3>xxsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="xxsmall"
        />
      </div>

      <h3>xsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="xsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="xsmall"
        />
      </div>

      <h3>Small margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="small"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="small"
        />
      </div>

      <h3>Medium margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="medium"
        />
      </div>

      <h3>Large margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="large"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="large"
        />
      </div>

      <h3>xlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="xlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="xlarge"
        />
      </div>

      <h3>xxlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          onChange={onChange}
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox "
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox l"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="small"
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="small"
          margin="xxlarge"
        />
      </div>

      <h2>Medium size</h2>
      <h3>xxsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="xxsmall"
        />
      </div>

      <h3>xsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="xsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="xsmall"
        />
      </div>

      <h3>small margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="small"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="small"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="small"
        />
      </div>

      <h3>Medium margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="medium"
        />
      </div>

      <h3>Large margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="large"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="large"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="large"
        />
      </div>

      <h3>xlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="xlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="xlarge"
        />
      </div>

      <h3>xxlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          onChange={onChange}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single lin"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline e"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            theme="dark"
            label="Checkbox"
            labelPosition="after"
            onChange={onChange}
            size="medium"
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
          size="medium"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          required={true}
          labelPosition="after"
          size="medium"
          margin="xxlarge"
        />
      </div>

      <h2>Large size</h2>
      <h3>xxsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="xxsmall"
        />
      </div>

      <h3>xsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="xsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="xsmall"
        />
      </div>

      <h3>small margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="small"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="small"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="small"
        />
      </div>

      <h3>Medium margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="medium"
        />
      </div>

      <h3>small margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="medium"
        />
      </div>

      <h3>Large margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="large"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="large"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="large"
        />
      </div>

      <h3>xlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="xlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="xlarge"
        />
      </div>

      <h3>xxlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="small"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={false}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            size="large"
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          disabled={true}
          size="large"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          labelPosition="after"
          onChange={onChange}
          required={true}
          size="large"
          margin="xxlarge"
        />
      </div>

      <h2>FillParent</h2>
      <h2>xxsmall margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="xxsmall"
        />
      </div>

      <h2>xsmall margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="xsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="xsmall"
        />
      </div>

      <h2>small margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="small"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="small"
        />
      </div>

      <h2>medium margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="medium"
        />
      </div>

      <h2>Large margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="large"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="large"
        />
      </div>

      <h2>xlarge margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="xlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="xlarge"
        />
      </div>

      <h2>xxlarge margin</h2>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillParent"
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillParent"
          margin="xxlarge"
        />
      </div>

      <h2>FillContent</h2>
      <h3>xxsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="xxsmall"
        />
      </div>

      <h3>xsmall margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="xxsmall"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="xsmall"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="xsmall"
        />
      </div>
      <h3>Small margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="small"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="small"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="small"
        />
      </div>

      <h3>Medium margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="medium"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="medium"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="medium"
        />
      </div>
      <h3>Large margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="large"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="large"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="large"
        />
      </div>
      <h3>xlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="xlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="xlarge"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="xlarge"
        />
      </div>
      <h3>xxlarge margin</h3>
      <div>
        <h4>- Label before and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label before and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and max size label for single line</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label single line exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Label after and min size label for multiline</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox label multiline exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          labelPosition="after"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            theme="dark"
            labelPosition="after"
            size="fillContent"
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>- Disabled</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          disabled={true}
          labelPosition="after"
          size="fillContent"
          margin="xxlarge"
        />
      </div>

      <div>
        <h4>- Required</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
          size="fillContent"
          margin="xxlarge"
        />
      </div>
    </div>
  );
}

export default App;
