import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useTranslatedLabels from "../useTranslatedLabels";
import Suggestion from "./Suggestion";
import { SuggestionsProps } from "./types";
import DxcIcon from "../icon/Icon";

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
}: SuggestionsProps): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const listboxRef = useRef(null);

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
        <SuggestionsSystemMessage role="option">{translatedLabels.textInput.searchingMessage}</SuggestionsSystemMessage>
      )}
      {searchHasErrors && (
        <ErrorMessage role="option">
          <SuggestionsError role="alert" aria-live="assertive">
            <SuggestionsErrorIcon>
              <DxcIcon icon="filled_error" />
            </SuggestionsErrorIcon>
            {translatedLabels.textInput.fetchingDataErrorMessage}
          </SuggestionsError>
        </ErrorMessage>
      )}
    </SuggestionsContainer>
  );
};

const SuggestionsContainer = styled.ul<{ error: boolean }>`
  box-sizing: border-box;
  max-height: 304px;
  overflow-y: auto;
  margin: 0;
  padding: 0.25rem 0;
  background-color: ${(props) =>
    props.error ? props.theme.errorListDialogBackgroundColor : props.theme.listDialogBackgroundColor};
  border: 1px solid
    ${(props) => (props.error ? props.theme.errorListDialogBorderColor : props.theme.listDialogBorderColor)};

  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const SuggestionsSystemMessage = styled.span`
  display: flex;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.systemMessageFontColor};
  line-height: 1.715em;
`;

const ErrorMessage = styled.span``;

const SuggestionsErrorIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-right: 0.5rem;
  height: 18px;
  width: 18px;
  font-size: 18px;
  color: ${(props) => props.theme.errorIconColor};
`;

const SuggestionsError = styled.span`
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  line-height: 1.715em;
  color: ${(props) => props.theme.errorListDialogFontColor};
`;

export default React.memo(Suggestions);
