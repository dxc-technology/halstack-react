import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

import twitterLogoPath from "./images/twitter.svg";
import linkedinLogoPath from "./images/linkedin.svg";

const code = `() => {
  const [value, changeValue] = useState();
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const optionsWithIcons = [
    {
      value: 1,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>)
    },
    {
      value: 2,
      icon: <img src={twitterLogoPath} />
    },
    {
      value: 3,
      icon: <img src={linkedinLogoPath} />
    }
  ];

  return (
    <DxcSelect
      options={optionsWithIcons}
      onChange={onChange}
      label="Icons"
      value={value}
      margin="medium"
      size="small"
    ></DxcSelect>
  );
}`;

const scope = {
  DxcSelect,
  useState,
  linkedinLogoPath,
  twitterLogoPath,
};

export default { code, scope };
