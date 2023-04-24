import React, { useContext } from "react";
import BackgroundColorContext from "../BackgroundColorContext";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";

const DxcParagraph = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  return (
    <BaseTypography
      as="p"
      display={colorsTheme.paragraph.display}
      fontSize={colorsTheme.paragraph.fontSize}
      fontWeight={colorsTheme.paragraph.fontWeight}
      color={
        backgroundType && backgroundType === "dark"
          ? colorsTheme.paragraph.fontColorOnDark
          : colorsTheme.paragraph.fontColor
      }
    >
      {children}
    </BaseTypography>
  );
};

export default DxcParagraph;
