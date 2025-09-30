import {
  useState,
  useRef,
  useEffect,
  useId,
  useCallback,
  useContext,
  forwardRef,
  Dispatch,
  SetStateAction,
  FocusEvent,
  KeyboardEvent,
} from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "@emotion/styled";
import * as Popover from "@radix-ui/react-popover";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { HalstackLanguageContext } from "../HalstackContext";
import DateInputPropsType, { RefType } from "./types";
import DatePicker from "./DatePicker";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcTextInput from "../text-input/TextInput";

dayjs.extend(customParseFormat);

const SIDEOFFSET = 4;

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin: DateInputPropsType["margin"], size: DateInputPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

const DateInputContainer = styled.div<{ margin: DateInputPropsType["margin"]; size: DateInputPropsType["size"] }>`
  ${(props) => props.size === "fillParent" && "width: 100%;"}
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
  font-family: var(--typography-font-family);
`;

const Label = styled.label<{
  disabled: DateInputPropsType["disabled"];
  hasHelperText: boolean;
}>`
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-dark);")};
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
  ${(props) => !props.hasHelperText && "margin-bottom: var(--spacing-gap-xs);"}
`;

const OptionalLabel = styled.span<{
  disabled: DateInputPropsType["disabled"];
}>`
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-stronger);")};
  font-weight: var(--typography-label-regular);
`;

const HelperText = styled.span<{ disabled: DateInputPropsType["disabled"] }>`
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium);" : "var(--color-fg-neutral-stronger);")};
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  margin-bottom: var(--spacing-gap-xs);
`;

const StyledPopoverContent = styled(Popover.Content)`
  z-index: var(--z-date-input);
  &:focus-visible {
    outline: none;
  }
`;

const getValueForPicker = (value: string, format: string) => dayjs(value, format.toUpperCase(), true);

const getDate = (
  value: string,
  format: string,
  lastValidYear: number | null,
  setLastValidYear: Dispatch<SetStateAction<number | null>>
) => {
  if ((value || value === "") && format.toUpperCase().includes("YYYY")) {
    return getValueForPicker(value, format);
  }
  let newDate = getValueForPicker(value, format);
  if (lastValidYear == null) {
    if (+newDate.format("YY") < 68) {
      setLastValidYear(2000 + +newDate.format("YY"));
      newDate = newDate.set("year", 2000 + +newDate.format("YY"));
    } else {
      setLastValidYear(1900 + +newDate.format("YY"));
      newDate = newDate.set("year", 1900 + +newDate.format("YY"));
    }
  } else {
    newDate = newDate.set("year", (lastValidYear <= 1999 ? 1900 : 2000) + +newDate.format("YY"));
  }
  return newDate;
};

