import { createContext } from "react";

const HalstackThemeContext = createContext<string | undefined>(undefined);

export default HalstackThemeContext;
export const HalstackThemeContextProvider = HalstackThemeContext.Provider;
