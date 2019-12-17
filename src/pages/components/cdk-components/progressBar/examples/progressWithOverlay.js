import { DxcProgressBar, DxcButton } from "@diaas/dxc-react-cdk";
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
            <DxcProgressBar label="Loading" overlay={true} showValue value={45}/>
        )}
      </div>
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcButton,
  useState
};

export default { code, scope };
