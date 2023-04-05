import React, { useContext } from "react";
import BackgroundColorContext from "../BackgroundColorContext";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";

type ParagraphPropsType = {
  children: React.ReactNode;
};

const DxcParagraph = ({ children }: ParagraphPropsType): JSX.Element => {
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
