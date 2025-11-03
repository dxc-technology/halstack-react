import { ElementType, ReactNode, useContext, Children, isValidElement } from "react";
import styled from "@emotion/styled";
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
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props?.mode === "default" ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${(props) => (props.margin ? spaces[props.margin] : "var(--spacing-padding-none)")};
  width: 100%;

  @media (max-width: ${responsiveSizes.small}rem) {
    flex-direction: column;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${responsiveSizes.small}rem) {
    min-height: 80px;
  }

  @media (max-width: ${responsiveSizes.small}rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-gap-ml);
    padding: var(--spacing-padding-l) var(--spacing-padding-m);
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-primary-strong);
  padding: var(--spacing-padding-none) var(--spacing-padding-xl);
  box-sizing: border-box;

  @media (min-width: ${responsiveSizes.small}rem) {
    height: var(--height-xl);
    flex-direction: row;
  }

  @media (max-width: ${responsiveSizes.small}rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-gap-ml);
    padding: var(--spacing-padding-m);
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
  height: 100%;
  color: var(--color-fg-neutral-dark);

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 33.3%;
    padding: var(--spacing-padding-l) var(--spacing-padding-xl);
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-gap-xl);
  flex-wrap: wrap;
  height: 100%;

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 66.66%;
    padding: var(--spacing-padding-l) var(--spacing-padding-xl);
  }
`;

const Copyright = styled.div`
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
  color: var(--color-fg-primary-strong);
  overflow: hidden;
  font-size: var(--height-s);

  svg {
    height: var(--height-xs);
    width: var(--height-xs);
    fill: var(--color-fg-primary-strong);
  }
`;

const BottomLinks = styled.div<{ hasContent: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  align-self: center;
  color: var(--color-fg-neutral-bright);

  @media (min-width: ${responsiveSizes.small}rem) {
    max-width: 60%;
  }
  @media (max-width: ${responsiveSizes.small}rem) {
    max-width: 100%;
    width: 100%;
    display: ${(props) => (props.hasContent ? "inline-flex" : "none")};
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
  color: inherit;

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

const findChildType = (children: FooterPropsType["children"], childType: ElementType) =>
  Children.toArray(children).find((child) => isValidElement(child) && child.type === childType);

const DxcFooter = ({
  bottomLinks,
  copyright,
  children,
  logo,
  margin,
  mode = "default",
  socialLinks,
  tabIndex = 0,
}: FooterPropsType): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const footerLogo = getLogoElement(mode, logo);
  const leftContentChild = findChildType(children, LeftContent);
  const rightContentChild = findChildType(children, RightContent);

  return (
    <FooterContainer margin={margin} mode={mode}>
      {mode === "default" && (
        <MainContainer>
          <LeftContainer>
            <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
            {leftContentChild}
          </LeftContainer>
          {(socialLinks || rightContentChild) && (
            <RightContainer>
              {rightContentChild}
              {socialLinks && (
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
            </RightContainer>
          )}
        </MainContainer>
      )}
      <BottomContainer>
        {mode === "default" ? (
          <BottomLinks hasContent={bottomLinks ? true : false}>
            {bottomLinks?.map((link, index) => (
              <span key={`bottom${index}${link.text}`}>
                <BottomLink href={link.href} tabIndex={tabIndex}>
                  {link.text}
                </BottomLink>
              </span>
            ))}
          </BottomLinks>
        ) : (
          <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
        )}
        <Copyright>{copyright ?? translatedLabels.footer.copyrightText(new Date().getFullYear())}</Copyright>
      </BottomContainer>
    </FooterContainer>
  );
};

const LeftContent = ({ children }: { children: ReactNode }) => <>{children}</>;
const RightContent = ({ children }: { children: ReactNode }) => <>{children}</>;

DxcFooter.LeftContent = LeftContent;
DxcFooter.RightContent = RightContent;
export default DxcFooter;
