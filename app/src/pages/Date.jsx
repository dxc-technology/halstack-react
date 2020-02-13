import React, { useState } from "react";
import { DxcDate } from "@diaas/dxc-react-cdk";

function App() {
  const [inputValue, changeInput] = useState(new Date("1995/12/03"));
  const onChange = (newValue, event) => {
    changeInput(newValue);
  };

  return (
    <div>
      <div className="test-case" id="assistive-text-date">
        <h4>With assistive text</h4>
        <DxcDate
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onInputChange={onChange}
        />
      </div>

      <div className="test-case" id="invalid-date">
        <h4>Invalid date</h4>
        <DxcDate
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
          invalid={true}
        />
      </div>

      <div className="test-case" id="without-label-date">
        <h4>Without label</h4>
        <DxcDate
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="without-assistive-text-label-date">
        <h4>Without assistive text and label</h4>
        <DxcDate value={inputValue} onChange={onChange} />
      </div>

      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcDate
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div>
        <h4>Dark theme</h4>
        <div style={{ background: "#000000" }}>
          <div className="test-case" id="dark-theme">
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText="assistive text"
              onChange={onChange}
              theme="dark"
            />
          </div>
        </div>
      </div>

      <div className="test-case" id="disabled-date">
        <h4>Disabled input</h4>
        <DxcDate
          label="Input label"
          value={inputValue}
          disabled={true}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="required-date-with-value">
        <h4>Required date with value</h4>
        <DxcDate
          label="Input label"
          value={inputValue}
          required={true}
          assistiveText="assistive text"
          onChange={onChange}
          margin="medium"
        />
      </div>
      <div className="test-case" id="required-date-without-value">
        <h4>Required date without value</h4>
        <DxcDate
          label="Input label"
          required={true}
          assistiveText="assistive text"
          onChange={onChange}
          margin="medium"
        />
      </div>
      <div>
        <div className="test-case" id="max-size-oneline-with-value">
          <h5>Label Max size oneline with value</h5>
          <DxcDate
            label="Input label 123456789012"
            value={inputValue}
            onChange={onChange}
          />
        </div>
        <div className="test-case" id="min-size-multiline-with-value">
          <h5>Min size multiline with value</h5>
          <DxcDate
            label="Input label 1234567890123"
            value={inputValue}
            onChange={onChange}
          />
        </div>
        <div className="test-case" id="max-size-oneline-without-value">
          <h5>Label Max size oneline with value</h5>
          <DxcDate
            label="Input label 123456789012"
            onChange={onChange}
          />
        </div>
        <div className="test-case" id="min-size-multiline-without-value">
          <h5>Min size multiline with value</h5>
          <DxcDate
            label="Input label 1234567890123"
            onChange={onChange}
          />
        </div>
        <div className="test-case" id="min-size-oneline-assistiveText">
          <h5>Min size oneline assistive text</h5>
          <DxcDate
            label="Label"
            value={inputValue}
            assistiveText="Assistive test 12345678901234 56789012"
            onChange={onChange}
          />
        </div>
        <div className="test-case" id="min-size-multiline-assistiveText">
          <h5>Min size multiline assistive text</h5>
          <DxcDate
            label="Label"
            value={inputValue}
            assistiveText="Assistive test 12345678901234 567890123"
            onChange={onChange}
          />
        </div>
        <div>
          <h4>Margins</h4>
          <div className="test-case" id="xxsmall-margin">
            <h5>xxsmall margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="xxsmall"
            />
          </div>

          <div className="test-case" id="xsmall-margin">
            <h5>xsmall margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="xsmall"
            />
          </div>

          <div className="test-case" id="small-margin">
            <h5>Small margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="small"
            />
          </div>

          <div className="test-case" id="large-margin">
            <h5>Large margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="large"
            />
          </div>

          <div className="test-case" id="xlarge-margin">
            <h5>xlarge margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="xlarge"
            />
          </div>

          <div className="test-case" id="xxlarge-margin">
            <h5>xxlarge margin</h5>
            <DxcDate
              label="Input label"
              value={inputValue}
              assistiveText={"assistive text"}
              onChange={onChange}
              margin="xxlarge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
