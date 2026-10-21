import { createContext } from "react";
import { ToastContextType } from "./types";

export default createContext<ToastContextType | null>(null);
