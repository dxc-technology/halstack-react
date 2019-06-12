import { create } from "@storybook/theming";
import logo from "./public/logo_black.png";

export default create({
  base: "light",
  appBg: "#f2f2f2",
  colorSecondary: "#666",
  fontBase: 'Arial, Helvetica, sans-serif',

  brandImage: logo
});
