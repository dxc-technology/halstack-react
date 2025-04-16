import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces, AdvancedTheme } from "../common/variables";
import { getMargin } from "../common/utils";
import DxcDropdown from "../dropdown/Dropdown";
import DxcFlex from "../flex/Flex";
import HalstackContext, { DeepPartial, HalstackProvider } from "../HalstackContext";
import dropdownTheme from "./dropdownTheme";
import DxcActionIcon from "../action-icon/ActionIcon";
import TablePropsType, { ActionCellsPropsType } from "./types";

const overwriteTheme = (theme: AdvancedTheme): DeepPartial<AdvancedTheme> => {
  const newTheme = dropdownTheme;
  newTheme.dropdown.buttonBackgroundColor = theme.table.actionBackgroundColor;
  newTheme.dropdown.hoverButtonBackgroundColor = theme.table.hoverActionBackgroundColor;
  newTheme.dropdown.activeButtonBackgroundColor = theme.table.activeActionBackgroundColor;
  newTheme.dropdown.buttonIconColor = theme.table.actionIconColor;
  newTheme.dropdown.disabledColor = theme.table.disabledActionIconColor;
  newTheme.dropdown.disabledButtonBackgroundColor = theme.table.disabledActionBackgroundColor;
  return newTheme;
};

export const DxcActionsCell = ({ actions }: ActionCellsPropsType): JSX.Element => {
  const actionIcons = actions.filter((action) => !action.options);
  const actionDropdown = actions.find((action) => action.options);
  const maxNumberOfActions = actionDropdown ? 2 : 3;
  const colorsTheme = useContext(HalstackContext);

  return (
    <DxcFlex gap="var(--spacing-gap-s)" alignItems="center">
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
        <HalstackProvider advancedTheme={overwriteTheme(colorsTheme)} key="provider-dropdown">
          <DxcDropdown
            options={actionDropdown.options ?? []}
            onSelectOption={actionDropdown.onClick}
            disabled={actionDropdown.disabled}
            icon="more_vert"
            tabIndex={actionDropdown.tabIndex}
            caretHidden
          ></DxcDropdown>
        </HalstackProvider>
      )}
    </DxcFlex>
  );
};

const DxcTable = ({ children, margin, mode = "default" }: TablePropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);

  return (
    <ThemeProvider theme={colorsTheme.table}>
      <DxcTableContainer margin={margin}>
        <DxcTableContent mode={mode}>{children}</DxcTableContent>
      </DxcTableContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin: TablePropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const DxcTableContainer = styled.div<{ margin: TablePropsType["margin"] }>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarThumbColor};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBarTrackColor};
    border-radius: 6px;
  }
`;

const DxcTableContent = styled.table<{ mode: TablePropsType["mode"] }>`
  border-collapse: collapse;
  width: 100%;

  & tr {
    border-bottom: ${(props) =>
      `${props.theme.rowSeparatorThickness} ${props.theme.rowSeparatorStyle} ${props.theme.rowSeparatorColor}`};
    height: ${(props) => (props.mode === "default" ? "60px" : "36px")};
  }
  & td {
    background-color: ${(props) => props.theme.dataBackgroundColor};
    font-family: ${(props) => props.theme.dataFontFamily};
    font-size: ${(props) => props.theme.dataFontSize};
    font-style: ${(props) => props.theme.dataFontStyle};
    font-weight: ${(props) => props.theme.dataFontWeight};
    color: ${(props) => props.theme.dataFontColor};
    text-transform: ${(props) => props.theme.dataFontTextTransform};
    text-align: ${(props) => props.theme.dataTextAlign};
    line-height: ${(props) => props.theme.dataTextLineHeight};
    padding: ${(props) =>
      props.mode === "default"
        ? `${props.theme.dataPaddingTop} ${props.theme.dataPaddingRight} ${props.theme.dataPaddingBottom} ${props.theme.dataPaddingLeft}`
        : `${props.theme.dataPaddingTopReduced} ${props.theme.dataPaddingRightReduced} ${props.theme.dataPaddingBottomReduced} ${props.theme.dataPaddingLeftReduced}`};
  }
  & th {
    background-color: ${(props) => props.theme.headerBackgroundColor};
    font-family: ${(props) => props.theme.headerFontFamily};
    font-size: ${(props) => props.theme.headerFontSize};
    font-style: ${(props) => props.theme.headerFontStyle};
    font-weight: ${(props) => props.theme.headerFontWeight};
    color: ${(props) => props.theme.headerFontColor};
    text-transform: ${(props) => props.theme.headerFontTextTransform};
    text-align: ${(props) => props.theme.headerTextAlign};
    line-height: ${(props) => props.theme.headerTextLineHeight};
    padding: ${(props) =>
      props.mode === "default"
        ? `${props.theme.headerPaddingTop} ${props.theme.headerPaddingRight} ${props.theme.headerPaddingBottom} ${props.theme.headerPaddingLeft}`
        : `${props.theme.headerPaddingTopReduced} ${props.theme.headerPaddingRightReduced} ${props.theme.headerPaddingBottomReduced} ${props.theme.headerPaddingLeftReduced}`};
  }
  & th:first-child {
    border-top-left-radius: ${(props) => props.theme.headerBorderRadius};
    padding-left: ${(props) =>
      props.mode === "default" ? props.theme.firstChildPaddingLeft : props.theme.firstChildPaddingLeftReduced};
  }
  & th:last-child {
    border-top-right-radius: ${(props) => props.theme.headerBorderRadius};
    padding-right: ${(props) =>
      props.mode === "default" ? props.theme.lastChildPaddingRight : props.theme.lastChildPaddingRightReduced};
  }
  & td:first-child {
    padding-left: ${(props) =>
      props.mode === "default" ? props.theme.firstChildPaddingLeft : props.theme.firstChildPaddingLeftReduced};
  }
  & td:last-child {
    padding-right: ${(props) =>
      props.mode === "default" ? props.theme.lastChildPaddingRight : props.theme.lastChildPaddingRightReduced};
  }
`;

DxcTable.ActionsCell = DxcActionsCell;

export default DxcTable;
