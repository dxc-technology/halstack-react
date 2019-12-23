import { DxcFooter } from "@diaas/dxc-react-cdk";

import linkedinLogo from "./images/linkedin.svg";
import twitterLogo from "./images/twitter.svg";
import facebookLogo from "./images/facebook.svg";

const code = `() => {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedinLogo
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitterLogo
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebookLogo
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
      copyright="© DXC Technology 2019. All rights reserved."
      bottomLinks={bottom}
      socialLinks={social}
    >
      <div style={{ padding: "20px" }}>
        <li>
          <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
        </li>
        <li>
          <a href="https://twitter.com/dxctechnology">Twitter</a>
        </li>
        <li>
          <a href="https://www.facebook.com/DXCTechnology/">Facebook</a>
        </li>
      </div>
    </DxcFooter>
  );
}`;

const scope = {
  DxcFooter,
  linkedinLogo,
  twitterLogo,
  facebookLogo
};

export default { code, scope };
