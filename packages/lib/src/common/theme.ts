/**
 * Set a custom theme for the Halstack components by overriding our CSS variables or by linking a custom CSS file.
 * @param theme A record of CSS variables or a string with the URL of a CSS file path.
 */
export default function setCustomTheme(theme: Record<string, string> | string) {
  if (typeof window !== "undefined") {
    if (typeof theme === "object") {
      const style = document.createElement("style");
      let css = ":root {";
      for (const [key, value] of Object.entries(theme)) {
        css += `${key}: ${value};`;
      }
      css += "}";
      style.innerHTML = css;
      document.head.appendChild(style);
    } else if (typeof theme === "string") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = theme;
      document.head.appendChild(link);
    }
  }
};
