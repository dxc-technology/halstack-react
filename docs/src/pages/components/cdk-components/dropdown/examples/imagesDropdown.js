import { DxcDropdown } from "@dxc-technology/halstack-react";
import fbLogo from "./images/facebook-black.svg";
import twitterLogo from "./images/twitter-black.svg";
import linkedinLogo from "./images/linkedin-black.svg";
import { useState } from "react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
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
      options={options}
      onSelectOption={selectOption}
      iconSrc={twitterLogo}
      label="Dropdown with icons"
      margin="medium"
      padding="small"
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
