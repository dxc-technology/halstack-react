import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import { dxcLogo, dxcSmallLogo } from "./Icons";
import FooterPropsType from "./types";
import { HalstackLanguageContext } from "../HalstackContext";
import { findChildType, getContrastColor, getResponsiveStyles } from "./utils";
import DxcLink from "../link/Link";
import useWidth from "../utils/useWidth";
import { css } from "@emotion/react";

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
`;

const MainContainer = styled.div<{ width: number }>`
  display: grid;
  grid-template-columns: 1fr 2fr;

  ${(props) =>
    getResponsiveStyles.isLargeScreen(props.width) &&
    css`
      min-height: 80px;
    `}

  ${(props) =>
    getResponsiveStyles.isMediumScreen(props.width) &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      gap: var(--spacing-gap-ml);
      padding: var(--spacing-padding-l) var(--spacing-padding-m);
    `}
`;

const LeftContainer = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
  color: var(--color-fg-neutral-dark);
  box-sizing: border-box;

  ${(props) =>
    getResponsiveStyles.isLargeScreen(props.width) &&
    css`
      padding: var(--spacing-padding-l) var(--spacing-padding-xl);
    `}
`;

const LogoContainer = styled.span<{ mode?: FooterPropsType["mode"] }>`
  max-height: ${(props) => (props?.mode === "default" ? "var(--height-m)" : "var(--height-xxs)")};
  width: fit-content;
  text-align: center;

  ${(props) =>
    props.mode === "reduced" &&
    css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `}
`;

const LogoImg = styled.img<{ mode: FooterPropsType["mode"] }>`
  max-height: ${(props) => (props.mode === "default" ? "var(--height-m)" : "var(--height-xxs)")};
  width: auto;
`;

const RightContainer = styled.div<{ width: number }>`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: var(--spacing-gap-xl);
  box-sizing: border-box;

  ${(props) =>
    getResponsiveStyles.isLargeScreen(props.width) &&
    css`
      padding: var(--spacing-padding-l) var(--spacing-padding-xl);
    `}

  ${(props) =>
    getResponsiveStyles.isMediumScreen(props.width) &&
    css`
      justify-content: flex-start;
    `}
`;
const SocialLinks = styled.div`
  height: var(--height-m);
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-ml);
`;

const SocialAnchor = styled.a`
  height: var(--height-s);
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius-s);
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:focus-visible {
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
    outline-offset: 0px;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-fg-primary-strong);
  overflow: hidden;
  font-size: var(--height-xs);

  svg {
    height: var(--height-xs);
    width: var(--height-xs);
  }
`;

const BottomContainer = styled.div<{ textColor: string; width: number }>`
  width: 100%;
  min-height: var(--height-xl);
  display: grid;
  grid-template-columns: 60% var(--spacing-gap-ml) 1fr;
  align-items: center;
  background-color: var(--color-bg-primary-strong);
  color: ${({ textColor }) => textColor};
  padding: var(--spacing-padding-none) var(--spacing-padding-xl);
  box-sizing: border-box;

  ${(props) =>
    getResponsiveStyles.isMediumScreen(props.width) &&
    css`
      grid-template-columns: 1fr;
      gap: var(--spacing-gap-ml);
      padding: var(--spacing-padding-m);
    `}

  ${(props) =>
    getResponsiveStyles.isSmallScreen(props.width) &&
    css`
      padding: var(--spacing-padding-m);
    `}
`;

const BottomLinks = styled.div<{ textColor: string; width: number }>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-self: center;
  box-sizing: border-box;

  ${(props) =>
    getResponsiveStyles.isLargeScreen(props.width) &&
    css`
      flex-wrap: nowrap;
      overflow: hidden;
      padding-left: var(--spacing-padding-xxxs);
    `}

  ${(props) =>
    getResponsiveStyles.isSmallScreen(props.width) &&
    css`
      max-width: 100%;
      width: 100%;
    `}

  & > span {
    white-space: nowrap;
  }

  & > span:not(:first-child):before {
    content: "·";
    padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  }

  & > span > a > span:hover,
  & > span > a > span:active {
    color: ${({ textColor }) => textColor};
  }
`;

const Copyright = styled.div<{ width: number }>`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-regular);
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  ${(props) =>
    getResponsiveStyles.isLargeScreen(props.width) &&
    css`
      grid-column-start: 3;
    `}

  ${(props) =>
    getResponsiveStyles.isMediumScreen(props.width) &&
    css`
      justify-content: flex-start;
      white-space: wrap;
    `}
`;

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

  const footerLogo = useMemo(() => {
    if (logo) {
      return <LogoImg mode={mode} alt={logo.alt} src={logo.src} title={logo.alt} />;
    } else {
      return mode === "default" ? dxcLogo : dxcSmallLogo;
    }
  }, [mode, logo]);

  const leftContentChild = findChildType(children, LeftContent);
  const rightContentChild = findChildType(children, RightContent);

  const footerRef = useRef<HTMLDivElement>(null);
  const width = useWidth(footerRef);

  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const [textColor, setTextColor] = useState("var(--color-fg-neutral-bright)");

  useEffect(() => {
    if (bottomContainerRef.current) {
      const bg = window.getComputedStyle(bottomContainerRef.current).getPropertyValue("background-color").trim();
      setTextColor(getContrastColor(bg));
    }
  }, []);

  return (
    <FooterContainer ref={footerRef} margin={margin} mode={mode}>
      {mode === "default" && (
        <MainContainer width={width}>
          <LeftContainer width={width}>
            <LogoContainer mode={mode}>{footerLogo}</LogoContainer>
            {leftContentChild}
          </LeftContainer>
          {(socialLinks || rightContentChild) && (
            <RightContainer width={width}>
              {rightContentChild}
              {socialLinks && (
                <SocialLinks>
                  {socialLinks?.map((link, index) => (
                    <Tooltip label={link.title} key={`social${index}${link.href}`}>
                      <SocialAnchor
                        href={link.href}
                        tabIndex={tabIndex}
                        aria-label={link.title}
                        key={`social${index}${link.href}`}
                      >
                        <SocialIconContainer>
                          {typeof link.logo === "string" ? <DxcIcon icon={link.logo} /> : link.logo}
                        </SocialIconContainer>
                      </SocialAnchor>
                    </Tooltip>
                  ))}
                </SocialLinks>
              )}
            </RightContainer>
          )}
        </MainContainer>
      )}
      <BottomContainer ref={bottomContainerRef} textColor={textColor} width={width}>
        {mode === "default" && bottomLinks && (
          <BottomLinks textColor={textColor} width={width}>
            {bottomLinks?.map((link, index) => (
              <span key={`bottom${index}${link.text}`}>
                <DxcLink inheritColor href={link.href} tabIndex={tabIndex} newWindow>
                  {link.text}
                </DxcLink>
              </span>
            ))}
          </BottomLinks>
        )}
        {mode === "reduced" && <LogoContainer mode={mode}>{footerLogo}</LogoContainer>}
        <Copyright width={width}>
          {copyright ?? translatedLabels.footer.copyrightText(new Date().getFullYear())}
        </Copyright>
      </BottomContainer>
    </FooterContainer>
  );
};

const LeftContent = ({ children }: { children: ReactNode }) => <>{children}</>;
const RightContent = ({ children }: { children: ReactNode }) => <>{children}</>;

DxcFooter.LeftContent = LeftContent;
DxcFooter.RightContent = RightContent;
export default DxcFooter;
