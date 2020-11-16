import { DxcToggleGroup } from "@dxc-technology/halstack-react";

import fbLogoPath from "./images/facebook.svg";
import twitterLogoPath from "./images/twitter.svg";
import linkedinLogoPath from "./images/linkedin.svg";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
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
    <DxcToggleGroup
      options={optionsWithIcons}
      onChange={onChange}
      margin="medium"
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
  linkedinLogoPath,
  twitterLogoPath,
  fbLogoPath
};

export default { code, scope };
