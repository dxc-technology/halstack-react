import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import defaultIcon from "./dxc_logo_white.png";
import "../common/OpenSans.css";
import colors from "../common/variables.js"

import PropTypes from "prop-types";

const DxcFooter = ({ socialLinks = [], bottomLinks = [], copyright = "", logoSrc = "default", children }) => {
  const socialLink = socialLinks.map((link, index) => (
    <SocialAnchor index={index} href={link && link.href ? link.href : ""}>
      {(link && link.logoSrc) && <SocialIcon src={link.logoSrc}/>}
    </SocialAnchor>
  ));

  const bottomLink = bottomLinks.map((link, index) => (
    <span>
      <Point index={index}>·</Point>
      <BottomLink href={link && link.href ? link.href : ""}>{link && link.text ? link.text : ""}</BottomLink>
    </span>
  ));

  return (
    <FooterContainer position="static">
      <FooterHeader>
        <LogoIcon logoSrc={logoSrc} src={logoSrc === "default" ? defaultIcon : logoSrc} />
        <div>{socialLink}</div>
      </FooterHeader>
      <ChildComponents>{children}</ChildComponents>
      <FooterFooter className="footerFooter">
        <BottomLinks>{bottomLink}</BottomLinks>
        <Copyright>{copyright}</Copyright>
      </FooterFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled(AppBar)`
  & {
    padding: 20px 60px 20px 20px;
    min-height: 120px;
    font-family: "Open Sans", sans-serif;
  }

  &.MuiAppBar-colorPrimary {
  background-color: ${colors.black};
  }
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterFooter = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const BottomLinks = styled.div`
  padding-top: 6px;
  border-top: 2px solid ${colors.yellow};;
  display: inline-flex;
`;

const ChildComponents = styled.div`
  min-height: 15px;
`;

const Copyright = styled.div`
  font-size: 12px;
`;

const LogoIcon = styled.img`
  height: 34px;
  width: auto;
`;

const SocialAnchor = styled.a`
  & {
    display: inline-flex;
    margin-left: ${props => (props.index == 0 ? "0px" : "15px")};
  }
`;

const SocialIcon = styled.img`
  & {
    display: inline-flex;
    height: 25px;
    width: 25px;
    fill: ${colors.white};;
  }
`;

const Point = styled.span`
  display: ${props => {
    if (props.index == 0) {
      return "none";
    }
  }};
  margin: 0px 10px;
`;

const BottomLink = styled.a`
  text-decoration: none;
  color: ${colors.white};;
  font-size: 12px;
`;

DxcFooter.propTypes = {
  logo: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      logoSrc: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  bottomLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  copyright: PropTypes.string
};

export default DxcFooter;
