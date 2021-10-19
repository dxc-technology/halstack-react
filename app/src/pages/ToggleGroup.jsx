import React from "react";
import { DxcToggleGroup, ThemeProvider } from "@dxc-technology/halstack-react";
import { useState } from "react";
import twitterPath from "../images/twitter-black.svg";

const colors = {
  toggleGroup: {
    selectedBaseColor: "#fcf2bd",
    selectedFontColor: "#006BF6",
    unselectedBaseColor: "#fabada",
    unselectedFontColor: "#d0011b",
  },
};

const favoriteSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

function App() {
  const [value, changeValue] = useState(1);
  const [multipleValue, changeMultipleValue] = useState([1, 2]);

  const onChangeConsole = (newValue) => {
    console.log(newValue);
    changeValue(newValue);
  };

  const onChangeMultiple = (values) => {
    console.log(values);
    changeMultipleValue(values);
  };

  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon",
    },
    {
      value: 2,
      label: "Ebay",
    },
    {
      value: 3,
      label: "Apple",
    },
    {
      value: 4,
      label: "Google",
    },
  ];

  const optionsWithIcon = [
    {
      value: 1,
      icon: (
        <svg
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          fill="currentColor"
        >
          <g id="Bounding_Box">
            <rect fill="none" width="24" height="24" />
          </g>
          <g id="Master">
            <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
          </g>
        </svg>
      ),
    },
    {
      value: 2,
      icon: favoriteSVG,
    },
    {
      value: 3,
      icon: <img src={twitterPath} />,
    },
  ];

  return (
    <div>
      <div className="test-case" id="basic-toggle-group">
        <h4>Basic toggle group</h4>
        <DxcToggleGroup label="Choose one" options={optionsWithoutIcon} />
      </div>

      <div className="test-case" id="basic-toggle-group">
        <h4>Icons toggle group</h4>
        <DxcToggleGroup label="Choose one" options={optionsWithIcon} />
      </div>

      <div className="test-case" id="disabled-toggle-group">
        <h4>Disabled toggle group</h4>
        <DxcToggleGroup
          label="Choose one"
          disabled
          value={value}
          options={optionsWithoutIcon}
        />
      </div>

      <div className="test-case" id="controlled-toggle-group">
        <h4>Controlled toggle group</h4>
        <DxcToggleGroup
          label="Choose one"
          value={value}
          options={optionsWithoutIcon}
          onChange={onChangeConsole}
        />
      </div>

      <div className="test-case" id="uncontrolled-toggle-group">
        <h4>Uncontrolled toggle group</h4>
        <DxcToggleGroup label="Choose one" options={optionsWithoutIcon} />
      </div>

      <div className="test-case" id="controlled-toggle-group">
        <h4>Controlled multiple toggle group</h4>
        <DxcToggleGroup
          label="Choose multiple"
          value={multipleValue}
          onChange={onChangeMultiple}
          options={optionsWithoutIcon}
          multiple
        />
      </div>

      <div className="test-case" id="uncontrolled-toggle-group">
        <h4>Uncontrolled multiple toggle group</h4>
        <DxcToggleGroup
          label="Choose multiple"
          options={optionsWithoutIcon}
          multiple
        />
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="xxsmall"
          />
        </div>

        <div className="test-case" id="xsmall-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="xsmall"
          />
        </div>

        <div className="test-case" id="small-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="small"
          />
        </div>

        <div className="test-case" id="medium-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="medium"
          />
        </div>

        <div className="test-case" id="large-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="large"
          />
        </div>

        <div className="test-case" id="xlarge-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="xlarge"
          />
        </div>

        <div className="test-case" id="xxlarge-margin">
          <DxcToggleGroup
            label="Choose one"
            options={optionsWithoutIcon}
            margin="xxlarge"
          />
        </div>
      </div>
      <div>
        <h4>Custom toggle group</h4>
        <div className="test-case" id="custom-toggle-group">
          <ThemeProvider theme={colors}>
            <DxcToggleGroup
              label="Choose one"
              options={optionsWithoutIcon}
              margin="xxlarge"
              value={3}
            />
            <DxcToggleGroup
              label="Choose one"
              options={optionsWithoutIcon}
              margin="xxlarge"
              disabled
              value={3}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
