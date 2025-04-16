import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { responsiveSizes, spaces } from "../common/variables";
import DxcDropdown from "../dropdown/Dropdown";
import DxcIcon from "../icon/Icon";
import HeaderPropsType from "./types";
import { Tooltip } from "../tooltip/Tooltip";
import DxcFlex from "../flex/Flex";
import { useContext } from "react";
import { HalstackLanguageContext } from "../HalstackContext";

const HeaderDropdown = styled.div`
  display: flex;
  button {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`;

const HeaderContainer = styled.header<{
  margin: HeaderPropsType["margin"];
  underlined: HeaderPropsType["underlined"];
}>`
  background-color: var(--color-bg-neutral-lightest);
  /* TODO: ASK ABOUT UNDERLINE */
  border-bottom: ${(props) =>
    props.underlined && `var(--border-width-m) var(--border-style-default) ${props.theme.underlinedColor}`};
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.margin ? spaces[props.margin] : "0px")};
  min-height: 64px;
  padding: var(--spacing-padding-none) var(--spacing-padding-l);
`;

const LogoAnchor = styled.a<{ interactive: boolean }>`
  ${(props) => (props.interactive ? "cursor: pointer" : "cursor: default; outline:none;")};
`;

// TODO: Discuss custom logo implementation
// const LogoImg = styled.img`
//   max-height: ${(props) => props.theme.logoHeight};
//   width: ${(props) => props.theme.logoWidth};
// `;

const LogoContainer = styled.div`
  max-height: var(--height-xl);
  vertical-align: middle;
  width: auto;
`;

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  width: calc(100% - 186px);
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  width: calc(100% - 186px);
  color: var(--color-fg-neutral-dark);
`;

const HamburgerTrigger = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: var(--border-radius-xs);
  border: var(--border-width-s) var(--border-style-default) transparent;
  color: var(--color-fg-neutral-dark);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-semibold);
  height: var(--height-xl);
  justify-content: center;
  padding: var(--spacing-padding-none) var(--spacing-padding-m);
  text-transform: uppercase;
  width: 54px;
  :hover {
    background-color: var(--color-bg-neutral-medium);
  }
  &:focus {
    outline: var(--border-color-secondary-medium) solid var(--border-width-m);
  }
  & > svg {
    fill: var(--color-fg-neutral-dark);
  }
  & > span {
    font-size: var(--height-s);
  }
`;

const ResponsiveMenu = styled.div<{ hasVisibility: boolean }>`
  display: flex;
  flex-direction: column;
  // TODO: Ask about responsive menu bg
  /* background-color: '${(props) => props.theme.menuBackgroundColor};' */
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;

  @media (max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem) {
    width: 60vw;
  }

  @media (not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem))) {
    width: 100vw;
  }

  height: 100vh;
  padding: 20px;
  transform: ${(props) => (props.hasVisibility ? "translateX(0)" : "translateX(100vw)")};
  // TODO: Ask about responsive menu opacity
  /* opacity: ${(props) => (props.hasVisibility ? "1" : "0.96")}; */
  transition-property: transform, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  box-sizing: border-box;
`;

const ResponsiveLogoContainer = styled.div`
  max-height: var(--height-xl);
  width: auto;
  display: flex;
`;

const CloseAction = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  /* TODO: Ask properties for closeAction props */
  /* padding: 6px; */
  border: unset;
  border-radius: var(--border-radius-xs);
  background-color: transparent;
  cursor: pointer;

  :focus,
  :focus-visible {
    outline: var(--border-color-secondary-medium) var(--border-style-default) var(--border-width-m);
  }
  font-size: var(--height-s);
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  color: var(--color-fg-neutral-dark);
`;

// TODO: Ask about overlay styles
const Overlay = styled.div<{ hasVisibility: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.overlayColor};
  opacity: ${(props) => props.theme.overlayOpacity} !important;
  visibility: ${(props) => (props.hasVisibility ? "visible" : "hidden")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0")};

  @media (max-width: ${responsiveSizes.small}rem) {
    display: none;
  }

  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: 1600;
`;

