// @ts-nocheck
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import { getMargin } from "../common/utils.js";
import DxcBox from "../box/Box";
import TagPropsType from "./types";

const DxcTag = ({
  icon,
  label = "",
  linkHref,
  onClick,
  iconBgColor = "#5f249f",
  labelPosition = "after",
  newWindow = false,
  margin,
  size = "fitContent",
  tabIndex = 0,
}: TagPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [isHovered, changeIsHovered] = useState(false);
  const clickHandler = () => {
    onClick && onClick();
  };

  const tagContent = (
    <DxcBox size={size} shadowDepth={(isHovered && (onClick || linkHref) && 2) || 1}>
      <TagContent labelPosition={labelPosition}>
        {labelPosition === "before" && size !== "small" && label && <TagLabel>{label}</TagLabel>}
        {icon && (
          <IconContainer iconBgColor={iconBgColor}>
            {typeof icon === "string" ? <TagIcon src={icon}></TagIcon> : icon}
          </IconContainer>
        )}
        {labelPosition === "after" && size !== "small" && label && <TagLabel>{label}</TagLabel>}
      </TagContent>
    </DxcBox>
  );

  return (
    <ThemeProvider theme={colorsTheme.tag}>
      <StyledDxcTag
        margin={margin}
        size={size}
        onMouseEnter={() => changeIsHovered(true)}
        onMouseLeave={() => changeIsHovered(false)}
        onClick={clickHandler}
        hasAction={onClick || linkHref}
      >
        {onClick ? (
          <StyledButton tabIndex={tabIndex}>{tagContent}</StyledButton>
        ) : linkHref ? (
          <StyledLink tabIndex={tabIndex} href={linkHref} target={newWindow ? "_blank" : "_self"}>
            {tagContent}
          </StyledLink>
        ) : (
          tagContent
        )}
      </StyledDxcTag>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const StyledDxcTag = styled.div`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (margin && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (margin && margin.left ? spaces[margin.left] : "")};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: ${(props) => props.theme.height};
`;

const TagContent = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.height};
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 4px;
  width: 100%;
  :focus {
    outline: 2px solid ${(props) => props.theme.focusColor};
    outline-offset: 2px;
  }
`;

const StyledButton = styled.button`
  background: none;
  border-radius: 4px;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  :focus {
    outline: 2px solid ${(props) => props.theme.focusColor};
    outline-offset: 2px;
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  background: ${({ iconBgColor }) => iconBgColor};
  width: ${(props) => props.theme.iconSectionWidth};
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.iconColor};
  min-width: ${(props) => props.theme.iconSectionWidth};
  overflow: hidden;
  img,
  svg {
    width: ${(props) => props.theme.iconWidth};
    height: ${(props) => props.theme.iconHeight};
  }
`;

const TagIcon = styled.img``;

const TagLabel = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.fontColor};
  padding-top: ${(props) => props.theme.labelPaddingTop};
  padding-bottom: ${(props) => props.theme.labelPaddingBottom};
  padding-left: ${(props) => props.theme.labelPaddingLeft};
  padding-right: ${(props) => props.theme.labelPaddingRight};
  flex-grow: 1;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default DxcTag;
