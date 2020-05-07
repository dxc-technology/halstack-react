import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";

const DxcLink = ({
    underlined = true,
    inheritColor = false,
    disabled = false,
    iconSrc,
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
        inheritColor={inheritColor}
        disabled={disabled}
        href={href}
        theme={theme}
        margin={margin}
        iconPosition={iconPosition}
        target={newWindow? "_blank" : "_self"}
      >
        {text}
        {
          iconSrc ? 
            <LinkIcon src={iconSrc} theme={theme} iconPosition={iconPosition}></LinkIcon>
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

  ${props => props.underlined ? 
      `text-decoration: none;
      padding-bottom: 1px !important;
      border-bottom: 1px solid;`
      : 
      `text-decoration: none`};
  
  color: ${ props => props.disabled ? props.theme === "light" ? "#525252" : "#959595" : !props.inheritColor ?
            props.theme === "light" ? "#006BF6" : "#4797FF" 
            : props.theme === "dark" ? "#FFFFFF" : "inherit"} !important;
  ${ props => !props.underlined ? "text-decoration-color: transparent;" :  ""}
  ${ props => props.disabled ? "pointer-events: none;" : ""}
  
  display: inline-flex;
  flex-direction: ${ props => props.iconPosition === "after" ?  "row" : "row-reverse"};
  justify-content: ${ props => props.iconPosition === "after" ? "flex-start" : "flex-end"};
  align-items: center;
 
  max-width: 100%;
  font-size: 16px;
  padding-bottom: 2px;

  &:hover {
    color: ${props=> props.theme === "light" ? "#006BF6" : "#4797FF"} !important;
    text-decoration: none;
    padding-bottom: 1px !important;
    border-bottom: 1px solid;

    cursor: pointer;
  }

  &:visited {
    ${
      props => !props.disabled ? 
      `color: ${props.theme === "light" ? "#8800F6" : "#C175FF"} !important; ` : ""
    }
  }
`;

const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  ${ props => props.iconPosition === "before" ? "margin-right" : "margin-left"}: 6px;
`;

DxcLink.propTypes = {
    underlined: PropTypes.bool,
    inheritColor: PropTypes.bool,
    disabled: PropTypes.bool,
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