import React, { useState } from "react";
import { DxcCheckbox, ThemeContext } from "@dxc-technology/halstack-react";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
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
        <DxcCheckbox checked={checked} label="Checkbox " onChange={onChange} />
      </div>
      <div className="test-case" id="label-after">
        <h4>Label after</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
        />
      </div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
        />
      </div>
      <div>
        <h4>Dark theme</h4>
        <div
          className="test-case"
          id="dark-theme"
          style={{
            backgroundColor: "black",
          }}
        >
          <DxcCheckbox
            theme="dark"
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
          />
        </div>
      </div>
      <div className="test-case" id="color-checked">
        <h4>Color checked checkbox</h4>
        <DxcCheckbox
          checked={true}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
        />
      </div>
      <div className="test-case" id="color-unchecked">
        <h4>Color unchecked checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
        />
      </div>
      <div className="test-case" id="disabled-checkbox">
        <h4>Disabled checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled={true}
        />
      </div>
      <div className="test-case" id="required-checkbox">
        <h4>Required checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          required={true}
        />
      </div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size-single-line">
          <h5>Small size - Label max size single line</h5>
          <DxcCheckbox
            checked={checked}
            label="Small siz"
            onChange={onChange}
            labelPosition="after"
            size="small"
          />
        </div>
        <div className="test-case" id="small-size-multi-line">
          <h5>Small size - Label min size multi line</h5>
          <DxcCheckbox
            checked={checked}
            label="Small size"
            onChange={onChange}
            labelPosition="after"
            size="small"
          />
        </div>
        <div className="test-case" id="medium-size-single-line">
          <h5>Medium size - Label max size single line</h5>
          <DxcCheckbox
            checked={checked}
            label="Medium size example lab"
            onChange={onChange}
            labelPosition="after"
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-multi-line">
          <h5>Medium size - Label min size multi line</h5>
          <DxcCheckbox
            checked={checked}
            label="Medium size example labe"
            onChange={onChange}
            labelPosition="after"
            size="medium"
          />
        </div>
        <div className="test-case" id="large-size-single-line">
          <h5>Large size - Label max size single line</h5>
          <DxcCheckbox
            checked={checked}
            label="Large size example label checkbox checkbox checkbox ch"
            onChange={onChange}
            labelPosition="after"
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-multi-line">
          <h5>Large size - Label min size multi line</h5>
          <DxcCheckbox
            checked={checked}
            label="Large size example label checkbox checkbox checkbox che"
            onChange={onChange}
            labelPosition="after"
            size="large"
          />
        </div>
        <div className="test-case" id="fillParent-size-single-line">
          <h5>FillParent size - Label max size single line</h5>
          <DxcCheckbox
            checked={checked}
            label="FillParent size example label checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox check"
            onChange={onChange}
            labelPosition="after"
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-multi-line">
          <h5>FillParent size - Label min size multi line</h5>
          <DxcCheckbox
            checked={checked}
            label="FillParent size example label checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkb"
            onChange={onChange}
            labelPosition="after"
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fitContent-size-single-line">
          <h5>FitContent size - Label max size single line</h5>
          <DxcCheckbox
            checked={checked}
            label="FitContent size example label checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox chec"
            onChange={onChange}
            labelPosition="after"
            size="fitContent"
          />
        </div>
        <div className="test-case" id="fitContent-size-multi-line">
          <h5>FitContent size - Label min size multi line</h5>
          <DxcCheckbox
            checked={checked}
            label="FitContent size example label checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox checkbox check"
            onChange={onChange}
            labelPosition="after"
            size="fitContent"
          />
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcCheckbox
            checked={checked}
            label="Checkbox"
            onChange={onChange}
            labelPosition="after"
            margin="xxlarge"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Checkbox</h4>
        <ThemeContext.Provider value={colors}>
          <DxcCheckbox
            checked={checked}
            label="Checkbox "
            onChange={onChange}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
