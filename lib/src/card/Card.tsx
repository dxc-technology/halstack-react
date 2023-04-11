import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import DxcBox from "../box/Box";
import CardPropsType from "./types";

const DxcCard = ({
  imageSrc,
  imageBgColor = "black",
  imagePadding,
  imagePosition = "before",
  linkHref,
  onClick,
  imageCover = false,
  margin,
  contentPadding,
  tabIndex = 0,
  outlined = true,
  children,
}: CardPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  const [isHovered, changeIsHovered] = useState(false);

  const imageComponent = (
    <ImageContainer imageBgColor={imageBgColor}>
      <TagImage imagePadding={imagePadding} cover={imageCover} src={imageSrc}></TagImage>
    </ImageContainer>
  );

  return (
    <StyledDxcCard
      margin={margin}
      onMouseEnter={() => changeIsHovered(true)}
      onMouseLeave={() => changeIsHovered(false)}
      onClick={onClick}
      hasAction={onClick || linkHref}
      tabIndex={onClick || linkHref ? tabIndex : -1}
      as={linkHref && "a"}
      href={linkHref}
    >
      <DxcBox shadowDepth={!outlined ? 0 : isHovered && (onClick || linkHref) ? 2 : 1}>
        <ThemeProvider theme={colorsTheme.card}>
          <CardContainer hasAction={onClick || linkHref} imagePosition={imagePosition}>
            {imageSrc && imagePosition === "before" && imageComponent}
            <CardContent contentPadding={contentPadding}>{children}</CardContent>
            {imageSrc && imagePosition === "after" && imageComponent}
          </CardContainer>
        </ThemeProvider>
      </DxcBox>
    </StyledDxcCard>
  );
};

const StyledDxcCard = styled.div<CardPropsType & { hasAction: (() => void) | string }>`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};
  outline: ${({ hasAction }) => !hasAction && "none"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  text-decoration: none;
  ${({ hasAction }) =>
    hasAction &&
    `:focus {
    outline: #0095ff auto 1px;
  }`}
`;

const CardContainer = styled.div<{ hasAction: (() => void) | string; imagePosition: "before" | "after" }>`
  display: inline-flex;
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  &:hover {
    border-color: ${({ hasAction }) => (hasAction ? "" : "unset")};
  }
`;

const TagImage = styled.img<CardPropsType & { cover: boolean }>`
  height: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  width: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  object-fit: ${({ cover }) => (cover ? "cover" : "contain")};
`;

const ImageContainer = styled.div<{ imageBgColor: string }>`
  width: 35%;
  height: 100%;
  flex-shrink: 0;
  background: ${({ imageBgColor }) => imageBgColor};
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const CardContent = styled.div<CardPropsType>`
  flex-grow: 1;
  padding: ${({ contentPadding }) =>
    contentPadding && typeof contentPadding !== "object" ? spaces[contentPadding] : "0px"};
  padding-top: ${({ contentPadding }) =>
    contentPadding && typeof contentPadding === "object" && contentPadding.top ? spaces[contentPadding.top] : ""};
  padding-right: ${({ contentPadding }) =>
    contentPadding && typeof contentPadding === "object" && contentPadding.right ? spaces[contentPadding.right] : ""};
  padding-bottom: ${({ contentPadding }) =>
    contentPadding && typeof contentPadding === "object" && contentPadding.bottom ? spaces[contentPadding.bottom] : ""};
  padding-left: ${({ contentPadding }) =>
    contentPadding && typeof contentPadding === "object" && contentPadding.left ? spaces[contentPadding.left] : ""};
  overflow: hidden;
`;

export default DxcCard;
