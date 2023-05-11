import React from "react";
import BaseTypography from "../utils/BaseTypography";
import TypographyPropsTypes from "./types";

const DxcTypography = ({ textOverflow, whiteSpace, children, ...props }: TypographyPropsTypes): JSX.Element => (
  <BaseTypography
    textOverflow={textOverflow}
    whiteSpace={whiteSpace == null && textOverflow != null && textOverflow !== "unset" ? "nowrap" : whiteSpace}
    {...props}
  >
    {children}
  </BaseTypography>
);

export default DxcTypography;
