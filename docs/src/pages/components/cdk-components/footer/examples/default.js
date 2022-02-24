import { DxcFooter } from "@dxc-technology/halstack-react";

import linkedinLogo from "./images/linkedin.svg";
import twitterLogo from "./images/twitter.svg";
import facebookLogo from "./images/facebook.svg";

const code = `() => {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logo: linkedinLogo
    },
    {
      href: "https://twitter.com/dxctechnology",
      logo: twitterLogo
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logo: facebookLogo
    }
  ];
  const bottom = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook"
    }
  ];

  return (
    <DxcFooter
      copyright="© DXC Technology 2020. All rights reserved."
      bottomLinks={bottom}
      socialLinks={social}
      margin="medium"
    ></DxcFooter>
  );
}`;

const scope = {
  DxcFooter,
  linkedinLogo,
  twitterLogo,
  facebookLogo
};

export default { code, scope };
