import React from "react";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";

const DxcParagraph = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <BaseTypography
      as="p"
      display={colorsTheme.paragraph.display}
      fontSize={colorsTheme.paragraph.fontSize}
      fontWeight={colorsTheme.paragraph.fontWeight}
      color={colorsTheme.paragraph.fontColor}
    >
      {children}
    </BaseTypography>
  );
};

export default DxcParagraph;
