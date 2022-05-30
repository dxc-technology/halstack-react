import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import { ListboxProps, ListboxRefType } from "./types";
import Option from "./Option";
import selectIcons from "./Icons";

const groupsHaveOptions = (options) =>
  options?.[0].options ? options.some((groupOption) => groupOption.options?.length > 0) : true;

const Listbox = React.forwardRef<ListboxRefType, ListboxProps>(
  (
    {
      id,
      currentValue,
      options,
      visualFocusIndex,
      lastOptionIndex,
      multiple,
      optional,
      optionalItem,
      searchable,
      handleOptionOnClick,
    },
    ref
  ): JSX.Element => {
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    let globalIndex = optional && !multiple ? 0 : -1; // index for options, starting from 0 to options.length -1
    const mapOptionFunc = (option, mapIndex) => {
      if (option.options) {
        const groupId = `group-${mapIndex}`;
        return (
          option.options.length > 0 && (
            <li key={`group-${mapIndex}`}>
              <GroupList role="group" aria-labelledby={groupId}>
                <GroupLabel role="presentation" id={groupId}>
                  {option.label}
                </GroupLabel>
                {option.options.map((singleOption) => {
                  globalIndex++;
                  return (
                    <Option
                      key={`option-${singleOption.value}`}
                      id={`option-${globalIndex}`}
                      option={singleOption}
                      onClick={handleOptionOnClick}
                      multiple={multiple}
                      visualFocused={visualFocusIndex === globalIndex}
                      isGroupedOption={true}
                      isLastOption={lastOptionIndex === globalIndex}
                      isSelected={
                        multiple ? currentValue.includes(singleOption.value) : currentValue === singleOption.value
                      }
                    />
                  );
                })}
              </GroupList>
            </li>
          )
        );
      } else {
        globalIndex++;
        return (
          <Option
            key={`option-${option.value}`}
            id={`option-${globalIndex}`}
            option={option}
            onClick={handleOptionOnClick}
            multiple={multiple}
            visualFocused={visualFocusIndex === globalIndex}
            isLastOption={lastOptionIndex === globalIndex}
            isSelected={multiple ? currentValue.includes(option.value) : currentValue === option.value}
          />
        );
      }
    };

    return (
      <ThemeProvider theme={colorsTheme.select}>
        <ListboxContainer
          id={id}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          ref={ref}
          role="listbox"
          aria-multiselectable={multiple}
          aria-orientation="vertical"
        >
          {searchable && (options.length === 0 || !groupsHaveOptions(options)) ? (
            <OptionsSystemMessage>
              <NoMatchesFoundIcon>{selectIcons.searchOff}</NoMatchesFoundIcon>
              {translatedLabels.select.noMatchesErrorMessage}
            </OptionsSystemMessage>
          ) : (
            optional &&
            !multiple && (
              <Option
                key={`option-${optionalItem.value}`}
                id={`option-${0}`}
                option={optionalItem}
                onClick={handleOptionOnClick}
                multiple={multiple}
                visualFocused={visualFocusIndex === 0}
                isGroupedOption={false}
                isLastOption={lastOptionIndex === 0}
                isSelected={multiple ? currentValue.includes(optionalItem.value) : currentValue === optionalItem.value}
              />
            )
          )}
          {options.map(mapOptionFunc)}
        </ListboxContainer>
      </ThemeProvider>
    );
  }
);

const ListboxContainer = styled.ul`
  position: absolute;
  z-index: 1;
  max-height: 304px;
  overflow-y: auto;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 0.25rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.listDialogBackgroundColor};
  border: 1px solid ${(props) => props.theme.listDialogBorderColor};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: default;
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
`;

const OptionsSystemMessage = styled.span`
  display: flex;
  padding: 4px 16px;
  color: ${(props) => props.theme.systemMessageFontColor};
  font-size: 0.875rem;
  line-height: 1.715em;
`;

const NoMatchesFoundIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 16px;
  width: 16px;
  padding: 4px;
  margin-right: 0.25rem;
`;

const GroupList = styled.ul`
  padding: 0;
`;

const GroupLabel = styled.li`
  padding: 4px 16px;
  font-weight: ${(props) => props.theme.listGroupLabelFontWeight};
  line-height: 1.715em;
`;

export default React.memo(Listbox);
