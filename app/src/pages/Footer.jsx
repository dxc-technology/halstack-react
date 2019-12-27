import React from "react";
import { DxcFooter, DxcInputText } from "@diaas/dxc-react-cdk";

import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";

function App() {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
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
      margin="large"
    ></DxcFooter>
  );
}

export default App;
