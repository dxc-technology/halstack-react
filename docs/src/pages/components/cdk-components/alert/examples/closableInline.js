import { DxcAlert } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(true);
  const onClose = () => {
    changeIsVisible(!isVisible);
  };

  if (isVisible) {
    return (
      <DxcAlert
        type="confirm"
        mode="inline"
        onClose={onClose}
        inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        margin="medium"
      />
    );
  }
  return null;
}`;

const scope = {
  DxcAlert,
  useState
};

export default { code, scope };
