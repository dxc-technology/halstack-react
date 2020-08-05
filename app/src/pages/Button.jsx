import React from "react";
import { DxcButton, ThemeContext } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";

const colors = {
  button: {
    color: "#FABADA",
    hoverColor: "grey"
  },
};

function App() {
  const onClick = () => {};

  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcButton
            mode="primary"
            theme="light"
            label="Small"
            onClick={onClick}
            size="small"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-size">
          <DxcButton
            mode="primary"
            theme="light"
            label="Medium"
            onClick={onClick}
            size="medium"
            margin="small"
          />
        </div>
        <div className="test-case" id="large-size">
          <DxcButton
            mode="primary"
            theme="light"
            label="Large"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="fitContent-size">
          <DxcButton
            mode="primary"
            theme="light"
            label="Fit Content"
            onClick={onClick}
            size="fitContent"
            margin="small"
          />
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcButton
            mode="primary"
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
            mode="primary"
            theme="light"
            label="xxsmall"
            onClick={onClick}
            size="large"
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcButton
            mode="primary"
            theme="light"
            label="xsmall"
            onClick={onClick}
            size="large"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <DxcButton
            mode="primary"
            theme="light"
            label="small"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <DxcButton
            mode="primary"
            theme="light"
            label="medium"
            onClick={onClick}
            size="large"
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <DxcButton
            mode="primary"
            theme="light"
            label="large"
            onClick={onClick}
            size="large"
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcButton
            mode="primary"
            theme="light"
            label="xlarge"
            onClick={onClick}
            size="large"
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge">
          <DxcButton
            mode="primary"
            theme="light"
            label="xxlarge"
            onClick={onClick}
            size="large"
            margin="xxlarge"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="primary-single-line">
          <h4>primary button single line</h4>
          <DxcButton
            mode="primary"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-max-line-icon-after">
          <h4>
            primary button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="primary"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-max-line-icon-before">
          <h4>
            primary button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="primary"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-after">
          <h4>
            primary button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="primary"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-before">
          <h4>
            primary button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="primary"
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
          id="primary-dark-theme"
        >
          <h4 style={{ color: "white" }}>primary button dark theme</h4>
          <DxcButton
            mode="primary"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="text-single-line">
          <h4>text button single line</h4>
          <DxcButton
            mode="text"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-after">
          <h4>
            text button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="text"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-before">
          <h4>
            text button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="text"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-after">
          <h4>
            text button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="text"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-before">
          <h4>
            text button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="text"
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
          id="text-dark-theme"
        >
          <h4 style={{ color: "white" }}>text button dark theme</h4>
          <DxcButton
            mode="text"
            label="Button"
            theme="dark"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="secondary-single-line">
          <h4>secondary button single line</h4>
          <DxcButton
            mode="secondary"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-max-line-icon-after">
          <h4>
            secondary button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="secondary"
            theme="light"
            label="But"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-max-line-icon-before">
          <h4>
            secondary button size medium - Label max size single line icon
            before
          </h4>
          <DxcButton
            mode="secondary"
            theme="light"
            label="But"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-after">
          <h4>
            secondary button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="secondary"
            theme="light"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-before">
          <h4>
            secondary button size medium - Label min size multi line icon before
          </h4>

          <DxcButton
            mode="secondary"
            theme="light"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            iconSrc={homeLogo}
            size="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Button</h4>
        <ThemeContext.Provider value={colors}>
          <DxcButton
            mode="primary"
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
