import { createContext } from "react";
import { ApplicationLayoutContextType } from "./types";

export default createContext<ApplicationLayoutContextType>({
  logo: undefined,
  headerExists: false,
  setHideMainContent: () => {},
});
