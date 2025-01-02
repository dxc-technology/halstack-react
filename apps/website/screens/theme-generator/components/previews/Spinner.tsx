import { useState } from "react";
import { DxcSpinner, DxcButton } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Spinner = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const showModal = () => {
    changeIsVisible(true);
    fetchData().then(() => {
      changeIsVisible(false);
    });
  };
  const fetchData = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <PreviewContainer>
      <Mode text="Undeterminate default">
        <DxcSpinner label="Loading..." />
      </Mode>
      <Mode text="Determinate default">
        <DxcSpinner label="Loading..." showValue value={50} />
      </Mode>
      <Mode text="Small">
        <DxcSpinner mode="small" />
      </Mode>
      <Mode text="With overlay">
        <DxcButton label="Show Spinner for 3 seconds" onClick={showModal} />
        {isVisible && <DxcSpinner label="Loading..." mode="overlay" />}
      </Mode>
    </PreviewContainer>
  );
};

export default Spinner;
