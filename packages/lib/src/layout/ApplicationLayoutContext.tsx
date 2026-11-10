import { createContext } from "react";
import { ApplicationLayoutContext } from "./types";

export default createContext<ApplicationLayoutContext>({
  logo: undefined,
  headerExists: false,
  setHideMainContent: () => {},
});
