import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import DxcDropdown from "../dropdown/Dropdown";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext, { BackgroundColorProvider } from "../BackgroundColorContext.js";
import HeaderPropsType from "./types";

const dxcLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="73" height="40" viewBox="0 0 73 40">
    <title>DXC Logo</title>
    <g id="g10" transform="translate(0)">
      <g id="g12">
        <path
          id="path14"
          d="M91.613-28.177v2.514H90.231V-28.15l-2.415-3.82h1.616l1.5,2.532,1.526-2.532h1.571ZM83.9-25.555A3.15,3.15,0,0,1,80.6-28.8v-.018a3.231,3.231,0,0,1,3.294-3.262,3.442,3.442,0,0,1,2.469.865l-.87,1.054a2.311,2.311,0,0,0-1.643-.64,1.891,1.891,0,0,0-1.8,1.964v.018a1.886,1.886,0,0,0,1.9,2,2.2,2.2,0,0,0,1.3-.378v-.9H83.858v-1.2h2.729v2.738A4.071,4.071,0,0,1,83.9-25.555Zm-6.416-3.261a1.913,1.913,0,0,0-1.9-1.982A1.883,1.883,0,0,0,73.7-28.835v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,77.486-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018A3.255,3.255,0,0,1,75.6-32.078a3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,75.583-25.555Zm-9.173-.108V-31.97h1.382v5.045h3.133v1.261Zm-3.433-3.153a1.913,1.913,0,0,0-1.9-1.982,1.883,1.883,0,0,0-1.886,1.964v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,62.978-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018a3.255,3.255,0,0,1,3.348-3.262,3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,61.075-25.555Zm-6.508-.108-3.043-4.009v4.009H50.159V-31.97h1.275l2.944,3.883V-31.97h1.364v6.306Zm-8.246,0v-2.531h-2.55v2.531H42.389V-31.97h1.382v2.5h2.55v-2.5H47.7v6.306Zm-8.432.108A3.178,3.178,0,0,1,34.666-28.8v-.018a3.2,3.2,0,0,1,3.276-3.262,3.237,3.237,0,0,1,2.478.973l-.88,1.018a2.315,2.315,0,0,0-1.606-.712,1.866,1.866,0,0,0-1.822,1.964v.018a1.87,1.87,0,0,0,1.822,1.982,2.265,2.265,0,0,0,1.651-.739l.88.891A3.206,3.206,0,0,1,37.889-25.555Zm-9.805-.108V-31.97h4.739v1.235H29.458v1.279h2.962v1.234H29.458V-26.9h3.411v1.234ZM24.322-30.69v5.027H22.939V-30.69H21.028v-1.28h5.206v1.28H24.322"
          transform="translate(-21.028 65.555)"
          fill="#100f0d"
        />
        <path
          id="path16"
          d="M75.836-76.712a8.975,8.975,0,0,1,2.246-3.9,8.393,8.393,0,0,1,6.058-2.457h9.824v-5.67H84.139a14.611,14.611,0,0,0-10.232,4.221,14.509,14.509,0,0,0-3.076,4.536,11.913,11.913,0,0,0-.973,3.271Zm0,4.325a8.978,8.978,0,0,0,2.246,3.9,8.394,8.394,0,0,0,6.058,2.457h9.824v5.67H84.139A14.611,14.611,0,0,1,73.907-64.58a14.506,14.506,0,0,1-3.076-4.536,11.91,11.91,0,0,1-.973-3.271ZM57.522-69.832l-7.5,9.473H42.581L53.818-74.55,42.581-88.739H50.02l7.5,9.472,7.5-9.472h7.439L61.225-74.55l11.237,14.19H65.023Zm-12.336-6.88a11.935,11.935,0,0,0-.973-3.271,14.515,14.515,0,0,0-3.076-4.536A14.612,14.612,0,0,0,30.9-88.739H21.081v5.67H30.9a8.394,8.394,0,0,1,6.058,2.457,8.978,8.978,0,0,1,2.246,3.9Zm0,4.325a11.932,11.932,0,0,1-.973,3.271,14.511,14.511,0,0,1-3.076,4.536A14.611,14.611,0,0,1,30.9-60.359H21.081v-5.67H30.9a8.4,8.4,0,0,0,6.058-2.457,8.981,8.981,0,0,0,2.246-3.9h5.978"
          transform="translate(-21.049 88.739)"
          fill="#100f0d"
        />
      </g>
    </g>
  </svg>
);

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const hamburgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </svg>
);

