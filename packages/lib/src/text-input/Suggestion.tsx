import { memo, useMemo } from "react";
import styled from "styled-components";
import { SuggestionProps } from "./types";
import { transformSpecialChars } from "./utils";
import DxcDivider from "../divider/Divider";
import DxcFlex from "../flex/Flex";

const SuggestionContainer = styled.li<{
  visuallyFocused: SuggestionProps["visuallyFocused"];
}>`
  display: flex;
  flex-direction: column;
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  cursor: pointer;
  &:hover,
  &:active {
    background-color: var(--color-bg-neutral-light);
  }
  ${({ visuallyFocused }) =>
    visuallyFocused &&
    "outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: -2px;"}
`;

const StyledSuggestion = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Highlighted text */
  > span {
    font-weight: var(--typography-label-semibold);
  }
`;

const Suggestion = ({ highlighted, id, isLast, onClick, suggestion, value, visuallyFocused }: SuggestionProps) => {
  const matchedSuggestion = useMemo(() => {
    const regEx = new RegExp(transformSpecialChars(value), "i");
    return { matchedWords: suggestion.match(regEx), noMatchedWords: suggestion.replace(regEx, "") };
  }, [value, suggestion]);

  return (
    <SuggestionContainer
      aria-selected={visuallyFocused ? true : undefined}
      id={id}
      onClick={() => {
        onClick(suggestion);
      }}
      role="option"
      visuallyFocused={visuallyFocused}
    >
      <DxcFlex alignItems="center" grow={1}>
        <StyledSuggestion>
          {highlighted ? (
            <>
              <span>{matchedSuggestion.matchedWords}</span>
              {matchedSuggestion.noMatchedWords}
            </>
          ) : (
            suggestion
          )}
        </StyledSuggestion>
      </DxcFlex>
      {!isLast && <DxcDivider />}
    </SuggestionContainer>
  );
};

export default memo(Suggestion);
