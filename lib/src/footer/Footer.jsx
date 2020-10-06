import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import defaultIcon from "./dxc_logo_wht.png";
import "../common/OpenSans.css";
import { spaces, responsiveSizes, theme, defaultTheme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";
import { getCustomTheme } from "../common/utils.js";

const DxcFooter = ({
  socialLinks = [],
  bottomLinks = [],
  copyright = "",
  logoSrc = "default",
  children,
  padding,
  margin,
}) => {
  const ref = useRef(null);
  const [refSize, setRefSize] = useState();
  const [isResponsiveTablet, setIsResponsiveTablet] = useState(false);
  const [isResponsivePhone, setIsResponsivePhone] = useState(false);
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  const handleResize = (refWidth) => {
    if (ref.current) {
      setRefSize(refWidth);
      if (refWidth <= responsiveSizes.tablet && refWidth > responsiveSizes.mobileLarge) {
        setIsResponsiveTablet(true);
        setIsResponsivePhone(false);
      } else if (refWidth <= responsiveSizes.tablet && refWidth <= responsiveSizes.mobileLarge) {
        setIsResponsivePhone(true);
        setIsResponsiveTablet(false);
      } else {
        setIsResponsiveTablet(false);
        setIsResponsivePhone(false);
      }
    }
  };

  const handleEventListener = () => {
    handleResize(ref.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleEventListener);
    handleResize(ref.current.offsetWidth);

    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

  const socialLink = socialLinks.map((link, index) => (
    <SocialAnchor key={`social${index}${link.href}`} index={index} href={link && link.href ? link.href : ""}>
      {link && link.logoSrc && <SocialIcon src={link.logoSrc} />}
    </SocialAnchor>
  ));

  const bottomLink = bottomLinks.map((link, index) => (
    <span key={`bottom${index}${link.text}`}>
      <BottomLink href={link && link.href ? link.href : ""}>{link && link.text ? link.text : ""}</BottomLink>
      <Point index={index}>·</Point>
    </span>
  ));

  return (
    <ThemeProvider theme={colorsTheme.footer}>
      <FooterContainer margin={margin} refSize={refSize} ref={ref}>
        <FooterHeader>
          <LogoIcon logoSrc={logoSrc} src={logoSrc === "default" ? colorsTheme.footer.logo : logoSrc} />
          <div>{socialLink}</div>
        </FooterHeader>
        {isResponsivePhone && (
          <div>
            <FooterFooter className="footerFooter" refSize={refSize}>
              <BottomLinks refSize={refSize}>{bottomLink}</BottomLinks>
              <Copyright refSize={refSize}>{copyright}</Copyright>
            </FooterFooter>
          </div>
        )}
        {((!isResponsiveTablet && !isResponsivePhone) || isResponsiveTablet) && (
          <div>
            <ChildComponents padding={padding}>{children}</ChildComponents>
            <FooterFooter className="footerFooter">
              <BottomLinks refSize={refSize}>{bottomLink}</BottomLinks>
              <Copyright refSize={refSize}>{copyright}</Copyright>
            </FooterFooter>
          </div>
        )}
      </FooterContainer>
    </ThemeProvider>
  );
};

const FooterContainer = styled.footer`
  padding: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "20px 20px 20px 20px" : "20px 60px 20px 20px")};
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => props.theme.backgroundColor};
  margin-top: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  width: 100%;
  box-sizing: border-box;
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "column" : "row")};
  align-items: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "center" : "")};
`;

const BottomLinks = styled.div`
  padding-top: 6px;
  border-top: 2px solid ${(props) => props.theme.lineColor};
  display: inline-flex;
  flex-wrap: wrap;
  max-width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "60%")};
  width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "")};
  & > span:last-child span {
    display: none;
  }
  margin: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "40px 0 40px 0" : "")};
`;

const ChildComponents = styled.div`
  min-height: 15px;
  padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
  color: ${(props) => props.theme.fontColor};
  overflow: hidden;
`;

const Copyright = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  max-width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "40%")};
  width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "")};
  text-align: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "center" : "right")};
`;

const LogoIcon = styled.img`
  height: 34px;
  width: auto;
`;

const SocialAnchor = styled.a`
  & {
    display: inline-flex;
    margin-left: ${(props) => (props.index === 0 ? "0px" : "15px")};
  }
`;

const SocialIcon = styled.img`
  & {
    display: inline-flex;
    height: 25px;
    width: 25px;
    fill: ${(props) => props.theme.fontColor};
  }
`;

const Point = styled.span`
  margin: 0px 10px;
  color: ${(props) => props.theme.fontColor};
`;

const BottomLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  font-size: 12px;
`;

DxcFooter.propTypes = {
  logoSrc: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      logoSrc: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  bottomLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  copyright: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

export default DxcFooter;
