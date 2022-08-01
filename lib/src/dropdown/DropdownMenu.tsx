import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import DropdownMenuItem from "./DropdownMenuItem";
import { DropdownMenuProps } from "./types";

const DropdownMenu = ({ id, iconsPosition, handleOptionOnClick, options, styles, tabIndex }: DropdownMenuProps) => {
  const colorsTheme = useTheme();
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  const setPreviousRadioChecked = () => {
    setCurrentFocusIndex((currentFocusIndex) => {
      let index = currentFocusIndex === 0 ? options.length - 1 : currentFocusIndex - 1;
      return index;
    });
  };
  const setNextRadioChecked = () => {
    setCurrentFocusIndex((currentFocusIndex) => {
      let index = currentFocusIndex === options.length - 1 ? 0 : currentFocusIndex + 1;
      return index;
    });
  };
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    switch (event.keyCode) {
      case 37: // arrow left
      case 38: // arrow up
        event.preventDefault();
        setPreviousRadioChecked();
        break;
      case 39: // arrow right
      case 40: // arrow down
        event.preventDefault();
        setNextRadioChecked();
        break;
      case 13: // enter
      case 32: // space
        event.preventDefault();
        handleOptionOnClick(options[currentFocusIndex]);
        break;
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.dropdown}>
      <DropdownMenuContainer
        id={id}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        role="menu"
        aria-orientation="vertical"
        style={styles}
      >
        {options.map((option, index) => (
          <DropdownMenuItem
            key={`option-${index}`}
            focused={index === currentFocusIndex}
            iconPosition={iconsPosition}
            onClick={handleOptionOnClick}
            onKeyDown={handleOnKeyDown}
            option={option}
            tabIndex={tabIndex}
          />
        ))}
      </DropdownMenuContainer>
    </ThemeProvider>
  );
};

const DropdownMenuContainer = styled.ul`
  box-sizing: border-box;
  max-height: 230px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export default React.memo(DropdownMenu);
