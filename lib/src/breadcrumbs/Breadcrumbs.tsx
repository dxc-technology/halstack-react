import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import BreadcrumbsProps from "./types";
import DxcDropdown from "../dropdown/Dropdown";
import { HalstackProvider } from "../HalstackContext";
import dropdownTheme from "./dropdownTheme";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";
import Item from "./Item";
import { DxcFlex } from "../main";

const onSelectOption = (value: string) => {
  window.location.href = value;
};

const DxcBreadcrumbs = ({
  ariaLabel = "Breadcrumbs",
  children,
  items,
  itemsBeforeCollapse = 4,
  showRoot = true,
}: BreadcrumbsProps) => {
  const colorsTheme = useTheme();
  return (
    <ThemeProvider theme={colorsTheme.breadcrumbs}>
      <nav aria-label={ariaLabel}>
        <OrderedList>
          {children ??
            (items.length > Math.max(itemsBeforeCollapse, 2) ? (
              <>
                {showRoot && <Item href={items[0].href} key={0} label={items[0].label} />}
                <DxcFlex alignItems="center" as="li" key={1}>
                  <HalstackProvider advancedTheme={dropdownTheme}>
                    <DxcDropdown
                      caretHidden
                      icon={<DxcIcon icon="more_horiz" />}
                      margin={showRoot && { left: "small" }}
                      onSelectOption={onSelectOption}
                      options={items.slice(showRoot ? 1 : 0, -1).map(({ label, href }) => ({ label, value: href }))}
                    />
                  </HalstackProvider>
                </DxcFlex>
                <Item isCurrentPage key={2} label={items[items.length - 1].label} />
              </>
            ) : (
              items.map((item, index, { length }) => (
                <Item href={item.href} isCurrentPage={index === length - 1} key={index} label={item.label} />
              ))
            ))}
        </OrderedList>
      </nav>
    </ThemeProvider>
  );
};

const OrderedList = styled.ol`
  margin: ${CoreTokens.spacing_0};
  padding-left: ${CoreTokens.spacing_0};
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_12};
  list-style-type: none;

  > li:not(:first-child) {
    > a,
    > span {
      margin-left: ${CoreTokens.spacing_12};
    }
    &::before {
      margin: ${CoreTokens.spacing_0} ${CoreTokens.spacing_2};
      transform: rotate(15deg);
      border-right: ${CoreTokens.border_width_1} solid ${CoreTokens.color_grey_500};
      height: 1rem;
      content: "";
    }
  }
`;

DxcBreadcrumbs.Item = Item;

export default DxcBreadcrumbs;
