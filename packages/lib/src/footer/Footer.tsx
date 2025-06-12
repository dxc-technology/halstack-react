import { useContext } from "react";
import styled from "styled-components";
import { responsiveSizes, spaces } from "../common/variables";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { dxcLogo, dxcSmallLogo } from "./Icons";
import FooterPropsType from "./types";
import { HalstackLanguageContext } from "../HalstackContext";

const FooterContainer = styled.footer<{
  margin: FooterPropsType["margin"];
  mode?: FooterPropsType["mode"];
}>`
  background-color: var(--color-bg-neutral-strongest);
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props?.mode === "default" ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "var(--spacing-padding-none)")};
  min-height: ${(props) => (props?.mode === "default" ? "124px" : "40px")};
  width: 100%;
  gap: var(--spacing-gap-m);
  padding: var(--spacing-padding-l) var(--spacing-padding-ml);
  @media (max-width: ${responsiveSizes.small}rem) {
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

  border-top: var(--border-width-s) var(--border-style-default) var(--border-color-primary-medium);
  margin-top: var(--spacing-gap-m);
`;

const ChildComponents = styled.div`
  min-height: var(--height-xxs);
  overflow: hidden;
`;

const Copyright = styled.div`
  margin-top: var(--spacing-padding-xs);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-bright);

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
  max-height: ${(props) => (props?.mode === "default" ? "var(--height-m)" : "var(--height-xxs)")};
  width: auto;
`;

const LogoImg = styled.img<{ mode?: FooterPropsType["mode"] }>`
  max-height: ${(props) => (props?.mode === "default" ? "var(--height-m)" : "var(--height-xxs)")};
  width: auto;
`;

const SocialAnchor = styled.a<{ index: number }>`
  border-radius: var(--border-radius-s);

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: var(--border-width-m);
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-fg-neutral-bright);
  overflow: hidden;
  font-size: var(--height-s);

  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const BottomLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-self: center;
  margin-top: var(--spacing-padding-xs);
  color: var(--color-fg-neutral-bright);

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 60%;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
  }

  & > span:not(:first-child):before {
    content: "·";
    padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  }
`;

const BottomLink = styled.a`
  text-decoration: none;
  border-radius: var(--border-radius-xs);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-bright);

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
`;

const getLogoElement = (mode: FooterPropsType["mode"], logo?: FooterPropsType["logo"]) => {
  if (logo) {
    return <LogoImg alt={logo.title} src={logo.src} title={logo.title} />;
  } else {
    return mode === "default" ? dxcLogo : dxcSmallLogo;
  }
};

const DxcFooter = ({
  bottomLinks,
  children,
  copyright,
  logo,
  margin,
  mode = "default",
  socialLinks,
  tabIndex = 0,
}: FooterPropsType): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext);

  const footerLogo = getLogoElement(mode, logo);

  return (
    <FooterContainer margin={margin} mode={mode}>
      <DxcFlex justifyContent="space-between" alignItems="center" wrap="wrap">
        <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
        {mode === "default" && (
          <DxcFlex gap="var(--spacing-gap-ml)">
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
  );
};

export default DxcFooter;
