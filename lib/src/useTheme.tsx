import { useContext } from "react";
import { componentTokens } from "./common/variables.js";
import HalstackContext from "./HalstackContext";

const useTheme = () => {
  const colorsTheme = useContext(HalstackContext);
  return colorsTheme || componentTokens;
};

export default useTheme;
