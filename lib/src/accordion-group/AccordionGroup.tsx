import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import AccordionGroupPropsType, { AccordionPropsType } from "./types";

type AccordionGroupAccordionContext = {
  innerIsExpanded: number;
  handlerActiveChange: (index: number) => void;
  disabled: boolean;
  index: number;
};
const AccordionGroupAccordionContext = createContext<AccordionGroupAccordionContext | null>(null);

const AccordionGroupAccordion = ({ ...childProps }: AccordionPropsType): JSX.Element => {
  const { innerIsExpanded, handlerActiveChange, disabled, index } = useContext(AccordionGroupAccordionContext);

  return (
    <DxcAccordion
      isExpanded={innerIsExpanded === index}
      onChange={() => {
        handlerActiveChange(index);
      }}
      disabled={disabled}
      {...childProps}
    >
      {childProps.children}
    </DxcAccordion>
  );
};

const DxcAccordionGroup = ({
  indexActive,
  disabled = false,
  onActiveChange,
  margin,
  children,
}: AccordionGroupPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  const [innerIsExpanded, setInnerIsExpanded] = useState(0);
  const handlerActiveChange = useCallback(
    (index) => {
      indexActive === undefined
        ? setInnerIsExpanded((prev) => (index === prev ? -1 : index))
        : setInnerIsExpanded(indexActive);

      !disabled && onActiveChange?.(index);
    },
    [disabled, indexActive, onActiveChange]
  );
  const value = useMemo(() => ({ innerIsExpanded, handlerActiveChange, disabled }), [innerIsExpanded, disabled]);

  useEffect(() => {
    setInnerIsExpanded(indexActive);
  }, [indexActive]);

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionGroupContainer margin={margin} disabled={disabled}>
        {(Array.isArray(children) ? children : [children])
          .filter((child) => child.type === AccordionGroupAccordion)
          .map((accordion, index) => (
            <AccordionGroupAccordionContext.Provider value={{ index, ...value }}>
              {accordion}
            </AccordionGroupAccordionContext.Provider>
          ))}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

DxcAccordionGroup.Accordion = AccordionGroupAccordion;

const calculateWidth = (margin) => `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionGroupContainer = styled.div`
  display: inline-block;
  width: ${(props) => calculateWidth(props.margin)};

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

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

export default DxcAccordionGroup;
