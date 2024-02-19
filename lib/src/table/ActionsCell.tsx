import React from "react";
import { ActionIconPropsType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import { DxcDropdown, DxcFlex, HalstackProvider } from "../main";
import DropdownTheme from "./DropdownTheme";

const DxcActionsCell = ({ actions }: ActionIconPropsType): JSX.Element => {
  return (
    <DxcFlex gap={"0.5rem"}>
      {actions.map((action) =>
        action.options?.length ? (
          <HalstackProvider advancedTheme={DropdownTheme}>
            <DxcDropdown
              options={action.options}
              onSelectOption={action.onClick}
              disabled={action.disabled}
              icon={action.icon}
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
          />
        )
      )}
    </DxcFlex>
  );
};

export default DxcActionsCell;
