import React, { useState } from "react";
import {
  DxcCheckbox,
  HalstackProvider,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";

const colors = {
  checkbox: {
    baseColor: "#5f249f",
    checkColor: "#fabada",
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
          disabled
        />
        <DxcCheckbox
          checked
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          disabled
        />
      </div>
      <div className="test-case" id="optional-checkbox">
        <h4>Optional checkbox</h4>
        <DxcCheckbox
          checked={checked}
          label="Checkbox"
          onChange={onChange}
          labelPosition="after"
          optional
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
        <HalstackProvider theme={colors}>
          <DxcCheckbox
            checked={checked}
            label="Checkbox "
            onChange={onChange}
          />
          <DxcCheckbox
            checked={checked}
            disabled
            label="Checkbox "
            onChange={onChange}
          />
          <DxcCheckbox checked disabled label="Checkbox " onChange={onChange} />
        </HalstackProvider>
      </div>
      <div>
        <h4>Dark</h4>
        <BackgroundColorProvider color="#000000">
          <Mode mode="dark">
            <DxcCheckbox
              checked={checked}
              label="Checkbox "
              onChange={onChange}
            />
          </Mode>
          <Mode mode="dark">
            <DxcCheckbox checked={true} label="Checkbox " onChange={onChange} />
          </Mode>
          <Mode mode="dark">
            <DxcCheckbox
              checked={checked}
              label="Checkbox "
              onChange={onChange}
              disabled
            />
            <DxcCheckbox
              checked={true}
              label="Checkbox "
              onChange={onChange}
              disabled
            />
          </Mode>
        </BackgroundColorProvider>
      </div>
    </div>
  );
}

const Mode = ({ mode, children }) => {
  return (
    <ModeContainer mode={mode}>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};
  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;

export default App;
