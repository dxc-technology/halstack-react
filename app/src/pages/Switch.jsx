import React, { useState } from "react";
import { DxcSwitch, HalstackProvider } from "@dxc-technology/halstack-react";

const colors = {
  switch: {
    checkedBaseColor: "#FABADA",
  },
};

function App() {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };
  return (
    <div>
      <div className="test-case" id="label-before">
        <h4>Label before</h4>
        <DxcSwitch
          checked={checked}
          labelPosition="before"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="label-after">
        <h4>Label after</h4>
        <DxcSwitch
          checked={checked}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcSwitch
          checked={checked}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="color-checked">
        <h4>Color checked switch</h4>
        <DxcSwitch
          checked={true}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="color-unchecked">
        <h4>Color unchecked switch</h4>
        <DxcSwitch
          checked={checked}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="disabled-switch">
        <h4>Disabled switch</h4>
        <DxcSwitch
          disabled={true}
          checked={checked}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="required-switch">
        <h4>Required switch</h4>
        <DxcSwitch
          required={true}
          checked={checked}
          labelPosition="after"
          label="Switch"
          onChange={onChange}
        />
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size-single-line">
          <h5>Small size - Label max size single line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch "
            onChange={onChange}
            size="small"
          />
        </div>

        <div className="test-case" id="small-size-multi-line">
          <h5>Small size - Label min size multi line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch s"
            onChange={onChange}
            size="small"
          />
        </div>

        <div className="test-case" id="medium-size-single-line">
          <h5>Medium size - Label max size single line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch size example la"
            onChange={onChange}
            size="medium"
          />
        </div>

        <div className="test-case" id="medium-size-multi-line">
          <h5>Medium size - Label min size multi line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch size example lab"
            onChange={onChange}
            size="medium"
          />
        </div>

        <div className="test-case" id="large-size-single-line">
          <h5>Large size - Label max size single line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch size example label switch switch switch switch s"
            onChange={onChange}
            size="large"
          />
        </div>

        <div className="test-case" id="large-size-multi-line">
          <h5>Large size - Label min size multi line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch size example label switch switch switch switch sw"
            onChange={onChange}
            size="large"
          />
        </div>

        <div className="test-case" id="fillParent-size-single-line">
          <h5>FillParent size - Label max size single line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="FillParent size example label switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch s"
            onChange={onChange}
            size="fillParent"
          />
        </div>

        <div className="test-case" id="fillParent-size-multi-line">
          <h5>FillParent size - Label min size multi line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="FillParent size example label switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch sw"
            onChange={onChange}
            size="fillParent"
          />
        </div>

        <div className="test-case" id="fitContent-size-single-line">
          <h5>FitContent size - Label max size single line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="FitContent size example label switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch"
            onChange={onChange}
            size="fitContent"
          />
        </div>

        <div className="test-case" id="fitContent-size-multi-line">
          <h5>FitContent size - Label min size multi line</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="FitContent size example label switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch switch s"
            onChange={onChange}
            size="fitContent"
          />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcSwitch
            checked={checked}
            labelPosition="after"
            label="Switch"
            onChange={onChange}
            margin="xlarge"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Switch</h4>
        <HalstackProvider theme={colors}>
          <DxcSwitch
            disabled
            checked={true}
            labelPosition="before"
            label="Switch"
            onChange={onChange}
          />
        </HalstackProvider>
      </div>
    </div>
  );
}

export default App;
