import { HalstackProvider, DxcButton } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  // First palette example
  const firstPalette = {
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
  };

  // Second palette example
  const secondPalette = {
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
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "first" ? "second" : "first";
      console.log("Toggling theme", newTheme);
      return newTheme;
    });
  };

  return (
    <HalstackProvider opinionatedTheme={theme === "first" ? 
    {tokens: firstPalette} : {tokens: secondPalette}}>
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
