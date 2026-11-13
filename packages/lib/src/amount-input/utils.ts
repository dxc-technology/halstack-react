import { ConfigType } from "./types";

/**
 * Sanitizes the input amount string by removing thousand separators, replacing the decimal separator with a dot, and limiting the number of decimals.
 */
export const sanitizeAmount = (
  value: string | undefined,
  decimalSeparator: string,
  thousandSeparator: string,
  numberOfDecimals?: number,
  numberOfIntegers?: number
): string => {
  if (!value) return "";
  value = value.replace(/[^\d.,()-]/g, "");
  const isNegative = value.includes("(") && value.includes(")");
  const decimalSeparatorCount = (value.match(new RegExp(`\\${decimalSeparator}`, "g")) || []).length;
  if (decimalSeparatorCount > 1) {
    const firstIndex = value.indexOf(decimalSeparator);
    value =
      value.slice(0, firstIndex + 1) +
      value.slice(firstIndex + 1).replace(new RegExp(`\\${decimalSeparator}`, "g"), "");
  }
  let sanitized = value
    .replace(new RegExp(`\\${thousandSeparator}`, "g"), "")
    .replace(new RegExp(`\\${decimalSeparator}`), ".");

  if (numberOfDecimals !== undefined && numberOfDecimals >= 0) {
    const [integerPart, decimalPart] = sanitized.split(".");
    if (decimalPart) {
      sanitized = `${integerPart}.${decimalPart.slice(0, numberOfDecimals)}`;
    }
  }
  if (numberOfIntegers !== undefined && numberOfIntegers >= 0) {
    const [integerPart, decimalPart] = sanitized.split(".");
    if (integerPart) {
      sanitized = `${integerPart.slice(0, numberOfIntegers)}${decimalPart ? `.${decimalPart}` : ""}`;
    }
  }
  return isNegative && sanitized ? `-${sanitized}` : sanitized;
};

export const formatString = (value: string, locale: string | undefined, config?: ConfigType): string => {
  let formatter = new Intl.NumberFormat(locale);
  if (config?.currencyConfig && config.currencyConfig.currency) {
    formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: config.currencyConfig.currency,
      currencyDisplay: config.currencyConfig.currencyDisplay || "symbol",
      currencySign: config.currencyConfig.currencySign || "standard",
    });
  }
  if (config?.unitsConfig && config.unitsConfig.unit) {
    formatter = new Intl.NumberFormat(locale, {
      style: "unit",
      unit: config.unitsConfig.unit,
      unitDisplay: config.unitsConfig.unitDisplay || "short",
    });
  }
  return formatter
    .formatToParts(parseFloat(value))
    .map((part) => {
      if (part.type === "decimal" && config?.decimalSeparator) return config.decimalSeparator;
      if (part.type === "group" && config?.thousandSeparator) return config.thousandSeparator;
      return part.value;
    })
    .join("");
};

export const getDefaultConfigBasedOnLocale = (locale: string | undefined, config?: ConfigType) => {
  const number = 5004.11;
  const formattedNumber = formatString(number.toString(), locale, config);
  const decimalSeparator = formattedNumber[formattedNumber.indexOf("4") + 1] || ".";
  const thousandSeparator = formattedNumber[formattedNumber.indexOf("5") + 1] || ",";
  return { decimalSeparator, thousandSeparator };
};

export const getErrorMessage = (
  value: string,
  amountLabels: {
    valueGreaterThanOrEqualToErrorMessage: (value: number) => string;
    valueLessThanOrEqualToErrorMessage: (value: number) => string;
  },
  maxValue?: number,
  minValue?: number
) => {
  if (maxValue !== undefined && parseFloat(value) > maxValue) {
    return amountLabels.valueLessThanOrEqualToErrorMessage(maxValue);
  }
  if (minValue !== undefined && parseFloat(value) < minValue) {
    return amountLabels.valueGreaterThanOrEqualToErrorMessage(minValue);
  }
  return undefined;
};
