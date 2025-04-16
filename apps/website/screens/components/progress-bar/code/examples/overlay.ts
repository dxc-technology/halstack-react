import { DxcProgressBar, DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
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
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="flex-start">
        <DxcButton
          label="Show Progress Bar for 3 seconds"
          onClick={showModal}
        />
        {isVisible && (
          <DxcProgressBar
            label="Loading"
            overlay
          />
        )}
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcButton,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
