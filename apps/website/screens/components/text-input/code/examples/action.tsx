import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const actionIcon = {
    icon: "Content_Copy",
    onClick: () => {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          alert("Code copied!");
        })
        .catch(() => {
          alert("Failed attempt to copy the text.");
        });
    },
    title: "Copy the text",
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTextInput 
        action={actionIcon}
        clearable
        label="Enter your name"
        onChange={onChange}
        value={value}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  useState,
};

export default { code, scope };
