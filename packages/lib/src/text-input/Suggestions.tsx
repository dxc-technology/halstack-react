import { memo, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { HalstackLanguageContext } from "../HalstackContext";
import Suggestion from "./Suggestion";
import { SuggestionsProps } from "./types";
import DxcIcon from "../icon/Icon";
import { scrollbarStyles } from "../styles/scroll";

const SuggestionsContainer = styled.ul<{ error: boolean }>`
  box-sizing: border-box;
  margin: 0;
  max-height: 304px;
  padding: var(--spacing-padding-xxs) var(--spacing-padding-none);
  background-color: var(--color-bg-neutral-lightest);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-medium);
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread)
    var(--shadow-light);
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  overflow: auto;
  ${scrollbarStyles}
`;

const SuggestionsSystemMessage = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-fg-neutral-strong);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
`;

const SuggestionsErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  color: var(--color-fg-error-medium);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  /* Error icon */
  > span[role="img"] {
    font-size: var(--height-xxs);
  }
`;

const Suggestions = ({
  id,
  value,
  suggestions,
  visualFocusIndex,
  highlightedSuggestions,
  searchHasErrors,
  isSearching,
  suggestionOnClick,
  styles,
}: SuggestionsProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const listboxRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const visualFocusedOptionEl = listboxRef?.current?.querySelectorAll("[role='option']")[visualFocusIndex];
    visualFocusedOptionEl?.scrollIntoView?.({
      block: "nearest",
      inline: "start",
    });
  }, [visualFocusIndex]);

  return (
    <SuggestionsContainer
      id={id}
      error={!!searchHasErrors}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      ref={listboxRef}
      role="listbox"
      style={styles}
      aria-label="Suggestions"
    >
      {!isSearching &&
        !searchHasErrors &&
        suggestions.length > 0 &&
        suggestions.map((suggestion, index) => (
          <Suggestion
            key={`${id}-suggestion-${index}`}
            id={`${id}-suggestion-${index}`}
            value={value}
            onClick={suggestionOnClick}
            suggestion={suggestion}
            isLast={index === suggestions.length - 1}
            visuallyFocused={visualFocusIndex === index}
            highlighted={highlightedSuggestions}
          />
        ))}
      {isSearching && (
        <li role="option">
          <SuggestionsSystemMessage>
            {translatedLabels.textInput.searchingMessage}
          </SuggestionsSystemMessage>
        </li>
      )}
      {searchHasErrors && (
        <li role="option">
          <SuggestionsErrorMessage role="alert" aria-live="assertive">
            <DxcIcon icon="filled_error" />
            {translatedLabels.textInput.fetchingDataErrorMessage}
          </SuggestionsErrorMessage>
        </li>
      )}
    </SuggestionsContainer>
  );
};

export default memo(Suggestions);
