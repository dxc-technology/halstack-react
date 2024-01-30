import React, { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces, responsiveSizes } from "../common/variables";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { dxcLogo } from "./Icons";
import FooterPropsType from "./types";
import DxcFlex from "../flex/Flex";

const DxcFooter = ({
  socialLinks,
  bottomLinks,
  copyright,
  children,
  margin,
  tabIndex = 0,
}: FooterPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  const footerLogo = useMemo(
    () =>
      !colorsTheme.footer.logo ? (
        dxcLogo
      ) : typeof colorsTheme.footer.logo === "string" ? (
        <LogoImg alt={translatedLabels.formFields.logoAlternativeText} src={colorsTheme.footer.logo} />
      ) : (
        colorsTheme.footer.logo
      ),
    [colorsTheme]
  );

  return (
    <ThemeProvider theme={colorsTheme.footer}>
      <FooterContainer margin={margin}>
        <DxcFlex justifyContent="space-between" alignItems="center" wrap="wrap" gap="1.5rem">
          <LogoContainer>{footerLogo}</LogoContainer>
          <DxcFlex>
            {socialLinks?.map((link, index) => (
              <SocialAnchor
                href={link.href}
                tabIndex={tabIndex}
                title={link.title}
                aria-label={link.title}
                key={`social${index}${link.href}`}
                index={index}
              >
                <SocialIconContainer>
                  {typeof link.logo === "string" ? <img src={link.logo} /> : link.logo}
                </SocialIconContainer>
              </SocialAnchor>
            ))}
          </DxcFlex>
        </DxcFlex>
        <ChildComponents>{children}</ChildComponents>
        <BottomContainer>
          <BottomLinks>
            {bottomLinks?.map((link, index) => (
              <span key={`bottom${index}${link.text}`}>
                <BottomLink href={link.href} tabIndex={tabIndex}>
                  {link.text}
                </BottomLink>
              </span>
            ))}
          </BottomLinks>
          <Copyright>{copyright || translatedLabels.footer.copyrightText(new Date().getFullYear())}</Copyright>
        </BottomContainer>
      </FooterContainer>
    </ThemeProvider>
  );
};

const FooterContainer = styled.footer<{ margin: FooterPropsType["margin"] }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: ${(props) => props.theme.height};
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  background-color: ${(props) => props.theme.backgroundColor};

  @media (min-width: ${responsiveSizes.small}rem) {
    padding: 24px 36px 24px 36px;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    padding: 20px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: ${responsiveSizes.small}rem) {
    flex-direction: row;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    flex-direction: column;
    align-items: center;
  }

  border-top: ${(props) =>
    `${props.theme.bottomLinksDividerThickness} ${props.theme.bottomLinksDividerStyle} ${props.theme.bottomLinksDividerColor}`};
  margin-top: 16px;
`;

const ChildComponents = styled.div`
  min-height: 16px;
  overflow: hidden;
`;

const Copyright = styled.div`
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
  font-family: ${(props) => props.theme.copyrightFontFamily};
  font-size: ${(props) => props.theme.copyrightFontSize};
  font-style: ${(props) => props.theme.copyrightFontStyle};
  font-weight: ${(props) => props.theme.copyrightFontWeight};
  color: ${(props) => props.theme.copyrightFontColor};

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 40%;
    text-align: right;
  }

  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
    text-align: left;
  }
`;

const LogoContainer = styled.span`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoImg = styled.img`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const SocialAnchor = styled.a<{ index: number }>`
  display: inline-flex;
  margin-left: ${(props) => (props.index === 0 ? "0px" : props.theme.socialLinksGutter)};
  border-radius: 4px;

  &:focus {
    outline: 2px solid #0095ff;
    outline-offset: 2px;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.socialLinksSize};
  width: ${(props) => props.theme.socialLinksSize};
  color: ${(props) => props.theme.socialLinksColor};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const BottomLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-self: center;
  padding-top: ${(props) => props.theme.bottomLinksDividerSpacing};
  color: #fff;

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 60%;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
  }

  & > span:not(:first-child):before {
    content: "·";
    padding: 0 0.5rem;
  }
`;

const BottomLink = styled.a`
  text-decoration: ${(props) => props.theme.bottomLinksTextDecoration};
  color: ${(props) => props.theme.bottomLinksFontColor};
  font-family: ${(props) => props.theme.bottomLinksFontFamily};
  font-size: ${(props) => props.theme.bottomLinksFontSize};
  font-style: ${(props) => props.theme.bottomLinksFontStyle};
  font-weight: ${(props) => props.theme.bottomLinksFontWeight};
  border-radius: 2px;

  &:focus {
    outline: 2px solid #0095ff;
  }
`;

export default DxcFooter;
