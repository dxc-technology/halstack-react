import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DxcIcon from "../icon/Icon";
import useTranslatedLabels from "../useTranslatedLabels";
import ListOption from "./ListOption";
import { groupsHaveOptions } from "./selectUtils";
import { ListboxProps, ListOptionGroupType, ListOptionType } from "./types";

const Listbox = ({
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
  styles,
}: ListboxProps): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const listboxRef = useRef<HTMLUListElement | null>(null);

  let globalIndex = optional && !multiple ? 0 : -1;
  const mapOptionFunc = (option: ListOptionType | ListOptionGroupType, mapIndex: number) => {
    const groupId = `${id}-group-${mapIndex}`;
    if ("options" in option && option.options) {
      return (
        option.options.length > 0 && (
          <li key={groupId}>
            <ul role="listbox" aria-labelledby={groupId} style={{ padding: 0 }}>
              <GroupLabel role="presentation" id={groupId}>
                {option.label}
              </GroupLabel>
              {option.options.map((singleOption) => {
                globalIndex += 1;
                return (
                  <ListOption
                    key={`${id}-option-${singleOption.value}`}
                    id={`${id}-option-${globalIndex}`}
                    option={singleOption}
                    onClick={handleOptionOnClick}
                    multiple={multiple}
                    visualFocused={visualFocusIndex === globalIndex}
                    isGroupedOption
                    isLastOption={lastOptionIndex === globalIndex}
                    isSelected={
                      multiple ? currentValue.includes(singleOption.value) : currentValue === singleOption.value
                    }
                  />
                );
              })}
            </ul>
          </li>
        )
      );
    }
    globalIndex += 1;
    return (
      <ListOption
        key={`${id}-option-${(option as ListOptionType).value}`}
        id={`${id}-option-${globalIndex}`}
        option={option as ListOptionType}
        onClick={handleOptionOnClick}
        multiple={multiple}
        visualFocused={visualFocusIndex === globalIndex}
        isLastOption={lastOptionIndex === globalIndex}
        isSelected={
          multiple
            ? currentValue.includes((option as ListOptionType).value)
            : currentValue === (option as ListOptionType).value
        }
      />
    );
  };

  useLayoutEffect(() => {
    if (currentValue && !multiple) {
      const listEl = listboxRef?.current;
      const selectedListOptionEl = listEl?.querySelector("[aria-selected='true']") as HTMLUListElement;
      listEl?.scrollTo?.({
        top: (selectedListOptionEl?.offsetTop || 0) - (listEl?.clientHeight || 0) / 2,
      });
    }
  }, [currentValue, multiple]);

  useLayoutEffect(() => {
    const visualFocusedOptionEl = listboxRef?.current?.querySelectorAll("[role='option']")[visualFocusIndex];
    visualFocusedOptionEl?.scrollIntoView?.({
      block: "nearest",
      inline: "start",
    });
  }, [visualFocusIndex]);

  const hasOptionGroups = options.some((option) => (option as ListOptionGroupType).options?.length > 0);

  return (
    <ListboxContainer
      id={id}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      ref={listboxRef}
      aria-multiselectable={!hasOptionGroups ? multiple : undefined}
      style={styles}
      role={hasOptionGroups ? "list" : "listbox"}
      aria-label="List of options"
    >
      {searchable && (options.length === 0 || !groupsHaveOptions(options)) ? (
        <OptionsSystemMessage>
          <NoMatchesFoundIcon>
            <DxcIcon icon="search_off" />
          </NoMatchesFoundIcon>
          {translatedLabels?.select?.noMatchesErrorMessage}
        </OptionsSystemMessage>
      ) : (
        optional &&
        !multiple && (
          <ListOption
            key={`${id}-option-${optionalItem.value}`}
            id={`${id}-option-${0}`}
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
  );
};

const ListboxContainer = styled.ul`
  box-sizing: border-box;
  max-height: 304px;
  overflow-y: auto;
  margin: 0;
  padding: 0.25rem 0;
  background-color: ${(props) => props.theme.listDialogBackgroundColor};
  border: 1px solid ${(props) => props.theme.listDialogBorderColor};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.listOptionFontColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.listOptionFontSize};
  font-style: ${(props) => props.theme.listOptionFontStyle};
  font-weight: ${(props) => props.theme.listOptionFontWeight};
  line-height: 24px;
  cursor: default;
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
  font-size: 16px;
`;

const GroupLabel = styled.li`
  padding: 4px 16px;
  font-weight: ${(props) => props.theme.listGroupLabelFontWeight};
  line-height: 1.715em;
`;

export default Listbox;
