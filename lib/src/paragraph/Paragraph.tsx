import React, { useContext } from "react";
import DxcTypography from "../typography/Typography";
import BackgroundColorContext from "../BackgroundColorContext";
import useTheme from "../useTheme";

type ParagraphPropsType = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphPropsType): JSX.Element {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
  return (
    <DxcTypography
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
    </DxcTypography>
  );
}

export default Paragraph;
