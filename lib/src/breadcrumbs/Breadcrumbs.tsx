import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import BreadcrumbsProps, { Item } from "./types";
import { css } from "styled-components";
import DxcActionIcon from "../action-icon/ActionIcon";
import * as Popover from "@radix-ui/react-popover";
import DxcContainer from "../container/Container";

const defaultCollapsedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
  </svg>
);

const DropdownMenu = ({
  collapsedIcon,
  items,
}: {
  collapsedIcon: BreadcrumbsProps["collapsedIcon"];
  items: BreadcrumbsProps["items"];
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Popover.Root open={collapsed}>
      <Popover.Trigger asChild type={undefined}>
        <DxcActionIcon
          icon={collapsedIcon ?? defaultCollapsedIcon}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          title="Expand/collapse breadcrumbs menu"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={6} style={{ zIndex: "2147483647" }}>
          <DxcContainer
            boxSizing="border-box"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            border={{ width: "1px", style: "solid", color: "color_grey_400" }}
            borderRadius="0.25rem"
            background={{ color: "color_white" }}
            padding={{ top: "xxsmall", bottom: "xxsmall" }}
            maxHeight="304px"
            width="fitContent"
            overflow={{ x: "hidden", y: "auto" }}
          >
            {items.map((item, index) => (
              <DxcContainer padding={{ left: "xsmall", right: "xsmall" }}>
                <DxcContainer
                  border={
                    index !== items.length - 1
                      ? { bottom: { width: "1px", style: "solid", color: "color_grey_200" } }
                      : undefined
                  }
                  padding="xxsmall"
                  overflow="hidden"
                >
                  <Label>{item.label}</Label>
                </DxcContainer>
              </DxcContainer>
            ))}
          </DxcContainer>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const mapItems = (item: Item, index: number, { length }) => {
  const isLast = index === length - 1;

  return (
    <ListItem key={index} aria-current={isLast ? "page" : undefined}>
      {isLast ? (
        <CurrentLabel>{item.label}</CurrentLabel>
      ) : (
        <Link href={item.href}>
          <Text>{item.label}</Text>
        </Link>
      )}
    </ListItem>
  );
};

const mapMultipleItems = (
  collapsedIcon: BreadcrumbsProps["collapsedIcon"],
  items: BreadcrumbsProps["items"],
  showRoot: BreadcrumbsProps["showRoot"]
) => {
  const first = items[0];
  const last = items[items.length - 1];

  return (
    <>
      {showRoot && (
        <ListItem key={0}>
          <Link href={first.href}>
            <Text>{first.label}</Text>
          </Link>
        </ListItem>
      )}
      <ListItem key={1}>
        <DropdownMenu collapsedIcon={collapsedIcon} items={items.slice(showRoot ? 1 : 0, -1)} />
      </ListItem>
      <ListItem key={2} aria-current="page">
        <CurrentLabel>{last.label}</CurrentLabel>
      </ListItem>
    </>
  );
};

const DxcBreadcrumbs = ({
  ariaLabel = "Breadcrumbs",
  collapsedIcon,
  items,
  itemsBeforeCollapse = 4,
  showRoot = true,
}: BreadcrumbsProps) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.breadcrumbs}>
      <nav aria-label={ariaLabel}>
        <OrderedList>
          {itemsBeforeCollapse >= 2 && items.length > itemsBeforeCollapse
            ? mapMultipleItems(collapsedIcon, items, showRoot)
            : items.map(mapItems)}
        </OrderedList>
      </nav>
    </ThemeProvider>
  );
};

const OrderedList = styled.ol`
  padding-left: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;

  > li:not(:first-child) {
    margin-left: 0.75rem;

    > a,
    > span,
    > button {
      margin-left: 0.75rem;
    }
    &::before {
      display: inline-flex;
      transform: rotate(15deg);
      border-right: 2px solid #999;
      height: 1rem;
      content: "";
    }
  }
`;

const sharedStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  ${sharedStyles}
  color: #000;
`;

const CurrentLabel = styled.span`
  ${sharedStyles}
  color: #999;
`;

const Link = styled.a`
  border-radius: 2px;
  padding: 0 2px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px #0095ff;
    outline: none;
  }
`;

const Text = styled.span`
  box-sizing: border-box;
  ${sharedStyles}
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #000000;
  }
`;

export default DxcBreadcrumbs;
