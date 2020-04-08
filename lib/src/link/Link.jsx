import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

const DxcLink = ({
    underlined = false,
    color = false,
    iconSrc = "",
    iconPosition = "before",
    href = "",
    theme = "light",
    newWindow = false,
    text = "",
    margin
}) => {
    return (
      <LinkText 
        underlined={underlined}
        color={color}
        href={href}
        theme={theme}
        margin={margin}
        iconPosition={iconPosition}
        target={newWindow? "_blank" : "_self"}
      >
        {text}
        {
          iconSrc ? 
            <LinkIcon src={iconSrc} color={color} theme={theme} iconPosition={iconPosition}></LinkIcon>
          : ''
        }
        
      </LinkText>
    );
};


const LinkText = styled.a`
  margin: ${props => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${props =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  text-decoration: ${ props => props.underlined ? "underline" : ""};
  color: ${ props => props.color ? props.theme === "light" ? "#006BF6" : "#4797FF" : "inherit"} !important;
  ${ props => !props.underlined ? "text-decoration-color: transparent;" :  ""}
  
  display: inline-flex;
  flex-direction: ${ props => props.iconPosition === "after" ?  "row" : "row-reverse"};
  justify-content: ${ props => props.iconPosition === "after" ? "flex-start" : "flex-end"};
  align-items: center;
 
  max-width: 100%;
  font-size: 16px;

  &:hover {
    ${props => !props.underlined ?
      `color: ${props.theme === "light" ? "#006BF6" : "#4797FF"} !important;
      text-decoration-color: ${props.theme === "light" ? "#006BF6" : "#4797FF"};`
      : ""
    }
    
    text-decoration: "underline";
    cursor: pointer;
  }

  &:visited {
    color: ${ props => props.theme === "light" ? "#8800F6" : "#C175FF"} !important;
  }
`;

const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  ${ props => props.iconPosition === "before" ? "margin-right" : "margin-left"}: 10px;
`;

DxcLink.propTypes = {
    underlined: PropTypes.bool,
    color: PropTypes.bool,
    iconSrc: PropTypes.string,
    iconPosition: PropTypes.oneOf(["after", "before"]),
    href: PropTypes.string,
    theme: PropTypes.oneOf(["light", "dark", ""]),
    margin: PropTypes.oneOfType([
      PropTypes.shape({
        top: PropTypes.oneOf(Object.keys(spaces)),
        bottom: PropTypes.oneOf(Object.keys(spaces)),
        left: PropTypes.oneOf(Object.keys(spaces)),
        right: PropTypes.oneOf(Object.keys(spaces))
      }),
      PropTypes.oneOf([...Object.keys(spaces)])
    ]),
    newWindow: PropTypes.bool,
    text: PropTypes.string
};


export default DxcLink;