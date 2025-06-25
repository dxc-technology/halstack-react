import { useContext, useLayoutEffect, useRef } from "react";
import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import { HalstackLanguageContext } from "../HalstackContext";
import ListOption from "./ListOption";
import { getGroupSelectionType, groupsHaveOptions } from "./utils";
import { ListboxProps, ListOptionGroupType, ListOptionType } from "./types";
import { scrollbarStyles } from "../styles/scroll";
import CheckboxContext from "../checkbox/CheckboxContext";

const ListboxContainer = styled.div`
  box-sizing: border-box;
  max-height: 304px;
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
  overflow-y: auto;
  ${scrollbarStyles}
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
  const listboxRef = useRef<HTMLDivElement>(null);
  let globalMappingIndex = (multiple ? enableSelectAll : optional) ? 0 : -1;

  const getGroupOption = (groupId: string, option: ListOptionGroupType) => {
    if (multiple && enableSelectAll) {
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
            multiple={true}
            onClick={() => handleGroupOnClick(option)}
            option={{
              label: option.label,
              value: "",
            }}
            visualFocused={visualFocusIndex === globalMappingIndex}
          />
        </CheckboxContext.Provider>
      );
    } else
      return (
        <GroupLabel id={groupId} role="presentation">
          {option.label}
        </GroupLabel>
      );
  };

  const mapOptionFunc = (option: ListOptionType | ListOptionGroupType, mapIndex: number) => {
    if ("options" in option) {
      const groupId = `${id}-group-${mapIndex}`;

      return (
        option.options.length > 0 && (
          <ul aria-labelledby={groupId} key={groupId} role="group" style={{ padding: 0, margin: 0 }}>
            {getGroupOption(groupId, option)}
            {option.options.map((singleOption) => {
              globalMappingIndex++;
              const optionId = `${id}-option-${globalMappingIndex}`;
              return (
                <ListOption
                  id={optionId}
                  isGroupedOption
                  isLastOption={lastOptionIndex === globalMappingIndex}
                  isSelected={
                    multiple ? currentValue.includes(singleOption.value) : currentValue === singleOption.value
                  }
                  key={optionId}
                  multiple={multiple}
                  onClick={handleOptionOnClick}
                  option={singleOption}
                  visualFocused={visualFocusIndex === globalMappingIndex}
                />
              );
            })}
          </ul>
        )
      );
    } else {
      globalMappingIndex++;
      const optionId = `${id}-option-${globalMappingIndex}`;
      return (
        <ListOption
          id={optionId}
          isLastOption={lastOptionIndex === globalMappingIndex}
          isSelected={multiple ? currentValue.includes(option.value) : currentValue === option.value}
          key={optionId}
          multiple={multiple}
          onClick={handleOptionOnClick}
          option={option}
          visualFocused={visualFocusIndex === globalMappingIndex}
        />
      );
    }
  };

  const getFirstItem = () => {
    if (searchable && (options.length === 0 || !groupsHaveOptions(options)))
      return (
        <OptionsSystemMessage>
          <DxcIcon icon="search_off" />
          {translatedLabels.select.noMatchesErrorMessage}
        </OptionsSystemMessage>
      );
    else if (optional && !multiple)
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
    else if (multiple && enableSelectAll) {
      return (
        <CheckboxContext.Provider value={{ partial: selectionType === "indeterminate" }}>
          <ListOption
            id={`${id}-option-${0}`}
            isLastOption={lastOptionIndex === 0}
            isSelected={selectionType === "checked"}
            isSelectAllOption
            key={`${id}-option-${optionalItem.value}`}
            multiple={true}
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
  };

  useLayoutEffect(() => {
    if (currentValue && !multiple) {
      const listEl = listboxRef?.current;
      const selectedListOptionEl = listEl?.querySelector("[aria-selected='true']") as HTMLUListElement;
      listEl?.scrollTo?.({
        top: (selectedListOptionEl.offsetTop ?? 0) - (listEl.clientHeight ?? 0) / 2,
      });
    }
  }, [currentValue, multiple]);

  useLayoutEffect(() => {
    const visualFocusedOptionEl = listboxRef.current?.querySelectorAll("[role='option']")[visualFocusIndex];
    visualFocusedOptionEl?.scrollIntoView?.({
      block: "nearest",
      inline: "start",
    });
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
      ref={listboxRef}
      role="listbox"
      style={styles}
    >
      {getFirstItem()}
      {options.map(mapOptionFunc)}
    </ListboxContainer>
  );
};

export default Listbox;
