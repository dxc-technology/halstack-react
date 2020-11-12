import React from "react";
import { DxcHeader, DxcFooter } from "@dxc-technology/halstack-react";
import styled from "styled-components";
import linkedinLogo from "./linkedin.svg";
import twitterLogo from "./twitter.svg";
import facebookLogo from "./facebook.svg";

const year = new Date().getFullYear();

const Header = ({ children }) => {
  return <div>{children}</div>;
};

const Main = ({ children }) => {
  return <div>{children}</div>;
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};
const defaultFooter = () => {
  return (
    <DxcFooter
      copyright={`© DXC Technology ${year}. All rights reserved.`}
      bottomLinks={[
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
      ]}
      socialLinks={[
        {
          href: "https://www.linkedin.com/company/dxctechnology",
          logoSrc: linkedinLogo,
        },
        {
          href: "https://twitter.com/dxctechnology",
          logoSrc: twitterLogo,
        },
        {
          href: "https://www.facebook.com/DXCTechnology/",
          logoSrc: facebookLogo,
        },
      ]}
    ></DxcFooter>
  );
};
const defaultHeader = () => {
  return <DxcHeader underlined />;
};

const DxcStandardLayout = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <StandardLayoutContainer>
      <HeaderContainter>
        {childrenArray.find((child) => child && child.type && child.type.name === "DxcHeader") || defaultHeader()}
      </HeaderContainter>
      <MainContainter>
        {childrenArray.find((child) => child && child.type && child.type.name === "Main")}
      </MainContainter>
      <FooterContainter>
        {childrenArray.find((child) => child && child.type && child.type.name === "DxcFooter") || defaultFooter()}
      </FooterContainter>
    </StandardLayoutContainer>
  );
};

DxcStandardLayout.Header = Header;
DxcStandardLayout.Main = Main;
DxcStandardLayout.Footer = Footer;

const StandardLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderContainter = styled.div`
  width: 100%;
`;
const FooterContainter = styled.div``;

const MainContainter = styled.div`
  max-width: 1320px;
  margin: 64px 15.6% 80px;
  flex-grow: 1;
  @media (max-width: 768px) {
    margin: 48px 9.6% 64px;
  }
  @media (max-width: 425px) {
    margin: 36px 6.4% 48px;
  }
`;

export default DxcStandardLayout;
