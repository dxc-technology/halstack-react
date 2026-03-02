import { DxcButton, DxcDialog, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const DialogPreview = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };
  return (
    <>
      <DxcButton label="Trigger dialog" onClick={handleClick} />
      {isDialogVisible && (
        <DxcDialog onBackgroundClick={handleClick} onCloseClick={handleClick}>
          <DxcInset space="var(--spacing-padding-l)">
            <DxcParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio quia quisquam id iusto consequuntur
              repudiandae. Aspernatur nisi dolore veniam, repellendus odio excepturi aperiam harum unde similique rerum
              fuga qui?
            </DxcParagraph>
          </DxcInset>
        </DxcDialog>
      )}
    </>
  );
};

export default DialogPreview;
