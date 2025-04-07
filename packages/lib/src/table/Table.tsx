import styled from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import DxcDropdown from "../dropdown/Dropdown";
import DxcActionIcon from "../action-icon/ActionIcon";
import TablePropsType, { ActionsCellPropsType } from "./types";
import { scrollbarStyles } from "../styles/scroll";
import { useMemo } from "react";

const calculateWidth = (margin: TablePropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const TableContainer = styled.div<{ margin: TablePropsType["margin"] }>`
  width: ${({ margin }) => calculateWidth(margin)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  overflow: auto;
  ${scrollbarStyles}
`;

const Table = styled.table<{ mode: TablePropsType["mode"] }>`
  border-collapse: collapse;
  width: 100%;

  & tr {
    border-bottom: var(--border-width-s) solid var(--border-color-neutral-lighter);
    height: ${({ mode }) => (mode === "default" ? "var(--height-xxl)" : "var(--height-l)")};
  }
  & td {
    background-color: var(--color-fg-neutral-bright);
    color: var(--color-fg-neutral-dark);
    font-family: var(--typography-font-family);
    font-size: var(--typography-label-m);
    font-style: normal;
    font-weight: var(--typography-label-regular);
    line-height: normal;
    padding: var(--spacing-padding-none) var(--spacing-padding-m);
    text-align: start;
  }
  & th {
    background-color: var(--color-fg-primary-strong);
    color: var(--color-fg-neutral-bright);
    font-family: var(--typography-font-family);
    font-size: var(--typography-label-m);
    font-style: normal;
    font-weight: var(--typography-label-regular);
    line-height: normal;
    padding: var(--spacing-padding-none) var(--spacing-padding-m);
    text-align: start;
  }
  & th:first-child {
    border-top-left-radius: var(--border-radius-s);
    padding-left: var(--spacing-padding-ml);
  }
  & th:last-child {
    border-top-right-radius: var(--border-radius-s);
    padding-right: var(--spacing-padding-ml);
  }
  & td:first-child {
    padding-left: var(--spacing-padding-ml);
  }
  & td:last-child {
    padding-right: var(--spacing-padding-ml);
  }
`;

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
  const actionDropdown = useMemo(() => actions.find((action) => action.options), [actions]);
  const actionIcons = useMemo(() => actions.filter((action) => !action.options), [actions]);

  return (
    <ActionsContainer>
      {actionIcons.map(
        (action, index) =>
          index < (actionDropdown ? 2 : 3) && (
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
      {actionDropdown && (
        <DxcDropdown
          caretHidden
          disabled={actionDropdown.disabled}
          icon="more_vert"
          onSelectOption={actionDropdown.onClick}
          options={actionDropdown.options ?? []}
          tabIndex={actionDropdown.tabIndex}
          title={actionDropdown.title}
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
