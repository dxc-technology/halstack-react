import { useContext, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DxcIcon from "../icon/Icon";
import { HalstackLanguageContext } from "../HalstackContext";
import ListOption from "./ListOption";
import { groupsHaveOptions } from "./utils";
import { ListboxProps, ListOptionGroupType, ListOptionType } from "./types";
import { scrollbarStyles } from "../styles/scroll";

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
  handleOptionOnClick,
  id,
  lastOptionIndex,
  multiple,
  optional,
  optionalItem,
  options,
  searchable,
  styles,
  visualFocusIndex,
}: ListboxProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const listboxRef = useRef<HTMLDivElement>(null);

  let globalIndex = optional && !multiple ? 0 : -1;

  const mapOptionFunc = (option: ListOptionType | ListOptionGroupType, mapIndex: number) => {
    const groupId = `${id}-group-${mapIndex}`;
    if ("options" in option) {
      return (
        option.options.length > 0 && (
          <ul key={groupId} aria-labelledby={groupId} role="group" style={{ padding: 0, margin: 0 }}>
            <GroupLabel id={groupId} role="presentation">
              {option.label}
            </GroupLabel>
            {option.options.map((singleOption) => {
              globalIndex++;
              const optionId = `${id}-option-${globalIndex}`;
              return (
                <ListOption
                  id={optionId}
                  isGroupedOption
                  isLastOption={lastOptionIndex === globalIndex}
                  isSelected={
                    multiple ? currentValue.includes(singleOption.value) : currentValue === singleOption.value
                  }
                  key={optionId}
                  multiple={multiple}
                  onClick={handleOptionOnClick}
                  option={singleOption}
                  visualFocused={visualFocusIndex === globalIndex}
                />
              );
            })}
          </ul>
        )
      );
    } else {
      globalIndex++;
      const optionId = `${id}-option-${globalIndex}`;
      return (
        <ListOption
          id={optionId}
          isLastOption={lastOptionIndex === globalIndex}
          isSelected={multiple ? currentValue.includes(option.value) : currentValue === option.value}
          key={optionId}
          multiple={multiple}
          onClick={handleOptionOnClick}
          option={option}
          visualFocused={visualFocusIndex === globalIndex}
        />
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
      {searchable && (options.length === 0 || !groupsHaveOptions(options)) ? (
        <OptionsSystemMessage>
          <DxcIcon icon="search_off" />
          {translatedLabels.select.noMatchesErrorMessage}
        </OptionsSystemMessage>
      ) : (
        optional &&
        !multiple && (
          <ListOption
            id={`${id}-option-${0}`}
            isLastOption={lastOptionIndex === 0}
            isSelected={multiple ? currentValue.includes(optionalItem.value) : currentValue === optionalItem.value}
            key={`${id}-option-${optionalItem.value}`}
            multiple={multiple}
            onClick={handleOptionOnClick}
            option={optionalItem}
            visualFocused={visualFocusIndex === 0}
          />
        )
      )}
      {options.map(mapOptionFunc)}
    </ListboxContainer>
  );
};

export default Listbox;
