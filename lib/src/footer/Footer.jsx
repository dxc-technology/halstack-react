import React, { useState } from "react";
import styled from "styled-components";
import defaultIcon from "./dxc_logo_white.png";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";

import PropTypes from "prop-types";

const DxcFooter = ({
  socialLinks = [],
  bottomLinks = [],
  copyright = "",
  logoSrc = "default",
  children,
  padding,
  margin
}) => {
  const socialLink = socialLinks.map((link, index) => (
    <SocialAnchor index={index} href={link && link.href ? link.href : ""}>
      {link && link.logoSrc && <SocialIcon src={link.logoSrc} />}
    </SocialAnchor>
  ));

  const bottomLink = bottomLinks.map((link, index) => (
    <span>
      <Point index={index}>·</Point>
      <BottomLink href={link && link.href ? link.href : ""}>{link && link.text ? link.text : ""}</BottomLink>
    </span>
  ));

  return (
    <FooterContainer margin={margin}>
      <FooterHeader>
        <LogoIcon logoSrc={logoSrc} src={logoSrc === "default" ? defaultIcon : logoSrc} />
        <div>{socialLink}</div>
      </FooterHeader>
      <ChildComponents padding={padding}>{children}</ChildComponents>
      <FooterFooter className="footerFooter">
        <BottomLinks>{bottomLink}</BottomLinks>
        <Copyright>{copyright}</Copyright>
      </FooterFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  & {
    padding: 20px 60px 20px 20px;
    font-family: "Open Sans", sans-serif;
    background-color: ${colors.black};
    margin-top: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
    
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
  border-top: 2px solid ${colors.yellow};
  display: inline-flex;
`;

const ChildComponents = styled.div`
  min-height: 15px;
  padding: ${props => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${props =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;

const Copyright = styled.div`
  font-size: 12px;
  color: ${colors.white};
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
    fill: ${colors.white};
  }
`;

const Point = styled.span`
  display: ${props => {
    if (props.index == 0) {
      return "none";
    }
  }};
  margin: 0px 10px;
  color: ${colors.white};
`;

const BottomLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
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
  copyright: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};

export default DxcFooter;
