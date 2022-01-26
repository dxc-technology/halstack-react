import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import AccordionGroupPropsType from "./types";

const Accordion = ({ margin, ...childProps }): JSX.Element => (
  <DxcAccordion {...childProps}>{childProps.children}</DxcAccordion>
);

const DxcAccordionGroup = ({
  disabled = false,
  indexActive,
  onActiveChange,
  margin,
  children,
}: AccordionGroupPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  const [innerIsExpanded, setInnerIsExpanded] = useState(indexActive);

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
        {(Array.isArray(children) ? children : [children])
          .filter((el) => el.type === Accordion)
          .map((el, index) =>
            React.cloneElement(el, {
              onChange: () => {
                handlerActiveChange(index);
              },
              isExpanded: index === innerIsExpanded,
              disabled: disabled || el.props.disabled,
            })
          )}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

const AccordionGroupContainer = styled.div`
  width: ${(props) => calculateWidth(props.margin)};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};

  & > :not(div:last-child) {
    & > div:first-child {
      border-radius: 0;
      border-bottom: ${(props) =>
        `${props.theme.accordionGroupSeparatorBorderThickness} ${props.theme.accordionGroupSeparatorBorderStyle}`};
      border-color: ${(props) => props.theme.accordionGroupSeparatorBorderColor};

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
      border-top-left-radius: ${(props) => props.theme.borderRadius};
      border-top-right-radius: ${(props) => props.theme.borderRadius};
      border-bottom: ${(props) =>
        `${props.theme.accordionGroupSeparatorBorderThickness} ${props.theme.accordionGroupSeparatorBorderStyle}`};
      border-color: ${(props) => props.theme.accordionGroupSeparatorBorderColor};

      & > .Mui-expanded {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: ${(props) => props.theme.borderRadius};
        border-top-right-radius: ${(props) => props.theme.borderRadius};
      }

      & > .MuiButtonBase-root {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: ${(props) => props.theme.borderRadius};
        border-top-right-radius: ${(props) => props.theme.borderRadius};
      }
    }
  }

  & > div:last-child {
    & > div:first-child {
      border-bottom-left-radius: ${(props) => props.theme.borderRadius};
      border-bottom-right-radius: ${(props) => props.theme.borderRadius};
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      & > .Mui-expanded {
        border-bottom-left-radius: ${(props) => props.theme.borderRadius};
        border-bottom-right-radius: ${(props) => props.theme.borderRadius};
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      & > .MuiButtonBase-root {
        border-bottom-left-radius: ${(props) => props.theme.borderRadius};
        border-bottom-right-radius: ${(props) => props.theme.borderRadius};
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
`;

DxcAccordionGroup.Accordion = Accordion;

export default DxcAccordionGroup;