const Dropdown = (props) => {
  return (
    <HeaderDropdown>
      <DxcDropdown {...props} />
    </HeaderDropdown>
  );
};

const HeaderDropdown = styled.div`
  button {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`;

const getLogoElement = (themeInput) => {
  if (!themeInput) {
    return dxcLogo;
  }
  if (typeof themeInput === "string") {
    return <LogoImg alt="Logo" src={themeInput}></LogoImg>;
  }
  return themeInput;
};

const DxcHeader = ({
  underlined = false,
  content,
  responsiveContent,
  onClick,
  margin,
  padding,
  tabIndex = 0,
}: HeaderPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const ref = useRef(null);
  const [refSize, setRefSize] = useState();
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleResize = (refWidth) => {
    if (refWidth) {
      setRefSize(refWidth);
      if (refWidth <= responsiveSizes.tablet && !isResponsive) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    }
  };
  const ContentContainerComponent = (props: any) => {
    const backgroundType = useContext(BackgroundColorContext);
    return (
      (isResponsive && <MenuContent backgroundType={backgroundType}>{responsiveContent(handleMenu)}</MenuContent>) || (
        <ContentContainer padding={padding} backgroundType={backgroundType}>
          {content}
        </ContentContainer>
      )
    );
  };

  const handleMenu = () => {
    if (isResponsive && !isMenuVisible) {
      setIsMenuVisible(!isMenuVisible);
    } else {
      setIsMenuVisible(!isMenuVisible);
    }
  };

  const headerLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logo);
  }, [colorsTheme.header.logo]);

  const headerResponsiveLogo = useMemo(() => {
    return getLogoElement(colorsTheme.header.logoResponsive);
  }, [colorsTheme.header.logoResponsive]);

  const handleEventListener = () => {
    handleResize(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("resize", handleEventListener);
      handleResize(ref.current.offsetWidth);
    }

    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

  return (
    <ThemeProvider theme={colorsTheme.header}>
      <HeaderContainer $underlined={underlined} position="static" margin={margin} ref={ref}>
        <LogoAnchor
          tabIndex={typeof onClick === "function" ? tabIndex : -1}
          interactuable={typeof onClick === "function"}
          onClick={onClick}
        >
          <LogoContainer>{headerLogo}</LogoContainer>
        </LogoAnchor>
        {isResponsive && responsiveContent && (
          <MainContainer>
            <ChildContainer padding={padding}>
              <HamburguerItem tabIndex={tabIndex} underlined={underlined} onClick={handleMenu}>
                {hamburgerIcon}
                <HamburguerTitle>Menu</HamburguerTitle>
              </HamburguerItem>
            </ChildContainer>
            {
              <div>
                <ResponsiveMenu hasVisibility={isMenuVisible} refSize={refSize}>
                  <ResponsiveLogoContainer>{headerResponsiveLogo}</ResponsiveLogoContainer>
                  <BackgroundColorProvider color={colorsTheme.header.menuBackgroundColor}>
                    <ContentContainerComponent>{responsiveContent(handleMenu)}</ContentContainerComponent>
                  </BackgroundColorProvider>
                  <CloseContainer tabIndex={tabIndex} onClick={handleMenu} className="closeIcon">
                    {closeIcon}
                  </CloseContainer>
                </ResponsiveMenu>
                <Overlay onClick={handleMenu} hasVisibility={isMenuVisible} refSize={refSize}></Overlay>
              </div>
            }
          </MainContainer>
        )}
        {!isResponsive && (
          <BackgroundColorProvider color={colorsTheme.header.backgroundColor}>
            <ContentContainerComponent />
          </BackgroundColorProvider>
        )}
      </HeaderContainer>
    </ThemeProvider>
  );
};

