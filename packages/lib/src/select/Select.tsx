import * as Popover from "@radix-ui/react-popover";
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { Tooltip, TooltipWrapper } from "../tooltip/Tooltip";
import { HalstackLanguageContext } from "../HalstackContext";
import useWidth from "../utils/useWidth";
import Listbox from "./Listbox";
import {
  calculateWidth,
  canOpenListbox,
  filterOptionsBySearchValue,
  getLastOptionIndex,
  getSelectedOption,
  getSelectedOptionLabel,
  groupsHaveOptions,
  isArrayOfGroupedOptions,
  notOptionalCheck,
} from "./utils";
import SelectPropsType, { ListOptionType, RefType } from "./types";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcFlex from "../flex/Flex";
import ErrorMessage from "../styles/forms/ErrorMessage";
import HelperText from "../styles/forms/HelperText";
import Label from "../styles/forms/Label";
import { inputStylesByState } from "../styles/forms/inputStylesByState";

const SelectContainer = styled.div<{
  margin: SelectPropsType["margin"];
  size: SelectPropsType["size"];
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  ${(props) => props.size !== "fillParent" && `min-width:${calculateWidth(props.margin, props.size)}`};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const Select = styled.div<{
  disabled: Required<SelectPropsType>["disabled"];
  error: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  cursor: pointer;
  ${({ disabled, error }) => inputStylesByState(disabled, error, false)}

  /* Collapse indicator */
  > div > span[role="img"] {
    color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
    font-size: var(--height-xxs);
  }
`;

const SelectionIndicator = styled.div<{ disabled: SelectPropsType["disabled"] }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 48px;
  min-height: var(--height-s);
  border-radius: var(--border-radius-xs);
  border: var(--border-width-s) var(--border-style-default)
    ${({ disabled }) => (disabled ? "var(--border-color-neutral-strong)" : "var(--border-color-neutral-light)")};
`;

const SelectionNumber = styled.span<{ disabled: SelectPropsType["disabled"] }>`
  display: grid;
  place-items: center;
  background-color: ${({ disabled }) => (disabled ? "transparent" : "var(--color-bg-neutral-lighter)")};
  border-right: var(--border-width-s) var(--border-style-default)
    ${({ disabled }) => (disabled ? "var(--border-color-neutral-medium)" : "var(--border-color-neutral-light)")};
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-regular);
  text-align: center;
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const ClearOptionsAction = styled.button`
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  padding: var(--spacing-padding-none);
  width: 100%;
  font-size: var(--height-xxxs);

  &:focus {
    outline: none;
  }
  ${({ disabled }) =>
    !disabled
      ? `
      color: var(--color-fg-neutral-dark);
      cursor: pointer;
      &:hover {
        background-color: var(--color-bg-neutral-light);
      }
      &:active {
        background-color: var(--color-bg-neutral-strong);
      }
    `
      : "color: var(--color-fg-neutral-medium); cursor: not-allowed;"}
`;

const SearchableValueContainer = styled.div`
  display: grid;
  width: 100%;
`;

const SelectedOption = styled.span<{
  disabled: SelectPropsType["disabled"];
  atBackground: boolean;
}>`
  grid-area: 1 / 1 / 1 / 1;
  color: var(
    ${(props) =>
      props.disabled
        ? "--color-fg-neutral-medium"
        : props.atBackground
          ? "--color-fg-neutral-strong"
          : "--color-fg-neutral-dark"}
  );
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

const SearchInput = styled.input`
  grid-area: 1 / 1 / 1 / 1;
  background: none;
  border: none;
  outline: none;
  padding: var(--spacing-padding-none);
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
`;

const DxcSelect = forwardRef<RefType, SelectPropsType>(
  (
    {
      ariaLabel = "Select",
      defaultValue,
      disabled = false,
      error,
      helperText,
      label,
      margin,
      multiple = false,
      name,
      onBlur,
      onChange,
      optional = false,
      options,
      placeholder = "",
      searchable = false,
      size = "medium",
      tabIndex = 0,
      value,
    },
    ref
  ) => {
    const id = `select-${useId()}`;
    const errorId = `error-${id}`;
    const labelId = `label-${id}`;
    const listboxId = `${id}-listbox`;
    const selectInputId = `select-input-${id}`;

    const [hasTooltip, setHasTooltip] = useState(false);
    const [innerValue, setInnerValue] = useState(defaultValue ?? (multiple ? [] : ""));
    const [isOpen, changeIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [visualFocusIndex, changeVisualFocusIndex] = useState(-1);

    const selectRef = useRef<HTMLDivElement | null>(null);
    const selectSearchInputRef = useRef<HTMLInputElement | null>(null);

    const width = useWidth(selectRef.current);
    const translatedLabels = useContext(HalstackLanguageContext);

    const optionalItem = useMemo(() => ({ label: placeholder, value: "" }), [placeholder]);
    const filteredOptions = useMemo(() => filterOptionsBySearchValue(options, searchValue), [options, searchValue]);
    const lastOptionIndex = useMemo(
      () => getLastOptionIndex(options, filteredOptions, searchable, optional, multiple),
      [options, filteredOptions, searchable, optional, multiple]
    );
    const { selectedOption, singleSelectionIndex } = useMemo(
      () => getSelectedOption(value ?? innerValue, options, multiple, optional, optionalItem),
      [value, innerValue, options, multiple, optional, optionalItem]
    );

    const openListbox = () => {
      if (!isOpen && canOpenListbox(options, disabled)) {
        changeIsOpen(true);
      }
    };
    const closeListbox = () => {
      if (isOpen) {
        changeIsOpen(false);
        changeVisualFocusIndex(-1);
      }
    };

    const handleOnChangeValue = useCallback(
      (newOption: ListOptionType | undefined) => {
        if (newOption) {
          let newValue: string | string[];

          if (multiple) {
            const currentValue = (value ?? innerValue) as string[];
            newValue = currentValue.includes(newOption.value)
              ? currentValue.filter((optionVal) => optionVal !== newOption.value)
              : [...currentValue, newOption.value];
          } else newValue = newOption.value;

          if (value == null) {
            setInnerValue(newValue);
          }
          onChange?.({
            value: newValue as string & string[],
            error: notOptionalCheck(newValue, multiple, optional)
              ? translatedLabels.formFields.requiredValueErrorMessage
              : undefined,
          });
        }
      },
      [multiple, value, innerValue, onChange, optional, translatedLabels]
    );
    const handleOnClick = () => {
      if (searchable) {
        selectSearchInputRef?.current?.focus();
      }
      if (isOpen) {
        closeListbox();
        setSearchValue("");
      } else {
        openListbox();
      }
    };
    const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget) && searchable) {
        selectSearchInputRef?.current?.focus();
      }
    };
    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        closeListbox();
        setSearchValue("");

        const currentValue = value ?? innerValue;
        if (notOptionalCheck(currentValue, multiple, optional)) {
          onBlur?.({
            value: currentValue as string & string[],
            error: translatedLabels.formFields.requiredValueErrorMessage,
          });
        } else {
          onBlur?.({ value: currentValue as string & string[] });
        }
      }
    };
    const handleOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          if (
            singleSelectionIndex != null &&
            (!isOpen ||
              (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
          ) {
            changeVisualFocusIndex(singleSelectionIndex);
          } else {
            changeVisualFocusIndex((currentVisualFocusIndex) => {
              if (currentVisualFocusIndex < lastOptionIndex) {
                return currentVisualFocusIndex + 1;
              }
              return 0;
            });
          }
          openListbox();
          break;
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          if (
            singleSelectionIndex != null &&
            (!isOpen ||
              (visualFocusIndex === -1 && singleSelectionIndex > -1 && singleSelectionIndex <= lastOptionIndex))
          ) {
            changeVisualFocusIndex(singleSelectionIndex);
          } else {
            changeVisualFocusIndex((currentVisualFocusIndex) =>
              currentVisualFocusIndex === 0 || currentVisualFocusIndex === -1
                ? lastOptionIndex
                : currentVisualFocusIndex - 1
            );
          }
          openListbox();
          break;
        case "Esc":
        case "Escape":
          event.preventDefault();
          if (isOpen) {
            event.stopPropagation();
          }
          closeListbox();
          setSearchValue("");
          break;
        case "Enter":
          if (isOpen && visualFocusIndex >= 0) {
            let accLength = optional && !multiple ? 1 : 0;
            if (searchable) {
              if (filteredOptions.length > 0) {
                if (optional && !multiple && visualFocusIndex === 0 && groupsHaveOptions(filteredOptions)) {
                  handleOnChangeValue(optionalItem);
                } else if (isArrayOfGroupedOptions(filteredOptions)) {
                  if (groupsHaveOptions(filteredOptions)) {
                    filteredOptions.some((groupOption) => {
                      const groupLength = accLength + groupOption.options.length;
                      if (groupLength > visualFocusIndex) {
                        handleOnChangeValue(groupOption.options[visualFocusIndex - accLength]);
                      }
                      accLength = groupLength;
                      return groupLength > visualFocusIndex;
                    });
                  }
                } else {
                  handleOnChangeValue(filteredOptions[visualFocusIndex - accLength]);
                }
              }
            } else if (optional && !multiple && visualFocusIndex === 0) {
              handleOnChangeValue(optionalItem);
            } else if (isArrayOfGroupedOptions(options)) {
              options.some((groupOption) => {
                const groupLength = accLength + groupOption.options.length;
                if (groupLength > visualFocusIndex) {
                  handleOnChangeValue(groupOption.options[visualFocusIndex - accLength]);
                }
                accLength = groupLength;
                return groupLength > visualFocusIndex;
              });
            } else {
              handleOnChangeValue(options[visualFocusIndex - accLength]);
            }
            if (!multiple) {
              closeListbox();
            }
            setSearchValue("");
          }
          break;
        default:
          break;
      }
    };
    const handleOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
      const text = event.currentTarget;
      setHasTooltip(text.scrollWidth > text.clientWidth);
    };

    const handleSearchIOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
      changeVisualFocusIndex(-1);
      openListbox();
    };

    const handleClearOptionsActionOnClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      const empty: string[] = [];
      if (value == null) {
        setInnerValue(empty);
      }
      if (!optional) {
        onChange?.({
          value: empty as string & string[],
          error: translatedLabels.formFields.requiredValueErrorMessage,
        });
      } else {
        onChange?.({ value: empty as string & string[] });
      }
    };

    const handleClearSearchActionOnClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setSearchValue("");
    };

    const handleOptionOnClick = useCallback(
      (option: ListOptionType) => {
        handleOnChangeValue(option);
        if (!multiple) {
          closeListbox();
        }
        setSearchValue("");
      },
      [closeListbox, handleOnChangeValue, multiple]
    );

    return (
      <SelectContainer margin={margin} ref={ref} size={size}>
        {label && (
          <Label
            disabled={disabled}
            hasMargin={!helperText}
            id={labelId}
            onClick={() => {
              selectRef?.current?.focus();
            }}
          >
            {label} {optional && <span>{translatedLabels.formFields.optionalLabel}</span>}
          </Label>
        )}
        {helperText && (
          <HelperText disabled={disabled} hasMargin>
            {helperText}
          </HelperText>
        )}
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild type={undefined}>
            <Select
              aria-activedescendant={visualFocusIndex >= 0 ? `option-${visualFocusIndex}` : undefined}
              aria-controls={isOpen ? listboxId : undefined}
              aria-disabled={disabled}
              aria-errormessage={error ? errorId : undefined}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-invalid={!!error}
              aria-label={label ? undefined : ariaLabel}
              aria-labelledby={label ? labelId : undefined}
              aria-required={!disabled && !optional}
              disabled={disabled}
              error={!!error}
              id={selectInputId}
              onBlur={handleOnBlur}
              onClick={handleOnClick}
              onFocus={handleOnFocus}
              onKeyDown={handleOnKeyDown}
              ref={selectRef}
              role="combobox"
              tabIndex={disabled ? -1 : tabIndex}
            >
              {multiple && Array.isArray(selectedOption) && selectedOption.length > 0 && (
                <SelectionIndicator disabled={disabled}>
                  <SelectionNumber disabled={disabled}>{selectedOption.length}</SelectionNumber>
                  <Tooltip label={translatedLabels.select.actionClearSelectionTitle}>
                    <ClearOptionsAction
                      aria-label={translatedLabels.select.actionClearSelectionTitle}
                      disabled={disabled}
                      onClick={handleClearOptionsActionOnClick}
                      onMouseDown={(event) => {
                        // Avoid input to lose focus when pressed
                        event.preventDefault();
                      }}
                      tabIndex={-1}
                    >
                      <DxcIcon icon="clear" />
                    </ClearOptionsAction>
                  </Tooltip>
                </SelectionIndicator>
              )}
              <TooltipWrapper condition={hasTooltip} label={getSelectedOptionLabel(placeholder, selectedOption)}>
                <SearchableValueContainer>
                  <input
                    disabled={disabled}
                    name={name}
                    type="hidden"
                    value={
                      multiple
                        ? (Array.isArray(value) ? value : Array.isArray(innerValue) ? innerValue : []).join(",")
                        : (value ?? innerValue)
                    }
                  />
                  {searchable && (
                    <SearchInput
                      aria-labelledby={label ? labelId : undefined}
                      autoComplete="nope"
                      autoCorrect="nope"
                      disabled={disabled}
                      onChange={handleSearchIOnChange}
                      ref={selectSearchInputRef}
                      size={1}
                      value={searchValue}
                    />
                  )}
                  {(!searchable || searchValue === "") && (
                    <SelectedOption
                      atBackground={
                        (multiple ? (value ?? innerValue).length === 0 : !(value ?? innerValue)) ||
                        (searchable && isOpen)
                      }
                      disabled={disabled}
                      onMouseEnter={handleOnMouseEnter}
                    >
                      {getSelectedOptionLabel(placeholder, selectedOption)}
                    </SelectedOption>
                  )}
                </SearchableValueContainer>
              </TooltipWrapper>
              <DxcFlex alignItems="center">
                {searchable && searchValue.length > 0 && (
                  <Tooltip label={translatedLabels.select.actionClearSelectionTitle}>
                    <DxcActionIcon
                      icon="clear"
                      onClick={handleClearSearchActionOnClick}
                      tabIndex={-1}
                      title={translatedLabels.select.actionClearSearchTitle}
                    />
                  </Tooltip>
                )}
                <DxcIcon icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} />
              </DxcFlex>
            </Select>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              onCloseAutoFocus={(event) => {
                // Avoid select to lose focus when the list is closed
                event.preventDefault();
              }}
              onOpenAutoFocus={(event) => {
                // Avoid select to lose focus when the list is opened
                event.preventDefault();
              }}
              sideOffset={4}
              style={{ zIndex: "2147483647" }}
            >
              <Listbox
                ariaLabelledBy={labelId}
                currentValue={value ?? innerValue}
                handleOptionOnClick={handleOptionOnClick}
                id={listboxId}
                lastOptionIndex={lastOptionIndex}
                multiple={multiple}
                optional={optional}
                optionalItem={optionalItem}
                options={searchable ? filteredOptions : options}
                searchable={searchable}
                styles={{ width }}
                visualFocusIndex={visualFocusIndex}
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        {!disabled && typeof error === "string" && <ErrorMessage error={error} id={errorId} />}
      </SelectContainer>
    );
  }
);

export default DxcSelect;
