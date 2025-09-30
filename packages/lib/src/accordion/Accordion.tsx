import { Children, useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import AccordionPropsType, { AccordionContextProps } from "./types";
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
  cursor: pointer;

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

const AccordionItemWithProvider = ({
  child,
  index,
  contextValue,
}: {
  child: React.ReactElement;
  index: number;
  contextValue: Omit<AccordionContextProps, "index">;
}) => {
  const memoizedContext = useMemo(
    () => ({ index, ...contextValue }),
    [index, contextValue.activeIndex, contextValue.handlerActiveChange, contextValue.independent]
  );

  return <AccordionContext.Provider value={memoizedContext}>{child}</AccordionContext.Provider>;
};

const DxcAccordion = (props: AccordionPropsType): JSX.Element => {
  const { children, defaultIndexActive, independent, indexActive, margin, onActiveChange } = props;

  const [innerIndexActive, setInnerIndexActive] = useState(
    independent
      ? (defaultIndexActive ?? -1)
      : Array.isArray(defaultIndexActive)
        ? defaultIndexActive.filter((i) => i !== undefined)
        : []
  );

  const handlerActiveChange = useCallback(
    (index: number | number[]) => {
      if (indexActive == null) {
        setInnerIndexActive((prev) => {
          if (independent) return typeof index === "number" ? (index === prev ? -1 : index) : prev;
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
    [indexActive, independent, onActiveChange, innerIndexActive]
  );

  const contextValue = useMemo(
    () => ({
      activeIndex: indexActive ?? innerIndexActive,
      handlerActiveChange,
      independent,
    }),
    [indexActive, innerIndexActive, handlerActiveChange, independent]
  );

  return (
    <AccordionContainer margin={margin}>
      {Children.map(children, (accordion, index) => (
        <AccordionItemWithProvider
          key={`accordion-${index}`}
          child={accordion as React.ReactElement}
          index={index}
          contextValue={contextValue}
        />
      ))}
    </AccordionContainer>
  );
};

DxcAccordion.AccordionItem = AccordionItem;

export default DxcAccordion;
