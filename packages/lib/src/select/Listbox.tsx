import { useContext, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DxcIcon from "../icon/Icon";
import { HalstackLanguageContext } from "../HalstackContext";
import ListOption from "./ListOption";
import { groupsHaveOptions } from "./utils";
import { ListboxProps, ListOptionGroupType, ListOptionType } from "./types";

const ListboxContainer = styled.ul`
  box-sizing: border-box;
  max-height: 304px;
  overflow-y: auto;
  margin: 0;
  padding: var(--spacing-padding-xxs) var(--spacing-padding-none);
  background-color: var(--color-absolutes-white);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-medium);
  border-radius: var(--border-radius-s);

  box-shadow: var(--shadow-mid-x-position, 0px) var(--shadow-mid-y-position, 12px) var(--shadow-mid-blur, 12px)
    var(--shadow-mid-spread, 0px) var(--shadow-light, rgba(209, 209, 209, 0.3));
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
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
  const translatedLabels = useContext(HalstackLanguageContext);
  const listboxRef = useRef<HTMLUListElement | null>(null);

  let globalIndex = optional && !multiple ? 0 : -1;

  const mapOptionFunc = (option: ListOptionType | ListOptionGroupType, mapIndex: number) => {
    const groupId = `${id}-group-${mapIndex}`;
    if ("options" in option) {
      return (
        option.options.length > 0 && (
          <li key={groupId}>
            <ul role="listbox" aria-labelledby={groupId} style={{ padding: 0 }}>
              <GroupLabel role="presentation" id={groupId}>
                {option.label}
              </GroupLabel>
              {option.options.map((singleOption) => {
                globalIndex++;
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
    } else {
      globalIndex++;
      return (
        <ListOption
          key={`${id}-option-${option.value}`}
          id={`${id}-option-${globalIndex}`}
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
      id={id}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
      ref={listboxRef}
      aria-multiselectable={multiple}
      style={styles}
      role="listbox"
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
            key={`${id}-option-${optionalItem.value}`}
            id={`${id}-option-${0}`}
            option={optionalItem}
            onClick={handleOptionOnClick}
            multiple={multiple}
            visualFocused={visualFocusIndex === 0}
            isLastOption={lastOptionIndex === 0}
            isSelected={multiple ? currentValue.includes(optionalItem.value) : currentValue === optionalItem.value}
          />
        )
      )}
      {options.map(mapOptionFunc)}
    </ListboxContainer>
  );
};

export default Listbox;
