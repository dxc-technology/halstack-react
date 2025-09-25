import { DxcDialog, DxcButton, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcButton label="Enter your data" onClick={handleClick} />
      {isDialogVisible && (
        <DxcDialog onBackgroundClick={handleClick} closable={false}>
          <DxcInset space="var(--spacing-padding-l)">
            <DxcParagraph>Please enter your personal information.</DxcParagraph>
          </DxcInset>
        </DxcDialog>
      )}
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcInset,
  DxcParagraph,
};

export default { code, scope };
