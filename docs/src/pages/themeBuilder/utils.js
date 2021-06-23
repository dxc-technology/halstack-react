export const capitalizeText = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const isObject = (item) =>
  item && typeof item === "object" && !Array.isArray(item);

export const deepMerge = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
};

export const downloadFile = (content) => {
  const data = new Blob([JSON.stringify(content, null, '\t')], {
    type: "application/json",
  });
  
  const element = document.createElement("a");
  element.href = URL.createObjectURL(data);
  element.download = "theme.json";
  document.body.appendChild(element);
  element.click();
};