const Dropdown = (props: ComponentProps<typeof DxcDropdown>) => (
  <HeaderDropdown>
    <DxcDropdown {...props} />
  </HeaderDropdown>
);

const getLogoElement = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="73" height="40" viewBox="0 0 73 40">
      <title>DXC Logo</title>
      <g transform="translate(0)">
        <g>
          <path
            d="M91.613-28.177v2.514H90.231V-28.15l-2.415-3.82h1.616l1.5,2.532,1.526-2.532h1.571ZM83.9-25.555A3.15,3.15,0,0,1,80.6-28.8v-.018a3.231,3.231,0,0,1,3.294-3.262,3.442,3.442,0,0,1,2.469.865l-.87,1.054a2.311,2.311,0,0,0-1.643-.64,1.891,1.891,0,0,0-1.8,1.964v.018a1.886,1.886,0,0,0,1.9,2,2.2,2.2,0,0,0,1.3-.378v-.9H83.858v-1.2h2.729v2.738A4.071,4.071,0,0,1,83.9-25.555Zm-6.416-3.261a1.913,1.913,0,0,0-1.9-1.982A1.883,1.883,0,0,0,73.7-28.835v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,77.486-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018A3.255,3.255,0,0,1,75.6-32.078a3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,75.583-25.555Zm-9.173-.108V-31.97h1.382v5.045h3.133v1.261Zm-3.433-3.153a1.913,1.913,0,0,0-1.9-1.982,1.883,1.883,0,0,0-1.886,1.964v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,62.978-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018a3.255,3.255,0,0,1,3.348-3.262,3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,61.075-25.555Zm-6.508-.108-3.043-4.009v4.009H50.159V-31.97h1.275l2.944,3.883V-31.97h1.364v6.306Zm-8.246,0v-2.531h-2.55v2.531H42.389V-31.97h1.382v2.5h2.55v-2.5H47.7v6.306Zm-8.432.108A3.178,3.178,0,0,1,34.666-28.8v-.018a3.2,3.2,0,0,1,3.276-3.262,3.237,3.237,0,0,1,2.478.973l-.88,1.018a2.315,2.315,0,0,0-1.606-.712,1.866,1.866,0,0,0-1.822,1.964v.018a1.87,1.87,0,0,0,1.822,1.982,2.265,2.265,0,0,0,1.651-.739l.88.891A3.206,3.206,0,0,1,37.889-25.555Zm-9.805-.108V-31.97h4.739v1.235H29.458v1.279h2.962v1.234H29.458V-26.9h3.411v1.234ZM24.322-30.69v5.027H22.939V-30.69H21.028v-1.28h5.206v1.28H24.322"
            transform="translate(-21.028 65.555)"
            fill="#010101"
          />
          <path
            d="M75.836-76.712a8.975,8.975,0,0,1,2.246-3.9,8.393,8.393,0,0,1,6.058-2.457h9.824v-5.67H84.139a14.611,14.611,0,0,0-10.232,4.221,14.509,14.509,0,0,0-3.076,4.536,11.913,11.913,0,0,0-.973,3.271Zm0,4.325a8.978,8.978,0,0,0,2.246,3.9,8.394,8.394,0,0,0,6.058,2.457h9.824v5.67H84.139A14.611,14.611,0,0,1,73.907-64.58a14.506,14.506,0,0,1-3.076-4.536,11.91,11.91,0,0,1-.973-3.271ZM57.522-69.832l-7.5,9.473H42.581L53.818-74.55,42.581-88.739H50.02l7.5,9.472,7.5-9.472h7.439L61.225-74.55l11.237,14.19H65.023Zm-12.336-6.88a11.935,11.935,0,0,0-.973-3.271,14.515,14.515,0,0,0-3.076-4.536A14.612,14.612,0,0,0,30.9-88.739H21.081v5.67H30.9a8.394,8.394,0,0,1,6.058,2.457,8.978,8.978,0,0,1,2.246,3.9Zm0,4.325a11.932,11.932,0,0,1-.973,3.271,14.511,14.511,0,0,1-3.076,4.536A14.611,14.611,0,0,1,30.9-60.359H21.081v-5.67H30.9a8.4,8.4,0,0,0,6.058-2.457,8.981,8.981,0,0,0,2.246-3.9h5.978"
            transform="translate(-21.049 88.739)"
            fill="#603494"
          />
        </g>
      </g>
    </svg>
  );
  // TODO: What are we going to do about custom logos?
  // else if (typeof themeInput === "string") return <LogoImg alt={logoLabel} src={themeInput}></LogoImg>;
  // else return themeInput;
};

