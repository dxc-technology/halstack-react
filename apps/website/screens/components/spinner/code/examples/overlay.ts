import { DxcSpinner, DxcButton, DxcInset } from "@dxc-technology/halstack-react";
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
      <DxcButton label="Show Spinner for 3 seconds" onClick={showModal} />
      {isVisible && <DxcSpinner label="Loading..." mode="overlay" />}
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
  DxcButton,
  useState,
};

export default { code, scope };
