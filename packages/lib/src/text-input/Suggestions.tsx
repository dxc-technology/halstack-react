import { memo, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { HalstackLanguageContext } from "../HalstackContext";
import Suggestion from "./Suggestion";
import { SuggestionsProps } from "./types";
import DxcIcon from "../icon/Icon";
import scrollbarStyles from "../styles/scroll";

const SuggestionsContainer = styled.div`
  max-height: 304px;
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  overflow-y: auto;
  margin: 0px calc(${`var(--spacing-padding-xs)`} * -1);
  ${scrollbarStyles}
`;

const SuggestionsSystemMessage = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-fg-neutral-strong);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
`;

const SuggestionsErrorMessage = styled.div`
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
  highlightedSuggestions,
  id,
  isSearching,
  searchHasErrors,
  styles,
  suggestionOnClick,
  suggestions,
  value,
  visualFocusIndex,
}: SuggestionsProps) => {
  const translatedLabels = useContext(HalstackLanguageContext).labels;
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
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      style={styles}
    >
      {isSearching ? (
        <SuggestionsSystemMessage aria-live="polite">
          {translatedLabels.textInput.searchingMessage}
        </SuggestionsSystemMessage>
      ) : searchHasErrors ? (
        <SuggestionsErrorMessage aria-live="assertive" role="alert">
          <DxcIcon icon="filled_error" />
          {translatedLabels.textInput.fetchingDataErrorMessage}
        </SuggestionsErrorMessage>
      ) : (
        <ul aria-label="Suggestions" id={id} ref={listboxRef} role="listbox" style={{ margin: 0, padding: 0 }}>
          {suggestions.map((suggestion, index) => (
            <Suggestion
              highlighted={highlightedSuggestions}
              id={`${id}-suggestion-${index}`}
              isLast={index === suggestions.length - 1}
              key={`${id}-suggestion-${index}`}
              onClick={suggestionOnClick}
              suggestion={suggestion}
              value={value}
              visuallyFocused={visualFocusIndex === index}
            />
          ))}
        </ul>
      )}
    </SuggestionsContainer>
  );
};

export default memo(Suggestions);
