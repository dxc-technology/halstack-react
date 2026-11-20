import { ConfigType } from "./types";

/**
 * Sanitizes the input amount string by removing thousand separators, replacing the decimal separator with a dot, and limiting the number of decimals.
 */
export const sanitizeAmount = (
  value: string | undefined,
  numberOfDecimals?: number,
  numberOfIntegers?: number
): string => {
  if (!value) return "";
  value = value.replace(/[^\d.-]/g, "");
  if (value.startsWith("-")) {
    value = "-" + value.slice(1).replace(/-/g, "");
  } else {
    value = value.replace(/-/g, "");
  }
  const isNegative = value.includes("(") && value.includes(")");
  const decimalSeparatorCount = (value.match(new RegExp(`\\.`, "g")) || []).length;
  if (decimalSeparatorCount > 1) {
    const firstIndex = value.indexOf(".");
    value = value.slice(0, firstIndex + 1) + value.slice(firstIndex + 1).replace(new RegExp(`\\.`, "g"), "");
  }

  if (numberOfDecimals !== undefined && numberOfDecimals >= 0) {
    const [integerPart, decimalPart] = value.split(".");
    if (decimalPart) {
      value = `${integerPart}.${decimalPart.slice(0, numberOfDecimals)}`;
    }
  }
  if (numberOfIntegers !== undefined && numberOfIntegers >= 0) {
    const [integerPart, decimalPart] = value.split(".");
    if (integerPart) {
      value = `${integerPart.slice(0, numberOfIntegers)}${decimalPart ? `.${decimalPart}` : ""}`;
    }
  }
  return isNegative && value ? `-${value}` : value;
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
  let formattedParts = formatter.formatToParts(parseFloat(value));

  console.log(formattedParts);

  if (
    config?.symbolPosition === "before" &&
    formattedParts.some((part) => part.type === "currency" || part.type === "unit")
  ) {
    let symbolIndex = formattedParts.findIndex((part) => part.type === "currency" || part.type === "unit");
    if (symbolIndex > 0) {
      if (formattedParts[symbolIndex - 1]?.type === "literal") {
        const [literalPart] = formattedParts.splice(symbolIndex - 1, 1);
        if (literalPart) formattedParts.unshift(literalPart);
        // symbolIndex--;
      }
      const [symbolPart] = formattedParts.splice(symbolIndex, 1);
      if (symbolPart) formattedParts.unshift(symbolPart);
    }
  } else if (
    config?.symbolPosition === "after" &&
    formattedParts.some((part) => part.type === "currency" || part.type === "unit")
  ) {
    let symbolIndex = formattedParts.findIndex((part) => part.type === "currency" || part.type === "unit");
    if (symbolIndex < formattedParts.length - 1) {
      if (formattedParts[symbolIndex + 1]?.type === "literal") {
        const [literalPart] = formattedParts.splice(symbolIndex + 1, 1);
        if (literalPart) formattedParts.push(literalPart);
      }
      const [symbolPart] = formattedParts.splice(symbolIndex, 1);
      if (symbolPart) formattedParts.push(symbolPart);
    }
  }

  return formattedParts
    .map((part) => {
      if (part.type === "decimal" && config?.decimalSeparator) return config.decimalSeparator;
      if (part.type === "group" && config?.thousandSeparator) return config.thousandSeparator;
      return part.value;
    })
    .join("");
};

export const getDefaultConfigBasedOnLocale = (locale: string | undefined, config?: ConfigType) => {
  const number = 1234.56;
  let formatter = new Intl.NumberFormat(locale);
  const decimalSeparator =
    config?.decimalSeparator || formatter.formatToParts(number).find((part) => part.type === "decimal")?.value || ".";
  const thousandSeparator =
    config?.thousandSeparator || formatter.formatToParts(number).find((part) => part.type === "group")?.value || ",";
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
