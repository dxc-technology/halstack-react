import React from "react";
import { DxcTag } from "@diaas/dxc-react-cdk";

import twitterIcon from "../images/twitter.svg";
import fbIcon from "../images/facebook.svg";
import liIcon from "../images/linkedin.svg";

function App() {
  return (
    <div>
      <DxcTag
        margin="medium"
        linkHref="http://www.google.com"
        iconSrc={twitterIcon}
        label="Twitter"
        iconBgColor="#50ABF1"
      ></DxcTag>
      <DxcTag
        margin="medium"
        onClick={() => {
          console.log("click");
        }}
        iconSrc={fbIcon}
        iconBgColor="#4267b2"
        label="Facebook"
      ></DxcTag>
      <DxcTag
        margin="medium"
        iconSrc={liIcon}
        iconBgColor="#007BB5"
        label="LinkedIn"
        labelPosition="before"
      ></DxcTag>
    </div>
  );
}

export default App;
