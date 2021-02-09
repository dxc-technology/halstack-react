import React, { useContext, useMemo, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { getCustomTheme, getMargin } from "../common/utils.js";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcAccordionGroup = ({
  disabled = false,
  onActiveChange,
  indexActive = -1,
  margin,
  padding,
  size = "fitContent",
  children = [],
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(indexActive);

  const handlerActiveChange = (index) => {
    if (typeof onActiveChange !== "function") {
      //if not function then uncontrolled
      setInnerIsExpanded(index === innerIsExpanded ? -1 : index);
    } else {
      //controlled
      onActiveChange(index);
      // if (indexActive !== -1) {
      //   onActiveChange(index);
      // }
      // if (index === innerIsExpanded) {
      //   setInnerIsExpanded(-1);
      // } else {
      //   setInnerIsExpanded(indexActive);
      // }
      setInnerIsExpanded(indexActive === innerIsExpanded ? -1 : indexActive);
    }
  };

  useEffect(() => {
    setInnerIsExpanded(indexActive);
  }, [indexActive]);

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionGroupContainer margin={margin} padding={padding} size={size} disabled={disabled}>
        {children.map((el, index) => {
          let accordionComponent = React.cloneElement(el, {
            onChange: () => {
              handlerActiveChange(index);
            },
            isExpanded: index === innerIsExpanded,
            disabled: disabled,
          });
          return accordionComponent.type.name == "DxcAccordion" && accordionComponent;
        })}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

const sizes = {
  small: "48px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "unset",
};

const calculateWidth = (margin, size, padding) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")} -
    ${getMargin(padding, "left")} - ${getMargin(padding, "right")})`;
  }
  return sizes[size];
};

const AccordionGroupContainer = styled.div`
  min-width: 280px;
  width: ${(props) => calculateWidth(props.margin, props.size, props.padding)};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  padding: ${({ padding }) => (padding && typeof padding !== "object" ? spaces[padding] : "0px")};
  padding-top: ${({ padding }) => (padding && typeof padding === "object" && padding.top ? spaces[padding.top] : "")};
  padding-right: ${({ padding }) =>
    padding && typeof padding === "object" && padding.right ? spaces[padding.right] : ""};
  padding-bottom: ${({ padding }) =>
    padding && typeof padding === "object" && padding.bottom ? spaces[padding.bottom] : ""};
  padding-left: ${({ padding }) =>
    padding && typeof padding === "object" && padding.left ? spaces[padding.left] : ""};

  font-family: "Open Sans", sans-serif;
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};
`;

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
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  size: PropTypes.oneOf([...Object.keys(sizes)]),
};

DxcAccordionGroup.Accordion = DxcAccordion;

export default DxcAccordionGroup;
