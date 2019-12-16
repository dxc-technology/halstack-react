import { DxcSelect } from "@diaas/dxc-react-cdk";
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
      label: "Facebook",
      iconSrc: fbLogoPath
    },
    {
      value: 2,
      label: "Twitter",
      iconSrc: twitterLogoPath
    },
    {
      value: 3,
      label: "Linkedin",
      iconSrc: linkedinLogoPath
    }
  ];

  return (
    <DxcSelect
      options={optionsWithIcons}
      onChange={onChange}
      label="Select with Icons"
      value={value}
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
