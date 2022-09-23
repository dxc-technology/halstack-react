import React from "react";
import styled from "styled-components";
import { SuggestionProps } from "./types";

const Suggestion = ({
  id,
  value,
  onClick,
  suggestion,
  isLast,
  visuallyFocused,
  highlighted,
}: SuggestionProps): JSX.Element => {
  const regEx = new RegExp(value, "i");
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
