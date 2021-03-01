import { useContext } from "react";
import { componentTokens } from "./common/variables.js";
import ThemeContext from "./ThemeContext.js";

const useTheme = () => {
  const colorsTheme = useContext(ThemeContext);
  return colorsTheme || componentTokens;
};

export default useTheme;
