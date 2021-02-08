import React, { useContext, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { getCustomTheme, getMargin } from "../common/utils.js";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcAccordionGroup = ({ disabled = false, onActiveChange, indexActive = -1, margin, children = [] }) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(indexActive);

  const handlerActiveChange = (index) => {
    if(typeof onActiveChange !== "function"){ //uncontrolled indexActive === -1
      setInnerIsExpanded(index);
      if(index === innerIsExpanded){ 
        setInnerIsExpanded(-1);
      }
    }
    else{ //controlled
      onActiveChange(index);
      if(indexActive !== -1){
        onActiveChange(index);
      }
      if(index === innerIsExpanded){ 
        setInnerIsExpanded(-1);
      }
      else if(index === indexActive){
        setInnerIsExpanded(indexActive);
      }
    }
  };

  useEffect(() => {
    setInnerIsExpanded(indexActive);
  }, [indexActive]);

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <DXCAccordionGroupContainer margin={margin} disabled={disabled}>
        {children.map((el, index) => {
          let accordionComponent = React.cloneElement(el, {
            onChange: () => {
              handlerActiveChange(index);
            },
            isExpanded: index === innerIsExpanded
          });
          return accordionComponent.type.name == "DxcAccordion" && accordionComponent;
        })}
      </DXCAccordionGroupContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

DxcAccordionGroup.propTypes = {
  disabled: PropTypes.bool,
  onActiveChange: PropTypes.func,
  indexActive: PropTypes.number,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
      iconPosition: PropTypes.oneOf(["before", "after"]),
      assistiveText: PropTypes.string,
      disabled: PropTypes.bool,
      children: PropTypes.element,
      padding: PropTypes.oneOfType([
        PropTypes.shape({
          top: PropTypes.oneOf(Object.keys(spaces)),
          bottom: PropTypes.oneOf(Object.keys(spaces)),
          left: PropTypes.oneOf(Object.keys(spaces)),
          right: PropTypes.oneOf(Object.keys(spaces)),
        }),
        PropTypes.oneOf([...Object.keys(spaces)]),
      ]),
    })
  ),
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

const DXCAccordionGroupContainer = styled.div`
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

DxcAccordionGroup.Accordion = DxcAccordion;

export default DxcAccordionGroup;