type ContentProps = {
  isResponsive: boolean;
  responsiveContent: HeaderPropsType["responsiveContent"];
  handleMenu: () => void;
  content: HeaderPropsType["content"];
};

const Content = ({ isResponsive, responsiveContent, handleMenu, content }: ContentProps) =>
  isResponsive ? (
    <MenuContent>{responsiveContent?.(handleMenu)}</MenuContent>
  ) : (
    <ContentContainer>{content}</ContentContainer>
  );

const DxcHeader = ({
  underlined = false,
  content,
  responsiveContent,
  onClick,
  margin,
  tabIndex = 0,
}: HeaderPropsType): JSX.Element => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const translatedLabels = useContext(HalstackLanguageContext);
  const ref = useRef(null);

  const handleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const headerLogo = useMemo(
    // TODO: Discuss custom logo implementation
    // () => getLogoElement(colorsTheme.header.logo, translatedLabels.formFields.logoAlternativeText),
    () => getLogoElement(),
    []
    // [colorsTheme, translatedLabels]
  );

  const headerResponsiveLogo = useMemo(
    // TODO: Discuss custom logo implementation
    // () => getLogoElement(colorsTheme.header.logoResponsive, translatedLabels.formFields.logoAlternativeText),
    () => getLogoElement(),
    []
    // [colorsTheme, translatedLabels]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.matchMedia(`(max-width: ${responsiveSizes.medium}rem)`).matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isResponsive) {
      setIsMenuVisible(false);
    }
  }, [isResponsive]);

  return (
    <HeaderContainer underlined={underlined} margin={margin} ref={ref}>
      <LogoAnchor tabIndex={onClick ? tabIndex : -1} interactive={!!onClick} onClick={onClick}>
        <LogoContainer>{headerLogo}</LogoContainer>
      </LogoAnchor>
      {isResponsive && responsiveContent && (
        <DxcFlex grow={1}>
          <ChildContainer>
            <HamburgerTrigger tabIndex={tabIndex} onClick={handleMenu} aria-label="Show options">
              <DxcIcon icon="menu" />
              {translatedLabels.header.hamburgerTitle}
            </HamburgerTrigger>
          </ChildContainer>
          <ResponsiveMenu hasVisibility={isMenuVisible}>
            <DxcFlex justifyContent="space-between" alignItems="center">
              <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
              <Tooltip label={translatedLabels.header.closeIcon}>
                <CloseAction tabIndex={tabIndex} onClick={handleMenu} aria-label={translatedLabels.header.closeIcon}>
                  <DxcIcon icon="close" />
                </CloseAction>
              </Tooltip>
            </DxcFlex>
            <Content
              isResponsive={isResponsive}
              responsiveContent={responsiveContent}
              handleMenu={handleMenu}
              content={content}
            />
          </ResponsiveMenu>
          <Overlay onClick={handleMenu} hasVisibility={isMenuVisible} />
        </DxcFlex>
      )}
      {!isResponsive && (
        <Content
          isResponsive={isResponsive}
          responsiveContent={responsiveContent}
          handleMenu={handleMenu}
          content={content}
        />
      )}
    </HeaderContainer>
  );
};

DxcHeader.Dropdown = Dropdown;

export default DxcHeader;
