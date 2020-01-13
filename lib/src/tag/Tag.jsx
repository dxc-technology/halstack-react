import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

import DxcBox from "../box/Box";

const DxcTag = ({ iconSrc, label, margin, linkHref, onClick, iconBgColor, labelPosition, size="medium" }) => {
  const [isHovered, changeIsHovered] = useState(false);
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  const tagContent = (
    <DxcBox size={size} shadowDepth={(isHovered && (onClick || linkHref) && 2) || 1}>
      <TagContent labelPosition={labelPosition}>
        <IconContainer iconBgColor={iconBgColor}>
          <TagIcon src={iconSrc}></TagIcon>
        </IconContainer>
        <TagLabel>{label}</TagLabel>
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
      {(linkHref && <StyledLink href={linkHref}>{tagContent}</StyledLink>) || tagContent}
    </StyledDxcTag>
  );
};

const sizes = {
  small: "42px",
  medium: "240px",
  large: "480px",
  fillParent: "100%"
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
  background-color: white;
  flex-direction: ${({ labelPosition }) => (labelPosition === "before" && "row-reverse") || "row"};
  width: 100%;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const TagIcon = styled.img`
  padding: 10px 12px;
  height: 23px;
`;

const IconContainer = styled.div`
  display: inline-flex;
  background: ${({ iconBgColor }) => iconBgColor};
  min-width: 48px;
  justify-content: center;
`;

const TagLabel = styled.div`
  padding: 0px 30px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
  display: flex;
  justify-content: center;
  width: 100%;
`;

DxcTag.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  iconSrc: PropTypes.string,
  iconBgColor: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["before", "after"]),
  linkHref: PropTypes.string,
  onClick: PropTypes.func,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};

DxcTag.defaultProps = {
  iconSrc: null,
  label: null,
  margin: null,
  linkHref: null,
  onClick: null,
  iconBgColor: "black",
  labelPosition: "after"
};

export default DxcTag;
