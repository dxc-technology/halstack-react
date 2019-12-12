import { DxcDropdown } from "@diaas/dxc-react-cdk";
import fbLogo from "./images/facebook.svg";
import twitterLogo from "./images/twitter.svg";
import linkedinLogo from "./images/linkedin.svg";
import { useState } from "react";

const code = `() => {
  const selectOption = () => {
    console.log("selected");
  };

  const optionsWithIcon = [
    {
      value: 1,
      label: "Facebook",
      iconSrc: fbLogo
    },
    {
      value: 2,
      label: "Twitter",
      iconSrc: twitterLogo
    },
    {
      value: 3,
      label: "Linkedin",
      iconSrc: linkedinLogo
    }
  ];

  return (
    <DxcDropdown
      options={optionsWithIcon}
      onSelectOption={selectOption}
      label="Basic dropdown"
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState,
  fbLogo,
  twitterLogo,
  linkedinLogo
};

export default { code, scope };
