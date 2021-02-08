import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { getCustomTheme, getMargin } from "../common/utils.js";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const Accordion = ({ props, children }) => {
  return (
    <AccordionChild>
      <DxcAccordion {...props}>
        {children}
      </DxcAccordion>
    </AccordionChild>
  );
};

const AccordionChild = styled.div`
  
`;

const DxcAccordionGroup = ({
  disabled = false,
  onChange = "",
  indexActive = 0,
  children,
  margin,
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <DXCAccordionGroup margin={margin} disabled={disabled}>
        <AccordionGroupContainer>
          {children}
        </AccordionGroupContainer>
      </DXCAccordionGroup>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

DxcAccordionGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  indexActive: PropTypes.bool,
  children: PropTypes.element,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ])
};

const DXCAccordionGroup = styled.div`
  min-width: 280px;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  width: ${(props) => calculateWidth(props.margin)};

  font-family: "Open Sans", sans-serif;
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};
`;

const AccordionGroupContainer = styled.div`
  display: flex;
`;

DXCAccordionGroup.Accordion = Accordion;

export default DXCAccordionGroup;
