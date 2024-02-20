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
  return (
    <DxcFlex gap={"0.5rem"}>
      {actions.map(
        (action, index) =>
          index < 3 &&
          (action.options?.length ? (
            <HalstackProvider advancedTheme={DropdownTheme} key={`provider-${index}`}>
              <DxcDropdown
                options={action.options}
                onSelectOption={action.onClick}
                disabled={action.disabled}
                icon={moreVertIcon}
                tabIndex={action.tabIndex}
                caretHidden
              ></DxcDropdown>
            </HalstackProvider>
          ) : (
            <DxcActionIcon
              icon={action.icon}
              title={action.title}
              onClick={action.onClick}
              disabled={action.disabled ?? false}
              tabIndex={action.tabIndex ?? 0}
              key={`action-${index}`}
            />
          ))
      )}
    </DxcFlex>
  );
};

export default DxcActionsCell;