DxcHeader.Dropdown = Dropdown;

const HeaderContainer = styled(AppBar)`
  margin-bottom: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};

  &.MuiAppBar-colorPrimary {
    background-color: ${(props) => props.theme.backgroundColor};
    border-bottom: ${(props) =>
      props.$underlined &&
      `${props.theme.underlinedThickness} ${props.theme.underlinedStyle} ${props.theme.underlinedColor}`};

    &.MuiPaper-elevation4 {
      box-shadow: none;
    }
    .ChildComponents {
      display: flex;
      align-items: center;
    }
  }
  & {
    min-height: ${(props) => props.theme.minHeight};
  }
  &.MuiAppBar-root {
    flex-direction: row;
    align-items: center;
    padding: ${(props) =>
      `${props.theme.paddingTop} ${props.theme.paddingRight} ${props.theme.paddingBottom} ${props.theme.paddingLeft}`};
    justify-content: space-between;
  }
`;

const LogoAnchor = styled.a`
  ${(props) => {
    if (!props.interactuable) {
      return "cursor: default; outline:none;";
    }
    return "cursor: pointer;";
  }}
`;

const LogoImg = styled.img`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
`;

const LogoContainer = styled.div`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
  vertical-align: middle;
`;

const ChildContainer = styled.div`
  width: calc(100% - 186px);
  display: flex;
  align-items: center;
  flex-grow: 1;

  justify-content: flex-end;
  padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;
const ContentContainer = styled.div`
  width: calc(100% - 186px);
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: ${(props) => (props.backgroundType === "dark" ? props.theme.contentColorOnDark : props.theme.contentColor)};

  justify-content: flex-end;
  padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;
const HamburguerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.hamburguerHoverColor};
  }
  &:focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  & > svg {
    fill: ${(props) => props.theme.hamburguerIconColor};
  }
`;

const HamburguerTitle = styled.span`
  font-family: ${(props) => props.theme.hamburguerFontFamily};
  font-style: ${(props) => props.theme.hamburguerFontStyle};
  font-size: ${(props) => props.theme.hamburguerFontSize};
  text-transform: ${(props) => props.theme.hamburguerTextTransform};
  font-weight: ${(props) => props.theme.hamburguerFontWeight};
  color: ${(props) => props.theme.hamburguerFontColor};
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ResponsiveMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.menuBackgroundColor};
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${(props) => props.theme.menuZindex};
  width: ${(props) =>
    props.refSize <= responsiveSizes.laptop && props.refSize > responsiveSizes.mobileLarge
      ? `${(props) => props.theme.menuTabletWidth}`
      : `${(props) => props.theme.menuMobileWidth}`};
  height: 100vh;
  padding: 20px;
  transform: ${(props) => (props.hasVisibility ? "translateX(0)" : "translateX(100vw)")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0.96")};
  transition-property: transform, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  box-sizing: border-box;
`;

const ResponsiveLogoContainer = styled.div`
  max-height: ${(props) => props.theme.logoHeight};
  width: ${(props) => props.theme.logoWidth};
  position: absolute;
  top: 23px;
  left: 20px;
`;

const CloseContainer = styled.div`
  cursor: pointer;
  :focus {
    outline: ${(props) => props.theme.hamburguerFocusColor} auto 1px;
  }
  position: fixed;
  top: 23px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: ${spaces.xxsmall};
`;

const MenuContent = styled.div`
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => (props.backgroundType === "dark" ? props.theme.contentColorOnDark : props.theme.contentColor)};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.overlayColor};
  opacity: ${(props) => props.theme.overlayOpacity} !important;
  visibility: ${(props) => (props.hasVisibility ? "visible" : "hidden")};
  opacity: ${(props) => (props.hasVisibility ? "1" : "0")};
  display: ${(props) => (props.refSize <= responsiveSizes.mobileLarge ? "none" : "")};
  transition: opacity 0.2s 0.2s ease-in-out;
  z-index: ${(props) => props.theme.overlayZindex};
`;

export default DxcHeader;
