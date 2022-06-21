import React, { useContext } from "react";
import DxcTypography from "../typography/Typography";
import BackgroundColorContext from "../BackgroundColorContext";

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps): JSX.Element {
  const backgroundType = useContext(BackgroundColorContext);
  return (
    <DxcTypography
      as="p"
      display="block"
      fontSize="1rem"
      fontWeight="400"
      color={backgroundType && backgroundType === "dark" ? "#FFFFFF" : "#000000"}
    >
      {children}
    </DxcTypography>
  );
}

export default Paragraph;
