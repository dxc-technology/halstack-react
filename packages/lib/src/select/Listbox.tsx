import { useContext, useEffect, useLayoutEffect, useRef } from "react";
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

  const isSearchEmpty = searchable && (options.length === 0 || !groupsHaveOptions(options));
  const isSingleSelectOptional = optional && !multiple;
  const isMultipleSelectWithSelectAll = multiple && enableSelectAll;

  type FlattenedItem =
    | { type: "selectAll"; id?: never }
    | { type: "optionalItem"; id?: never }
    | { type: "groupLabel"; label: string; id: string }
    | { type: "groupHeader"; group: ListOptionGroupType; id: string }
    | { type: "option"; option: ListOptionType; id: string; isGroupedOption?: boolean };

  const flattenedOptions: FlattenedItem[] = [];

  if (!isSearchEmpty) {
    if (isSingleSelectOptional) {
      flattenedOptions.push({ type: "optionalItem" });
    } else if (isMultipleSelectWithSelectAll) {
      flattenedOptions.push({ type: "selectAll" });
    }
  }

  options.forEach((opt, groupIndex) => {
    if ("options" in opt) {
      const groupId = `${id}-group-${groupIndex}`;
      if (opt.options.length === 0) return;

      if (multiple && enableSelectAll) {
        flattenedOptions.push({ type: "groupHeader", group: opt, id: groupId });
      } else {
        flattenedOptions.push({ type: "groupLabel", label: opt.label, id: groupId });
      }

      opt.options.forEach((child, childIndex) => {
        const optionId = `${id}-option-${groupIndex}-${childIndex}`;
        flattenedOptions.push({
          type: "option",
          option: child,
          id: optionId,
          isGroupedOption: true,
        });
      });
    } else {
      const optionId = `${id}-option-${groupIndex}`;
      flattenedOptions.push({
        type: "option",
        option: opt,
        id: optionId,
      });
    }
  });

  const renderItem = (index: number) => {
    const item = flattenedOptions[index];
    switch (item?.type) {
      case "selectAll":
        return (
          <CheckboxContext.Provider value={{ partial: selectionType === "indeterminate" }}>
            <ListOption
              id={`${id}-option-0`}
              isLastOption={lastOptionIndex === 0}
              isSelected={selectionType === "checked"}
              isSelectAllOption
              key={`${id}-select-all`}
              multiple
              onClick={handleSelectAllOnClick}
              option={{ label: translatedLabels.select.selectAllLabel, value: "" }}
              visualFocused={getGlobalIndex(visualFocusIndex) === index}
            />
          </CheckboxContext.Provider>
        );

      case "optionalItem":
        return (
          <ListOption
            id={`${id}-option-0`}
            isLastOption={lastOptionIndex === 0}
            isSelected={currentValue === optionalItem.value}
            key={`${id}-optional`}
            multiple={false}
            onClick={handleOptionOnClick}
            option={optionalItem}
            visualFocused={getGlobalIndex(visualFocusIndex) === index}
          />
        );

      case "groupLabel":
        return (
          <GroupLabel id={item.id} role="presentation" key={item.id}>
            {item.label}
          </GroupLabel>
        );

      case "groupHeader": {
        const groupSelectionType = getGroupSelectionType(item.group.options, currentValue as string[]);
        return (
          <CheckboxContext.Provider value={{ partial: groupSelectionType === "indeterminate" }} key={item.id}>
            <ListOption
              id={item.id}
              isLastOption={false}
              isSelected={groupSelectionType === "checked"}
              isSelectAllOption
              multiple
              onClick={() => handleGroupOnClick(item.group)}
              option={{ label: item.group.label, value: "" }}
              visualFocused={getGlobalIndex(visualFocusIndex) === index}
            />
            <></>
          </CheckboxContext.Provider>
        );
      }

      case "option":
        return (
          <ListOption
            id={item.id}
            isGroupedOption={item.isGroupedOption}
            isLastOption={lastOptionIndex === index}
            isSelected={
              multiple ? (currentValue as string[]).includes(item.option.value) : currentValue === item.option.value
            }
            key={item.id}
            multiple={multiple}
            onClick={handleOptionOnClick}
            option={item.option}
            visualFocused={getGlobalIndex(visualFocusIndex) === index}
          />
        );

      default:
        return null;
    }
  };

  const getGlobalIndex = (index: number) => {
    const focusableOptions = flattenedOptions.filter((item) => item.type !== "groupLabel");
    if (focusableOptions[index]) {
      const actualIndex = flattenedOptions.findIndex((option) => {
        return option.type === focusableOptions[index]?.type && option.id === focusableOptions[index]?.id;
      });
      return actualIndex;
    }
    return -1;
  };

  useLayoutEffect(() => {
    const globalIndex = getGlobalIndex(visualFocusIndex);
    if (visualFocusIndex >= 0 && virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex({
        index: globalIndex,
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
        totalCount={flattenedOptions.length}
        initialTopMostItemIndex={
          !multiple && currentValue
            ? {
                index:
                  flattenedOptions.findIndex((item) => item.type === "option" && item.option.value === currentValue) ??
                  0,
                align: "center",
                behavior: "auto",
              }
            : 0
        }
        itemContent={(index) => renderItem(index)}
        components={{
          Header: () =>
            isSearchEmpty ? (
              <OptionsSystemMessage>
                <DxcIcon icon="search_off" />
                {translatedLabels.select.noMatchesErrorMessage}
              </OptionsSystemMessage>
            ) : null,
        }}
      />
    </ListboxContainer>
  );
};

export default Listbox;
