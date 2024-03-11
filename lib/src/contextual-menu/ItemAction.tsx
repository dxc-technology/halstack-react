import React from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { ItemActionProps } from "./types";

const ItemAction = ({ icon, label, level, selected, slot, ...props }: ItemActionProps) => (
  <Action level={level} selected={selected} {...props}>
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

const Action = styled.button<{ level: ItemActionProps["level"]; selected: ItemActionProps["selected"]; }>`
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: ${(props) =>
    `${CoreTokens.spacing_4} ${CoreTokens.spacing_8} ${CoreTokens.spacing_4} ${`
    calc(${CoreTokens.spacing_8} + (${CoreTokens.spacing_24} * ${props.level}))
  `};`};
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

export default ItemAction;
