import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import ThemeInputWidgetProps from "./types";
import * as Popover from "@radix-ui/react-popover";

const colorRange = [
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
];

const ColorPicker = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  const [currentColor, setCurrentColor] = useState<string>("");
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const [presetColors, setPresetColors] = useState(colorRange);

  useEffect(() => {
    setCurrentColor(propertyValue);
  }, [propertyValue]);

  const showColorPicker = () => {
    setIsPickerVisible((isPickerVisible) => !isPickerVisible);
  };

  const closeColorPicker = () => {
    setIsPickerVisible(false);
    if (!presetColors.includes(currentColor.toUpperCase())) {
      const newPresetColors = presetColors;
      newPresetColors.pop();
      newPresetColors.unshift(currentColor.toUpperCase());
      setPresetColors(newPresetColors);
    }
  };

  return (
    <Popover.Root open={isPickerVisible}>
      <Popover.Trigger asChild>
        <ColorSample
          role="color-container"
          $color={currentColor}
          onClick={showColorPicker}
          tabIndex={0}
        />
      </Popover.Trigger>
      <Popover.Content
        sideOffset={1}
        onInteractOutside={closeColorPicker}
        onEscapeKeyDown={closeColorPicker}
      >
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
      </Popover.Content>
    </Popover.Root>
  );
};

const ColorSample = styled.button<{ $color: string }>`
  width: 34px;
  height: 16px;
  background: ${(props) => props.$color};
  cursor: pointer;
  border: 1px solid #707070;
  border-radius: 4px;

  &:focus {
    border-color: transparent;
    outline: 2px solid #0095ff;
  }
`;

export default ColorPicker;
