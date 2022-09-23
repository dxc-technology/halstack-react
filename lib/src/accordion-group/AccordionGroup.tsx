import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DxcAccordion from "../accordion/Accordion";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import AccordionGroupPropsType, {
  AccordionGroupAccordionContextProps,
  AccordionPropsType,
  Margin,
  Space,
} from "./types";

const AccordionGroupAccordionContext = createContext<AccordionGroupAccordionContextProps | null>(null);

const AccordionGroupAccordion = ({ ...childProps }: AccordionPropsType): JSX.Element => {
  const { activeIndex, handlerActiveChange, disabled, index } = useContext(AccordionGroupAccordionContext);

  return (
    <DxcAccordion
      isExpanded={activeIndex === index}
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
  defaultIndexActive,
  indexActive,
  disabled = false,
  onActiveChange,
  margin,
  children,
}: AccordionGroupPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const [innerIndexActive, setInnerIndexActive] = useState(defaultIndexActive ?? -1);
  const handlerActiveChange = useCallback(
    (index) => {
      indexActive ?? setInnerIndexActive((prev) => (index === prev ? -1 : index));
      !disabled && onActiveChange?.(index);
    },
    [disabled, indexActive, onActiveChange]
  );
  const contextValue = useMemo(
    () => ({ activeIndex: indexActive ?? innerIndexActive, handlerActiveChange, disabled }),
    [indexActive, innerIndexActive, handlerActiveChange, disabled]
  );

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionGroupContainer margin={margin} disabled={disabled}>
        {(Array.isArray(children) ? children : [children])
          .filter((child) => child.type === AccordionGroupAccordion)
          .map((accordion, index) => (
            <AccordionGroupAccordionContext.Provider key={`accordion-${index}`} value={{ index, ...contextValue }}>
              {accordion}
            </AccordionGroupAccordionContext.Provider>
          ))}
      </AccordionGroupContainer>
    </ThemeProvider>
  );
};

DxcAccordionGroup.Accordion = AccordionGroupAccordion;

const calculateWidth = (margin) => `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

type AccordionGroupContainerProps = {
  margin: Space | Margin;
  disabled: boolean;
};
const AccordionGroupContainer = styled.div<AccordionGroupContainerProps>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
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
