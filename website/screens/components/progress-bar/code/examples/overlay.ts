import {
  DxcProgressBar,
  DxcButton,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
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
    <DxcInset space="large">
      <DxcStack space="large" align="start">
        <DxcButton
          label="Show Progress Bar for 3 seconds"
          onClick={showModal}
        />

        {isVisible && (
          <DxcProgressBar
            label="Loading"
            overlay={true}
          />
        )}
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcButton,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };
