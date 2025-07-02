import { Children, useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import AccordionPropsType from "./types";
import AccordionContext from "./AccordionContext";
import AccordionItem from "./AccordionItem";

const calculateWidth = (margin: AccordionPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionContainer = styled.div<{
  margin: AccordionPropsType["margin"];
}>`
  width: ${(props) => calculateWidth(props.margin)};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "var(--spacing-padding-none)")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
  cursor: "pointer";

  // first accordion
  > div:first-of-type:not(:only-of-type) {
    border-bottom-left-radius: var(--border-radius-none);
    border-bottom-right-radius: var(--border-radius-none);
    border-top-left-radius: var(--border-radius-s);
    border-top-right-radius: var(--border-radius-s);
  }

  // first accordion: hover, focus and active
  > div:first-of-type:not(:only-of-type) button:is(:hover, :focus, :active) {
    border-bottom-left-radius: var(--border-radius-none);
    border-bottom-right-radius: var(--border-radius-none);
  }

  // middle accordions
  > div:first-of-type:not(:only-of-type),
  div:first-of-type:not(:only-of-type) button:is(:hover, :focus, :active) {
    border-radius: var(--border-radius-none);
  }

  // last accordion
  > div:last-of-type:not(:only-of-type),
  div:last-of-type:not(:only-of-type) button:is(:hover, :focus, :active) {
    border-top-left-radius: var(--border-radius-none);
    border-top-right-radius: var(--border-radius-none);
    border-bottom-left-radius: var(--border-radius-s);
    border-bottom-right-radius: var(--border-radius-s);
  }

  // last expanded accordion
  > div:last-of-type:not(:only-of-type) > button[aria-expanded="true"],
  div:last-of-type:not(:only-of-type) > button[aria-expanded="true"]:is(:hover, :focus, :active) {
    border-radius: var(--border-radius-none);
  }
`;

const DxcAccordion = (props: AccordionPropsType): JSX.Element => {
  const { children, margin, onActiveChange } = props;

  const [innerIndexActive, setInnerIndexActive] = useState(
    props.independent
      ? (props.defaultIndexActive ?? -1)
      : Array.isArray(props.defaultIndexActive)
        ? props.defaultIndexActive.filter((i) => i !== undefined)
        : []
  );

  const handlerActiveChange = useCallback(
    (index: number | number[]) => {
      if (props.indexActive == null) {
        setInnerIndexActive((prev) => {
          if (props.independent) return typeof index === "number" ? (index === prev ? -1 : index) : prev;
          else {
            const prevArray = Array.isArray(prev) ? prev : [];
            return Array.isArray(index)
              ? index
              : prevArray.includes(index)
                ? prevArray.filter((i) => i !== index)
                : [...prevArray, index];
          }
        });
      }
      onActiveChange?.(index as number & number[]);
    },
    [props.indexActive, props.independent, onActiveChange, innerIndexActive]
  );

  const contextValue = useMemo(
    () => ({
      activeIndex: props.indexActive ?? innerIndexActive,
      handlerActiveChange,
      independent: props.independent,
    }),
    [props.indexActive, innerIndexActive, handlerActiveChange, props.independent]
  );

  return (
    <AccordionContainer margin={margin}>
      {Children.map(children, (accordion, index) => (
        <AccordionContext.Provider key={`accordion-${index}`} value={{ index, ...contextValue }}>
          {accordion}
        </AccordionContext.Provider>
      ))}
    </AccordionContainer>
  );
};

DxcAccordion.AccordionItem = AccordionItem;

export default DxcAccordion;
