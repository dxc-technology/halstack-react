import React, { useMemo } from "react";
import styled from "styled-components";
import { SuggestionProps } from "./types";

const transformSpecialChars = (str: string) => {
  const specialCharsRegex = /[\\*()\[\]{}+?/]/;
  let value = str;
  if (specialCharsRegex.test(value)) {
    const regexAsString = specialCharsRegex.toString().split("");
    const uniqueSpecialChars = regexAsString.filter((item, index) => regexAsString.indexOf(item) === index);
    uniqueSpecialChars.forEach((specialChar) => {
      if (str.includes(specialChar)) value = value.replace(specialChar, "\\" + specialChar);
    });
  }
  return value;
};

const Suggestion = ({
  id,
  value,
  onClick,
  suggestion,
  isLast,
  visuallyFocused,
  highlighted,
}: SuggestionProps): JSX.Element => {
  const matchedSuggestion = useMemo(() => {
    const regEx = new RegExp(transformSpecialChars(value), "i");
    return { matchedWords: suggestion.match(regEx), noMatchedWords: suggestion.replace(regEx, "") };
  }, [value, suggestion]);

  return (
    <SuggestionContainer
      id={id}
      onClick={() => {
        onClick(suggestion);
      }}
      visuallyFocused={visuallyFocused}
      role="option"
      aria-selected={visuallyFocused ? true : undefined}
    >
      <StyledSuggestion isLast={isLast} visuallyFocused={visuallyFocused}>
        {highlighted ? (
          <>
            <strong>{matchedSuggestion.matchedWords}</strong>
            {matchedSuggestion.noMatchedWords}
          </>
        ) : (
          suggestion
        )}
      </StyledSuggestion>
    </SuggestionContainer>
  );
};

const SuggestionContainer = styled.li<{
  visuallyFocused: SuggestionProps["visuallyFocused"];
}>`
  display: flex;
  padding: 0 0.5rem;
  line-height: 1.715em;
  cursor: pointer;
  box-shadow: inset 0 0 0 2px
    ${(props) => (props.visuallyFocused ? props.theme.focusListOptionBorderColor : "transparent")};

  &:hover {
    background-color: ${(props) => props.theme.hoverListOptionBackgroundColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeListOptionBackgroundColor};
  }
`;

const StyledSuggestion = styled.span<{
  visuallyFocused: SuggestionProps["visuallyFocused"];
  isLast: SuggestionProps["isLast"];
}>`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.25rem 0.5rem 0.188rem 0.5rem;
  ${(props) =>
    props.isLast || props.visuallyFocused
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionDividerColor}`};
`;

export default React.memo(Suggestion);
