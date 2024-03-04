import React from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { MenuItemActionProps } from "./types";

const MenuItemAction = ({ label, icon, slot, selected, onSelect }: MenuItemActionProps) => (
  <Action aria-selected={selected} selected={selected} onClick={() => onSelect()}>
    <Label>
      {icon && <Icon aria-hidden>{typeof icon === "string" ? <img src={icon} /> : icon}</Icon>}
      <Text
        onMouseEnter={(event: React.MouseEvent<HTMLSpanElement>) => {
          const text = event.currentTarget;
          if (text.title === "" && text.scrollWidth > text.clientWidth) text.title = label;
        }}
      >
        {label}
      </Text>
    </Label>
    {slot}
  </Action>
);

const Action = styled.button<{ selected?: boolean }>`
  border: none;
  border-radius: 4px;
  padding: ${CoreTokens.spacing_4} ${CoreTokens.spacing_8};
  box-shadow: inset 0 0 0 2px transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${CoreTokens.spacing_16};
  color: ${CoreTokens.color_grey_900};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  line-height: 24px;
  ${(props) =>
    props.selected
      ? `background-color: ${CoreTokens.color_purple_100}; font-weight: ${CoreTokens.type_semibold};`
      : `background-color: ${CoreTokens.color_transparent}`};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    ${(props) =>
      props.selected
        ? `background-color: ${CoreTokens.color_purple_200};`
        : `background-color: ${CoreTokens.color_grey_100};`};
  }
  &:active {
    ${(props) =>
      props.selected
        ? `background-color: ${CoreTokens.color_purple_200};`
        : `background-color: ${CoreTokens.color_grey_100};`};
  }
  &:focus {
    outline: 2px solid ${CoreTokens.color_blue_600};
    outline-offset: -1px;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
  overflow: hidden;
`;

const Text = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

export default React.memo(MenuItemAction);
