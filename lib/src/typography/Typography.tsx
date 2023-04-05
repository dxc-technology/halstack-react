import React from "react";
import BaseTypography from "../utils/BaseTypography";
import TypographyPropsTypes from "./types";

const DxcTypography = ({ textOverflow, whiteSpace, children, ...props }: TypographyPropsTypes): JSX.Element => (
  <BaseTypography
    textOverflow={textOverflow}
    whiteSpace={whiteSpace !== "normal" ? whiteSpace : textOverflow !== "unset" ? "nowrap" : "normal"}
    overflow={textOverflow !== "unset" ? "hidden" : "visible"}
    {...props}
  >
    {children}
    </BaseTypography>
);

export default DxcTypography;
