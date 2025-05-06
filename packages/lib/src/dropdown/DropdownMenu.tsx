import { forwardRef, memo } from "react";
import styled from "styled-components";
import DropdownMenuItem from "./DropdownMenuItem";
import { DropdownMenuProps } from "./types";
import scrollbarStyles from "../styles/scroll";

const DropdownMenuContainer = styled.ul`
  max-height: 230px;
  min-width: min-content;
  padding: 0;
  margin: 0;
  background-color: var(--color-bg-neutral-lightest);
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-low-x-position) var(--shadow-low-y-position) var(--shadow-low-blur) var(--shadow-low-spread)
    var(--shadow-dark);
  outline: none;
  overflow-y: auto;
  z-index: 2147483647;
  ${scrollbarStyles}
`;

const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ id, dropdownTriggerId, iconsPosition, visualFocusIndex, menuItemOnClick, onKeyDown, options, styles }, ref) => (
    <DropdownMenuContainer
      onMouseDown={(event) => {
        // Prevent the onBlur event from closing menu when clicking on the menu since
        // it is implemented with a Portal and the menu is not a direct child of the container
        event.preventDefault();
      }}
      onKeyDown={onKeyDown}
      id={id}
      role="menu"
      aria-labelledby={dropdownTriggerId}
      aria-orientation="vertical"
      aria-activedescendant={visualFocusIndex !== -1 ? `${id}-option-${visualFocusIndex}` : undefined}
      tabIndex={-1}
      ref={ref}
      style={styles}
    >
      {options.map((option, index) => (
        <DropdownMenuItem
          id={`${id}-option-${index}`}
          key={`${id}-option-${index}`}
          visuallyFocused={index === visualFocusIndex}
          iconPosition={iconsPosition}
          onClick={menuItemOnClick}
          option={option}
        />
      ))}
    </DropdownMenuContainer>
  )
);

DropdownMenu.displayName = "DropdownMenu";

export default memo(DropdownMenu);
