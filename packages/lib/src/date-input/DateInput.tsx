import { useState, useRef, useEffect, useId, useCallback, forwardRef } from "react";
import dayjs from "dayjs";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DateInputPropsType, { RefType } from "./types";
import DatePicker from "./DatePicker";
import * as Popover from "@radix-ui/react-popover";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcTextInput from "../text-input/TextInput";

dayjs.extend(customParseFormat);

const SIDEOFFSET = 4;

const getValueForPicker = (value, format) => dayjs(value, format.toUpperCase(), true);

const getDate = (value, format, lastValidYear, setLastValidYear) => {
  if ((value || value === "") && format.toUpperCase().includes("YYYY")) return getValueForPicker(value, format);
  else {
    let newDate = getValueForPicker(value, format);
    if (!lastValidYear) {
      if (+newDate.format("YY") < 68) {
        setLastValidYear(2000 + +newDate.format("YY"));
        newDate = newDate.set("year", 2000 + +newDate.format("YY"));
      } else {
        setLastValidYear(1900 + +newDate.format("YY"));
        newDate = newDate.set("year", 1900 + +newDate.format("YY"));
      }
    } else newDate = newDate.set("year", (lastValidYear <= 1999 ? 1900 : 2000) + +newDate.format("YY"));
    return newDate;
  }
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
    },
    ref
  ): JSX.Element => {
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const calendarId = `date-picker-${useId()}`;
    const [dayjsDate, setDayjsDate] = useState(getValueForPicker(value ?? defaultValue ?? "", format));
    const [lastValidYear, setLastValidYear] = useState(
      innerValue || value
        ? !format.toUpperCase().includes("YYYY") && +getValueForPicker(value ?? innerValue, format).format("YY") < 68
          ? 2000
          : 1900
        : undefined
    );
    const [sideOffset, setSideOffset] = useState(SIDEOFFSET);
    const colorsTheme = useTheme();
    const translatedLabels = useTranslatedLabels();
    const dateRef = useRef(null);
    const popoverContentRef = useRef(null);

    const handleCalendarOnClick = (newDate) => {
      const newValue = newDate.format(format.toUpperCase());
      if (!value) {
        setDayjsDate(newDate);
        setInnerValue(newValue);
      }
      setLastValidYear(newDate.get("year"));
      newDate?.set("day", newDate.get("date")).toJSON()
        ? onChange?.({
            value: newValue,
            date: newDate.toDate(),
          })
        : onChange?.({
            value: newValue,
          });
    };

    const handleOnChange = ({ value: newValue, error: inputError }) => {
      value ?? setInnerValue(newValue);
      const newDate = getDate(newValue, format, lastValidYear, setLastValidYear);
      const invalidDateMessage =
        newValue !== "" && !newDate.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage
          ? { value: newValue, error: inputError || invalidDateMessage }
          : { value: newValue };
      if (newDate.isValid()) {
        setDayjsDate(newDate);
        onChange?.({
          ...callbackParams,
          date: newDate.toDate(),
        });
      } else {
        onChange?.(callbackParams);
        setLastValidYear((validYear) => dayjsDate?.get("year") ?? validYear);
        setDayjsDate(null);
      }
    };
    const handleOnBlur = ({ value, error: inputError }) => {
      const date = getDate(value, format, lastValidYear, setLastValidYear);
      const invalidDateMessage = value !== "" && !date.isValid() && translatedLabels.dateInput.invalidDateErrorMessage;
      const callbackParams =
        inputError || invalidDateMessage ? { value, error: inputError || invalidDateMessage } : { value };
      date.isValid()
        ? onBlur?.({
            ...callbackParams,
            date: date.toDate(),
          })
        : onBlur?.(callbackParams);
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
            setSideOffset(popoverRect.top > triggerRect.bottom ? -errorMessageHeight : SIDEOFFSET);
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

    const handleDatePickerEscKeydown = (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        isOpen && event.stopPropagation();
        closeCalendar();
        dateRef?.current.getElementsByTagName("input")[0].focus();
      }
    };
    const handleDatePickerOnBlur = (event) => {
      if (!event?.currentTarget.contains(event.relatedTarget)) closeCalendar();
    };

    useEffect(() => {
      window.addEventListener("scroll", adjustSideOffset);
      return () => {
        window.removeEventListener("scroll", adjustSideOffset);
      };
    }, [adjustSideOffset]);

    useEffect(() => {
      if (value || value === "") setDayjsDate(getDate(value, format, lastValidYear, setLastValidYear));
    }, [value, format, lastValidYear]);

    useEffect(() => {
      if (!disabled) {
        const actionButtonRef = dateRef?.current.querySelector("[title='Select date']");
        actionButtonRef?.setAttribute("aria-haspopup", true);
        actionButtonRef?.setAttribute("role", "combobox");
        actionButtonRef?.setAttribute("aria-expanded", isOpen);
        actionButtonRef?.setAttribute("aria-controls", calendarId);
        if (isOpen) {
          actionButtonRef?.setAttribute("aria-describedby", calendarId);
        }
      }
    }, [isOpen, disabled, calendarId]);

    return (
      <ThemeProvider theme={colorsTheme}>
        <DateInputContainer margin={margin} size={size} ref={ref}>
          {label && (
            <Label
              htmlFor={dateRef.current?.getElementsByTagName("input")[0].id}
              disabled={disabled}
              hasHelperText={helperText ? true : false}
            >
              {label} {optional && <OptionalLabel>{translatedLabels.formFields.optionalLabel}</OptionalLabel>}
            </Label>
          )}
          {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
          <Popover.Root open={isOpen}>
            <Popover.Trigger asChild aria-controls={undefined}>
              <DxcTextInput
                name={name}
                defaultValue={defaultValue}
                value={value ?? innerValue}
                placeholder={placeholder ? format.toUpperCase() : null}
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
              />
            </Popover.Trigger>
            <Popover.Portal>
              <StyledPopoverContent
                sideOffset={sideOffset}
                align="end"
                aria-modal={true}
                onBlur={handleDatePickerOnBlur}
                onKeyDown={handleDatePickerEscKeydown}
                ref={popoverContentRef}
              >
                <DatePicker id={calendarId} onDateSelect={handleCalendarOnClick} date={dayjsDate} />
              </StyledPopoverContent>
            </Popover.Portal>
          </Popover.Root>
        </DateInputContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const DateInputContainer = styled.div<{ margin: DateInputPropsType["margin"]; size: DateInputPropsType["size"] }>`
  ${(props) => props.size == "fillParent" && "width: 100%;"}
  display: flex;
  flex-direction: column;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  ${(props) => props.size !== "fillParent" && "min-width:" + calculateWidth(props.margin, props.size)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  font-family: ${(props) => props.theme.textInput.fontFamily};
`;

const Label = styled.label<{
  disabled: DateInputPropsType["disabled"];
  hasHelperText: boolean;
}>`
  color: ${(props) =>
    props.disabled ? props.theme.textInput.disabledLabelFontColor : props.theme.textInput.labelFontColor};
  font-size: ${(props) => props.theme.textInput.labelFontSize};
  font-style: ${(props) => props.theme.textInput.labelFontStyle};
  font-weight: ${(props) => props.theme.textInput.labelFontWeight};
  line-height: ${(props) => props.theme.textInput.labelLineHeight};
  ${(props) => !props.hasHelperText && `margin-bottom: 0.25rem`}
`;

const OptionalLabel = styled.span`
  font-weight: ${(props) => props.theme.textInput.optionalLabelFontWeight};
`;

const HelperText = styled.span<{ disabled: DateInputPropsType["disabled"] }>`
  color: ${(props) =>
    props.disabled ? props.theme.textInput.disabledHelperTextFontColor : props.theme.textInput.helperTextFontColor};
  font-size: ${(props) => props.theme.textInput.helperTextFontSize};
  font-style: ${(props) => props.theme.textInput.helperTextFontStyle};
  font-weight: ${(props) => props.theme.textInput.helperTextFontWeight};
  line-height: ${(props) => props.theme.textInput.helperTextLineHeight};
  margin-bottom: 0.25rem;
`;

const StyledPopoverContent = styled(Popover.Content)`
  z-index: 2147483647;
  &:focus-visible {
    outline: none;
  }
`;

export default DxcDateInput;
