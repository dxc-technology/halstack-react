import React from "react";
import {
  DxcHeader,
  DxcButton,
  DxcDropdown,
  ThemeContext,
} from "@dxc-technology/halstack-react";
import { useState } from "react";
import invisionLogo from "../images/invision.png";
import skyscannerLogo from "../images/skyscanner.jpeg";

const colors = {
  header: {
    backgroundColor: "grey",
    underlinedColor: "blue",
    fontColor: "green",
    backgroundColorMenu: "beige",
    fontColorMenu: "red",
    hamburguerColor: "#FABADA",
  },
};

const yahooSVG = () => {
  return (
    <svg viewBox="0 0 264.58333 73.375368" version="1.1" id="svg8">
      <defs id="defs2" />
      <g id="layer1" transform="translate(260.95542,41.213839)">
        <path
          fill="#5f01d1"
          d="m -260.95542,-23.351576 h 15.74097 l 9.16577,23.44971543 9.28475,-23.44971543 h 15.32641 l -23.07818,55.513102 h -15.42354 l 6.31728,-14.710096 z"
          id="path1139"
        />
        <path
          fill="#5f01d1"
          d="m -195.47141,-24.285092 c -11.82693,0 -19.30359,10.60691 -19.30359,21.1697058 0,11.886248 8.19723,21.3099212 19.07922,21.3099212 8.11755,0 11.17827,-4.945745 11.17827,-4.945745 v 3.852645 h 13.72915 v -40.452766 h -13.72915 v 3.677524 c 0,0 -3.41477,-4.611285 -10.9539,-4.611285 z m 2.92026,12.999928 c 5.45704,0 8.27307,4.3180081 8.27307,8.2142225 0,4.1954942 -3.01696,8.3127463 -8.27307,8.3127463 -4.35623,0 -8.29289,-3.559984 -8.29289,-8.1341932 0,-4.6389336 3.16648,-8.3927756 8.29289,-8.3927756 z"
          id="path1141"
        />
        <path
          fill="#5f01d1"
          d="m -166.06011,17.10119 v -58.315029 h 14.35985 v 21.680094 c 0,0 3.41082,-4.746342 10.5543,-4.746342 8.73797,0 13.85746,6.510502 13.85746,15.813727 v 25.56755 h -14.25479 V -4.9639552 c 0,-3.148416 -1.49969,-6.1899038 -4.89676,-6.1899038 -3.45803,0 -5.26021,3.0875793 -5.26021,6.1899038 V 17.10119 Z"
          id="path1145"
        />
        <path
          fill="#5f01d1"
          d="m -102.80546,-24.280304 c -13.54405,0 -21.60888,10.298919 -21.60888,21.3332079 0,12.5572045 9.76468,21.1416311 21.66017,21.1416311 11.529646,0 21.618462,-8.1948543 21.618462,-20.9309613 0,-13.9356097 -10.563298,-21.5438777 -21.669752,-21.5438777 z m 0.12933,13.114187 c 4.784243,0 8.094514,3.9847543 8.094514,8.2340454 0,3.62432286 -3.084573,8.0945471 -8.094514,8.0945471 -4.5906,0 -8.03569,-3.6823588 -8.03569,-8.1341932 0,-4.2885533 2.86425,-8.1943993 8.03569,-8.1943993 z"
          id="path1147"
        />
        <path
          id="path1153"
          d="m -57.212888,-24.280304 c -13.544038,0 -21.608877,10.298919 -21.608877,21.3332079 0,12.5572045 9.764684,21.1416311 21.660172,21.1416311 11.529647,0 21.618463,-8.1948543 21.618463,-20.9309613 0,-13.9356097 -10.563285,-21.5438777 -21.669758,-21.5438777 z m 0.12933,13.114187 c 4.784232,0 8.094517,3.9847543 8.094517,8.2340454 0,3.62432286 -3.084586,8.0945471 -8.094517,8.0945471 -4.59061,0 -8.035691,-3.6823588 -8.035691,-8.1341932 0,-4.2885533 2.864249,-8.1943993 8.035691,-8.1943993 z"
          fill="#5f01d1"
        />
        <circle
          fill="#5f01d1"
          id="path1155"
          cx="-24.212173"
          cy="8.4245415"
          r="9.5354834"
        />
        <path
          fill="#5f01d1"
          d="M -11.543414,-4.6137152 H -28.709769 L -13.474345,-41.213839 H 3.627914 Z"
          id="path1157"
        />
      </g>
    </svg>
  );
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
          logo={<img src={invisionLogo} />}
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
          <DxcHeader
            margin="xxsmall"
            logo={
              <svg viewBox="0 0 264.58333 73.375368" version="1.1" id="svg8">
                <defs id="defs2" />
                <g id="layer1" transform="translate(260.95542,41.213839)">
                  <path
                    fill="#5f01d1"
                    d="m -260.95542,-23.351576 h 15.74097 l 9.16577,23.44971543 9.28475,-23.44971543 h 15.32641 l -23.07818,55.513102 h -15.42354 l 6.31728,-14.710096 z"
                    id="path1139"
                  />
                  <path
                    fill="#5f01d1"
                    d="m -195.47141,-24.285092 c -11.82693,0 -19.30359,10.60691 -19.30359,21.1697058 0,11.886248 8.19723,21.3099212 19.07922,21.3099212 8.11755,0 11.17827,-4.945745 11.17827,-4.945745 v 3.852645 h 13.72915 v -40.452766 h -13.72915 v 3.677524 c 0,0 -3.41477,-4.611285 -10.9539,-4.611285 z m 2.92026,12.999928 c 5.45704,0 8.27307,4.3180081 8.27307,8.2142225 0,4.1954942 -3.01696,8.3127463 -8.27307,8.3127463 -4.35623,0 -8.29289,-3.559984 -8.29289,-8.1341932 0,-4.6389336 3.16648,-8.3927756 8.29289,-8.3927756 z"
                    id="path1141"
                  />
                  <path
                    fill="#5f01d1"
                    d="m -166.06011,17.10119 v -58.315029 h 14.35985 v 21.680094 c 0,0 3.41082,-4.746342 10.5543,-4.746342 8.73797,0 13.85746,6.510502 13.85746,15.813727 v 25.56755 h -14.25479 V -4.9639552 c 0,-3.148416 -1.49969,-6.1899038 -4.89676,-6.1899038 -3.45803,0 -5.26021,3.0875793 -5.26021,6.1899038 V 17.10119 Z"
                    id="path1145"
                  />
                  <path
                    fill="#5f01d1"
                    d="m -102.80546,-24.280304 c -13.54405,0 -21.60888,10.298919 -21.60888,21.3332079 0,12.5572045 9.76468,21.1416311 21.66017,21.1416311 11.529646,0 21.618462,-8.1948543 21.618462,-20.9309613 0,-13.9356097 -10.563298,-21.5438777 -21.669752,-21.5438777 z m 0.12933,13.114187 c 4.784243,0 8.094514,3.9847543 8.094514,8.2340454 0,3.62432286 -3.084573,8.0945471 -8.094514,8.0945471 -4.5906,0 -8.03569,-3.6823588 -8.03569,-8.1341932 0,-4.2885533 2.86425,-8.1943993 8.03569,-8.1943993 z"
                    id="path1147"
                  />
                  <path
                    id="path1153"
                    d="m -57.212888,-24.280304 c -13.544038,0 -21.608877,10.298919 -21.608877,21.3332079 0,12.5572045 9.764684,21.1416311 21.660172,21.1416311 11.529647,0 21.618463,-8.1948543 21.618463,-20.9309613 0,-13.9356097 -10.563285,-21.5438777 -21.669758,-21.5438777 z m 0.12933,13.114187 c 4.784232,0 8.094517,3.9847543 8.094517,8.2340454 0,3.62432286 -3.084586,8.0945471 -8.094517,8.0945471 -4.59061,0 -8.035691,-3.6823588 -8.035691,-8.1341932 0,-4.2885533 2.864249,-8.1943993 8.035691,-8.1943993 z"
                    fill="#5f01d1"
                  />
                  <circle
                    fill="#5f01d1"
                    id="path1155"
                    cx="-24.212173"
                    cy="8.4245415"
                    r="9.5354834"
                  />
                  <path
                    fill="#5f01d1"
                    d="M -11.543414,-4.6137152 H -28.709769 L -13.474345,-41.213839 H 3.627914 Z"
                    id="path1157"
                  />
                </g>
              </svg>
            }
          />
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
            logo={yahooSVG}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="xsmall-padding">
          <h5>xsmall padding</h5>
          <DxcHeader
            padding={{ right: "xsmall" }}
            logo={<img src={invisionLogo} />}
            content={<DxcButton label={"Custom Button"} onClick={onClick} />}
          ></DxcHeader>
        </div>
        <div className="test-case" id="small-padding">
          <h5>Small padding</h5>
          <DxcHeader
            padding={{ right: "small" }}
            logo={<img src={skyscannerLogo} />}
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
            logo={yahooSVG}
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
        <ThemeContext.Provider value={colors}>
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
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
