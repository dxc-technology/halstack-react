import { forwardRef, memo } from "react";
import styled from "@emotion/styled";
import DropdownMenuItem from "./DropdownMenuItem";
import { DropdownMenuProps } from "./types";
import scrollbarStyles from "../styles/scroll";
import DxcBleed from "../bleed/Bleed";
import DxcDivider from "../divider/Divider";

const DropdownMenuContainer = styled.ul`
  max-height: 230px;
  min-width: min-content;
  padding: 0;
  margin: 0;
  outline: none;
  overflow-y: auto;
  ${scrollbarStyles}
`;

const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ id, dropdownTriggerId, iconsPosition, visualFocusIndex, menuItemOnClick, onKeyDown, options, styles }, ref) => (
    <DxcBleed space="var(--spacing-padding-xs)">
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
        tabIndex={0}
        ref={ref}
        style={styles}
      >
        {options.map((option, index) => (
          <>
            <DropdownMenuItem
              id={`${id}-option-${visualFocusIndex}`}
              key={`${id}-option-${option.value}`}
              visuallyFocused={index === visualFocusIndex}
              iconPosition={iconsPosition}
              onClick={menuItemOnClick}
              option={option}
            />
            {option.hasDivider && <DxcDivider />}
          </>
        ))}
      </DropdownMenuContainer>
    </DxcBleed>
  )
);

export default memo(DropdownMenu);
