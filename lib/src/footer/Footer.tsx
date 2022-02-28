import React, { useState, useEffect, useRef, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";

import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import dxcLogo from "./Icons";
import FooterPropsType from "./types";

const DxcFooter = ({
  socialLinks,
  bottomLinks,
  copyright = "",
  children,
  padding,
  margin,
  tabIndex = 0,
}: FooterPropsType): JSX.Element => {
  const ref = useRef(null);
  const [refSize, setRefSize] = useState();
  const [isResponsiveTablet, setIsResponsiveTablet] = useState(false);
  const [isResponsivePhone, setIsResponsivePhone] = useState(false);
  const colorsTheme = useTheme();

  const footerLogo = useMemo(() => {
    if (!colorsTheme.footer.logo) {
      return dxcLogo;
    }
    if (typeof colorsTheme.footer.logo === "string") {
      return <LogoImg alt="Logo" src={colorsTheme.footer.logo}></LogoImg>;
    }
    return colorsTheme.footer.logo;
  }, [colorsTheme.footer.logo]);

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

  const socialLink = socialLinks?.map((link, index) => (
    <SocialAnchor
      tabIndex={tabIndex}
      key={`social${index}${link.href}`}
      index={index}
      href={link && link.href ? link.href : ""}
    >
      <SocialIconContainer>
        {typeof link.logo === "string" ? <SocialIconImg src={link.logo} /> : link.logo}
      </SocialIconContainer>
    </SocialAnchor>
  ));

  const bottomLink = bottomLinks?.map((link, index) => (
    <span key={`bottom${index}${link.text}`}>
      <BottomLink tabIndex={tabIndex} href={link && link.href ? link.href : ""}>
        {link && link.text ? link.text : ""}
      </BottomLink>
      <Point index={index}>·</Point>
    </span>
  ));

  return (
    <ThemeProvider theme={colorsTheme.footer}>
      <FooterContainer margin={margin} refSize={refSize} ref={ref}>
        <FooterHeader>
          <LogoContainer>{footerLogo}</LogoContainer>
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
            <ChildComponents padding={padding}>
              <BackgroundColorProvider color={colorsTheme.footer.backgroundColor}>{children}</BackgroundColorProvider>
            </ChildComponents>
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
  padding: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "20px 20px 20px 20px" : "24px 36px 24px 36px")};
  background-color: ${(props) => props.theme.backgroundColor};
  margin-top: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  width: 100%;
  box-sizing: border-box;
  min-height: ${(props) => props.theme.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border-top: ${(props) =>
    `${props.theme.bottomLinksDividerThickness} ${props.theme.bottomLinksDividerStyle} ${props.theme.bottomLinksDividerColor}`};
`;

const BottomLinks = styled.div`
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
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
  overflow: hidden;
`;

const Copyright = styled.div`
  font-family: ${(props) => props.theme.copyrightFontFamily};
  font-size: ${(props) => props.theme.copyrightFontSize};
  font-style: ${(props) => props.theme.copyrightFontStyle};
  font-weight: ${(props) => props.theme.copyrightFontWeight};
  color: ${(props) => props.theme.copyrightFontColor};
  max-width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "40%")};
  width: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "100%" : "")};
  text-align: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "center" : "right")};
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
`;

const LogoContainer = styled.div`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoImg = styled.img`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const SocialAnchor = styled.a`
  & {
    display: inline-flex;
    margin-left: ${(props) => (props.index === 0 ? "0px" : props.theme.socialLinksGutter)};
  }
`;

const SocialIconImg = styled.img``;

const SocialIconContainer = styled.div`
  & {
    display: inline-flex;
    height: ${(props) => props.theme.socialLinksSize};
    width: ${(props) => props.theme.socialLinksSize};
    color: ${(props) => props.theme.socialLinksColor};
  }

  overflow: hidden;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Point = styled.span`
  margin: 0px 10px;
  color: ${(props) => props.theme.bottomLinksFontColor};
`;

const BottomLink = styled.a`
  text-decoration: ${(props) => props.theme.bottomLinksTextDecoration};
  color: ${(props) => props.theme.bottomLinksFontColor};
  font-family: ${(props) => props.theme.bottomLinksFontFamily};
  font-size: ${(props) => props.theme.bottomLinksFontSize};
  font-style: ${(props) => props.theme.bottomLinksFontStyle};
  font-weight: ${(props) => props.theme.bottomLinksFontWeight};
`;

export default DxcFooter;
