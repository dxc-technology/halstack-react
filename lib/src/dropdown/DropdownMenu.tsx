import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import DropdownMenuItem from "./DropdownMenuItem";
import { DropdownMenuProps } from "./types";

const DropdownMenu = ({ id, iconsPosition, handleOptionOnClick, options, styles }: DropdownMenuProps) => {
  const colorsTheme = useTheme();

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
            iconPosition={iconsPosition}
            onClick={handleOptionOnClick}
            option={option}
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
