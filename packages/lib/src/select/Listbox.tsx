import { useContext, useLayoutEffect, useRef } from "react";
import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import { HalstackLanguageContext } from "../HalstackContext";
import ListOption from "./ListOption";
import { getGroupSelectionType, groupsHaveOptions } from "./utils";
import { ListboxProps, ListOptionGroupType, ListOptionType } from "./types";
import { scrollbarStyles } from "../styles/scroll";
import CheckboxContext from "../checkbox/CheckboxContext";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

const ListboxContainer = styled.div`
  box-sizing: border-box;
  height: 304px;
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
  /* overflow-y: auto; */
  /* ${scrollbarStyles} */
  /* TODO: ADD SCROLLBARSTYLES TO SELECT AND RESULTSETTABLE */
`;

const OptionsSystemMessage = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-m);
  color: var(--color-fg-neutral-stronger);

  /* No matches found icon */
  > span[role="img"] {
    font-size: var(--height-xxs);
  }
`;

const GroupLabel = styled.li`
  display: flex;
  align-items: center;
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-m);
  font-weight: var(--typography-label-semibold);
`;

const Listbox = ({
  ariaLabelledBy,
  currentValue,
  enableSelectAll,
  handleOptionOnClick,
  handleGroupOnClick,
  handleSelectAllOnClick,
  id,
  lastOptionIndex,
  multiple,
  optional,
  optionalItem,
  options,
  searchable,
  selectionType,
  styles,
  visualFocusIndex,
}: ListboxProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  let globalMappingIndex = (multiple ? enableSelectAll : optional) ? 0 : -1;

  const isSearchEmpty = searchable && (options.length === 0 || !groupsHaveOptions(options));
  const isSingleSelectOptional = optional && !multiple;
  const isMultipleSelectWithSelectAll = multiple && enableSelectAll;

  const hasHeader = isSearchEmpty || isSingleSelectOptional || isMultipleSelectWithSelectAll;

  const hasGroupedOptions = (option: ListOptionType | ListOptionGroupType): option is ListOptionGroupType =>
    "options" in option;

  const mapGroupOptionFunc = (option: ListOptionGroupType, mapIndex: number) => {
    const getGroupOption = (groupId: string, option: ListOptionGroupType) => {
      if (isMultipleSelectWithSelectAll) {
        const groupSelectionType = getGroupSelectionType(option.options, currentValue as string[]);
        globalMappingIndex++;
        return (
          <CheckboxContext.Provider value={{ partial: groupSelectionType === "indeterminate" }}>
            <ListOption
              id={groupId}
              isLastOption={lastOptionIndex === globalMappingIndex}
              isSelected={groupSelectionType === "checked"}
              isSelectAllOption
              key={groupId}
              multiple
              onClick={() => handleGroupOnClick(option)}
              option={{ label: option.label, value: "" }}
              visualFocused={globalMappingIndex === visualFocusIndex}
            />
          </CheckboxContext.Provider>
        );
      } else {
        return (
          <GroupLabel id={groupId} role="presentation">
            {option.label}
          </GroupLabel>
        );
      }
    };
    const groupId = `${id}-group-${mapIndex}`;
    return (
      option.options.length > 0 && (
        <ul aria-labelledby={groupId} key={groupId} role="group" style={{ padding: 0, margin: 0 }}>
          {getGroupOption(groupId, option)}
          {option.options.map((singleOption, childIndex) => {
            const optionId = `${id}-option-${mapIndex}-${childIndex}`;
            globalMappingIndex++;
            return (
              <ListOption
                id={optionId}
                isGroupedOption
                isLastOption={lastOptionIndex === globalMappingIndex}
                isSelected={
                  multiple
                    ? (currentValue as string[]).includes(singleOption.value)
                    : currentValue === singleOption.value
                }
                key={optionId}
                multiple={multiple}
                onClick={handleOptionOnClick}
                option={singleOption}
                visualFocused={globalMappingIndex === visualFocusIndex}
              />
            );
          })}
        </ul>
      )
    );
  };

  const mapOptionFunc = (option: ListOptionType, mapIndex: number) => {
    const optionId = `${id}-option-${mapIndex}`;
    return (
      <ListOption
        id={optionId}
        isLastOption={lastOptionIndex === mapIndex}
        isSelected={multiple ? (currentValue as string[]).includes(option.value) : currentValue === option.value}
        key={optionId}
        multiple={multiple}
        onClick={handleOptionOnClick}
        option={option}
        visualFocused={mapIndex === visualFocusIndex}
      />
    );
  };

  const getFirstItem = () => {
    if (isSearchEmpty) {
      return (
        <OptionsSystemMessage>
          <DxcIcon icon="search_off" />
          {translatedLabels.select.noMatchesErrorMessage}
        </OptionsSystemMessage>
      );
    } else if (isSingleSelectOptional) {
      return (
        <ListOption
          id={`${id}-option-${0}`}
          isLastOption={lastOptionIndex === 0}
          isSelected={currentValue === optionalItem.value}
          key={`${id}-option-${optionalItem.value}`}
          multiple={false}
          onClick={handleOptionOnClick}
          option={optionalItem}
          visualFocused={visualFocusIndex === 0}
        />
      );
    } else if (isMultipleSelectWithSelectAll) {
      return (
        <CheckboxContext.Provider value={{ partial: selectionType === "indeterminate" }}>
          <ListOption
            id={`${id}-option-${0}`}
            isLastOption={lastOptionIndex === 0}
            isSelected={selectionType === "checked"}
            isSelectAllOption
            key={`${id}-option-${optionalItem.value}`}
            multiple
            onClick={handleSelectAllOnClick}
            option={{
              label: translatedLabels.select.selectAllLabel,
              value: "",
            }}
            visualFocused={visualFocusIndex === 0}
          />
        </CheckboxContext.Provider>
      );
    }
    return null;
  };

  useLayoutEffect(() => {
    if (!multiple && currentValue && virtuosoRef.current) {
      // TODO: Investigate logic for grouped options
      const selectedIndex = options.findIndex(({ value }) => value === currentValue);
      if (selectedIndex !== -1) {
        setTimeout(() => {
          virtuosoRef?.current?.scrollToIndex({
            index: selectedIndex,
            align: "center",
            behavior: "auto",
          });
        }, 1);
      }
    }
  }, [currentValue, multiple]);

  useLayoutEffect(() => {
    // TODO: Investigate logic for grouped options
    if (visualFocusIndex >= 0 && virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex({
        index: visualFocusIndex,
        align: "center",
        behavior: "auto",
      });
    }
  }, [visualFocusIndex]);

  return (
    <ListboxContainer
      aria-labelledby={ariaLabelledBy}
      aria-multiselectable={multiple}
      id={id}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      role="listbox"
      style={styles}
    >
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: "100%" }}
        data={options}
        itemContent={(index, option) => {
          const adjustedIndex = hasHeader ? index + 1 : index;
          return hasGroupedOptions(option)
            ? mapGroupOptionFunc(option, adjustedIndex)
            : mapOptionFunc(option, adjustedIndex);
        }}
        components={{
          Header: () => getFirstItem(),
        }}
      />
    </ListboxContainer>
  );
};

export default Listbox;
