import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import BreadcrumbsProps, { ItemType } from "./types";
import DxcDropdown from "../dropdown/Dropdown";
import { HalstackProvider } from "../HalstackContext";
import dropdownTheme from "./dropdownTheme";

const defaultCollapsedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
  </svg>
);

const mapItems = (item: ItemType, index: number, { length }) => {
  const isLast = index === length - 1;

  return (
    <ListItem key={index} aria-current={isLast ? "page" : undefined}>
      {isLast ? (
        <CurrentItem>{item.label}</CurrentItem>
      ) : (
        <Item href={item.href}>
          <Text>{item.label}</Text>
        </Item>
      )}
    </ListItem>
  );
};

const DxcBreadcrumbs = ({
  ariaLabel = "Breadcrumbs",
  items,
  itemsBeforeCollapse = 4,
  showRoot = true,
}: BreadcrumbsProps) => {
  const currentItemRef = useRef<HTMLSpanElement>(null);
  const colorsTheme = useTheme();

  useEffect(() => {
    if (currentItemRef?.current != null) {
      if (currentItemRef?.current.scrollWidth > currentItemRef?.current.clientWidth)
        currentItemRef.current.title = items[items.length - 1].label;
      else currentItemRef.current.title = "";
    }
  }, [items]);

  return (
    <ThemeProvider theme={colorsTheme.breadcrumbs}>
      <nav aria-label={ariaLabel}>
        <OrderedList>
          {itemsBeforeCollapse >= 2 && items.length > itemsBeforeCollapse ? (
            <>
              {showRoot && (
                <ListItem key={0}>
                  <Item href={items[0].href}>
                    <Text>{items[0].label}</Text>
                  </Item>
                </ListItem>
              )}
              <ListItem key={1}>
                <HalstackProvider advancedTheme={dropdownTheme}>
                  <DxcDropdown
                    icon={defaultCollapsedIcon}
                    options={items.slice(showRoot ? 1 : 0, -1).map(({ label, href }) => ({ label, value: href }))}
                    onSelectOption={(value) => {
                      window.location.href = value;
                    }}
                    caretHidden
                    margin={showRoot && { left: "small" }}
                  />
                </HalstackProvider>
              </ListItem>
              <ListItem key={2} aria-current="page" style={{ overflow: "hidden" }}>
                <CurrentItem ref={currentItemRef}>{items[items.length - 1].label}</CurrentItem>
              </ListItem>
            </>
          ) : (
            items.map(mapItems)
          )}
        </OrderedList>
      </nav>
    </ThemeProvider>
  );
};

const OrderedList = styled.ol`
  margin: 0;
  padding-left: 0;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  list-style-type: none;

  > li:not(:first-child) {
    > a,
    > span {
      margin-left: 0.75rem;
    }
    &::before {
      margin: 0 0.125rem;
      transform: rotate(15deg);
      border-right: 2px solid #999;
      height: 1rem;
      content: "";
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  color: #000;
`;

const CurrentItem = styled.span`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
`;

const Item = styled.a`
  border-radius: 2px;
  padding: 0 2px;
  display: inline-flex;
  align-items: center;
  height: 24px;
  color: #000;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid #0095ff;
  }
`;

const Text = styled.span`
  border: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid #000;
  }
`;

export default DxcBreadcrumbs;
