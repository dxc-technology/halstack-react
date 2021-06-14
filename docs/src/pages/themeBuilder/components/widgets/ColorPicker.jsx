import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { Popper } from "@material-ui/core";

const ColorPicker = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [currentColor, setCurrentColor] = useState();
  const [isPickerVisible, setIsPickerVisible] = useState();
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

  useEffect(() => {
    setCurrentColor(propertyValue);
  }, [propertyValue]);

  const showColorPicker = (event) => {
    setAnchorEl(event?.currentTarget);
    setIsPickerVisible(true);
  };

  const closeColorPicker = () => {
    setAnchorEl(null);
    setIsPickerVisible(false);
    if (!presetColors.includes(currentColor.toUpperCase())) {
      const newPresetColors = presetColors;
      newPresetColors.pop();
      newPresetColors.unshift(currentColor.toUpperCase());
      setPresetColors(newPresetColors);
    }
  };

  return (
    <ColorPickerContainer>
      <ColorContainer
        role="color-container"
        onClick={(event) => {
          showColorPicker(event);
        }}
        color={currentColor}
      />
      {isPickerVisible && (
        <PopOver>
          <Cover
            role="picker-cover"
            onClick={() => closeColorPicker(propertyName)}
          ></Cover>
          <ColorPopper open={isPickerVisible} anchorEl={anchorEl}>
            <SketchPicker
              color={currentColor}
              onChange={(color) => {
                setCurrentColor(color.hex);
              }}
              onChangeComplete={(color) => {
                onChangeCustomTheme(propertyName, color.hex);
              }}
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
