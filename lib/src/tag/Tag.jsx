import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

import DxcBox from "../box/Box";

const DxcTag = ({
  icon,
  iconSrc,
  label,
  margin,
  linkHref,
  onClick,
  iconBgColor = "black",
  labelPosition = "after",
  newWindow = false,
  size = "fitContent",
}) => {
  const [isHovered, changeIsHovered] = useState(false);
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  const tagContent = (
    <DxcBox size={size} shadowDepth={(isHovered && (onClick || linkHref) && 2) || 1}>
      <TagContent labelPosition={labelPosition} margin={margin} size={size}>
        <IconContainer iconBgColor={iconBgColor}>
          {icon ? (
            <TagIconContainer>{typeof icon === "object" ? icon : React.createElement(icon)}</TagIconContainer>
          ) : (
            <TagIcon src={iconSrc}></TagIcon>
          )}
        </IconContainer>
        {size !== "small" && <TagLabel>{label}</TagLabel>}
      </TagContent>
    </DxcBox>
  );

  return (
    <StyledDxcTag
      margin={margin}
      onMouseEnter={() => changeIsHovered(true)}
      onMouseLeave={() => changeIsHovered(false)}
      onClick={clickHandler}
      hasAction={onClick || linkHref}
    >
      {onClick ? (
        <StyledButton>{tagContent}</StyledButton>
      ) : linkHref ? (
        <StyledLink href={linkHref} target={newWindow ? "_blank" : "_self"}>
          {tagContent}
        </StyledLink>
      ) : (
        tagContent
      )}
    </StyledDxcTag>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (size) => {
  return sizes[size];
};

const StyledDxcTag = styled.div`
  display: inline-flex;
  cursor: ${({ hasAction }) => (hasAction && "pointer") || "unset"};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) => (margin && margin.bottom ? spaces[margin.bottom] : "")};
  margin-left: ${({ margin }) => (margin && margin.left ? spaces[margin.left] : "")};
`;

const TagContent = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ labelPosition }) => (labelPosition === "before" && "row-reverse") || "row"};
  width: ${(props) => calculateWidth(props.size)};
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: 0;
  font-family: inherit;
`;

const TagIcon = styled.img`
  padding: 10px 12px;
  height: 23px;
`;

const TagIconContainer = styled.div`
  height: 43px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img,
  svg {
    height: 23px;
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  background: ${({ iconBgColor }) => iconBgColor};
  width: 48px;
  justify-content: center;
`;

const TagLabel = styled.div`
  padding: 0px 30px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
  flex-grow: 1;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

DxcTag.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  iconSrc: PropTypes.string,
  iconBgColor: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["before", "after"]),
  linkHref: PropTypes.string,
  onClick: PropTypes.func,
  newWindow: PropTypes.bool,
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

DxcTag.defaultProps = {
  icon: null,
  iconSrc: null,
  label: null,
  margin: null,
  linkHref: null,
  onClick: null,
  iconBgColor: "black",
  labelPosition: "after",
  newWindow: false,
};

export default DxcTag;
