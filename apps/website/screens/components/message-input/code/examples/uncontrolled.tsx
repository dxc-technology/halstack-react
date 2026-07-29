import { DxcMessageInput, DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const onChange = ({ value }) => {
    setValue(value);
  };
  
  const onBlur = ({ value }) => {
    console.log("Input blurred with value:", value);
  };

  const onButtonClick = async ({type, value}) => {
    if (type === "submit") {
      console.log("Submitted message:", value);
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setValue(""); // Clear input after submit
    }
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
        <DxcMessageInput
          placeholder="Type your message..."
          defaultValue="Hello, how can I help you?"
        />
    </DxcInset>
  );
}`;

const scope = {
  DxcMessageInput,
  DxcButton,
  DxcFlex,
  DxcInset,
  useRef,
};

export default { code, scope };
