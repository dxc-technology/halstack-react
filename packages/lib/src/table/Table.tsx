import styled from "@emotion/styled";
import DxcDropdown from "../dropdown/Dropdown";
import DxcActionIcon from "../action-icon/ActionIcon";
import TablePropsType, { ActionsCellPropsType } from "./types";
import { useMemo } from "react";
import { Table, TableContainer } from "../styles/tables/tablesStyles";

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);

  /* Action icons and dropdown trigger selector */
  > button:enabled,
  > div > button:enabled {
    color: var(--color-fg-primary-strong);
  }
`;

const DxcActionsCell = ({ actions }: ActionsCellPropsType) => {
  const actionIcons = useMemo(() => actions.filter((action) => !action.options), [actions]);
  const dropdownAction = useMemo(() => actions.find((action) => action.options), [actions]);

  return (
    <ActionsContainer>
      {actionIcons.map(
        (action, index) =>
          index < (dropdownAction ? 2 : 3) && (
            <DxcActionIcon
              icon={action.icon}
              disabled={action.disabled ?? false}
              key={`action-${index}`}
              onClick={action.onClick}
              tabIndex={action.tabIndex ?? 0}
              title={action.title}
            />
          )
      )}
      {dropdownAction && (
        <DxcDropdown
          caretHidden
          disabled={dropdownAction.disabled}
          icon="more_vert"
          onSelectOption={dropdownAction.onClick}
          options={dropdownAction.options ?? []}
          tabIndex={dropdownAction.tabIndex}
          title={dropdownAction.title}
        />
      )}
    </ActionsContainer>
  );
};

const DxcTable = ({ children, margin, mode = "default" }: TablePropsType) => (
  <TableContainer margin={margin}>
    <Table mode={mode}>{children}</Table>
  </TableContainer>
);

DxcTable.ActionsCell = DxcActionsCell;

export { DxcActionsCell };
export default DxcTable;
