import React, { Children, useCallback, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import getMargin from "../common/utils";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import AccordionGroupAccordion from "./AccordionGroupAccordion";
import AccordionGroupPropsType from "./types";
import AccordionGroupAccordionContext from "./AccordionGroupContext";

type AccordionProviderType = {
  children: AccordionGroupPropsType["children"];
  index: number;
  contextValue: {
    activeIndex: number;
    handlerActiveChange: (index: number) => void;
    disabled: boolean;
  };
};
const AccordionProvider = ({
  children,
  index,
  contextValue,
}: AccordionProviderType) => {
  const contextProviderValue = useMemo(
    () => ({ index, ...contextValue }),
    [index, contextValue]
  );
  return (
    <AccordionGroupAccordionContext.Provider
      key={`accordion-${index}`}
      value={contextProviderValue}
    >
      {children}
    </AccordionGroupAccordionContext.Provider>
  );
};

const DxcAccordionGroup = ({
  defaultIndexActive,
  indexActive,
  disabled = false,
  onActiveChange,
  margin,
  children,
}: AccordionGroupPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [innerIndexActive, setInnerIndexActive] = useState(
    defaultIndexActive ?? -1
  );

  const handlerActiveChange = useCallback(
    (index: number) => {
      if (indexActive == null) {
        setInnerIndexActive((prev) => (index === prev ? -1 : index));
      }
      if (!disabled) {
        onActiveChange?.(index);
      }
    },
    [disabled, indexActive, onActiveChange]
  );
  const contextValue = useMemo(
    () => ({
      activeIndex: indexActive ?? innerIndexActive,
      handlerActiveChange,
      disabled,
    }),
    [indexActive, innerIndexActive, handlerActiveChange, disabled]
  );

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionGroupContainer margin={margin} disabled={disabled}>
        {Children.map(children, (accordion, index) => (
          <AccordionProvider index={index} contextValue={contextValue}>
            {accordion}
          </AccordionProvider>
        ))}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

DxcAccordionGroup.Accordion = AccordionGroupAccordion;

const calculateWidth = (margin: AccordionGroupPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionGroupContainer = styled.div<{
  margin: AccordionGroupPropsType["margin"];
  disabled: AccordionGroupPropsType["disabled"];
}>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${({ margin }) =>
    margin && typeof margin !== "object" ? spaces[margin] : "0px"};
  margin-top: ${({ margin }) =>
    margin && typeof margin === "object" && margin.top
      ? spaces[margin.top]
      : ""};
  margin-right: ${({ margin }) =>
    margin && typeof margin === "object" && margin.right
      ? spaces[margin.right]
      : ""};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom
      ? spaces[margin.bottom]
      : ""};
  margin-left: ${({ margin }) =>
    margin && typeof margin === "object" && margin.left
      ? spaces[margin.left]
      : ""};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  > div:not(:last-of-type):not(:only-of-type) {
    border-bottom: ${(props) =>
      `${props.theme.accordionGroupSeparatorBorderThickness} ${props.theme.accordionGroupSeparatorBorderStyle}`};
    border-color: ${(props) => props.theme.accordionGroupSeparatorBorderColor};
  }
  > div:not(:first-of-type):not(:last-of-type):not(:only-of-type) {
    border-radius: 0;
    & > h3 > button {
      border-radius: 0;
    }
  }
  > div:first-of-type:not(:only-of-type) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-top-right-radius: ${(props) => props.theme.borderRadius};

    & > h3 > button {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  > div:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};

    & > h3 > button {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export default DxcAccordionGroup;
