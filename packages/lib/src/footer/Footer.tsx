import { useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { responsiveSizes, spaces } from "../common/variables";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { dxcLogo, dxcSmallLogo } from "./Icons";
import FooterPropsType from "./types";
import { CoreSpacingTokensType } from "../common/coreTokens";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";

const DxcFooter = ({
  socialLinks,
  bottomLinks,
  copyright,
  children,
  margin,
  tabIndex = 0,
  mode = "default",
}: FooterPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);
  const translatedLabels = useContext(HalstackLanguageContext);

  const footerLogo = useMemo(
    () =>
      !colorsTheme.footer.logo ? (
        mode === "default" ? (
          dxcLogo
        ) : (
          dxcSmallLogo
        )
      ) : typeof colorsTheme.footer.logo === "string" ? (
        <LogoImg mode={mode} alt={translatedLabels.formFields.logoAlternativeText} src={colorsTheme.footer.logo} />
      ) : (
        colorsTheme.footer.logo
      ),
    [colorsTheme, translatedLabels]
  );

  return (
    <ThemeProvider theme={colorsTheme.footer}>
      <FooterContainer margin={margin} mode={mode}>
        <DxcFlex justifyContent="space-between" alignItems="center" wrap="wrap" gap="var(--spacing-gap-l)">
          <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
          {mode === "default" && (
            <DxcFlex gap={colorsTheme.footer.socialLinksGutter as CoreSpacingTokensType}>
              {socialLinks?.map((link, index) => (
                <Tooltip label={link.title} key={`social${index}${link.href}`}>
                  <SocialAnchor
                    href={link.href}
                    tabIndex={tabIndex}
                    aria-label={link.title}
                    key={`social${index}${link.href}`}
                    index={index}
                  >
                    <SocialIconContainer>
                      {typeof link.logo === "string" ? <DxcIcon icon={link.logo} /> : link.logo}
                    </SocialIconContainer>
                  </SocialAnchor>
                </Tooltip>
              ))}
            </DxcFlex>
          )}
        </DxcFlex>
        <ChildComponents>{children}</ChildComponents>
        {mode === "default" && (
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
            <Copyright>{copyright ?? translatedLabels.footer.copyrightText(new Date().getFullYear())}</Copyright>
          </BottomContainer>
        )}
      </FooterContainer>
    </ThemeProvider>
  );
};

const FooterContainer = styled.footer<{
  margin: FooterPropsType["margin"];
  mode?: FooterPropsType["mode"];
}>`
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props?.mode === "default" ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  min-height: ${(props) => (props?.mode === "default" ? props.theme.height : "40px")};
  width: 100%;
  gap: ${(props) => (props?.mode === "default" ? "0px" : "32px")};
  @media (min-width: ${responsiveSizes.small}rem) {
    padding: ${(props) => (props?.mode === "default" ? "24px 32px" : "12px 32px")};
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    padding: 20px;
    flex-direction: column;
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

const LogoContainer = styled.span<{ mode?: FooterPropsType["mode"] }>`
  max-height: ${(props) => (props?.mode === "default" ? props.theme.logoHeight : "16px")};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoImg = styled.img<{ mode?: FooterPropsType["mode"] }>`
  max-height: ${(props) => (props?.mode === "default" ? props.theme.logoHeight : "16px")};
  width: ${(props) => props.theme.logoWidth};
`;

const SocialAnchor = styled.a<{ index: number }>`
  border-radius: 4px;

  &:focus {
    outline: 2px solid #0095ff;
    outline-offset: 2px;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.socialLinksColor};
  overflow: hidden;
  font-size: ${(props) => props.theme.socialLinksSize};

  svg {
    height: ${(props) => props.theme.socialLinksSize};
    width: ${(props) => props.theme.socialLinksSize};
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
