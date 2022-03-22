import { DxcDropdown } from "@dxc-technology/halstack-react";
import { useState } from "react";
import facebookLogo from "./images/facebook-black.svg";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };

  const iconSVG = (
    <svg viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const options = [
    {
      value: 1,
      label: "Facebook",
      icon: iconSVG
    },
    {
      value: 2,
      label: "Twitter",
      icon: "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"
    },
    {
      value: 3,
      label: "Linkedin",
      icon: iconSVG
    }
  ];

  return (
    <DxcDropdown
      options={options}
      onSelectOption={selectOption}
      icon={facebookLogo}
      label="Dropdown with icons"
      margin="medium"
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState,
  facebookLogo,
};

export default { code, scope };
