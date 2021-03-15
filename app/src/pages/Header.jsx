import React from "react";
import {
  DxcHeader,
  DxcButton,
  DxcDropdown,
  ThemeProvider,
} from "@dxc-technology/halstack-react";
import { useState } from "react";
import invisionLogo from "../images/invision.png";
import skyscannerLogo from "../images/skyscanner.jpeg";
import yahooLogo from "../images/yahoo.png";

const colors = {
  header: {
    backgroundColor: "#fabada",
    underlinedColor: "#d0011b",
    fontColor: "#006BF6",
    backgroundColorMenu: "#fcf2bd",
    hamburguerColor: "#cee0f5",
    logo: invisionLogo,
    logoResponsive: skyscannerLogo,
  },
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
        <DxcHeader underlined={true} />
      </div>

      <div className="test-case" id="custom-header">
        <h4>Header with custom content</h4>
        <DxcHeader
          underlined={true}
          logoSrc={invisionLogo}
          content={
            <React.Fragment>
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
              <DxcButton
                mode="primary"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
              <DxcButton
                mode="primary"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
            </React.Fragment>
          }
          responsiveContent={(handleClose) => (
            <React.Fragment>
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
              <DxcButton
                mode="secondary"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
              <DxcButton
                mode="secondary"
                label="Button"
                margin="xsmall"
                onClick={onClick}
              />
              <DxcDropdown
                options={options}
                onSelectOption={selectOption}
                label="Dropdown"
                margin="xsmall"
              />
            </React.Fragment>
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
                <DxcButton
                  size="large"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <p>Example 1</p>
                <DxcButton
                  mode="text"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <DxcButton
                  mode="text"
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
                  mode="text"
                  label={"Custom Button"}
                  onClick={onClick}
                />
                <DxcButton
                  mode="text"
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
        <ThemeProvider theme={colors}>
          <DxcHeader
            underlined={true}
            content={
              <React.Fragment>
                <DxcButton
                  mode="text"
                  label="Button"
                  margin="xsmall"
                  onClick={onClick}
                />
                <DxcDropdown
                  options={options}
                  onSelectOption={selectOption}
                  label="Dropdown"
                  margin="xsmall"
                />
              </React.Fragment>
            }
            responsiveContent={(handleClose) => (
              <React.Fragment>
                <DxcButton
                  mode="basic"
                  label="Button"
                  margin="xsmall"
                  onClick={onClick}
                />
                <DxcDropdown
                  options={options}
                  onSelectOption={selectOption}
                  label="Dropdown"
                  margin="xsmall"
                />
              </React.Fragment>
            )}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
