import { DxcAlert, DxcButton } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };

  return (
    <div>
      <div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Overlay Alert"
          onClick={handleVisibility}
          margin="medium"
        />
      </div>
      {isVisible && (
        <DxcAlert
          type="info"
          mode="modal"
          onClose={handleVisibility}
          inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          margin="medium"
        ></DxcAlert>
      )}
    </div>
  );
}`;

const scope = {
  DxcAlert,
  DxcButton,
  useState
};

export default { code, scope };
