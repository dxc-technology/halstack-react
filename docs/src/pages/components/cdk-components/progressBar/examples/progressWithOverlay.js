import { DxcProgressBar, DxcButton } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(false);
  const showModal = () => {
    changeIsVisible(true);
    fetchData().then(() => {
      changeIsVisible(false);
    });
  };
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <div>
      <DxcButton
        theme="light"
        label="Show Progress Bar for 3 seconds"
        onClick={showModal}
      />

      {isVisible && <DxcProgressBar label="Loading" helperText="Helper text" overlay={true} />}
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcButton,
  useState,
};

export default { code, scope };
