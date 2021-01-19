import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

import DxcBox from "../box/Box";

const DxcCard = ({
  imageSrc,
  image,
  children,
  margin,
  linkHref,
  onClick,
  imageBgColor,
  imagePadding,
  imagePosition,
  outlined,
  imageCover,
}) => {
  const [isHovered, changeIsHovered] = useState(false);

  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  const tagContent = (
    <DxcBox shadowDepth={outlined ? 0 : isHovered && (onClick || linkHref) ? 2 : 1}>
      <CardContainer hasAction={onClick || linkHref} outlined={outlined} imagePosition={imagePosition}>
        <ImageContainer imageBgColor={imageBgColor}>
          {image ? (
            <TagImageContainer imagePadding={imagePadding} cover={imageCover}>
              {(image.type && (image.type === "svg" || image.type === "img") && image) || React.createElement(image)}
            </TagImageContainer>
          ) : (
            <TagImage imagePadding={imagePadding} cover={imageCover} src={imageSrc}></TagImage>
          )}
        </ImageContainer>
        <CardContent>{children}</CardContent>
      </CardContainer>
    </DxcBox>
  );

  return (
    <StyledDxcCard
      margin={margin}
      onMouseEnter={() => changeIsHovered(true)}
      onMouseLeave={() => changeIsHovered(false)}
      onClick={clickHandler}
      hasAction={onClick || linkHref}
    >
      {(linkHref && <StyledLink href={linkHref}>{tagContent}</StyledLink>) || tagContent}
    </StyledDxcCard>
  );
};

const StyledDxcCard = styled.div`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (margin && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (margin && margin.left ? spaces[margin.left] : "")};
`;

const CardContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ imagePosition }) => (imagePosition === "before" && "row") || "row-reverse"};
  height: 220px;
  width: 400px;
  &:hover {
    border-color: ${(props) => (props.hasAction ? "#FFED00" : "unset")};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const TagImageContainer = styled.div`
  height: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};
  width: ${({ imagePadding }) =>
    !imagePadding ? "100%" : `calc(100% - ${spaces[imagePadding]} - ${spaces[imagePadding]})`};

  img,
  svg:not(:root) {
    height: 100%;
    width: 100%;
    object-fit: ${({ cover }) => (cover ? "cover" : "contain")};
  }
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
  height: 100%;
  overflow: hidden;
`;

DxcCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
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
};

DxcCard.defaultProps = {
  image: null,
  imageSrc: null,
  margin: null,
  outlined: false,
  imagePadding: null,
  imageCover: false,
  linkHref: null,
  onClick: null,
  imageBgColor: "black",
  imagePosition: "before",
};

export default DxcCard;
