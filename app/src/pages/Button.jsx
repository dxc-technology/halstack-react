import React from "react";
import { DxcButton, ThemeContext } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";

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
  const onClick = () => {};

  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcButton
            mode="basic"
            theme="light"
            label="Small"
            onClick={onClick}
            size="small"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-size">
          <DxcButton
            mode="basic"
            theme="light"
            label="Medium"
            onClick={onClick}
            size="medium"
            margin="small"
          />
        </div>
        <div className="test-case" id="large-size">
          <DxcButton
            mode="basic"
            theme="light"
            label="Large"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="fitContent-size">
          <DxcButton
            mode="basic"
            theme="light"
            label="Fit Content"
            onClick={onClick}
            size="fitContent"
            margin="small"
          />
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcButton
            mode="basic"
            theme="light"
            label="Fill Parent"
            onClick={onClick}
            size="fillParent"
            margin="small"
          />
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="xxsmall"
            onClick={onClick}
            size="large"
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="xsmall"
            onClick={onClick}
            size="large"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="small"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="medium"
            onClick={onClick}
            size="large"
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="large"
            onClick={onClick}
            size="large"
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcButton
            mode="basic"
            theme="light"
            label="xlarge"
            onClick={onClick}
            size="large"
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge">
          <DxcButton
            mode="basic"
            theme="light"
            label="xxlarge"
            onClick={onClick}
            size="large"
            margin="xxlarge"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="basic-single-line">
          <h4>Basic button single line</h4>
          <DxcButton
            mode="basic"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="basic-max-line-icon-after">
          <h4>
            Basic button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="basic"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="basic-max-line-icon-before">
          <h4>
            Basic button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="basic"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="basic-min-multiline-icon-after">
          <h4>
            Basic button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="basic"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="basic-min-multiline-icon-before">
          <h4>
            Basic button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="basic"
            theme="light"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div
          className="test-case"
          style={{ background: "black" }}
          id="basic-dark-theme"
        >
          <h4 style={{ color: "white" }}>Basic button dark theme</h4>
          <DxcButton
            mode="basic"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="raised-single-line">
          <h4>Raised button single line</h4>
          <DxcButton
            mode="raised"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="raised-max-line-icon-after">
          <h4>
            Raised button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="raised"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="raised-max-line-icon-before">
          <h4>
            Raised button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="raised"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="raised-min-multiline-icon-after">
          <h4>
            Raised button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="raised"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="raised-min-multiline-icon-before">
          <h4>
            Raised button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="raised"
            theme="light"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div
          className="test-case"
          style={{ background: "black" }}
          id="raised-dark-theme"
        >
          <h4 style={{ color: "white" }}>Raised button dark theme</h4>
          <DxcButton
            mode="raised"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="flat-single-line">
          <h4>Flat button single line</h4>
          <DxcButton
            mode="flat"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="flat-max-line-icon-after">
          <h4>
            Flat button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="flat"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="flat-max-line-icon-before">
          <h4>
            Flat button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="flat"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="flat-min-multiline-icon-after">
          <h4>
            Flat button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="flat"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="flat-min-multiline-icon-before">
          <h4>
            Flat button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="flat"
            theme="light"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div
          className="test-case"
          style={{ background: "black" }}
          id="flat-dark-theme"
        >
          <h4 style={{ color: "white" }}>Flat button dark theme</h4>
          <DxcButton
            mode="flat"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="outlined-single-line">
          <h4>Outlined button single line</h4>
          <DxcButton
            mode="outlined"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="outlined-max-line-icon-after">
          <h4>
            Outlined button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="outlined"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="outlined-max-line-icon-before">
          <h4>
            Outlined button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="outlined"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="outlined-min-multiline-icon-after">
          <h4>
            Outlined button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="outlined"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="outlined-min-multiline-icon-before">
          <h4>
            Outlined button size medium - Label min size multi line icon before
          </h4>

          <DxcButton
            mode="outlined"
            theme="light"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div
          className="test-case"
          style={{ background: "black" }}
          id="outlined-dark-theme"
        >
          <h4 style={{ color: "white" }}>Outlined button dark theme</h4>
          <DxcButton
            mode="outlined"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Button</h4>
        <ThemeContext.Provider value={colors}>
          <DxcButton
            mode="basic"
            theme="light"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
