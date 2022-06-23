import React, { useContext } from "react";
import DxcTypography from "../typography/Typography";
import BackgroundColorContext from "../BackgroundColorContext";
import useTheme from "../useTheme";

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps): JSX.Element {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
  return (
    <DxcTypography
      as="p"
      display="block"
      fontSize="1rem"
      fontWeight="400"
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
