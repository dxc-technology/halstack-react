import { getMargin } from "../common/utils";
import TablePropsType from "./types";

export const calculateWidth = (margin: TablePropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
