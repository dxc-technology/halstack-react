import type { IndexedTheme } from "./types";

export const makeReadable = (token: string) =>
  token.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
  });

export const makeReadableSidenav = (token: string) =>
  token.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : " " + v;
  });

const isObject = (item: unknown) => item && typeof item === "object" && !Array.isArray(item);

export const deepMerge = <T extends object>(target: T, ...sources: Partial<T>[]): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key] as object, source[key] as object);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
};

export const downloadFile = (content: IndexedTheme) => {
  const data = new Blob([JSON.stringify(content, null, "\t")], {
    type: "application/json",
  });

  const element = document.createElement("a");
  element.href = URL.createObjectURL(data);
  element.download = "theme.json";
  document.body.appendChild(element);
  element.click();
  return () => URL.revokeObjectURL(element.href);
};
