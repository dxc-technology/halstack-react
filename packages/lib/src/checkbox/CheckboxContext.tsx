import { createContext } from "react";
import { CheckboxContextProps } from "./types";

export default createContext<CheckboxContextProps | null>(null);
