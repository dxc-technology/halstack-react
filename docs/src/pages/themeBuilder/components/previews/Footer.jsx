import React from "react";
import styled from "styled-components";
import { DxcFooter } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import linkedinIcon from "../../images/LinkedinIcon";
import twitterIcon from "../../images/TwitterIcon";
import facebookIcon from "../../images/FacebookIcon";

const Footer = () => {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logo: linkedinIcon,
    },
    {
      href: "https://twitter.com/dxctechnology",
      logo: twitterIcon,
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logo: facebookIcon,
    },
  ];
  const bottom = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin",
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter",
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook",
    },
  ];
  return (
    <FooterContainer>
      <Mode text="Default">
        <DxcFooter
          copyright="© DXC Technology 2020. All rights reserved."
          bottomLinks={bottom}
          socialLinks={social}
          margin="medium"
        ></DxcFooter>
      </Mode>
    </FooterContainer>
  );
};

const FooterContainer = styled.div``;

export default Footer;
