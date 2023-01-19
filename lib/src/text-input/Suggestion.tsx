import React from "react";
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
  const specialChar = transformSpecialChars(value);
  const regEx = new RegExp(specialChar, "i");
  const matchedWords = suggestion.match(regEx);
  const noMatchedWords = suggestion.replace(regEx, "");

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
      <StyledSuggestion last={isLast} visuallyFocused={visuallyFocused}>
        {highlighted ? (
          <>
            <strong>{matchedWords}</strong>
            {noMatchedWords}
          </>
        ) : (
          suggestion
        )}
      </StyledSuggestion>
    </SuggestionContainer>
  );
};

const SuggestionContainer = styled.li<{
  visuallyFocused: boolean;
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
  visuallyFocused: boolean;
  last: boolean;
}>`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.25rem 0.5rem 0.188rem 0.5rem;
  ${(props) =>
    props.last || props.visuallyFocused
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionDividerColor}`};
`;

export default React.memo(Suggestion);
