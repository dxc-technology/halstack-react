import styled from "@emotion/styled";
import TablePropsType from "../../table/types";
import scrollbarStyles from "../scroll";
import { calculateWidth } from "../../table/utils";
import { spaces } from "../../common/variables";

export const TableContainer = styled.div<{ margin: TablePropsType["margin"] }>`
  max-height: 100%;
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

export const Table = styled.table<{ mode: TablePropsType["mode"] }>`
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
    padding: var(--spacing-padding-s) var(--spacing-padding-m);
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
    padding: var(--spacing-padding-s) var(--spacing-padding-m);
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
