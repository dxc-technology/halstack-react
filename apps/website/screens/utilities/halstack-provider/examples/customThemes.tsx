import { HalstackProvider, DxcButton } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  // Light palette example
  const lightPalette = {
    "--color-primary-50": "#d3f0b4",
    "--color-primary-100": "#a2df5e",
    "--color-primary-200": "#77c81f",
    "--color-primary-300": "#68ad1b",
    "--color-primary-400": "#579317",
    "--color-primary-500": "#487813",
    "--color-primary-600": "#39600f",
    "--color-primary-700": "#2b470b",
    "--color-primary-800": "#1c2f07",
    "--color-primary-900": "#0d1503",

    "--color-secondary-50": "#fff9d6",
    "--color-secondary-100": "#ffed99",
    "--color-secondary-200": "#ffe066",
    "--color-secondary-300": "#e6c84d",
    "--color-secondary-400": "#ccad33",
    "--color-secondary-500": "#b39426",
    "--color-secondary-600": "#8f741f",
    "--color-secondary-700": "#6b5517",
    "--color-secondary-800": "#47370f",
    "--color-secondary-900": "#241b08",
  };

  // Dark palette example
  const darkPalette = {
    "--color-primary-50": "#ffd6e7",
    "--color-primary-100": "#ff99c2",
    "--color-primary-200": "#ff66a3",
    "--color-primary-300": "#e05584",
    "--color-primary-400": "#c5446d",
    "--color-primary-500": "#a83659",
    "--color-primary-600": "#872b47",
    "--color-primary-700": "#661f35",
    "--color-primary-800": "#441423",
    "--color-primary-900": "#220a12",

    "--color-secondary-50": "#f3e6db",
    "--color-secondary-100": "#e2c7a9",
    "--color-secondary-200": "#d1a577",
    "--color-secondary-300": "#b88252",
    "--color-secondary-400": "#99673f",
    "--color-secondary-500": "#7a5232",
    "--color-secondary-600": "#5c3f26",
    "--color-secondary-700": "#3e2b19",
    "--color-secondary-800": "#21170d",
    "--color-secondary-900": "#100b06",
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log("Toggling theme", newTheme);
      return newTheme;
    });
  };

  return (
    <HalstackProvider opinionatedTheme={theme === "light" ? lightPalette : darkPalette}>
      <DxcButton label="Toggle theme" onClick={toggleTheme} />
    </HalstackProvider>
  );
}`;

const scope = {
  DxcButton,
  HalstackProvider,
  useState,
};

export default { code, scope };
