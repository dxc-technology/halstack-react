import React from "react";
import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";
import favoritePath from "../images/favorite.svg";
import homePath from "../images/home.svg";
import twitterPath from "../images/twitter-black.svg";

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
  const [value, changeValue] = useState(1);

  const onChangeConsole = (newValue) => {
    console.log(newValue);
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
      iconSrc: homePath
    },
    {
      value: 2,
      iconSrc: favoritePath
    },
    {
      value: 3,
      iconSrc: twitterPath
    },
  ];

  return (
    <div>
      <div className="test-case" id="basic-toggle-group">
        <h4>Basic toggle group</h4>
        <DxcToggleGroup
          label="Choose one"
          options={optionsWithoutIcon}
        />
      </div>

      <div className="test-case" id="basic-toggle-group">
        <h4>Icons toggle group</h4>
        <DxcToggleGroup
          label="Choose one"
          options={optionsWithIcon}
        />
      </div>

      <div className="test-case" id="multiple-toggle-group">
        <h4>Multiple toggle group</h4>
        <DxcToggleGroup
          label="Choose multiple"
          options={optionsWithoutIcon}
          multiple
        />
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
        <DxcToggleGroup
          label="Choose one"
          options={optionsWithoutIcon}
        />
      </div>

      <div className="test-case" id="controlled-toggle-group">
        <h4>Controlled multiple toggle group</h4>
        <DxcToggleGroup
          label="Choose multiple"
          value={value}
          options={optionsWithoutIcon}
          onChange={onChangeConsole}
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
    </div>
  );
}

export default App;
