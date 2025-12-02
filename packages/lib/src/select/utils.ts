import SelectPropsType, { ListOptionType, ListOptionGroupType } from "./types";
import { getMargin } from "../common/utils";
import Props from "./types";

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
export const isArrayOfGroupedOptions = (options: Props["options"]): options is ListOptionGroupType[] =>
  options[0] != null && isOptionGroup(options[0]);

/**
 * Checks if the groups have options. If the options parameter is not an array of grouped options,
 * it will return true and not check nothing else.
 */
export const groupsHaveOptions = (options: Props["options"]) =>
  isArrayOfGroupedOptions(options) ? options.some((groupOption) => groupOption.options.length > 0) : true;

/**
 * Checks if the listbox can be opened. A listbox can be opened in three scenarios:
 * - The listbox is not disabled.
 * - The listbox has more than one single option.
 * - The listbox has more than one group with options contained.
 */
export const canOpenListbox = (options: Props["options"], disabled: boolean) =>
  !disabled && options.length > 0 && groupsHaveOptions(options);

/**
 * Filters the options by the search value.
 */
export const filterOptionsBySearchValue = (
  options: Props["options"],
  searchValue: string,
  searchMode: Props["searchMode"] = "contains"
): Props["options"] => {
  const matchesSearch = (label: string, search: string, mode: Props["searchMode"]) => {
    const upperLabel = label.toUpperCase();
    const upperSearch = search.toUpperCase();
    return mode === "startsWith" ? upperLabel.startsWith(upperSearch) : upperLabel.includes(upperSearch);
  };

  return options.length > 0
    ? isArrayOfGroupedOptions(options)
      ? options.map((optionGroup) => {
          const group = {
            label: optionGroup.label,
            options: optionGroup.options.filter((option) => matchesSearch(option.label, searchValue, searchMode)),
          };
          return group;
        })
      : options.filter((option) => matchesSearch(option.label, searchValue, searchMode))
    : [];
};

/**
 * Returns the index of the last option, depending on several conditions.
 */
export const getLastOptionIndex = (
  options: Props["options"],
  filteredOptions: Props["options"],
  searchable: boolean,
  optional: boolean,
  multiple: boolean,
  enableSelectAll: boolean
) => {
  let last = 0;
  const reducer = (acc: number, current: ListOptionGroupType) =>
    acc + (current.options.length ?? 0) + (enableSelectAll ? 1 : 0);

  if (searchable && filteredOptions.length > 0) {
    if (isArrayOfGroupedOptions(filteredOptions)) last = filteredOptions.reduce(reducer, 0) - 1;
    else last = filteredOptions.length - 1;
  } else if (options.length > 0) {
    if (isArrayOfGroupedOptions(options)) last = options.reduce(reducer, 0) - 1;
    else last = options.length - 1;
  }

  return (multiple ? enableSelectAll : optional) ? last + 1 : last;
};

/**
 * Return the current selection.
 */
export const getSelectedOption = (
  value: string | string[],
  options: Props["options"],
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
export const getSelectedOptionLabel = (
  placeholder: string,
  selectedOption: ListOptionType | ListOptionType[] | null
) =>
  Array.isArray(selectedOption)
    ? selectedOption.length === 0
      ? placeholder
      : selectedOption.map((option) => option.label).join(", ")
    : (selectedOption?.label ?? placeholder);

/**
 * Returns a determined string value depending on the amount of options selected:
 *   - All options are selected -> "checked"
 *   - Partial selection -> "indeterminate"
 *   - No option is selected -> "unchecked"
 * @param options
 * @param value
 * @returns
 */
export const getSelectionType = (options: Props["options"], value: string[]) => {
  if (value.length > 0) {
    if (
      isArrayOfGroupedOptions(options)
        ? options.flatMap((group) => group.options.map((option) => option.value)).length === value.length
        : options.length === value.length
    )
      return "checked";
    else return "indeterminate";
  } else return "unchecked";
};

/**
 * Returns a determined string value depending on the amount of options selected from a group:
 *   - All grouped options are selected -> "checked"
 *   - Partial selection -> "indeterminate"
 *   - No option from the group is selected -> "unchecked"
 * @param options
 * @param value
 * @returns boolean
 */
export const getGroupSelectionType = (options: ListOptionType[], value: string[]) =>
  options.every((option) => value.includes(option.value))
    ? "checked"
    : options.some((option) => value.includes(option.value))
      ? "indeterminate"
      : "unchecked";

/**
 * Return an array with all the values from the options passed by the user, whether grouped or not, that can be selected.
 * @param options
 * @returns
 */
export const getSelectableOptionsValues = (options: Props["options"]) =>
  isArrayOfGroupedOptions(options)
    ? options.flatMap((group) => group.options.map((option) => option.value))
    : options.map((option) => option.value);

/**
 * (Un)Selects the option passed as parameter.
 * @param currentValue
 * @param newOption
 * @returns
 */
export const computeNewValue = (currentValue: string[], newOption: ListOptionType) =>
  currentValue.includes(newOption.value)
    ? currentValue.filter((val) => val !== newOption.value)
    : [...currentValue, newOption.value];
