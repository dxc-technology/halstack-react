import { DxcNewInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";
import { ReactComponent as Avatar } from "../images/delete-24px.svg";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = (info) => {
    setValue(info.value);
  };

  const onBlur = (info) => {
    setValue(info.value);
  };

  const actionImportSVG = {
    onClick: () => {
      console.log("Delete that!");
    },
    icon: <Avatar></Avatar>,
  };

  return (
    <DxcNewInputText
      label="Action"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      clearable
      margin="medium"
      action={actionImportSVG}
    />
  );
}`;

const scope = {
  DxcNewInputText,
  Avatar,
  useState,
};

export default { code, scope };
