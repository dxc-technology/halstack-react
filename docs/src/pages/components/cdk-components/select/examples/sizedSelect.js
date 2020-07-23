import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

import fbLogoPath from "./images/facebook.svg";
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
      iconSrc: fbLogoPath
    },
    {
      value: 2,
      iconSrc: twitterLogoPath
    },
    {
      value: 3,
      iconSrc: linkedinLogoPath
    }
  ];

  return (
    <DxcSelect
      options={optionsWithIcons}
      onChange={onChange}
      label="Icons"
      value={value}
      margin="medium"
      padding="small"
      size="small"
    ></DxcSelect>
  );
}`;

const scope = {
  DxcSelect,
  useState,
  linkedinLogoPath,
  twitterLogoPath,
  fbLogoPath
};

export default { code, scope };
