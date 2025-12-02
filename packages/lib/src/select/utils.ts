import { ListOptionType, ListOptionGroupType } from "./types";

/**
 * Check if the value is not optional and is empty.
 */
const notOptionalCheck = (value: string | string[], multiple: boolean, optional: boolean) =>
  !optional && (multiple ? value.length === 0 : value === "");

/**
 * Checks if the option is a group.
 */
const isOptionGroup = (option: ListOptionType | ListOptionGroupType): option is ListOptionGroupType =>
  "options" in option && option.options != null;

/**
 * Checks if the options are an array of groups.
 */
const isArrayOfOptionGroups = (options: ListOptionType[] | ListOptionGroupType[]): options is ListOptionGroupType[] =>
  options[0] != null && isOptionGroup(options[0]);

/**
 * Checks if the groups have options.
 */
const groupsHaveOptions = (options: ListOptionType[] | ListOptionGroupType[]) =>
  isArrayOfOptionGroups(options) ? options.some((groupOption) => groupOption.options.length > 0) : true;

/**
 * Checks if the listbox can be opened.
 */
const canOpenListbox = (options: ListOptionType[] | ListOptionGroupType[], disabled: boolean) =>
  !disabled && options.length > 0 && groupsHaveOptions(options);

/**
 * Filters the options by the search value.
 */
const asdss = (
  options: ListOptionType[] | ListOptionGroupType[],
  searchValue: string
): ListOptionType[] | ListOptionGroupType[] => {
  if (options.length > 0) {
    if (isArrayOfOptionGroups(options))
      return options.map((optionGroup) => {
        const group = {
          label: optionGroup.label,
          options: optionGroup.options.filter((option) =>
            option.label.toUpperCase().includes(searchValue.toUpperCase())
          ),
        };
        return group;
      });
    else return options.filter((option) => option.label.toUpperCase().includes(searchValue.toUpperCase()));
  } else {
    return [];
  }
};

const filterOptionsBySearchValue = (
  options: ListOptionType[] | ListOptionGroupType[],
  searchValue: string,
  searchByStartsWith: boolean = false
): ListOptionType[] | ListOptionGroupType[] => {
  const matchesSearch = (label: string, search: string, searchByStartsWith: boolean) => {
    const upperLabel = label.toUpperCase();
    const upperSearch = search.toUpperCase();
    return searchByStartsWith ? upperLabel.startsWith(upperSearch) : upperLabel.includes(upperSearch);
  };

  return options.length > 0
    ? isArrayOfOptionGroups(options)
      ? options.map((optionGroup) => {
          const group = {
            label: optionGroup.label,
            options: optionGroup.options.filter((option) =>
              matchesSearch(option.label, searchValue, searchByStartsWith)
            ),
          };
          return group;
        })
      : options.filter((option) => matchesSearch(option.label, searchValue, searchByStartsWith))
    : [];
};

/**
 * Returns the index of the last option, depending on several conditions.
 */
const getLastOptionIndex = (
  options: ListOptionType[] | ListOptionGroupType[],
  filteredOptions: ListOptionType[] | ListOptionGroupType[],
  searchable: boolean,
  optional: boolean,
  multiple: boolean
) => {
  let last = 0;
  const reducer = (acc: number, current: ListOptionGroupType) => acc + (current.options.length ?? 0);

  if (searchable && filteredOptions.length > 0) {
    if (isArrayOfOptionGroups(filteredOptions)) {
      last = filteredOptions.reduce(reducer, 0) - 1;
    } else {
      last = filteredOptions.length - 1;
    }
  } else if (options.length > 0) {
    if (isArrayOfOptionGroups(options)) {
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
const getSelectedOption = (
  value: string | string[],
  options: ListOptionType[] | ListOptionGroupType[],
  multiple: boolean,
  optional: boolean,
  optionalItem: ListOptionType
) => {
  let selectedOption: ListOptionType | ListOptionType[] = multiple ? [] : ({} as ListOptionType);
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
      } else if (option.value === value) {
        selectedOption = option;
        singleSelectionIndex = optional ? index + 1 : index;
        return true;
      }
      return false;
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
const getSelectedOptionLabel = (placeholder: string, selectedOption: ListOptionType | ListOptionType[]) =>
  Array.isArray(selectedOption)
    ? selectedOption.length === 0
      ? placeholder
      : selectedOption.map((option) => option.label).join(", ")
    : (selectedOption.label ?? placeholder);

export {
  isOptionGroup,
  isArrayOfOptionGroups,
  notOptionalCheck,
  groupsHaveOptions,
  canOpenListbox as canOpenOptions,
  filterOptionsBySearchValue,
  getLastOptionIndex,
  getSelectedOption,
  getSelectedOptionLabel,
};
