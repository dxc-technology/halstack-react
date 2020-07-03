import React from "react";
import {
  DxcHeader,
  DxcToggle,
  DxcButton,
  DxcDropdown,
  ThemeContext,
} from "@diaas/dxc-react-cdk";
import { useState } from "react";
import assureBlacklogo from "../images/dxcassure_blk.png";
import invisionLogo from "../images/invision.png";
import skyscannerLogo from "../images/skyscanner.jpeg";
import yahooLogo from "../images/yahoo.png";

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
  const [selected, changeSelected] = useState(true);
  const onClickToggle = (newValue) => {
    changeSelected(newValue);
  };

  const onClick = () => {};

  const selectOption = (value) => {
    console.log(value);
  };

  const options = [
    {
      value: 1,
      label: "Facebook",
    },
    {
      value: 2,
      label: "Twitter",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];

  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme and default icon</h4>
        <DxcHeader />
      </div>
      <div>
        <h4>Dark theme</h4>
        <div
          style={{ background: "#000000" }}
          className="test-case"
          id="dark-theme"
        >
          <DxcHeader theme="dark" logoSrc={assureBlacklogo} />
        </div>
      </div>

      <div className="test-case" id="underlined-header">
        <h4>Underlined Header</h4>
        <DxcHeader underlined={true} logoSrc={invisionLogo} />
      </div>

      <div className="test-case" id="custom-header">
        <h4>Header with custom content</h4>
        <DxcHeader
          logoSrc={invisionLogo}
          content={
            <div>
              <DxcToggle
                label="Toggle"
                margin="xsmall"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
              <DxcButton
                mode="basic"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcToggle
                label="Toggle"
                underlined={true}
                margin="xsmall"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
              <DxcButton
                mode="basic"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcToggle
                label="Toggle"
                underlined={true}
                margin="xsmall"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
            </div>
          }
          responsiveContent={(handleClose) => (
            <div>
              <DxcToggle
                label="Toggle"
                margin="xsmall"
                selected={selected}
                onClick={handleClose}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
              <DxcButton
                mode="basic"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcToggle
                label="Toggle"
                underlined={true}
                margin="xsmall"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
              <DxcButton
                mode="basic"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcToggle
                label="Toggle"
                underlined={true}
                margin="xsmall"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
                theme="dark"
              />
            </div>
          )}
        ></DxcHeader>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcHeader margin="xxsmall" logoSrc={yahooLogo} />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcHeader margin="xsmall" />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcHeader margin="small" />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcHeader margin="medium" />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcHeader margin="large" />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcHeader margin="xlarge" />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcHeader margin="xxlarge" />
        </div>
      </div>

      <div>
        <h4>Paddings</h4>
        <div className="test-case" id="xxsmall-padding">
          <h5>xxsmall padding</h5>
          <DxcHeader
            padding={{ right: "xxsmall" }}
            logoSrc={yahooLogo}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="xsmall-padding">
          <h5>xsmall padding</h5>
          <DxcHeader
            padding={{ right: "xsmall" }}
            logoSrc={invisionLogo}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="small-padding">
          <h5>Small padding</h5>
          <DxcHeader
            padding={{ right: "small" }}
            logoSrc={skyscannerLogo}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="medium-padding">
          <h5>Medium padding</h5>
          <DxcHeader
            padding={{ right: "medium" }}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="large-padding">
          <h5>Large padding</h5>
          <DxcHeader
            padding={{ right: "large" }}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="xlarge-padding">
          <h5>xlarge padding</h5>
          <DxcHeader
            padding={{ right: "xlarge" }}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="xxlarge-padding">
          <h5>xxlarge padding</h5>
          <DxcHeader
            padding={{ right: "xxlarge" }}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div>
          <h5>multiple children</h5>
          <DxcHeader
            padding={{ right: "xxsmall" }}
            logoSrc={yahooLogo}
            content={
              <div>
                {" "}
                <DxcButton
                  size="large"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <p>Example 1</p>
                <DxcButton
                  theme="dark"
                  mode="flat"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <DxcButton
                  mode="outlined"
                  theme="dark"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <DxcButton
                  size="large"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <p>Example 1</p>
                <DxcButton
                  theme="dark"
                  mode="flat"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <DxcButton
                  mode="outlined"
                  theme="dark"
                  label={"Custom Button"}
                  onClick={onClick}
                />
              </div>
            }
          ></DxcHeader>
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Header</h4>
        <ThemeContext.Provider value={colors}>
          <DxcHeader />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
