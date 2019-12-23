import { DxcSpinner, DxcButton } from "@diaas/dxc-react-cdk";
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
        label="Show Spinner for 3 seconds"
        onClick={showModal}
      />

      {isVisible && (
        <DxcSpinner theme="light" label="Loading..." mode="overlay" />
      )}
    </div>
  );
}`;

const scope = {
  DxcSpinner,
  DxcButton,
  useState
};

export default { code, scope };
