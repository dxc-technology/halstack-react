import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import DxcAccordion from "../accordion/Accordion";
import "../common/OpenSans.css";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";

const Accordion = ({ margin, ...childProps }) => <DxcAccordion {...childProps}>{childProps.children}</DxcAccordion>;

const DxcAccordionGroup = ({ disabled = false, onActiveChange, indexActive = undefined, margin, children = [] }) => {
  const colorsTheme = useTheme();

  const [innerIsExpanded, setInnerIsExpanded] = React.useState(indexActive);

  const handlerActiveChange = (index) => {
    if (indexActive === undefined) {
      setInnerIsExpanded(index === innerIsExpanded ? -1 : index);
    } else {
      setInnerIsExpanded(indexActive);
    }
    if (typeof onActiveChange === "function" && !disabled) {
      onActiveChange(index);
    }
  };

  useEffect(() => {
    setInnerIsExpanded(indexActive);
  }, [indexActive]);

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionGroupContainer margin={margin} disabled={disabled}>
        {(Array.isArray(children) &&
          children
            .filter((el) => el.type === Accordion)
            .map((el, index) =>
              React.cloneElement(el, {
                onChange: () => {
                  handlerActiveChange(index);
                },
                isExpanded: index === innerIsExpanded,
                disabled: disabled || el.props.disabled,
              })
            )) ||
          [children].filter((el) => el.type === Accordion)}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

const AccordionGroupContainer = styled.div`
  min-width: 280px;
  width: ${(props) => calculateWidth(props.margin)};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  font-family: "Open Sans", sans-serif;
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};

  & > :not(div:last-child) {
    & > div:first-child {
      border-radius: 0;
      border-bottom: 1px solid;
      border-color: #00000024;

      & > .Mui-expanded {
        border-radius: 0;
      }

      & > .MuiButtonBase-root {
        border-radius: 0;
      }
    }
  }

  & > div:first-child {
    & > div:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid;
      border-color: #00000024;

      & > .Mui-expanded {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      & > .MuiButtonBase-root {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  }

  & > div:last-child {
    & > div:first-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      & > .Mui-expanded {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      & > .MuiButtonBase-root {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
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
};

DxcAccordionGroup.Accordion = Accordion;

export default DxcAccordionGroup;
