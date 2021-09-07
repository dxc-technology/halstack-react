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

  const action = {
    onClick: () => {
      console.log("Copy that!");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
  };

  return (
    <DxcNewInputText
      label="Disabled"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      action={action}
      disabled
    />
  );
}`;

const scope = {
  DxcNewInputText,
  Avatar,
  useState,
};

export default { code, scope };
