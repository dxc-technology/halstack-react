import { useContext, useLayoutEffect, useRef, forwardRef } from "react";
import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import { HalstackLanguageContext } from "../HalstackContext";
import ListOption from "./ListOption";
import { getGroupSelectionType, groupsHaveOptions } from "./utils";
import { FlattenedItem, ListboxProps, ListOptionGroupType, ListOptionType } from "./types";
import { scrollbarStyles } from "../styles/scroll";
import CheckboxContext from "../checkbox/CheckboxContext";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

const ListboxContainer = styled.div<{
  height?: ListboxProps["virtualizedHeight"];
}>`
  box-sizing: border-box;
  max-height: 304px;
  height: ${(props) => (props.height ? props.height : undefined)};
  padding: var(--spacing-padding-xxs) var(--spacing-padding-none);
  background-color: var(--color-bg-neutral-lightest);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-medium);
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-200);
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

const VirtualizedListbox = ({
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
  virtualizedHeight,
  visualFocusIndex,
}: ListboxProps) => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const isSearchEmpty = searchable && (options.length === 0 || !groupsHaveOptions(options));
  const isSingleSelectOptional = optional && !multiple;
  const isMultipleSelectWithSelectAll = multiple && enableSelectAll;

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
        flattenedOptions.push({
          type: "option",
          option: child,
          id: `${id}-option-${groupIndex}-${childIndex}`,
          isGroupedOption: true,
        });
      });
    } else {
      flattenedOptions.push({
        type: "option",
        option: opt,
        id: `${id}-option-${groupIndex}`,
      });
    }
  });

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

  return (
    <ListboxContainer
      height={virtualizedHeight}
      id={id}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
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
          List: forwardRef((props, ref) => (
            <div
              ref={ref}
              role="listbox"
              aria-labelledby={ariaLabelledBy}
              aria-multiselectable={multiple}
              id={id}
              {...props}
            />
          )),
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

const NonVirtualizedListbox = ({
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

const Listbox = ({ ...props }: ListboxProps) => {
  return props.virtualizedHeight ? <VirtualizedListbox {...props} /> : <NonVirtualizedListbox {...props} />;
};

export default Listbox;