const DxcDateInput = forwardRef<RefType, DateInputPropsType>(
  (
    {
      label,
      name,
      defaultValue = "",
      value,
      format = "dd-MM-yyyy",
      helperText,
      placeholder = false,
      clearable,
      disabled,
      readOnly,
      optional,
      onChange,
      onBlur,
      error,
      autocomplete,
      margin,
      size,
      tabIndex,
      ariaLabel = "Date input",
    },
    ref
  ): JSX.Element => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const calendarId = `date-picker-${useId()}`;
    const [dayjsDate, setDayjsDate] = useState(getValueForPicker(value ?? defaultValue ?? "", format));
    const [lastValidYear, setLastValidYear] = useState<number | null>(
      innerValue || value
        ? !format.toUpperCase().includes("YYYY") && +getValueForPicker(value ?? innerValue, format).format("YY") < 68
          ? 2000
          : 1900
        : null
    );
    const [sideOffset, setSideOffset] = useState(SIDEOFFSET);
    const translatedLabels = useContext(HalstackLanguageContext);
    const dateRef = useRef<HTMLDivElement | null>(null);
    const popoverContentRef = useRef<HTMLDivElement | null>(null);

    const handleCalendarOnClick = (newDate: Dayjs) => {
      const newValue = newDate.format(format.toUpperCase());
      if (!value) {
        setDayjsDate(newDate);
        setInnerValue(newValue);
      }
      setLastValidYear(newDate.get("year"));
      if (newDate.set("day", newDate.get("date")).toJSON()) {
        onChange?.({
          value: newValue,
          date: newDate.toDate(),
        });
      } else {
        onChange?.({
          value: newValue,
        });
      }
    };

    const handleOnChange = ({ value: newValue, error: inputError }: { value: string; error?: string }) => {
      if (value == null) {
        setInnerValue(newValue);
      }
      const newDate = getDate(newValue, format, lastValidYear, setLastValidYear);
      const invalidDateMessage =
        newValue !== "" && !newDate.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams = {
        value: newValue,
        error: inputError || invalidDateMessage || undefined,
      };
      if (newDate.isValid()) {
        setDayjsDate(newDate);
        onChange?.({
          ...callbackParams,
          date: newDate.toDate(),
        });
      } else {
        onChange?.(callbackParams);
        setLastValidYear((validYear) => dayjsDate.get("year") ?? validYear);
        setDayjsDate(dayjs(null));
      }
    };
    const handleOnBlur = ({ value: blurValue, error: inputError }: { value: string; error?: string }) => {
      const date = getDate(blurValue, format, lastValidYear, setLastValidYear);
      const invalidDateMessage =
        blurValue !== "" && !date.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams = {
        value: blurValue,
        error: inputError || invalidDateMessage || undefined,
      };
      if (date.isValid()) {
        onBlur?.({
          ...callbackParams,
          date: date.toDate(),
        });
      } else {
        onBlur?.(callbackParams);
      }
    };

    const adjustSideOffset = useCallback(() => {
      if (error != null) {
        setTimeout(() => {
          if (popoverContentRef.current && dateRef.current) {
            const popoverRect = popoverContentRef.current.getBoundingClientRect();
            const triggerRect = dateRef.current.querySelector('[id^="input"]')?.getBoundingClientRect();
            const errorMessageHeight = dateRef.current
              .querySelector('[id^="error-input"]')
              ?.getBoundingClientRect().height;
            setSideOffset(
              triggerRect?.bottom != null && popoverRect.top > triggerRect.bottom
                ? errorMessageHeight != null
                  ? -errorMessageHeight
                  : 0
                : SIDEOFFSET
            );
          }
        }, 0);
      }
    }, [error]);

    const openCalendar = () => {
      setIsOpen(!isOpen);
      adjustSideOffset();
    };
    const closeCalendar = () => {
      setIsOpen(false);
    };

    const handleDatePickerEscKeydown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (isOpen) {
          event.stopPropagation();
        }
        closeCalendar();
        dateRef.current?.getElementsByTagName("input")[0]?.focus();
      }
    };
    const handleDatePickerOnBlur = (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        closeCalendar();
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", adjustSideOffset);
      return () => {
        window.removeEventListener("scroll", adjustSideOffset);
      };
    }, [adjustSideOffset]);

    useEffect(() => {
      if (value || value === "") {
        setDayjsDate(getDate(value, format, lastValidYear, setLastValidYear));
      }
    }, [value, format, lastValidYear]);

    useEffect(() => {
      if (!disabled) {
        const actionButtonElement = dateRef.current?.querySelector("[aria-label='Select date']");
        actionButtonElement?.setAttribute("aria-haspopup", "true");
        actionButtonElement?.setAttribute("role", "combobox");
        actionButtonElement?.setAttribute("aria-expanded", `${isOpen}`);
        actionButtonElement?.setAttribute("aria-controls", calendarId);
        if (isOpen) {
          actionButtonElement?.setAttribute("aria-describedby", calendarId);
        }
      }
    }, [isOpen, disabled, calendarId]);

    return (
      <DateInputContainer margin={margin} size={size} ref={ref}>
        {label && (
          <Label
            htmlFor={dateRef.current?.getElementsByTagName("input")[0]?.id}
            disabled={disabled}
            hasHelperText={!!helperText}
          >
            {label}{" "}
            {optional && <OptionalLabel disabled={disabled}>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
          </Label>
        )}
        {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild aria-controls={undefined}>
            <DxcTextInput
              name={name}
              defaultValue={defaultValue}
              value={value ?? innerValue}
              placeholder={placeholder ? format.toUpperCase() : undefined}
              action={{
                onClick: openCalendar,
                icon: "filled_calendar_today",
                title: "Select date",
              }}
              clearable={clearable}
              disabled={disabled}
              readOnly={readOnly}
              optional={optional}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              error={error}
              autocomplete={autocomplete}
              size={size}
              tabIndex={tabIndex}
              ref={dateRef}
              ariaLabel={ariaLabel}
            />
          </Popover.Trigger>
          <Popover.Portal>
            <StyledPopoverContent
              aria-label="Date picker"
              sideOffset={sideOffset}
              align="end"
              aria-modal
              onBlur={handleDatePickerOnBlur}
              onKeyDown={handleDatePickerEscKeydown}
              ref={popoverContentRef}
            >
              <DatePicker id={calendarId} onDateSelect={handleCalendarOnClick} date={dayjsDate} />
            </StyledPopoverContent>
          </Popover.Portal>
        </Popover.Root>
      </DateInputContainer>
    );
  }
);

DxcDateInput.displayName = "DxcDateInput";

export default DxcDateInput;
