import { createContext } from "react";
import type { CheckboxContextProps } from "./types";

export default createContext<CheckboxContextProps | null>(null);
