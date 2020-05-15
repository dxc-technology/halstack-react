import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces } from "../common/variables.js";

const DxcHeading = ({ level = 1, theme = "light", text = "", weight = "", margin }) => {
  return (
    <HeadingContainer theme={theme} margin={margin}>
      {level === 1 ? (
        <HeadingLevel1 weight={weight}>{text}</HeadingLevel1>
      ) : level === 2 ? (
        <HeadingLevel2 weight={weight}>{text}</HeadingLevel2>
      ) : level === 3 ? (
        <HeadingLevel3 weight={weight}>{text}</HeadingLevel3>
      ) : level === 4 ? (
        <HeadingLevel4 weight={weight}>{text}</HeadingLevel4>
      ) : (
        <HeadingLevel5 weight={weight}>{text}</HeadingLevel5>
      )}
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.theme === "light" ? "#000000DE" : "#FFFFFF")};
`;

const HeadingLevel1 = styled.h1`
  font-size: 60px;
  line-height: 82px;
  font-weight: ${(props) =>
    props.weight === "light" || props.weight === "" ? 200 : props.weight === "normal" ? 400 : 600};
  letter-spacing: -0.53px;
`;

const HeadingLevel2 = styled.h2`
  font-size: 48px;
  line-height: 65px;
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === "" ? 400 : props.weight === "light" ? 200 : 600};
  letter-spacing: 0px;
`;

const HeadingLevel3 = styled.h3`
  font-size: 34px;
  line-height: 46px;
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === "" ? 400 : props.weight === "light" ? 200 : 600};
  letter-spacing: 0.24px;
`;

const HeadingLevel4 = styled.h4`
  font-size: 24px;
  line-height: 33px;
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === "" ? 400 : props.weight === "light" ? 200 : 600};
  letter-spacing: 0px;
`;

const HeadingLevel5 = styled.h5`
  font-size: 20px;
  line-height: 27px;
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === "" ? 400 : props.weight === "light" ? 200 : 600};
  letter-spacing: 0.26px;
`;

DxcHeading.propTypes = {
  level: PropTypes.number,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  text: PropTypes.string,
  weight: PropTypes.oneOf(["light", "normal", "bold", ""]),
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

export default DxcHeading;
