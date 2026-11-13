import { HalstackLanguageContext } from "../HalstackContext";
import TextInput from "../text-input/TextInput";
import { AmountInputProps } from "./types";
import { use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { sanitizeAmount, formatString, getDefaultConfigBasedOnLocale, getErrorMessage } from "./utils";

const AmountInput = ({
  alignment,
  ariaLabel,
  clearable,
  config,
  defaultValue,
  disabled,
  error,
  helperText,
  label,
  maxValue,
  minValue,
  name,
  numberOfDecimals,
  numberOfIntegers,
  onChange,
  onBlur,
  optional,
  placeholder,
  readOnly,
  ref,
  size,
  tabIndex,
  value,
}: AmountInputProps) => {
  const languageContext = use(HalstackLanguageContext);
  const translatedLabels = languageContext.labels;
  const locale = languageContext.locale ? languageContext.locale : undefined;
  const [numberValue, setNumberValue] = useState<string | undefined>("");
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = useRef(value !== undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setInputRef = useCallback(
    (element: HTMLInputElement | null) => {
      inputRef.current = element;
      if (typeof ref === "function") {
        const cleanup = ref(element);
        if (typeof cleanup === "function") {
          return () => {
            inputRef.current = null;
            cleanup();
          };
        }
      } else if (ref) {
        ref.current = element;
      }
    },
    [ref]
  );
  const localeConfig = useMemo(() => {
    return getDefaultConfigBasedOnLocale(locale, config);
  }, [locale, config]);

  const displayValue = useMemo(() => {
    if (numberValue === undefined || numberValue === "") return undefined;
    if (config) {
      return formatString(numberValue, locale, config);
    }
    return new Intl.NumberFormat(locale).format(parseFloat(numberValue));
  }, [numberValue, config, locale]);

  useEffect(() => {
    setNumberValue(
      sanitizeAmount(
        value ?? defaultValue,
        localeConfig.decimalSeparator,
        localeConfig.thousandSeparator,
        numberOfDecimals,
        numberOfIntegers
      )
    );
  }, [value, defaultValue, localeConfig, numberOfDecimals, numberOfIntegers]);

  const handleBlur = (event: { value: string; error?: string }) => {
    setIsFocused(false);
    const errorMessage = getErrorMessage(event.value, translatedLabels.amountInput, maxValue, minValue);
    onBlur?.({ value: formatString(event.value, locale, config), error: errorMessage || event.error });
  };

  const handleChange = (event: { value: string; error?: string }) => {
    const sanitizedValue = sanitizeAmount(
      event.value,
      localeConfig.decimalSeparator,
      localeConfig.thousandSeparator,
      numberOfDecimals,
      numberOfIntegers
    );
    if (!isControlled.current) {
      setNumberValue(sanitizedValue);
    }
    const errorMessage = getErrorMessage(sanitizedValue, translatedLabels.amountInput, maxValue, minValue);
    onChange?.({ value: sanitizedValue, error: errorMessage || event.error });
  };

  useEffect(() => {
    const inputElement = inputRef.current?.querySelector("input");
    const handleFocus = () => {
      if (!readOnly) setIsFocused(true);
    };
    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      return () => {
        inputElement.removeEventListener("focus", handleFocus);
      };
    }
  }, [readOnly]);

  return (
    <TextInput
      alignment={alignment}
      ariaLabel={ariaLabel}
      autocomplete="off"
      clearable={clearable}
      disabled={disabled}
      error={error}
      helperText={helperText}
      label={label}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      optional={optional}
      placeholder={placeholder}
      readOnly={readOnly}
      ref={setInputRef}
      size={size}
      tabIndex={tabIndex}
      value={isFocused ? (numberValue?.toString() ?? "") : displayValue}
    />
  );
};

export default AmountInput;
