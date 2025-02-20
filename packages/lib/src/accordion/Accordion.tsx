import { Children, useCallback, useContext, useMemo, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import AccordionPropsType from "./types";
import AccordionContext from "./AccordionContext";
import HalstackContext from "../HalstackContext";
import AccordionItem from "./AccordionItem";

const DxcAccordion = ({
  independent = false,
  defaultIndexActive,
  indexActive,
  onActiveChange,
  margin,
  children,
}: AccordionPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);

  const [innerIndexActive, setInnerIndexActive] = useState(
    independent
      ? (defaultIndexActive ?? -1)
      : Array.isArray(defaultIndexActive)
        ? defaultIndexActive.filter((i) => i !== undefined)
        : defaultIndexActive !== undefined
          ? [defaultIndexActive]
          : []
  );

  const handlerActiveChange = useCallback(
    (index: number | number[]) => {
      if (indexActive == null) {
        setInnerIndexActive((prev) => {
          if (independent) {
            return typeof index === "number" ? (index === prev ? -1 : index) : prev;
          } else {
            const prevArray = Array.isArray(prev) ? prev : [];
            if (Array.isArray(index)) {
              return index;
            } else {
              return prevArray.includes(index) ? prevArray.filter((i) => i !== index) : [...prevArray, index];
            }
          }
        });
      }

      if (independent && typeof index === "number") {
        (onActiveChange as (index: number) => void)?.(index);
      } else if (!independent && Array.isArray(index)) {
        (onActiveChange as (index: number[]) => void)?.(index);
      }
    },
    [indexActive, onActiveChange, independent, innerIndexActive]
  );

  const contextValue = useMemo(
    () => ({
      activeIndex:
        indexActive != null
          ? independent
            ? indexActive
            : Array.isArray(indexActive)
              ? indexActive
              : [indexActive]
          : innerIndexActive,
      handlerActiveChange,
      independent,
    }),
    [indexActive, innerIndexActive, handlerActiveChange, independent]
  );

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionContainer margin={margin}>
        {Children.map(children, (accordion, index) => (
          <AccordionContext.Provider key={`accordion-${index}`} value={{ index, ...contextValue }}>
            {accordion}
          </AccordionContext.Provider>
        ))}
      </AccordionContainer>
    </ThemeProvider>
  );
};

DxcAccordion.AccordionItem = AccordionItem;

const calculateWidth = (margin: AccordionPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionContainer = styled.div<{
  margin: AccordionPropsType["margin"];
}>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  cursor: "pointer";

  // first and middle accordions (separator)
  > div:not(:last-of-type):not(:only-of-type) {
    border-bottom: ${(props) =>
      `${props.theme.accordionSeparatorBorderThickness} ${props.theme.accordionSeparatorBorderStyle}`};
    border-color: ${(props) => props.theme.accordionSeparatorBorderColor};
  }

  // first accordion
  > div:first-of-type:not(:only-of-type) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-top-right-radius: ${(props) => props.theme.borderRadius};
  }

  // first accordion: hover, focus and active
  > div:first-of-type:not(:only-of-type) button:hover,
  div:first-of-type:not(:only-of-type) button:focus,
  div:first-of-type:not(:only-of-type) button:active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  // middle accordions
  > div:not(:first-of-type):not(:last-of-type):not(:only-of-type) {
    border-radius: 0;
  }

  // middle accordions: hover, focus and active
  > div:not(:first-of-type):not(:last-of-type):not(:only-of-type) button:hover,
  div:not(:first-of-type):not(:last-of-type):not(:only-of-type) button:focus,
  div:not(:first-of-type):not(:last-of-type):not(:only-of-type) button:active {
    border-radius: 0;
  }

  // last accordion
  > div:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  }

  // last accordion: hover, focus and active
  > div:last-of-type:not(:only-of-type) button:hover,
  div:last-of-type:not(:only-of-type) button:focus,
  div:last-of-type:not(:only-of-type) button:active {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  }

  // last expanded accordion
  > div:last-of-type:not(:only-of-type) > button[aria-expanded="true"] {
    border-radius: 0;
  }
  // last expanded accordion: hover, focus and active
  > div:last-of-type:not(:only-of-type) > button[aria-expanded="true"]:hover,
  div:last-of-type:not(:only-of-type) > button[aria-expanded="true"]:focus,
  div:last-of-type:not(:only-of-type) > button[aria-expanded="true"]:active {
    border-radius: 0;
  }
`;

export default DxcAccordion;
