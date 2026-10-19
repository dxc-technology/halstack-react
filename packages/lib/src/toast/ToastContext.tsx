import { createContext } from "react";
import { ToastContext } from "./types";

export default createContext<ToastContext | null>(null);
