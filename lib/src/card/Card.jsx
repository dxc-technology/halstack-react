import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

import DxcBox from "../box/Box";

const DxcCard = ({
  imageSrc,
  children,
  margin,
  contentPadding,
  linkHref,
  onClick,
  imageBgColor,
  imagePadding,
  imagePosition,
  outlined,
  imageCover,
  tabIndex = 0,
}) => {
  const [isHovered, changeIsHovered] = useState(false);

  const tagContent = (
    <DxcBox shadowDepth={outlined ? 0 : isHovered && (onClick || linkHref) ? 2 : 1}>
      <CardContainer hasAction={onClick || linkHref} outlined={outlined} imagePosition={imagePosition}>
        {imageSrc && (
          <ImageContainer imageBgColor={imageBgColor}>
            <TagImage imagePadding={imagePadding} cover={imageCover} src={imageSrc}></TagImage>
          </ImageContainer>
        )}
        <CardContent contentPadding={contentPadding}>{children}</CardContent>
      </CardContainer>
    </DxcBox>
  );

  return (
    <StyledDxcCard
      margin={margin}
      onMouseEnter={() => changeIsHovered(true)}
      onMouseLeave={() => changeIsHovered(false)}
      onClick={onClick}
      hasAction={onClick}
      tabIndex={typeof onClick === "function" && !linkHref ? tabIndex : -1}
    >
      {(linkHref && (
        <StyledLink tabIndex={tabIndex} href={linkHref}>
          {tagContent}
        </StyledLink>
      )) ||
        tagContent}
    </StyledDxcCard>
  );
};

const StyledDxcCard = styled.div`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};
  outline: ${({ hasAction }) => !hasAction && "none"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (margin && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (margin && margin.left ? spaces[margin.left] : "")};
`;

const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({ imagePosition }) => (imagePosition === "before" && "row") || "row-reverse"};
  height: 220px;
  width: 400px;
  &:hover {
    border-color: ${({ hasAction }) => (hasAction ? "#FFED00" : "unset")};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const TagImage = styled.img`
  height: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  width: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  object-fit: ${({ cover }) => (cover ? "cover" : "contain")};
`;

const ImageContainer = styled.div`
  width: 140px;
  height: 100%;
  flex-shrink: 0;
  background: ${({ imageBgColor }) => imageBgColor};
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const CardContent = styled.div`
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

DxcCard.propTypes = {
  imageSrc: PropTypes.string,
  imageBgColor: PropTypes.string,
  imagePadding: PropTypes.oneOf([...Object.keys(spaces)]),
  imagePosition: PropTypes.oneOf(["before", "after"]),
  linkHref: PropTypes.string,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  imageCover: PropTypes.bool,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  contentPadding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};

DxcCard.defaultProps = {
  imageSrc: null,
  margin: null,
  contentPadding: null,
  outlined: false,
  imagePadding: null,
  imageCover: false,
  linkHref: null,
  onClick: null,
  imageBgColor: "black",
  imagePosition: "before",
};

export default DxcCard;
