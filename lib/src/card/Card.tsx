import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
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
  tabIndex = 0,
  outlined = true,
  children,
}: CardPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [isHovered, changeIsHovered] = useState(false);

  return (
    <Card
      hasAction={!!(onClick || linkHref)}
      margin={margin}
      onMouseEnter={() => changeIsHovered(true)}
      onMouseLeave={() => changeIsHovered(false)}
      onClick={onClick}
      tabIndex={onClick || linkHref ? tabIndex : -1}
      as={linkHref && "a"}
      href={linkHref}
    >
      <DxcBox
        shadowDepth={!outlined ? 0 : isHovered && (onClick || linkHref) ? 2 : 1}
      >
        <ThemeProvider theme={colorsTheme.card}>
          <CardContainer
            hasAction={!!(onClick || linkHref)}
            imagePosition={imageSrc ? imagePosition : "none"}
          >
            {imageSrc && (
              <ImageContainer imageBgColor={imageBgColor}>
                <TagImage
                  imagePadding={imagePadding}
                  imageCover={imageCover}
                  src={imageSrc}
                  alt="Card image"
                />
              </ImageContainer>
            )}
            <CardContent>{children}</CardContent>
          </CardContainer>
        </ThemeProvider>
      </DxcBox>
    </Card>
  );
};

const Card = styled.div<{
  hasAction: boolean;
  margin: CardPropsType["margin"];
}>`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};
  outline: ${({ hasAction }) => !hasAction && "none"};
  margin: ${({ margin }) =>
    margin && typeof margin !== "object" ? spaces[margin] : "0px"};
  margin-top: ${({ margin }) =>
    margin && typeof margin === "object" && margin.top
      ? spaces[margin.top]
      : ""};
  margin-right: ${({ margin }) =>
    margin && typeof margin === "object" && margin.right
      ? spaces[margin.right]
      : ""};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom
      ? spaces[margin.bottom]
      : ""};
  margin-left: ${({ margin }) =>
    margin && typeof margin === "object" && margin.left
      ? spaces[margin.left]
      : ""};
  text-decoration: none;
  ${({ hasAction }) =>
    hasAction &&
    `:focus {
      outline: #0095ff auto 1px;
    }`}
`;

const CardContainer = styled.div<{
  hasAction: boolean;
  imagePosition: CardPropsType["imagePosition"] | "none";
}>`
  display: inline-flex;
  flex-direction: ${(props) =>
    props.imagePosition === "after" ? "row-reverse" : "row"};
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  &:hover {
    border-color: ${({ hasAction }) => (hasAction ? "" : "unset")};
  }
`;

const TagImage = styled.img<{
  imagePadding: CardPropsType["imagePadding"];
  imageCover: CardPropsType["imageCover"];
}>`
  height: ${({ imagePadding }) =>
    !imagePadding
      ? "100%"
      : typeof imagePadding !== "object" &&
        `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  width: ${({ imagePadding }) =>
    !imagePadding
      ? "100%"
      : typeof imagePadding !== "object" &&
        `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  object-fit: ${({ imageCover }) => (imageCover ? "cover" : "contain")};
`;

const ImageContainer = styled.div<{
  imageBgColor: CardPropsType["imageBgColor"];
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 35%;
  height: 100%;
  background-color: ${({ imageBgColor }) => imageBgColor};
`;

const CardContent = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export default DxcCard;
