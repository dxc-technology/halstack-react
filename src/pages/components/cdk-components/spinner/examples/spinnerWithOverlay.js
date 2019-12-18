import { DxcSpinner, DxcButton } from "@diaas/dxc-react-cdk";
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
          label="ProgressBar with overlay"
          onClick={handleVisibility}
        />
      </div>
      <div onClick={handleVisibility}>
        {isVisible && (
            <DxcSpinner theme="light" label="Loading..." mode="overlay" />
        )}
      </div>
    </div>
  );
}`;

const scope = {
  DxcSpinner,
  DxcButton,
  useState
};

export default { code, scope };
