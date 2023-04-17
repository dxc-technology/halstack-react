import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext, { BackgroundColorsType } from "../BackgroundColorContext";
import Suggestion from "./Suggestion";
import { SuggestionsProps } from "./types";
import icons from "./Icons";

const Suggestions = ({
  id,
  value,
  suggestions,
  visualFocusIndex,
  highlightedSuggestions,
  searchHasErrors,
  isSearching,
  suggestionOnClick,
  getTextInputWidth,
}: SuggestionsProps): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const backgroundType = useContext(BackgroundColorContext);
  const listboxRef = useRef(null);
  const [styles, setStyles] = useState(null);

  useLayoutEffect(() => {
    const visualFocusedOptionEl = listboxRef?.current?.querySelectorAll("[role='option']")[visualFocusIndex];
    visualFocusedOptionEl?.scrollIntoView?.({ block: "nearest", inline: "start" });
  }, [visualFocusIndex]);

  const handleResize = () => {
    setStyles({ width: getTextInputWidth() });
  };

  useLayoutEffect(() => {
    handleResize();
  }, [getTextInputWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getTextInputWidth]);

  return (
    <SuggestionsContainer
      id={id}
      error={searchHasErrors ? true : false}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      ref={listboxRef}
      role="listbox"
      backgroundType={backgroundType}
      style={styles}
    >
      {!isSearching &&
        !searchHasErrors &&
        suggestions.length > 0 &&
        suggestions.map((suggestion, index) => (
          <Suggestion
            key={`suggestion-${index}`}
            id={`suggestion-${index}`}
            value={value}
            onClick={suggestionOnClick}
            suggestion={suggestion}
            isLast={index === suggestions.length - 1}
            visuallyFocused={visualFocusIndex === index}
            highlighted={highlightedSuggestions}
          />
        ))}
      {isSearching && (
        <SuggestionsSystemMessage>{translatedLabels.textInput.searchingMessage}</SuggestionsSystemMessage>
      )}
      {searchHasErrors && (
        <SuggestionsError>
          <SuggestionsErrorIcon backgroundType={backgroundType}>{icons.error}</SuggestionsErrorIcon>
          {translatedLabels.textInput.fetchingDataErrorMessage}
        </SuggestionsError>
      )}
    </SuggestionsContainer>
  );
};

const SuggestionsContainer = styled.ul<{ backgroundType: BackgroundColorsType; error: boolean }>`
  box-sizing: border-box;
  max-height: 304px;
  overflow-y: auto;
  margin: 0;
  padding: 0.25rem 0;
  background-color: ${(props) =>
    props.error ? props.theme.errorListDialogBackgroundColor : props.theme.listDialogBackgroundColor};
  border: 1px solid
    ${(props) =>
      props.error
        ? props.backgroundType === "dark"
          ? props.theme.errorBorderColorOnDark
          : props.theme.errorListDialogBorderColor
        : props.theme.listDialogBorderColor};

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

const SuggestionsErrorIcon = styled.span<{ backgroundType: BackgroundColorsType }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-right: 0.5rem;
  height: 18px;
  width: 18px;
  color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.errorIconColorOnDark : props.theme.errorIconColor};
`;

const SuggestionsError = styled.span`
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  line-height: 1.715em;
  color: ${(props) => props.theme.errorListDialogFontColor};
`;

export default React.memo(Suggestions);
