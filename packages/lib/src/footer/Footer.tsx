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
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  /* TODO: Ask about min height */
  min-height: ${(props) => (props?.mode === "default" ? "124px" : "40px")};
  width: 100%;
  gap: ${(props) => (props?.mode === "default" ? "var(--spacing-gap-none)" : "32px")};
  @media (min-width: ${responsiveSizes.small}rem) {
    padding: ${(props) =>
      props?.mode === "default"
        ? "var(--spacing-padding-m) var(--spacing-padding-xl)"
        : "var(--spacing-padding-s) var(--spacing-padding-xl)"};
  }
  /* TODO: Ask about responsive styles */
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

  border-top: var(--border-width-s) var(--border-style-default) var(--border-color-primary-medium);
  margin-top: var(--spacing-gap-m);
`;

const ChildComponents = styled.div`
  min-height: 16px;
  overflow: hidden;
`;

const Copyright = styled.div`
  padding-top: var(--spacing-padding-xs);
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

// TODO: Remove and use logo from the props instead
// const LogoImg = styled.img<{ mode?: FooterPropsType["mode"] }>`
//   max-height: ${(props) => (props?.mode === "default" ? "var(--height-m)" : "var(--height-xxs)")};
//   width: auto;
// `;

// TODO: Need an example in Figma with focus state
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
  padding-top: var(--spacing-padding-xs);
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

// TODO: Add examples with focus to figma to see border-radius and outline width
const BottomLink = styled.a`
  text-decoration: none;
  border-radius: 2px;

  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-bright);

  &:focus {
    outline: 2px solid #0095ff;
  }
`;

const DxcFooter = ({
  socialLinks,
  bottomLinks,
  copyright,
  children,
  margin,
  tabIndex = 0,
  mode = "default",
}: FooterPropsType): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext);

  // TODO
  // const footerLogo = useMemo(
  //   () =>
  //     !colorsTheme.footer.logo ? (
  //       mode === "default" ? (
  //         dxcLogo
  //       ) : (
  //         dxcSmallLogo
  //       )
  //     ) : typeof colorsTheme.footer.logo === "string" ? (
  //       <LogoImg mode={mode} alt={translatedLabels.formFields.logoAlternativeText} src={colorsTheme.footer.logo} />
  //     ) : (
  //       colorsTheme.footer.logo
  //     ),
  //   [colorsTheme, translatedLabels]
  // );

  const footerLogo = mode === "default" ? dxcLogo : dxcSmallLogo;

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
