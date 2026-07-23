import { DxcMessageInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();
  
  const onChange = ({ value }) => {
    setValue(value);
  };
  
  const onBlur = ({ value, error }) => {
    setError(error)
  };

  const onButtonClick = async ({type}) => {
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onButtonClick={onButtonClick}
        error={error}
        minLength={5}
        maxLength={15}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcMessageInput,
  DxcInset,
  useState,
};

export default { code, scope };
