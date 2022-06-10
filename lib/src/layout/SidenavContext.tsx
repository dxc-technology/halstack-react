import { createContext, useContext } from "react";

type SidenavContextType = (isSidenavVisible: boolean) => void;
const SidenavContext = createContext<SidenavContextType | null>(null);

export const SidenavContextProvider = SidenavContext.Provider;

export const useSidenavVisibilityResponsive = () => {
  const setIsSidenavVisibleResponsive = useContext(SidenavContext);
  return setIsSidenavVisibleResponsive;
};
