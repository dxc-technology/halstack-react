import { getMargin } from "../common/utils";
import { TableProps } from "./types";

export const calculateWidth = (margin: TableProps["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
