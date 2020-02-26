import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import defaultIcon from "./dxc_logo_wht.png";
import "../common/OpenSans.css";
import { colors, spaces, responsiveSizes } from "../common/variables.js";

const DxcFooter = ({
  socialLinks = [],
  bottomLinks = [],
  copyright = "",
  logoSrc = "default",
  children,
  padding,
  margin
}) => {
  const [isResponsiveTablet, setIsResponsiveTablet] = useState(false);
  const [isResponsivePhone, setIsResponsivePhone] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= responsiveSizes.tablet && window.innerWidth > responsiveSizes.mobileLarge) {
      setIsResponsiveTablet(true);
      setIsResponsivePhone(false);
    } else if (window.innerWidth <= responsiveSizes.tablet && window.innerWidth <= responsiveSizes.mobileLarge) {
      setIsResponsivePhone(true);
      setIsResponsiveTablet(false);
    } else {
      setIsResponsiveTablet(false);
      setIsResponsivePhone(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialLink = socialLinks.map((link, index) => (
    <SocialAnchor index={index} href={link && link.href ? link.href : ""}>
      {link && link.logoSrc && <SocialIcon src={link.logoSrc} />}
    </SocialAnchor>
  ));

  const bottomLink = bottomLinks.map((link, index) => (
    <span>
      <BottomLink href={link && link.href ? link.href : ""}>{link && link.text ? link.text : ""}</BottomLink>
      <Point index={index}>·</Point>
    </span>
  ));

  return (
    <FooterContainer margin={margin} viewportWidth={window.innerWidth}>
      <FooterHeader>
        <LogoIcon logoSrc={logoSrc} src={logoSrc === "default" ? defaultIcon : logoSrc} />
        <div>{socialLink}</div>
      </FooterHeader>
      {isResponsivePhone && (
        <div>
          <FooterFooter className="footerFooter" viewportWidth={window.innerWidth}>
            <BottomLinks viewportWidth={window.innerWidth}>{bottomLink}</BottomLinks>
            <Copyright viewportWidth={window.innerWidth}>{copyright}</Copyright>
          </FooterFooter>
        </div>
      )}
      {isResponsiveTablet && (
        <div>
          <ChildComponents padding={padding}>{children}</ChildComponents>
          <FooterFooter className="footerFooter">
            <BottomLinks viewportWidth={window.innerWidth}>{bottomLink}</BottomLinks>
            <Copyright viewportWidth={window.innerWidth}>{copyright}</Copyright>
          </FooterFooter>
        </div>
      )}
      {!isResponsiveTablet && !isResponsivePhone && (
        <div>
          <ChildComponents padding={padding}>{children}</ChildComponents>
          <FooterFooter className="footerFooter">
            <BottomLinks viewportWidth={window.innerWidth}>{bottomLink}</BottomLinks>
            <Copyright viewportWidth={window.innerWidth}>{copyright}</Copyright>
          </FooterFooter>
        </div>
      )}
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  & {
    padding: ${props =>
      props.viewportWidth <= responsiveSizes.mobileLarge ? "20px 20px 20px 20px" : "20px 60px 20px 20px"};
    font-family: "Open Sans", sans-serif;
    background-color: ${colors.black};
    margin-top: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  }
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "column" : "row")};
  align-items: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "center" : "")};
`;

const BottomLinks = styled.div`
  padding-top: 6px;
  border-top: 2px solid ${colors.yellow};
  display: inline-flex;
  flex-wrap: wrap;
  max-width: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "100%" : "60%")};
  width: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "100%" : "")};
  & > span:last-child span {
    display: none;
  }
  margin: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "40px 0 40px 0" : "")};
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
  color: ${colors.white};
  overflow: hidden;
`;

const Copyright = styled.div`
  font-size: 12px;
  color: ${colors.white};
  max-width: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "100%" : "40%")};
  width: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "100%" : "")};
  text-align: ${props => (props.viewportWidth <= responsiveSizes.mobileLarge ? "center" : "right")};
`;

const LogoIcon = styled.img`
  height: 34px;
  width: auto;
`;

const SocialAnchor = styled.a`
  & {
    display: inline-flex;
    margin-left: ${props => (props.index === 0 ? "0px" : "15px")};
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
  margin: 0px 10px;
  color: ${colors.white};
`;

const BottomLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 12px;
`;

DxcFooter.propTypes = {
  logoSrc: PropTypes.string,
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
