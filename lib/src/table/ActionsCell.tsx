import React from "react";
import { ActionCellsPropsType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import { DxcDropdown, DxcFlex, HalstackProvider } from "../main";
import DropdownTheme from "./DropdownTheme";

const moreVertIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
  </svg>
);

const DxcActionsCell = ({ actions }: ActionCellsPropsType): JSX.Element => {
  const actionIcons = actions.filter((action) => !action.options);
  const actionDropdown = actions.find((action) => action.options);
  const maxNumberOfActions = actionDropdown ? 2 : 3;

  return (
    <DxcFlex gap={"0.5rem"}>
      {actionIcons.map(
        (action, index) =>
          index < maxNumberOfActions && (
            <DxcActionIcon
              icon={action.icon}
              title={action.title}
              onClick={action.onClick}
              disabled={action.disabled ?? false}
              tabIndex={action.tabIndex ?? 0}
              key={`action-${index}`}
            />
          )
      )}
      {actionDropdown && (
        <HalstackProvider advancedTheme={DropdownTheme} key={`provider-dropdown`}>
          <DxcDropdown
            options={actionDropdown.options}
            onSelectOption={actionDropdown.onClick}
            disabled={actionDropdown.disabled}
            icon={moreVertIcon}
            tabIndex={actionDropdown.tabIndex}
            caretHidden
          ></DxcDropdown>
        </HalstackProvider>
      )}
    </DxcFlex>
  );
};

export default DxcActionsCell;
