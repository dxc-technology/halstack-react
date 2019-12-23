import { DxcProgressBar, DxcButton } from "@diaas/dxc-react-cdk";
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
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <div>
      <DxcButton
        mode="basic"
        theme="light"
        label="Show Progress Bar for 3 seconds"
        onClick={showModal}
      />

      {isVisible && <DxcProgressBar label="Loading" overlay={true} />}
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcButton,
  useState
};

export default { code, scope };
