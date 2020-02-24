import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors, spaces, responsiveSizes } from "../common/variables.js";
import "../common/OpenSans.css";
import ArrowIcon from "./arrow_icon.svg";

const DxcSidenav = ({ children, padding, mode }) => {
  const [isShown, setIsShown] = useState(window.innerWidth <= responsiveSizes.tablet ? false : true);

  const handleSidenav = () => {
    setIsShown(!isShown);
  };
  return (
    <Sidenav isShown={isShown} padding={padding} mode={mode}>
      {children}
      <ArrowTrigger onClick={handleSidenav} isShown={isShown}>
        <ArrowImage src={ArrowIcon} isShown={isShown}></ArrowImage>
      </ArrowTrigger>
    </Sidenav>
  );
};

const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  min-width: ${window.innerWidth <= responsiveSizes.tablet ? "60vw" : "300px"};
  box-sizing: border-box;
  padding: ${props => (props.padding ? spaces[props.padding] : "")};
  z-index: ${props => (props.mode === "overlay" ? "20" : "auto")};
  transform: ${props =>
    props.isShown
      ? "translateX(0)"
      : !props.isShown && window.innerWidth <= responsiveSizes.tablet
      ? "translateX(-60vw)"
      : !props.isShown && window.innerWidth > responsiveSizes.tablet
      ? "translateX(-300px)"
      : "translateX(-300px)"};
  transition: transform 0.4s ease-in-out;

  & + div {
    flex-grow: 1;
    margin-left: ${props =>
      props.isShown && props.mode === "push" && window.innerWidth > responsiveSizes.tablet ? "300px" : "0"};
    transition: margin 0.4s ease-in-out;
  }
`;

const ArrowTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${window.innerWidth <= responsiveSizes.tablet ? "calc(60vw - 21px)" : "279px"};
  top: calc(50vh + 21px);
  width: 42px;
  min-height: 42px;
  background-color: ${colors.lightGrey}80;
  border-radius: 50%;
  transform: ${props => (props.isShown ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  width: 18px;
  height: 18px;
  margin-left: ${props => (props.isShown ? "0" : "10px")};
  transition: margin 0.4s ease-in;
`;

DxcSidenav.propTypes = {
  mode: PropTypes.oneOf(["overlay", "push", ""]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces))
    }),
    PropTypes.oneOf([...Object.keys(spaces)])
  ])
};
export default DxcSidenav;
