import { DxcAlert } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(true);

  if (isVisible) {
    return (
      <DxcAlert
        type="error"
        mode="inline"
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
