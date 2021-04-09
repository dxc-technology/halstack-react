import React, { useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { Popper } from "@material-ui/core";

const ColorPicker = ({
  //   presetColors,
  //   setPresetColors,
  propertyName,
  propertyValue,
  anchorEl,
  setAnchorEl,
  onChangeCustomTheme,
  displayedProperty,
  onDisplayProperty,
}) => {
  const [currentColor, setCurrentColor] = useState(null);
  const [presetColors, setPresetColors] = useState([
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
  ]);

  const showColorPicker = (event, propertyName, color) => {
    setAnchorEl(event?.currentTarget);
    setCurrentColor(color);
    onDisplayProperty(propertyName);
  };

  const closeColorPicker = (propertyName) => {
    onChangeComplete(propertyName, currentColor);
    setAnchorEl(null);
    onDisplayProperty(null);
  };

  const onChangeComplete = (propertyName, color) => {
    if (!presetColors.includes(color.toUpperCase())) {
      const newPresetColors = presetColors;
      newPresetColors.pop();
      newPresetColors.unshift(color.toUpperCase());
      setPresetColors(newPresetColors);
    }
    onChangeCustomTheme(propertyName, color);
  };

  return (
    <ColorPickerContainer>
      <ColorContainer
        role="color-container"
        onClick={(event) => {
          showColorPicker(event, propertyName, propertyValue);
        }}
        color={displayedProperty === propertyName ? currentColor : propertyValue}
      />
      {displayedProperty === propertyName && (
        <PopOver>
          <Cover
            role="picker-cover"
            onClick={() => closeColorPicker(propertyName)}
          ></Cover>
          <ColorPopper open={displayedProperty === propertyName} anchorEl={anchorEl}>
            <SketchPicker
              color={currentColor}
              onChange={(color) => setCurrentColor(color.hex)}
              disableAlpha={true}
              presetColors={presetColors}
            />
          </ColorPopper>
        </PopOver>
      )}
    </ColorPickerContainer>
  );
};

const ColorContainer = styled.div`
  width: 32px;
  height: 14px;
  margin-left: 5px;
  background: ${(props) => props.color};
  display: "inline-block";
  cursor: pointer;
  border: 0.5px solid #707070;
  border-radius: 4px;
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPickerContainer = styled.div``;

const ColorPopper = styled(Popper)`
  z-index: 100;
`;

export default ColorPicker;
