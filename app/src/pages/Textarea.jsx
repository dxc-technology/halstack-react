import React, { useState } from "react";
import { DxcTextarea, ThemeContext } from "@diaas/dxc-react-cdk";

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
  const [inputValue, changeInput] = useState("");
  const onChange = (newValue) => {
    changeInput(newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme-label">
        <h4>With label</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="without-label">
        <h4>Without label</h4>
        <DxcTextarea value={inputValue} onChange={onChange} />
      </div>

      <div className="test-case" id="dark-theme">
        <h4>Dark theme</h4>
        <div style={{ background: "#000000" }}>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            onChange={onChange}
            theme="dark"
            assistiveText="assistive text"
          />
        </div>
      </div>

      <div className="test-case" id="assistive-text">
        <h4>With assistive text</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
          assistiveText="assistive text"
        />
      </div>

      <div className="test-case" id="disabled">
        <h4>Disabled textarea</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
          assistiveText="assistive text"
          disabled={true}
        />
      </div>

      <div className="test-case" id="required">
        <h4>Required textarea</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
          assistiveText="assistive text"
          required={true}
        />
      </div>

      <div className="test-case" id="invalid">
        <h4>Invalid textarea</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
          assistiveText="assistive text"
          invalid={true}
        />
      </div>

      <div className="test-case" id="with-placeholder">
        <h4>With placeholder</h4>
        <DxcTextarea
          label="Textarea label"
          value={inputValue}
          onChange={onChange}
          assistiveText="assistive text"
          placeholder="Placeholder text"
        />
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xxsmall"
          />
        </div>

        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xsmall"
          />
        </div>

        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="small"
          />
        </div>

        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="medium"
          />
        </div>

        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="large"
          />
        </div>

        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xlarge"
          />
        </div>

        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xxlarge"
          />
        </div>
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <h5>Small size</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            size="small"
          />
        </div>

        <div className="test-case" id="medium-size">
          <h5>Medium size</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            size="medium"
          />
        </div>

        <div className="test-case" id="large-size">
          <h5>Large size</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            size="large"
          />
        </div>

        <div className="test-case" id="fillParent-size">
          <h5>FillParent margin</h5>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            size="fillParent"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Textarea</h4>
        <ThemeContext.Provider value={colors}>
          <DxcTextarea
            label="Textarea label"
            value={inputValue}
            onChange={onChange}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
