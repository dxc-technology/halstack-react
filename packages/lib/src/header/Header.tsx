import { ComponentProps, useContext, useEffect, useRef, useState } from "react";
import { responsiveSizes, spaces } from "../common/variables";
import DxcDropdown from "../dropdown/Dropdown";
import DxcIcon from "../icon/Icon";
import HeaderPropsType, { Logo } from "./types";
import DxcFlex from "../flex/Flex";
import { HalstackLanguageContext } from "../HalstackContext";
import ActionIcon from "../action-icon/ActionIcon";
import { dxcLogo } from "./Icons";
import styled from "@emotion/styled";

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
  border-bottom: ${(props) =>
    props.underlined && `var(--border-width-m) var(--border-style-default) var(--border-color-neutral-strongest)`};
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

const LogoImg = styled.img`
  max-height: var(--height-xl);
  width: auto;
`;

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
  :hover {
    background-color: var(--color-bg-neutral-medium);
  }
  &:focus {
    outline: var(--border-color-secondary-medium) var(--border-style-default) var(--border-width-m);
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
  background-color: var(--color-bg-neutral-lightest);
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-header-menu);

  @media (max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem) {
    width: 60vw;
  }

  @media (not((max-width: ${responsiveSizes.large}rem) and (min-width: ${responsiveSizes.small}rem))) {
    width: 100vw;
  }

  height: 100vh;
  padding: 20px;
  transform: ${(props) => (props.hasVisibility ? "translateX(0)" : "translateX(100vw)")};
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

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  color: var(--color-fg-neutral-dark);
`;

const Overlay = styled.div<{ hasVisibility: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.hasVisibility ? "var(--color-bg-alpha-medium)" : "transparent")};

  @media (max-width: ${responsiveSizes.small}rem) {
    ${(props) => !props.hasVisibility && "display: none"};
  }

  z-index: var(--z-header-overlay);
`;

const Dropdown = (props: ComponentProps<typeof DxcDropdown>) => (
  <HeaderDropdown>
    <DxcDropdown {...props} />
  </HeaderDropdown>
);

const getLogoElement = (logo?: Logo) => {
  if (logo) {
    return <LogoImg alt={logo.title} src={logo.src} title={logo.title} />;
  } else {
    return dxcLogo;
  }
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
  logo,
  margin,
  onClick,
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

  const headerLogo = getLogoElement(logo);

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
      <LogoAnchor
        href={logo?.href}
        tabIndex={onClick ? tabIndex : -1}
        interactive={!!onClick || !!logo?.href}
        onClick={onClick}
      >
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
              <ResponsiveLogoContainer>{headerLogo}</ResponsiveLogoContainer>
              <ActionIcon
                icon="close"
                onClick={handleMenu}
                tabIndex={tabIndex}
                title={translatedLabels.header.closeIcon}
              />
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
