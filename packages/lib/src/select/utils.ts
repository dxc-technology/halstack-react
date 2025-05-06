import SelectPropsType, { ListOptionType, ListOptionGroupType } from "./types";
import { getMargin } from "../common/utils";

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

export const calculateWidth = (margin: SelectPropsType["margin"], size: SelectPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

/**
 * Check if the value is not optional and is empty.
 */
export const notOptionalCheck = (value: string | string[], multiple: boolean, optional: boolean) =>
  !optional && (multiple ? value.length === 0 : value === "");

/**
 * Checks if the option is a group (contains other options).
 */
const isOptionGroup = (option: ListOptionType | ListOptionGroupType): option is ListOptionGroupType =>
  "options" in option && option.options != null;

/**
 * Checks if the options are grouped options (groups and single options can't be mixed)
 */
export const isArrayOfGroupedOptions = (options: ListOptionType[] | ListOptionGroupType[]): options is ListOptionGroupType[] =>
  options[0] != null && isOptionGroup(options[0]);

/**
 * Checks if the groups have options. If the options parameter is not an array of grouped options,
 * it will return true and not check nothing else.
 */
export const groupsHaveOptions = (options: ListOptionType[] | ListOptionGroupType[]) =>
  isArrayOfGroupedOptions(options) ? options.some((groupOption) => groupOption.options.length > 0) : true;

/**
 * Checks if the listbox can be opened. A listbox can be opened in three scenarios:
 * - The listbox is not disabled.
 * - The listbox has more than one single option.
 * - The listbox has more than one group with options contained.
 */
export const canOpenListbox = (options: ListOptionType[] | ListOptionGroupType[], disabled: boolean) =>
  !disabled && options.length > 0 && groupsHaveOptions(options);

/**
 * Filters the options by the search value.
 */
export const filterOptionsBySearchValue = (
  options: ListOptionType[] | ListOptionGroupType[],
  searchValue: string
): ListOptionType[] | ListOptionGroupType[] =>
  options.length > 0
    ? isArrayOfGroupedOptions(options)
      ? options.map((optionGroup) => {
          const group = {
            label: optionGroup.label,
            options: optionGroup.options.filter((option) =>
              option.label.toUpperCase().includes(searchValue.toUpperCase())
            ),
          };
          return group;
        })
      : options.filter((option) => option.label.toUpperCase().includes(searchValue.toUpperCase()))
    : [];

/**
 * Returns the index of the last option, depending on several conditions.
 */
export const getLastOptionIndex = (
  options: ListOptionType[] | ListOptionGroupType[],
  filteredOptions: ListOptionType[] | ListOptionGroupType[],
  searchable: boolean,
  optional: boolean,
  multiple: boolean
) => {
  let last = 0;
  const reducer = (acc: number, current: ListOptionGroupType) => acc + (current.options.length ?? 0);

  if (searchable && filteredOptions.length > 0) {
    if (isArrayOfGroupedOptions(filteredOptions)) {
      last = filteredOptions.reduce(reducer, 0) - 1;
    } else {
      last = filteredOptions.length - 1;
    }
  } else if (options.length > 0) {
    if (isArrayOfGroupedOptions(options)) {
      last = options.reduce(reducer, 0) - 1;
    } else {
      last = options.length - 1;
    }
  }

  return optional && !multiple ? last + 1 : last;
};

/**
 * Return the current selection.
 */
export const getSelectedOption = (
  value: string | string[],
  options: ListOptionType[] | ListOptionGroupType[],
  multiple: boolean,
  optional: boolean,
  optionalItem: ListOptionType
) => {
  let selectedOption: ListOptionType | ListOptionType[] | null = multiple ? [] : null;
  let singleSelectionIndex: number | null = null;

  if (multiple) {
    if (options.length > 0) {
      options.forEach((option: ListOptionType | ListOptionGroupType) => {
        if (isOptionGroup(option)) {
          option.options.forEach((singleOption) => {
            if (value.includes(singleOption.value) && Array.isArray(selectedOption)) {
              selectedOption.push(singleOption);
            }
          });
        } else if (value.includes(option.value) && Array.isArray(selectedOption)) {
          selectedOption.push(option);
        }
      });
    }
  } else if (optional && value === "") {
    selectedOption = optionalItem;
    singleSelectionIndex = 0;
  } else if (options.length > 0) {
    let groupIndex = 0;
    options.some((option: ListOptionType | ListOptionGroupType, index: number) => {
      if (isOptionGroup(option)) {
        option.options.some((singleOption) => {
          if (singleOption.value === value) {
            selectedOption = singleOption;
            singleSelectionIndex = optional ? groupIndex + 1 : groupIndex;
            return true;
          }
          groupIndex++;
          return false;
        });
        return false;
      } else if (option.value === value) {
        selectedOption = option;
        singleSelectionIndex = optional ? index + 1 : index;
        return true;
      } else {
        return false;
      }
    });
  }

  return {
    selectedOption,
    singleSelectionIndex,
  };
};

/**
 * Return the label or labels of the selected option(s), separated by commas.
 */
export const getSelectedOptionLabel = (placeholder: string, selectedOption: ListOptionType | ListOptionType[]) =>
  Array.isArray(selectedOption)
    ? selectedOption.length === 0
      ? placeholder
      : selectedOption.map((option) => option.label).join(", ")
    : (selectedOption.label ?? placeholder);
