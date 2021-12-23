import { V3DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

import twitterLogoPath from "./images/twitter.svg";
import linkedinLogoPath from "./images/linkedin.svg";
import facebookLogoPath from "./images/facebook.svg";

const code = `() => {
  const [value, changeValue] = useState();
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const optionsWithIcons = [
    {
      value: 1,
      icon: <img src={facebookLogoPath} />
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
    <V3DxcSelect
      options={optionsWithIcons}
      onChange={onChange}
      label="Icons"
      value={value}
      margin="medium"
      size="small"
    ></V3DxcSelect>
  );
}`;

const scope = {
  V3DxcSelect,
  useState,
  linkedinLogoPath,
  twitterLogoPath,
  facebookLogoPath,
};

export default { code, scope };
